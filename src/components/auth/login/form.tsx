'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { FormSchema, loginSchema } from './validators';
import { zodResolver } from '@hookform/resolvers/zod';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginAccountForm({ className, ...props }: UserAuthFormProps) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
  });

  async function onSubmit(data: FormSchema) {
    console.log(data);
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='mt-2 grid gap-4'>
            <div>
              <p className='text-sm text-neutral-500'>
                We effortlessly link job seekers with their desired positions,
                simplifying the entire application tracking process for a
                smoother and fairer job hunt
              </p>
            </div>

            <div className='my-2'>
              <p className='text-sm text-neutral-500'>
                <Link
                  href='/password-reset'
                  className='text-neutral-300 hover:text-neutral-100'
                >
                  Forgot your password?
                </Link>
              </p>
            </div>
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
              <Label className='text-xs text-neutral-500' htmlFor='password'>
                Password
              </Label>
              <Input
                className='border-none bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 '
                placeholder='Your password'
                type='password'
              />
            </div>
          </div>

          <div className='my-8 flex items-center space-x-4'>
            <Button variant='outline' style={{ borderRadius: '0.3rem' }}>
              Login
            </Button>
            <p className='text-sm text-neutral-500'>
              Don&apos;t have an account?{' '}
              <Link
                href='/signup'
                className='text-neutral-300 hover:text-neutral-100'
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
