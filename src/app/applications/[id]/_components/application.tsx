'use client';

import * as React from 'react';
import { ApplicationDisplay } from './application-display';
import { ApplicationList } from './application-list';
import { ApplicationT } from '../data';
import { useApplication } from '../use-application';

interface ApplicationProps {
  applications: ApplicationT[];
}

export function Application({ applications }: ApplicationProps) {
  const [application] = useApplication();

  return (
    <div className='grid lg:grid-cols-6'>
      <ApplicationList items={applications} />
      <ApplicationDisplay
        application={
          applications.find((item) => item.id === application.selected) || null
        }
      />
    </div>
  );
}
