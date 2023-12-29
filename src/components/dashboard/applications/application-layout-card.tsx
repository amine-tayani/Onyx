'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode } from 'react';

export type Application = {
  title: string;
  company: string;
  lastUpdated?: string;
  logo?: ReactNode | string;
};

interface Props {
  application: Application;
}

export function ApplicationCard({ application }: Props) {
  return (
    <Card className='rounded-xl'>
      <CardHeader className=' flex flex-row items-center justify-between space-y-0 pb-0'>
        <CardTitle className='text-sm font-medium text-muted-foreground '>
          {application.company}
        </CardTitle>
        {application.logo}
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{application.title}</div>
        <p className='mt-2 text-xs text-neutral-400'>
          Last updated {application.lastUpdated}
        </p>
      </CardContent>
    </Card>
  );
}
