import type { Metadata } from 'next';
import { Navigation } from '@/components/ui/navigation';

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
      <Navigation />
      {children}
    </main>
  );
}
