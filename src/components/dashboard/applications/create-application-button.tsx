'use client';

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
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
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
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';

export function CreateAppButton() {
  const { toast } = useToast();

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
    toast({
      title: 'Here is your application infos',
      description: data.company,
    });
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className='group'>
            <Plus className='mr-2 h-5 w-5 text-neutral-400 transition-colors duration-300 ease-in-out group-hover:text-neutral-100' />
            Create Application
          </Button>
        </DialogTrigger>
        <DialogContent className='bg-background'>
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
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-muted-foreground/80'>
                      Description
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className='resize-none border-none bg-muted hover:bg-muted/70'
                        placeholder='copy and paste the job description'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                          <SelectItem value={status.key} key={status.key}>
                            {status.label.toLocaleLowerCase()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              {/* add Job post URL FormItem here*/}
              {/* add Job post date and deadline date*/}

              <DialogFooter className='flex-row justify-end gap-2 pt-4 '>
                <Button className='mt-4' type='submit'>
                  Create
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
