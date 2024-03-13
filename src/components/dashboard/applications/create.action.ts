'use server';

import { getServerSession } from 'next-auth';
import prisma from '@/lib/db/prisma';
import { CreateApplicationSchema } from './zod-schema';
import { authOptions } from '@/lib/nextauth';

export async function createApplication(data: CreateApplicationSchema) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    throw new Error('User is not logged in');
  }

  return prisma.application.create({
    data: {
      ...data,
      userId: session.user.id,
    },
    select: {
      id: true,
    },
  });
}
