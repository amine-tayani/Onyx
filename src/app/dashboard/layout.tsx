import type { Metadata } from 'next';
import { Navigation } from '@/components/ui/navigation/';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Dashboard | Onyx',
  description: `${siteConfig.description}`,
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
}
