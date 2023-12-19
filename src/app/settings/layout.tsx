import { Navigation } from '@/components/ui/navigation';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings | Onyx',
  description: `${siteConfig.description}`,
};

export default async function SettingsLayout({
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
