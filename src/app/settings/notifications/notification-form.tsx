'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';

const notificationsFormSchema = z.object({
  news_emails: z.boolean().default(false).optional(),
  digest_emails: z.boolean().default(false).optional(),
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

type NotificationsFormValues = z.infer<typeof notificationsFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<NotificationsFormValues> = {
  news_emails: false,
  marketing_emails: false,
  digest_emails: true,
  security_emails: true,
};

export function NotificationsForm() {
  const form = useForm<NotificationsFormValues>({
    resolver: zodResolver(notificationsFormSchema),
    defaultValues,
  });

  function onSubmit(data: NotificationsFormValues) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div>
      <div className='flex space-x-4'>
        <div>
          <h3 className='font-medium'>Email notifications</h3>
          <p className='mt-2 text-xs text-muted-foreground'>
            Get emails to find out what&#39;s going.
          </p>
        </div>
        <div className='grow'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <div className='space-y-4'>
                <FormField
                  control={form.control}
                  name='news_emails'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-center justify-between'>
                      <div className='space-y-0.5'>
                        <Label>News & updates</Label>
                        <FormDescription className='text-sm'>
                          News about product & feature updates.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='digest_emails'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-center justify-between'>
                      <div className='space-y-0.5'>
                        <Label>Daily Digest</Label>
                        <FormDescription className='text-sm'>
                          Receive suggestions based on your preference.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='marketing_emails'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-center justify-between'>
                      <div className='space-y-0.5'>
                        <Label>Marketing emails</Label>
                        <FormDescription className='text-sm'>
                          Receive emails for friend requests, follows, and more.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='security_emails'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-center justify-between'>
                      <div className='space-y-0.5'>
                        <Label>Security emails</Label>
                        <FormDescription className='text-sm'>
                          Receive emails about your account activity and
                          security.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled
                          aria-readonly
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div className='mt-12 flex space-x-4'>
        <div>
          <h3 className=' font-medium'>Push notifications</h3>
          <p className='mt-2 text-xs text-muted-foreground'>
            Get emails to find out what&#39;s going.
          </p>
        </div>
        <div className='grow'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <div className='space-y-4'>
                <FormField
                  control={form.control}
                  name='news_emails'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-center justify-between'>
                      <div className='space-y-0.5'>
                        <Label>News & updates</Label>
                        <FormDescription>
                          News about product & feature updates.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='digest_emails'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-center justify-between'>
                      <div className='space-y-0.5'>
                        <Label>Daily Digest</Label>
                        <FormDescription>
                          Receive suggestions based on your preference.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
