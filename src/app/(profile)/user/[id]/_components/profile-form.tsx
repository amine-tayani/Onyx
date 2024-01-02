'use client';

import * as React from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { UserProfileProps } from './props';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { profileFormSchema } from './profile-form-schema';

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function ProfileForm({ user }: UserProfileProps) {
  const [selectedImage, setSelectedImage] = React.useState<File | null>(null);

  // This should come from the supabase.
  const defaultValues: Partial<ProfileFormValues> = {
    name: '',
    email: `${user.email}`,
    bio: '',
    urls: [{ value: '' }],
    media: undefined,
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { fields, append } = useFieldArray({
    name: 'urls',
    control: form.control,
  });

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='media'
          render={({ field }) => (
            <>
              <FormItem>
                <Label className='text-neutral-300'>Profile picture</Label>
                <FormControl>
                  <Button size='lg' type='button'>
                    <input
                      type='file'
                      className='hidden'
                      id='fileInput'
                      onBlur={field.onBlur}
                      name={field.name}
                      onChange={(e) => {
                        field.onChange(e.target.files);
                        setSelectedImage(e.target.files?.[0] || null);
                      }}
                      ref={field.ref}
                    />
                    <label
                      htmlFor='fileInput'
                      className='text-neutral-90 inline-flex cursor-pointer  items-center rounded-md bg-blue-500 hover:bg-blue-600'
                    >
                      <span className='whitespace-nowrap'>
                        choose your image
                      </span>
                    </label>
                  </Button>
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <Avatar>
          <AvatarImage
            // @ts-ignore
            src={
              selectedImage ||
              'https://avatars.githubusercontent.com/u/62437851?v=4'
            }
            alt=''
          />
          <AvatarFallback>
            <Skeleton className='h-8 w-8 rounded-full' />
          </AvatarFallback>
        </Avatar>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <Label className='text-neutral-300'>Name</Label>
              <FormControl>
                <Input
                  className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                  placeholder='write your full name.'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <Label className='text-neutral-300'>Email</Label>
              <FormControl>
                <Input
                  className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                  placeholder='Edit your email'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='bio'
          render={({ field }) => (
            <FormItem>
              <Label className='text-neutral-300'>Bio</Label>
              <FormControl>
                <Textarea
                  className='resize-none border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                  placeholder='Tell us a bit about yourself'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`urls.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <Label
                    className={cn(index !== 0 && 'sr-only', 'text-neutral-300')}
                  >
                    URLs
                  </Label>
                  <FormDescription className={cn(index !== 0 && 'sr-only')}>
                    Add links to your website, blog, or social media profiles.
                  </FormDescription>
                  <FormControl>
                    <Input
                      className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type='button'
            size='sm'
            className='mt-2'
            onClick={() => append({ value: '' })}
          >
            Add URL
          </Button>
        </div>
        <Button type='submit'>Update profile</Button>
      </form>
    </Form>
  );
}
