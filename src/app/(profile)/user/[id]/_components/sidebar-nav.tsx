'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { Bell, Wrench, Settings, Shield, UserSquare } from 'lucide-react';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  const pathname = usePathname();
  const { data: session } = useSession();

  const items = [
    {
      title: 'General',
      href: `/user/${session?.user?.id}`,
      icon: Settings,
    },
    {
      title: 'Account',
      href: `/user/${session?.user?.id}/account`,
      icon: UserSquare,
    },
    {
      title: 'Preferences',
      href: `/user/${session?.user?.id}/appearance`,
      icon: Wrench,
    },
    {
      title: 'Notifications',
      href: `/user/${session?.user?.id}/notifications`,
      icon: Bell,
    },
    {
      title: 'Security',
      href: `/user/${session?.user?.id}/security`,
      icon: Shield,
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
              ? 'bg-muted text-primary hover:bg-muted hover:text-primary'
              : 'hover:bg-muted hover:text-primary',
            'group justify-start gap-x-2'
          )}
        >
          <item.icon
            strokeWidth={1.5}
            className={cn(
              pathname === item.href
                ? 'text-primary group-hover:text-primary'
                : 'text-muted-foreground/80 group-hover:text-primary',
              'h-5 w-5 transition-all duration-300 ease-in-out'
            )}
          />
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  );
}
