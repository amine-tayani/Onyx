'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreateApplicationSchema, createApplicationSchema } from './zod-schema';

export function CreateApplicationForm() {
  const { toast } = useToast();

  const form = useForm<CreateApplicationSchema>({
    resolver: zodResolver(createApplicationSchema),
  });

  function onSubmit() {
    toast({
      title: 'Settings updated!',
      variant: 'success',
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-4'
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <Label className='text-neutral-300'>Title</Label>
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
              <Label className='text-neutral-300'>Company name</Label>
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
          render={({ field: { value, ...field } }) => (
            <FormItem>
              <Label className='text-neutral-300'>Description</Label>
              <Textarea
                className='resize-none border-none bg-muted hover:bg-muted/70'
                placeholder='copy and paste the job description'
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* add Applications Status select FormItem here*/}
        {/* add Job post URL FormItem here*/}
        {/* add Job post date and deadline date*/}

        <DialogFooter className='mt-3'>
          <DialogPrimitive.Close asChild>
            <Button type='submit' disabled={form.formState.isSubmitting}>
              Save
            </Button>
          </DialogPrimitive.Close>
        </DialogFooter>
      </form>
    </Form>
  );
}
