import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import UserNav from '@/components/ui/navigation/user-nav';
import TeamSwitcher from '@/components/dashboard/team-switcher';

export const metadata: Metadata = {
  title: 'Full Stack developer Role',
  description: `${siteConfig.description}`,
};

export default async function ApplicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      {children}
    </main>
  );
}
