'use client';

import * as React from 'react';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { SignupSchema } from './validators';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export type SignupFormSchema = z.infer<typeof SignupSchema>;

export function CreateAccountForm({ className, ...props }: UserAuthFormProps) {
  const form = useForm<SignupFormSchema>({
    resolver: zodResolver(SignupSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: SignupFormSchema) {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={cn('grid gap-4', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='mt-2 grid gap-4'>
            <div className='grid gap-2'>
              <FormField
                name='email'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-xs text-neutral-500'>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='border-none bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800'
                        placeholder='Your email address'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='grid gap-2'>
              <FormField
                name='password'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-xs text-neutral-500'>
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        className='border-none bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800'
                        placeholder='Your password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className='my-4 flex items-center space-x-4'>
            <Button
              variant='outline'
              style={{ borderRadius: '0.3rem' }}
              className=''
              type='submit'
            >
              {form.formState.isSubmitting ? 'Loading...' : 'Sign up'}
            </Button>
            <p className='text-sm text-neutral-500'>
              Already have an account?{' '}
              <Link
                href='/login'
                className='text-neutral-300 underline underline-offset-4 hover:text-neutral-100'
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
