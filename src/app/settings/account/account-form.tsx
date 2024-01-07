'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Spinner } from '@/components/ui/spinner';

const accountFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  password: z.string({
    required_error: 'Password is required.',
  }),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

// This should comes from supabase.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
};

export function AccountForm() {
  const [loading] = useState(false);

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  function onSubmit(data: AccountFormValues) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          name='password'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-muted-foreground/80'>
                Old password
              </FormLabel>
              <FormControl>
                <Input
                  type='password'
                  className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                  placeholder='******************'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name='password'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-muted-foreground/80'>
                New Password
              </FormLabel>
              <FormControl>
                <Input
                  type='password'
                  className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                  placeholder='******************'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          size='sm'
          className=' disabled:cursor-not-allowed disabled:opacity-50'
          type='submit'
          disabled={loading}
        >
          {loading ? <Spinner /> : 'Update'}
        </Button>
      </form>
    </Form>
  );
}
