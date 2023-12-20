'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { NavLink } from './nav-link';
import UserNav from '@/components/ui/navigation/user-nav';
import AuthenticationLinks from './auth-links';
import { MobileNav } from './mobile-nav';
import { Icons } from '../icons';
import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/cn';

export function Navigation() {
  const { status, data: session } = useSession();
  const scrolled = useScroll(80);

  const NavLinks = () => (
    <>
      <NavLink slug='Home' href='/' />
      <NavLink slug='Dashboard' href='/dashboard' />
      <NavLink slug='Features' href='/features' />
      {session?.user ? (
        <NavLink slug='Profile' href={`/user/${session?.user.id}`} />
      ) : null}
      {session?.user ? <NavLink slug='Settings' href='/settings' /> : null}
    </>
  );

  return (
    <header
      className={cn('sticky inset-x-0 top-0 z-30 w-full transition-all', {
        'border-b border-neutral-800 bg-background/75 pt-0.5 drop-shadow-sm backdrop-blur-lg':
          scrolled,
      })}
    >
      <nav className=' m-4 flex h-10 items-center p-2 text-sm font-medium lg:m-4 lg:p-6'>
        <div className='flex w-full items-center justify-between'>
          <div className='relative flex items-center gap-3'>
            <Link className='flex space-x-1.5 focus:outline-none' href='/'>
              <div className='flex space-x-2'>
                <Icons.logo className='h-10 w-10' />
                <span className=' text-xs text-muted-foreground'>Onyx</span>
              </div>
            </Link>
            <div className='hidden items-center md:flex md:space-x-6'>
              <NavLinks />
            </div>
          </div>

          <div className='flex'>
            <div className='flex items-center justify-end gap-2'>
              {status === 'authenticated' && session ? (
                <UserNav />
              ) : (
                <AuthenticationLinks />
              )}
              <MobileNav>
                <NavLinks />
                {!session && (
                  <>
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
                  </>
                )}
              </MobileNav>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
