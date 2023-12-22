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
        'group relative w-full overflow-hidden rounded-xl border border-muted-foreground/20 bg-gradient-to-r from-muted/30 to-card/30 shadow-[0_0_15px_rgba(67,71,75,0.6)] transition duration-300',
        'md:hover:border-transparent'
      )}
    >
      <CardHeader className='pb-3'>
        <CardTitle>
          <div className='flex items-center'>
            <div>
              {Icon ? (
                <Icon
                  strokeWidth={1.5}
                  className={cn('mr-3 h-6 w-6 text-primary/70')}
                />
              ) : null}
            </div>
            <h1 className='tracking-tight text-neutral-100'>{title}</h1>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-muted-foreground sm:text-base sm:leading-7'>
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
