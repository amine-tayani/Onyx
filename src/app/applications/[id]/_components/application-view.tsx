import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { EmptyPlaceholder } from '@/components/ui/empty-placeholder';
import { Skeleton } from '@/components/ui/skeleton';
import { Application } from '@/lib/db/types';
import { getRelativeTime } from '@/utils/time';

interface ApplicationViewProps {
  application: Application | null;
}

export function ApplicationView({ application }: ApplicationViewProps) {
  return (
    <div className='col-span-4 flex h-full flex-col'>
      {application ? (
        <div className='flex flex-1 flex-col'>
          <div className='flex items-start p-4'>
            <div className='flex items-start gap-4 text-sm'>
              <Avatar>
                <AvatarImage
                  className='h-14 w-14 object-cover object-center'
                  width={40}
                  src='https://avatars.githubusercontent.com/u/62437851?v=4'
                  alt={application.company}
                />
                <AvatarFallback>
                  <Skeleton className='h-14 w-14 rounded-full bg-background' />
                </AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <div className='font-semibold'>{application.title}</div>
                <div className='line-clamp-1 text-xs'>
                  {application.location}
                </div>
                <div className='line-clamp-1 text-xs'>
                  {application.company}
                </div>
              </div>
              {application.datePosted && (
                <div className='ml-auto text-xs text-muted-foreground'>
                  {getRelativeTime(application.datePosted)}
                </div>
              )}
            </div>
          </div>
          <div className='text-balance flex-1 whitespace-pre-wrap p-4 text-sm text-neutral-300'>
            {application.description}
          </div>
        </div>
      ) : (
        <EmptyPlaceholder className='my-4 '>
          <EmptyPlaceholder.Description>
            No applications are found
          </EmptyPlaceholder.Description>
        </EmptyPlaceholder>
      )}
    </div>
  );
}
