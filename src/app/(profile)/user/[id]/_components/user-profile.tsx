'use client';

import { ProfileForm } from './profile-form';
import { UserProfileProps } from './props';

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <div className='space-y-4'>
      <ProfileForm user={user} />
    </div>
  );
}
