'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/cn';
import { type LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  iconColor?: string;
  icon?: LucideIcon;
}

export default function FeatureCard({ icon, title, description }: CardProps) {
  const Icon = icon;
  return (
    <Card
      className={cn(
        ' group relative w-full overflow-hidden border border-muted-foreground/20 bg-muted transition duration-300'
      )}
    >
      <CardHeader className='pb-3'>
        <CardTitle>
          <div className=''>
            <div>
              {Icon ? (
                <Icon
                  strokeWidth={1.5}
                  className={cn('mr-3 h-8 w-8 text-neutral-400')}
                />
              ) : null}
            </div>
            <h1 className='mt-3 text-base font-normal text-primary'>{title}</h1>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-sm font-light text-neutral-400 sm:text-base sm:leading-7'>
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
