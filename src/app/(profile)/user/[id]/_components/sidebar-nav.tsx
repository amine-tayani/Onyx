'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/components/ui/button';
import { useSession } from 'next-auth/react';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  const pathname = usePathname();
  const { data: session } = useSession();

  const items = [
    {
      title: 'My Profile',
      href: `/user/${session?.user?.id}`,
    },
    {
      title: 'General',
      href: `/user/${session?.user?.id}/account`,
    },
    {
      title: 'Preferences',
      href: `/user/${session?.user?.id}/appearance`,
    },
    {
      title: 'Notifications',
      href: `/user/${session?.user?.id}/notifications`,
    },
    {
      title: 'Security',
      href: `/user/${session?.user?.id}/security`,
    },
  ];

  return (
    <nav
      className={cn(
        'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: 'sidenav' }),
            pathname === item.href
              ? 'bg-muted text-primary hover:bg-muted'
              : 'hover:bg-muted',
            'justify-start'
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
