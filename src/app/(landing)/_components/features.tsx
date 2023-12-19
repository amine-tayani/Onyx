'use client';

import { Balancer } from 'react-wrap-balancer';
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
          <div className='mx-auto mt-1 flex max-w-[666px] flex-col space-y-6 text-center sm:px-0'>
            <div className='mb-6 bg-gradient-to-b from-orange-400 via-orange-600 to-pink-600 bg-clip-text font-semibold uppercase leading-none tracking-widest text-transparent'>
              Features
            </div>

            <h1 className=' text-4xl font-bold leading-[1.3] tracking-[-0.022px] text-primary'>
              <Balancer>Onyx is your personal job application tracker</Balancer>
            </h1>
            <p className='text-lg leading-[1.7] tracking-[-0.014px] text-muted-foreground'>
              <Balancer>
                Introducing Onyx – the new app for managing your job
                applications with precision and ease.
              </Balancer>
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
