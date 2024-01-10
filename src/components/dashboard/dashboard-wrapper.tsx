'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Application } from '@/components/dashboard/applications/application-layout-card';
import AcceptedTab from './accepted-tab';
import { OnGoingTab } from './ongoing-tab';
import { AppliedTab } from './applied-tab';
import { AllApplicationsTab } from './all-applications-tab';
import { Icons } from '../ui/icons';
import { CreateAppButton } from './applications/create-application-button';

export function DashboardLayout() {
  const applications: Application[] = [
    {
      company: 'X inc.',
      title: 'Frontend Engineer',
      logo: <Icons.x className='h-7 w-7' />,
      lastUpdated: '3 days ago',
    },
    {
      company: 'Google',
      title: 'Software Engineer',
      logo: <Icons.google className='h-9 w-9' />,
      lastUpdated: '2 days ago',
    },
    {
      company: 'Netflix',
      title: 'Full Stack Developer',
      logo: <Icons.netflix className='h-9 w-9' />,
      lastUpdated: '1 day ago',
    },
    {
      company: 'Github',
      title: 'Product Manager',
      logo: <Icons.gitHub className='h-9 w-9' />,
      lastUpdated: '3 days ago',
    },
  ];

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

        <Tabs defaultValue='all' className='space-y-4'>
          <div className='flex justify-between'>
            <TabsList>
              <TabsTrigger value='all'>All</TabsTrigger>
              <TabsTrigger value='ongoing'>On Going</TabsTrigger>
              <TabsTrigger value='applied'>Applied</TabsTrigger>
              <TabsTrigger value='accepted'>Accepted</TabsTrigger>
            </TabsList>
          </div>
          <AllApplicationsTab applications={applications} />
          <AcceptedTab applications={applications} />
          <OnGoingTab applications={applications} />
          <AppliedTab applications={applications} />
        </Tabs>
      </div>
    </>
  );
}
