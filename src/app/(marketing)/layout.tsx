import type { Metadata } from 'next';
import NavigationBar from '@/components/ui/NavigationBar';

export const metadata: Metadata = {
  title: 'Onyx - Unlock Your Dream Job',
  description:
    'Onyx is a job search management tool that helps you organize and track your every step of the way',
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <NavigationBar />
      {children}
    </main>
  );
}
