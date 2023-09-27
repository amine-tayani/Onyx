'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const NavigationBar: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header>
      <nav className='container fixed left-1/2 top-0 z-50 -translate-x-1/2 bg-neutral-900 py-4 lg:bg-transparent lg:pb-0 lg:pt-8 lg:dark:bg-transparent'>
        <div className='mx-10 flex flex-wrap items-center justify-between'>
          <Link className='flex items-center gap-2' href='/'>
            <Image src='/logo.svg' width={40} height={40} alt='brand logo' />
            <span className='text-xl font-bold text-neutral-50'>Onyx</span>
          </Link>
          <div className='order-3 w-full md:order-1 md:w-auto'>
            <div
              id='example-panel'
              aria-hidden='false'
              className=''
              style={{ height: 'auto' }}
            >
              <div>
                <ul
                  className={cn([
                    'mt-12 h-screen flex-col space-y-4 border-neutral-700 bg-neutral-900 text-2xl md:mt-0 md:flex md:h-auto md:flex-row md:items-center md:space-y-0 md:rounded md:border md:text-sm',
                    navbar ? 'block' : 'hidden',
                  ])}
                >
                  {' '}
                  <li>
                    <Link
                      className='inline-block w-full border-y border-neutral-700 py-6 text-neutral-400 transition-colors hover:text-neutral-50 md:border-y-0 md:py-3 md:pl-4 md:pr-6'
                      href='/'
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='inline-block w-full border-b border-neutral-700 pb-6 text-neutral-400 transition-colors hover:text-neutral-50 md:border-b-0 md:px-6 md:py-3'
                      href='/#features'
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='inline-block w-full border-b border-neutral-700 pb-6 text-neutral-400 transition-colors hover:text-neutral-50 md:border-b-0 md:px-6 md:py-3'
                      href='/#mission'
                    >
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='inline-block w-full border-b border-neutral-700 pb-6 text-neutral-400 transition-colors hover:text-neutral-50 md:border-b-0 md:px-6 md:py-3'
                      href='/#faq'
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/signup'
                      className='inline-block w-full border-b border-neutral-700 pb-6 text-neutral-400 transition-colors hover:text-neutral-50 md:border-b-0 md:px-6 md:py-3'
                    >
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className='order-2 flex items-center'>
            <li>
              <Link
                className='flex w-full items-center justify-center gap-2 rounded border border-neutral-700 px-6 py-2 font-medium text-neutral-100 transition-colors hover:border-transparent hover:bg-neutral-800 lg:w-auto'
                href='/login'
              >
                Login{' '}
              </Link>
            </li>
            <li className='inline-block md:hidden'>
              <button
                className='flex items-center px-2'
                aria-expanded='true'
                aria-controls='example-panel'
                onClick={() => setNavbar(!navbar)}
              >
                <span className='sr-only'>Open Menu</span>
                {navbar ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-6 w-6 text-neutral-400 hover:text-neutral-50'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-6 w-6 text-neutral-400 hover:text-neutral-50'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                    />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
