import type { Metadata } from 'next';
import TeamSwitcher from '@/components/dashboard/team-switcher';
import UserNav from '@/components/ui/navigation/user-nav';
import { siteConfig } from '@/config/site';
import { ApplicationList } from './_components/application-list';
import { getApplicationList } from './getApplicationsData';

export const metadata: Metadata = {
  title: 'Full Stack developer Role',
  description: `${siteConfig.description}`,
};

interface ApplicationsLayoutProps {
  children: React.ReactNode;
}

async function ApplicationsLayout({ children }: ApplicationsLayoutProps) {
  const applications = await getApplicationList();
  return (
    <main>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <div className='hidden flex-col md:flex'>
          <div className='flex h-16 items-center justify-between px-4'>
            <TeamSwitcher />
            <div className='ml-auto flex items-center space-x-4'>
              <UserNav align='end' />
            </div>
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-6'>
        <ApplicationList items={applications} />
        {children}
      </div>
    </main>
  );
}

export default ApplicationsLayout;
