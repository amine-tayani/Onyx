'use client';

import FeatureCard from './feature-card';
import {
  BarChart2,
  BellRing,
  Blocks,
  CalendarCheck,
  Gauge,
  PackageOpen,
} from 'lucide-react';

export default function Features() {
  return (
    <section className='relative overflow-hidden' id='features'>
      <div className='mx-auto my-32 grid max-w-[1400px] items-center justify-center px-4 sm:px-24 md:px-4 lg:px-24'>
        <div className='flex flex-col items-center justify-center gap-16'>
          <div className='mx-auto mt-8 max-w-md text-center sm:max-w-xl'>
            <h2 className='font-display text-4xl font-extrabold leading-tight text-primary sm:text-5xl sm:leading-tight'>
              <span className='bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent'>
                Powerful
              </span>{' '}
              features for{' '}
              <span className='bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent'>
                modern
              </span>{' '}
              marketing teams
            </h2>
            <p className='mt-5 font-display font-medium text-muted-foreground/70 sm:text-lg'>
              Onyx.com is more than just a job tracker. It empowers you with
              powerful features so you can land jobs sooner.
            </p>
          </div>
          <div className='relative z-10 grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 [&>*:nth-child(3)]:hidden md:[&>*:nth-child(3)]:block'>
            <FeatureCard
              icon={PackageOpen}
              title='Centralized Organization'
              description=' Say goodbye to scattered information, you have a dedicated space to monitor your job
              search progress.'
            />
            <FeatureCard
              icon={Gauge}
              title='Insightful Dashboard'
              description=' Onyx provides real-time metrics, helping you
              gauge your job search performance at a glance.'
            />
            <FeatureCard
              icon={BellRing}
              title='Deadline notifications'
              description='Onyx keep you on track and make sure you Receive timely reminders for upcoming application deadlines'
            />
            <FeatureCard
              icon={BarChart2}
              title='Status Tracking'
              description='Track the status of each application seamlessly and
              monitor every step of your application process.'
            />
            <FeatureCard
              icon={CalendarCheck}
              title='Interview Coordination'
              description='Sync your calendar and choose available time slots, and 
              arrange your interviews  effortlessly.'
            />
            <FeatureCard
              icon={Blocks}
              title='Personalized Insights'
              description='Onyx analyzes your application and ensures you make informed decisions and stand
              out in job market'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
