'use client';

import { TabsContent } from '@/components/ui/tabs';
import {
  Application,
  ApplicationCard,
} from '@/components/dashboard/applications/application-layout-card';

interface Props {
  applications: Application[];
}

const AcceptedTab = ({ applications }: Props) => {
  return (
    <TabsContent value='accepted' className='space-y-4'>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {applications.map((application, appid) => (
          <ApplicationCard application={application} key={appid} />
        ))}
      </div>
    </TabsContent>
  );
};

export default AcceptedTab;
