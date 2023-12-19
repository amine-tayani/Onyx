'use client';
import { cn } from '@/lib/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLink({ href, slug }: { href: string; slug: string }) {
  const pathname = usePathname();
  return (
    <Link href={href} className='ml-4'>
      <div
        className={cn(
          'text-foreground/80 transition-colors hover:text-foreground',
          {
            '!text-foreground': pathname === href,
          }
        )}
      >
        {slug}
      </div>
    </Link>
  );
}
