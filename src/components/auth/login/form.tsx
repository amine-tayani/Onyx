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
            <div className='my-2'>
              <Link
                href='/password-reset'
                className='text-sm text-muted-foreground hover:text-primary/90'
              >
                Forgot your password?
              </Link>
            </div>
            <div className='grid gap-2'>
              <FormField
                name='email'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-muted-foreground/80'>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
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
                    <FormLabel className='text-muted-foreground/80'>
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
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
              className='bg-hero hover:bg-hero/90 disabled:cursor-not-allowed disabled:opacity-50'
              type='submit'
              disabled={loading}
            >
              {loading ? <Spinner /> : 'Login'}
            </Button>
            <p className='text-sm text-muted-foreground'>
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
