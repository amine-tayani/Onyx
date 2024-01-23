'use client';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { cn } from '@/lib/cn';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Application } from '@/lib/db/types';
import { useApplication } from '../use-application';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';

interface ApplicationListProps {
  items: Application[];
}

export function ApplicationList({ items }: ApplicationListProps) {
  const [application, setApplication] = useApplication();

  return (
    <ScrollArea className='col-span-2 h-screen'>
      <div className=' flex flex-col gap-2 p-4 pt-0'>
        {items.map((item) => (
          <button
            key={item.id}
            className={cn(
              'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent',
              application.selected === item.id && 'bg-muted'
            )}
            onClick={() => {
              setApplication({
                ...application,
                selected: item.id,
              });
            }}
          >
            <div className='flex w-full flex-col gap-1'>
              <div className='flex items-center'>
                <div className='flex items-center space-x-2'>
                  <Avatar>
                    <AvatarImage
                      className='h-14 w-14 rounded-full object-cover object-center'
                      width={40}
                      src='https://avatars.githubusercontent.com/u/62437851?v=4'
                      alt={item.company}
                    />
                    <AvatarFallback>
                      <Skeleton className='h-14 w-14 rounded-full bg-background' />
                    </AvatarFallback>
                  </Avatar>
                  <div className=''>
                    <div className='flex items-center gap-2'>
                      <div className='font-semibold'>{item.title}</div>
                      <span
                        className={cn('flex h-2 w-2 rounded-full ', {
                          'bg-yellow-600': item.status === 'CLOSED',
                          'bg-red-600': item.status === 'REJECTED',
                          'bg-green-600': item.status === 'INTERVIEW',
                          'bg-muted-foreground/20': item.status === 'APPLIED',
                        })}
                      />
                    </div>
                    <div className='text-xs font-medium'>{item.location}</div>
                  </div>
                </div>

                <div
                  className={cn(
                    'ml-auto text-xs',
                    application.selected === item.id
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  )}
                >
                  {formatDistanceToNow(new Date(item.datePosted), {
                    addSuffix: true,
                  })}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}
