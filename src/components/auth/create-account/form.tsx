'use client';

import * as React from 'react';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FormSchema, createAccountSchema } from './validators';
import { supabase } from '@/lib/supabase-client';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

interface Country {
  label: string;
  value: string;
}

export function CreateAccountForm({ className, ...props }: UserAuthFormProps) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(createAccountSchema),
    mode: 'onSubmit',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      location: '',
      linkedin: '',
      password: '',
    },
  });

  const [countries, setCountries] = React.useState<Country[]>([]);

  React.useEffect(() => {
    const getCountries = async () => {
      const data = await fetch(
        'https://valid.layercode.workers.dev/list/countries?format=select',
        {
          cache: 'force-cache',
        }
      );
      const response = await data.json();
      setCountries(response.countries);
    };

    getCountries();
  }, []);

  async function onSubmit(values: z.infer<typeof createAccountSchema>) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            first_name: values.firstName,
            last_name: values.lastName,
            country: values.location,
            linkedin_url: values.linkedin,
          },
        },
      });
      console.log(data, error);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={cn('grid gap-4', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='mt-2 grid gap-4'>
            <div className='grid grid-cols-2 gap-x-3'>
              <div className='grid gap-2'>
                <FormField
                  name='firstName'
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-xs text-neutral-500'>
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className='border-none bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800'
                          placeholder='Your first name'
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
                  name='lastName'
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-xs text-neutral-500'>
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className='border-none bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800'
                          placeholder='Your last name'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
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
                name='location'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-xs text-neutral-500'>
                      Location
                    </FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} {...field}>
                        <SelectTrigger className='text-neutral-500'>
                          <SelectValue
                            className='border-none bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800'
                            placeholder='Select your country'
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <ScrollArea className='h-72'>
                            <SelectGroup>
                              {countries.map((country) => (
                                <SelectItem
                                  key={country.value}
                                  value={country.value}
                                >
                                  {country.label}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </ScrollArea>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='grid gap-2'>
              <FormField
                name='linkedin'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-xs text-neutral-500'>
                      LinkedIn
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='border-none bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800'
                        placeholder='Your LinkedIn profile'
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
              Continue
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
