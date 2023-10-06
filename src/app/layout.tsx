import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { supabase } from '@/lib/supabase-client';
import { cookies } from 'next/headers';

import './globals.css';
import AuthProvider from '@/components/auth/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Onyx - Unlock Your Dream Job',
  description:
    'Onyx is a job search management tool that helps you organize and track your every step of the way',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider accessToken={accessToken}>{children}</AuthProvider>
      </body>
    </html>
  );
}
