'use client';

import React, { type MouseEvent as ReactMouseEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

interface CardProps {
  title: string;
  description: string;
  iconColor?: string;
  icon?: LucideIcon;
}

export default function FeatureCard({ icon, title, description }: CardProps) {
  const MotionCard = motion(Card);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMovement = ({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent) => {
    const { left, top } = currentTarget?.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const Icon = icon;
  return (
    <MotionCard
      onMouseMove={handleMouseMovement}
      className={cn(
        ' group relative w-full overflow-hidden border border-muted-foreground/20 bg-muted transition duration-300'
      )}
    >
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(10, 0, 10, 0.2),
              transparent 80%
            )
          `,
        }}
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
              <h1 className='mt-3 text-base font-normal text-primary'>
                {title}
              </h1>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-sm font-light text-neutral-400 sm:text-base sm:leading-7'>
            {description}
          </p>
        </CardContent>
      </motion.div>
    </MotionCard>
  );
}
