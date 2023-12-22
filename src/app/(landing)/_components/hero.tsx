'use client';

import Link from 'next/link';
import { Icons } from '@/components/ui/icons';
import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <header className='mx-auto mb-10 mt-28 max-w-md px-2.5 text-center font-display sm:max-w-lg sm:px-0'>
      <h1 className=' text-4xl font-extrabold leading-[1.15] text-primary sm:text-6xl sm:leading-[1.15]'>
        Unleash Your
        <br />
        <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent'>
          Career Potential
        </span>
      </h1>
      <h2 className='mt-5 font-medium text-muted-foreground/70 sm:text-xl sm:leading-8'>
        Bid farewell to the chaos of endless spreadsheets. Onyx empowers you to
        take control of your job search.
      </h2>
      <div className='mx-auto mt-10 flex max-w-fit space-x-4'>
        <Link
          className='rounded bg-hero px-6 py-2 text-sm font-semibold text-primary transition-colors hover:bg-hero/80'
          href='/signup'
        >
          Start For Free
        </Link>
        <Link
          className='flex items-center gap-x-2 rounded bg-secondary px-6 py-2 text-sm font-semibold text-card-foreground transition-colors hover:bg-secondary/80'
          href={`${siteConfig.links.github}`}
        >
          <Icons.gitHub className='h-5 w-5' />
          Star Us On Github
        </Link>
      </div>
    </header>
  );
}
