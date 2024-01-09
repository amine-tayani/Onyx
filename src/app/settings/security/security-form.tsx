'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import { Chrome, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const securityFormSchema = z.object({
  add_application: z.boolean().default(false).optional(),
  update_password: z.boolean().default(false).optional(),
  digest_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

type SecurityFormValues = z.infer<typeof securityFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<SecurityFormValues> = {
  add_application: false,
  update_password: false,
  digest_emails: true,
  security_emails: true,
};

export function SecurityForm() {
  const form = useForm<SecurityFormValues>({
    resolver: zodResolver(securityFormSchema),
    defaultValues,
  });

  function onSubmit(data: SecurityFormValues) {
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <div className='ml-4 space-y-1'>
            <p className='text-sm font-medium leading-none'>Sessions</p>
            <p className='text-sm text-muted-foreground'>
              Devices logged into your account
            </p>
          </div>
          <div className='group ml-4 flex items-center justify-between space-x-4 rounded-xl bg-muted/60 p-4 transition-colors duration-150 ease-in hover:bg-muted/80'>
            <div className='flex items-center space-x-4'>
              <div className='rounded-xl bg-neutral-700 p-2'>
                <Chrome className='h-5 w-5 text-primary' />
              </div>
              <div className='space-y-1'>
                <p className=' text-sm font-medium leading-none text-primary'>
                  Microsoft Edge on Windows
                </p>
                <p className='flex items-center text-sm text-muted-foreground'>
                  <div className='mr-1 h-1 w-1 rounded-full bg-green-500' />
                  <span className='mr-1 text-green-600'>Current session</span>.
                  Casablanca, MA
                </p>
              </div>
            </div>
            <Button className='hidden group-hover:flex' size='smi'>
              <X className='h-4 w-4' />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
