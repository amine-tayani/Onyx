'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { CalendarIcon, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  CreateApplicationSchema,
  createApplicationSchema,
  statuses,
} from './zod-schema';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/cn';
import { format } from 'date-fns';

export function CreateAppButton() {
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const form = useForm<CreateApplicationSchema>({
    resolver: zodResolver(createApplicationSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      company: '',
      description: '',
      url: '',
      location: '',
    },
  });

  async function createApplication(data: CreateApplicationSchema) {
    try {
      toast({
        variant: 'mytheme',
        description: <pre>{JSON.stringify(data, null, 2)}</pre>,
      });
    } catch (err) {
      console.error(err);
    } finally {
    }
  }

  return (
    <>
      <Dialog open={dialogOpen} onOpenChange={(o) => setDialogOpen(o)}>
        <DialogTrigger asChild>
          <Button
            onClick={() => {
              setDialogOpen(!dialogOpen);
            }}
            className='group'
          >
            <Plus className=' h-5 w-5 text-neutral-400 transition-colors duration-300 ease-in-out group-hover:text-neutral-100 md:mr-2' />
            <span className='hidden md:block'>Create Application</span>
          </Button>
        </DialogTrigger>
        <DialogContent
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
          className='bg-background'
        >
          <DialogHeader>
            <DialogTitle>Create Application</DialogTitle>
            <DialogDescription>
              Add your job application so you can check it later.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(createApplication)}
              className='flex flex-col gap-4'
            >
              <FormField
                name='title'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-muted-foreground/80'>
                      Title
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                        placeholder='Type role title'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='grid grid-cols-2 gap-4'>
                <FormField
                  control={form.control}
                  name='company'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-muted-foreground/80'>
                        Company name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                          placeholder='type the company name'
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='dateOfJob'
                  render={({ field }) => (
                    <FormItem className='flex flex-col'>
                      <FormLabel>Date of birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={'outline'}
                              className={cn(
                                'w-[240px] pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date('1900-01-01')
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-muted-foreground/80'>
                      Description
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className='custom-scrollable-element resize-none border-none bg-muted hover:bg-muted/70'
                        placeholder='copy and paste the job description'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='grid grid-cols-2 gap-4'>
                <FormField
                  control={form.control}
                  name='status'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-muted-foreground/80'>
                        Status
                      </FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Select a status' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.values(statuses).map((status) => (
                            <SelectItem
                              className='hover:bg-muted-foreground/20'
                              value={status.label}
                              key={status.key}
                            >
                              {status.label.toLocaleLowerCase()}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='location'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-muted-foreground/80'>
                        Location
                      </FormLabel>
                      <FormControl>
                        <Input
                          className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                          placeholder='type the location'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name='url'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-muted-foreground/80'>
                      Job URL
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                        placeholder='paste the job URL here'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* add Job post date and deadline date*/}

              <DialogFooter className='flex-row items-center justify-end gap-2 pt-4 '>
                <Button
                  variant='secondary'
                  onClick={() => {
                    setDialogOpen(false);
                  }}
                >
                  Cancel
                </Button>
                <Button type='submit'>Create</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
