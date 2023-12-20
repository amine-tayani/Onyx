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
      <NavLink slug='Product' href='/product' />
      <NavLink slug='Features' href='/features' />
      <NavLink slug='Blog' href='/blog' />
      <NavLink slug='Customers' href='/customers' />
      <NavLink slug='Pricing' href='/pricing' />
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
      <nav className=' m-4 flex h-10 items-center p-2 text-sm font-medium lg:mx-32 lg:p-3'>
        <div className='flex w-full items-center justify-between'>
          <div className='relative flex items-center gap-3'>
            <Link className='mx-4 focus:outline-none' href='/'>
              <Icons.logo className='h-10 w-10' />
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
                      className='w-32 rounded bg-muted px-4 py-1.5 text-center text-sm font-medium text-primary transition-colors hover:bg-muted/80'
                      href='/login'
                    >
                      Log In{' '}
                    </Link>
                    <Link
                      className='w-32 rounded bg-neutral-200 px-4 py-1.5 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary'
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
