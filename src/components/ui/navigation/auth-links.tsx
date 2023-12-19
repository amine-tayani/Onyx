'use client';

import React from 'react';
import Link from 'next/link';

const AuthenticationLinks: React.FC = () => {
  return (
    <div className='hidden lg:flex lg:items-center lg:space-x-2'>
      <Link
        className='flex w-full items-center justify-center gap-2 rounded border border-neutral-700 px-6 py-1.5 text-sm font-medium text-neutral-100 transition-colors hover:border-transparent hover:bg-neutral-800 lg:w-auto'
        href='/login'
      >
        Log In{' '}
      </Link>
      <Link
        className='flex w-full items-center justify-center gap-2 rounded bg-neutral-200 px-6 py-1.5 text-sm font-medium text-neutral-900 transition-colors hover:border-transparent hover:bg-neutral-300 lg:w-auto'
        href='/signup'
      >
        Sign Up{' '}
      </Link>
    </div>
  );
};

export default AuthenticationLinks;
