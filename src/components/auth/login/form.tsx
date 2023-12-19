'use client';

import * as React from 'react';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useToast } from '@/components/ui/use-toast';
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
import { signIn } from 'next-auth/react';
import { Spinner } from '@/components/ui/spinner';
import { useRouter } from 'next/navigation';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginAccountForm({ className, ...props }: UserAuthFormProps) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();
  const router = useRouter();

  async function onSubmit(data: FormSchema) {
    try {
      setLoading(true);
      const response = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (!response?.ok) {
        const errorMessage = await response?.error;
        toast({
          variant: 'destructive',
          description: <span>{errorMessage}</span>,
        });
        setLoading(false);
      } else {
        toast({
          variant: 'mytheme',
          description: 'You have Logged in successfully',
        });
        setLoading(false);
        router.push('/dashboard');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='mt-2 grid gap-4'>
            <div>
              <p className='text-sm text-neutral-500'>
                simplify the entire application tracking process for a smoother
                and fairer job hunt.
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

          <div className='my-8 flex items-center space-x-4'>
            <Button
              className='disabled:cursor-not-allowed disabled:opacity-50'
              type='submit'
              disabled={loading}
              variant='secondary'
              style={{ borderRadius: '0.3rem' }}
            >
              {loading ? <Spinner /> : 'Login'}
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
