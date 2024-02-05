'use server';

import { getServerSession } from 'next-auth';
import prisma from '@/lib/db/prisma';
import { CreateApplicationSchema } from './zod-schema';

export async function createApplication(data: CreateApplicationSchema) {
  const session = await getServerSession();

  if (!session || !session.user) {
    throw new Error('Unauthorized');
  }

  return prisma.application.create({
    data: {
      ...data,
      userId: session.user.id,
    },
  });
}
