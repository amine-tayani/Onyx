import type { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';
import { SidebarNav } from './_components/sidebar-nav';
import NavHeader from './_components/nav-header';

export const metadata: Metadata = {
  title: 'Profile | Onyx',
  description: 'onyx user profile page',
};

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <NavHeader />
      <div className='space-y-6 p-10 pb-16 md:block lg:px-20'>
        <div className='space-y-0.5'>
          <h2 className='text-2xl font-bold tracking-tight'>Settings</h2>
          <p className='text-muted-foreground'>
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className='my-6' />
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <aside className='-mx-4 lg:w-1/5'>
            <SidebarNav />
          </aside>
          <div className='flex-1 lg:max-w-2xl'>{children}</div>
        </div>
      </div>
    </main>
  );
}
