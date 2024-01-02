'use client';

import type { User } from '@/lib/db/types';
import { ProfileForm } from './profile-form';
import { Separator } from '@/components/ui/separator';
import { formatDistanceToNowStrict } from 'date-fns';

interface Props {
  user: Pick<User, 'id' | 'email' | 'image' | 'name' | 'createdAt'>;
}

export default function UserProfile({ user }: Props) {
  return (
    <div className='space-y-4'>
      <div className='flex items-center space-x-4'>
        <div
          className='h-8 w-8 rounded-full bg-cover bg-center bg-no-repeat md:h-12 md:w-12'
          style={{
            backgroundImage: `url(${
              user.image ??
              'https://avatars.githubusercontent.com/u/62437851?v=4'
            })`,
          }}
        />
        <div className='flex flex-col items-center gap-1 md:w-full md:items-start'>
          {user.email}
          <span
            className='text-sm tracking-tight text-muted-foreground'
            title={`Joined ${user.createdAt.toString()}`}
          >
            Joined{' '}
            {formatDistanceToNowStrict(user.createdAt, {
              addSuffix: true,
            })}
          </span>
        </div>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  );
}
