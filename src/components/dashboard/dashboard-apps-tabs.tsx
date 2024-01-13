'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CreateAppButton } from './applications/create-application-button';
import { applications } from '@/app/applications/[id]/data';
import { ApplicationStatus } from '@/lib/db/types';
import { ApplicationCard } from './applications/application-card';
import Link from 'next/link';

export function DashboardApplicationTabs() {
  const applicationStatus = Object.values(ApplicationStatus);
  const labels = applicationStatus.map((status) => ({
    label: status,
    value: status,
  }));

  return (
    <>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <div className='flex items-center justify-between space-y-2'>
          <h2 className='text-3xl font-bold tracking-tight'>
            Welcome back Amine
          </h2>
          <div className='flex items-center space-x-2'>
            <CreateAppButton />
            <Button className='group'>
              <RotateCw className='mr-2 h-4 w-4 text-neutral-400 transition-transform duration-300 ease-in-out group-hover:rotate-90 group-hover:text-neutral-100' />
              Sync
            </Button>
          </div>
        </div>

        <Tabs defaultValue={ApplicationStatus.APPLIED} className='space-y-4'>
          <div className='flex justify-between'>
            <TabsList>
              {labels.map(({ label, value }) => (
                <TabsTrigger key={label} value={value}>
                  <span className='capitalize'>{label.toLowerCase()}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {labels.map(({ label, value }) => (
            <TabsContent key={label} value={value} className='space-y-4'>
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:px-8 md:grid-cols-3 md:px-0 lg:grid-cols-4'>
                {applications
                  .filter((application) => application.status === value)
                  .map((item) => (
                    <Link href={`/applications/${item.id}`} key={item.id}>
                      <ApplicationCard application={item} />
                    </Link>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
}
