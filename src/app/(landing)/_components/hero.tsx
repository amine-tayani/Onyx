'use client';

import { Icons } from '@/components/ui/icons';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function Hero() {
  return (
    <header className='mx-auto mb-10 mt-12 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0'>
      <a
        className='group mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.1)] backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'
        href='/blog/introducing-new-analytics'
      >
        <p className='text-sm font-semibold text-gray-700 [text-wrap:balance]'>
          Introducing New &amp; Improved Analytics for Dub
        </p>
        <div className='group relative flex items-center'>
          <svg
            className='absolute -ml-1 h-3.5 w-3.5 transition-all group-hover:translate-x-1 group-hover:opacity-0'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 16 16'
            width='16'
            height='16'
          >
            <path
              fill-rule='evenodd'
              d='M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z'
            ></path>
          </svg>
          <svg
            className='absolute -ml-1 h-3.5 w-3.5 text-black opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 16 16'
            width='16'
            height='16'
          >
            <path
              fill-rule='evenodd'
              d='M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z'
            ></path>
          </svg>
        </div>
      </a>
      <h1 className='mt-5 font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]'>
        Short Links With
        <br />
        <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent'>
          Superpowers
        </span>
      </h1>
      <h2 className='mt-5 text-gray-600 sm:text-xl'>
        Say goodbye to the chaos of endless spreadsheets. Onyx empowers you to
        take control of your job search.
      </h2>
      <div className='hidden lg:flex lg:items-center lg:space-x-3'>
        <Link
          className='rounded bg-hero px-6 py-2 text-sm font-medium text-primary transition-colors hover:bg-hero/80'
          href='/signup'
        >
          Start For Free{' '}
        </Link>
        <Link
          className='flex items-center gap-x-2 rounded bg-secondary px-6 py-2 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary/80'
          href={`${siteConfig.links.github}`}
        >
          <Icons.gitHub className='h-5 w-5' />
          Star on Github
        </Link>
      </div>
    </header>
  );
}
