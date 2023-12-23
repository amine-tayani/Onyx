'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/ui/icons';
import { Moon, Sun } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='mx-auto mb-24 mt-36 max-w-4xl px-8 text-[14px]'>
      <div className='space-y-8 sm:flex sm:space-y-0'>
        <div className='grid flex-1 grid-cols-2 gap-8 sm:flex sm:flex-col'>
          <Link className='flex items-center gap-x-2' href='/'>
            <Icons.logo className='h-10 w-10' />
            <span className='font-display text-lg font-extrabold text-primary'>
              Onyx
            </span>
          </Link>
          <div className='flex flex-1 space-x-4 sm:items-end'>
            <Link target='_blank' href={`${siteConfig.links.twitter}`}>
              <Icons.x className='h-5 w-5 fill-muted-foreground' />
            </Link>
            <div className='h-4 w-px bg-muted-foreground/30' />
            <Link target='_blank' href={`${siteConfig.links.github}`}>
              <Icons.gitHub className='h-6 w-6 text-muted-foreground' />
            </Link>
            <div className='h-4 w-px bg-muted-foreground/30' />
            <Link target='_blank' href='/community'>
              <Icons.discord className='h-6 w-6 text-neutral-500' />
            </Link>
          </div>
        </div>
        <div className='grid flex-1 grid-cols-2 gap-8'>
          <div>
            <label className='text-sm text-muted-foreground hover:text-primary/90'>
              Product
            </label>
            <ul className='mt-5 space-y-3.5'>
              <li>
                <a
                  className='text-muted-foreground hover:text-primary/90'
                  href='/docs'
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  className='text-muted-foreground hover:text-primary/90'
                  href='/pricing'
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className='text-muted-foreground hover:text-primary/90'
                  href='/enterprise'
                >
                  Enterprise
                </a>
              </li>
            </ul>
          </div>
          <div>
            <label className='text-sm text-muted-foreground hover:text-primary/90'>
              Company
            </label>
            <ul className='mt-5 space-y-3.5'>
              <li>
                <a
                  className='text-muted-foreground hover:text-primary/90'
                  href='/customers'
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  className='text-muted-foreground hover:text-primary/90'
                  href='/careers'
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className='text-muted-foreground hover:text-primary/90'
                  href='/blog'
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='mt-16 flex items-center border-t border-muted-foreground/20 pt-16'>
        <div className=' text-center text-[14px] text-muted-foreground sm:block'>
          © 2023 Onyx, Inc.
        </div>
        <div className='flex flex-1 items-center justify-end space-x-1 text-muted-foreground'>
          <button className='px-3 py-1'>
            <Sun className='h-5 w-5' />
          </button>
          <button className='rounded-full bg-primary px-3 py-1 text-muted'>
            <Moon className='h-5 w-5' />
          </button>
        </div>
      </div>
    </footer>
  );
}
