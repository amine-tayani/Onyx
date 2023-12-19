import { cn } from '@/lib/cn';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-neutral-400', className)}
      {...props}
    />
  );
}

export { Skeleton };
