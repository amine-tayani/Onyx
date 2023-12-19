'use client';

import * as React from 'react';
import * as z from 'zod';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { SignupSchema } from './validators';
import { Spinner } from '@/components/ui/spinner';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export type SignupFormSchema = z.infer<typeof SignupSchema>;

export function CreateAccountForm({ className, ...props }: UserAuthFormProps) {
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();
  const router = useRouter();
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
      setLoading(true);
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        toast({
          variant: 'destructive',
          description: <span>{errorMessage}</span>,
        });
        setLoading(false);
        router.refresh();
      } else {
        toast({
          variant: 'mytheme',
          title: 'Account created.',
          description: 'Check you email for more infos.',
        });
        setLoading(false);
        router.push('/login');
      }
    } catch (err) {
      console.log(err);
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
              variant='secondary'
              style={{ borderRadius: '0.3rem' }}
              className='disabled:cursor-not-allowed disabled:opacity-50'
              type='submit'
              disabled={loading}
            >
              {loading ? <Spinner /> : 'Sign up'}
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
