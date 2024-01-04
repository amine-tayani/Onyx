'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import { toast } from '@/components/ui/use-toast';

const accountFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

// This should comes from supabase.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
};

export function AccountForm() {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <Button variant='destructive' type='submit'>
          Update account
        </Button>
      </form>
    </Form>
  );
}
