'use client';

import * as React from 'react';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ResetPasswordForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className='mt-2 grid gap-4'>
          <Input
            className='border-none bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 '
            id='email'
            placeholder='Email Address'
            type='email'
            autoCapitalize='none'
            autoComplete='email'
            autoCorrect='off'
            disabled={isLoading}
          />
          <Button
            variant='outline'
            disabled={isLoading}
            style={{ borderRadius: '0.3rem' }}
            className=''
          >
            {isLoading && 'loading...'}
            Recover Password
          </Button>
          <Link
            href='/login'
            className='my-2 text-sm text-neutral-400 hover:text-neutral-100'
          >
            Back to login
          </Link>
        </div>
      </form>
    </div>
  );
}
