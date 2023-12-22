'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import { Icons } from '@/components/ui/icons';

export default function Hero() {
  return (
    <div className=' relative bg-gradient-to-tr from-[#2a2a2a] via-[#181818] to-[#262727] pt-40 text-center dark:from-transparent dark:via-transparent dark:to-transparent'>
      <div className='absolute inset-0 hidden justify-center md:flex'>
        <Image
          alt='Gradient'
          width={1000}
          height={1000}
          style={{ color: 'transparent', width: 'auto', height: 'auto' }}
          src='/gradient-dark.svg'
        />
      </div>
      <div className='relative z-10'>
        <div className='px-6'>
          <div className=' mx-auto max-w-[22rem] space-y-2 font-display text-[2rem] font-extrabold leading-tight text-primary md:max-w-[40rem] md:text-6xl md:leading-[1.08]'>
            <h1> Unleash Your Career Potential</h1>
          </div>
          <p className=' mx-auto mt-4 max-w-[26rem] text-muted-foreground md:max-w-xl md:leading-loose'>
            Bid farewell to the chaos of endless spreadsheets. Onyx empowers you
            to take control of your job search.
          </p>
          <div className='mt-8 flex flex-col items-center justify-center space-y-4 px-12 sm:flex-row sm:space-x-6 sm:space-y-0'>
            <Link
              className='rounded bg-hero px-6 py-2 text-sm font-medium text-primary transition-colors hover:bg-hero/80'
              href='/signup'
            >
              Start For Free
            </Link>
            <Link
              className='flex items-center gap-x-2 rounded bg-secondary px-6 py-2 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary/80'
              href={`${siteConfig.links.github}`}
            >
              <Icons.gitHub className='h-5 w-5' />
              Star Us On Github
            </Link>
          </div>
        </div>
        <div className=' invisible mt-6 h-px w-full bg-muted-foreground/10 md:visible' />
      </div>
      <div className=' -mt-px hidden h-px w-full bg-muted-foreground/10 md:block' />
      <div className='absolute left-1/2 top-0 z-0 mx-auto h-full w-full max-w-5xl -translate-x-1/2'>
        <div className=' absolute top-[13rem] hidden h-px w-full bg-muted-foreground/10 md:block' />
        <div className=' absolute top-[17.1rem] hidden h-px w-full bg-muted-foreground/10 md:block' />
        <div className=' absolute left-0 h-full w-px bg-muted-foreground/10' />
        <div className=' absolute right-0 h-full w-px bg-muted-foreground/10' />
      </div>
      <div className='absolute left-1/2 top-0 z-0 mx-auto h-full w-full max-w-6xl -translate-x-1/2'>
        <div className=' absolute left-0 h-full w-px bg-muted-foreground/10' />
        <div className=' absolute right-0 h-full w-px bg-muted-foreground/10' />
      </div>
      <div className='relative z-10'>
        <div className='mx-auto w-full max-w-5xl px-6 py-24 text-center'>
          <h3 className='dark:text-primary-light/80 justify-center space-x-1.5 text-primary/70 md:flex'>
            <span>
              Powering developer experiences from fast growing startups to
              enterprises.
            </span>
            <a
              className='dark:text-primary-light/80 hover:text-primary-active mt-3 flex items-center justify-center font-medium text-primary/90 dark:hover:text-gray-100 md:mt-0'
              href='/customers'
            >
              Learn more
              <svg
                width={20}
                height={20}
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='stroke-current'
              >
                <path
                  d='M8.33301 13.3334L11.3717 10.2947C11.5344 10.132 11.5344 9.86817 11.3717 9.70545L8.33301 6.66675'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </h3>
          <div className='mt-16 grid grid-cols-2 gap-10 sm:grid-cols-5'>
            <div className='flex items-center justify-center'>
              {/* image1 */}
              {/* image1 */}
            </div>
            <div className='flex items-center justify-center'>
              {/* image1 */}
              {/* image1 */}
            </div>
            <div className='flex items-center justify-center'>
              {/* image1 */}
              {/* image1 */}
            </div>
            <div className='flex items-center justify-center'>
              {/* image1 */}
              {/* image1 */}
            </div>
            <div className='flex items-center justify-center'>
              {/* image1 */}
              {/* image1 */}
            </div>
            <div className='flex items-center justify-center'>
              {/* image1 */}
              {/* image1 */}
            </div>
            <div className='flex items-center justify-center'>
              {/* image1 */}
              {/* image1 */}
            </div>
            <div className='flex items-center justify-center'>
              {/* image1 */}
              {/* image1 */}
            </div>
            <div className='flex items-center justify-center'>
              {/* image1 */}
              {/* image1 */}
            </div>
            <div className='flex items-center justify-center'>
              {/* image1 */}
              {/* image1 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
