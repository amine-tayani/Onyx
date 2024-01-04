'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import type { LucideIcon } from 'lucide-react';
import {
  BellRing,
  CogIcon,
  Paintbrush,
  ShieldHalf,
  UserSquare,
} from 'lucide-react';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {}

type SideItems = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  const pathname = usePathname();
  const { data: session } = useSession();

  const items: SideItems[] = [
    {
      title: 'General',
      href: `/user/${session?.user?.id}`,
      icon: CogIcon,
    },
    {
      title: 'Account',
      href: `/user/${session?.user?.id}/account`,
      icon: UserSquare,
    },
    {
      title: 'Preferences',
      href: `/user/${session?.user?.id}/appearance`,
      icon: Paintbrush,
    },
    {
      title: 'Notifications',
      href: `/user/${session?.user?.id}/notifications`,
      icon: BellRing,
    },
    {
      title: 'Security',
      href: `/user/${session?.user?.id}/security`,
      icon: ShieldHalf,
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
            'justify-start gap-x-2'
          )}
        >
          <item.icon
            strokeWidth={1.5}
            className='h-5 w-5 text-muted-foreground/80'
          />
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  );
}
