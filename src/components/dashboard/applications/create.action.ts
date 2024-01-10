// 'use server';

// import prisma from '@/lib/db/prisma';
// import { type Prisma } from '@/lib/db/types';
// import { CreateApplicationSchema } from './zod-schema';
// // import { getServerSession } from 'next-auth';

// // export async function getUsers() {
// //   const users = await prisma.user.findMany({
// //     include: {
// //       socialLinks: true,
// //     },
// //   });

// //   return users;
// // }

// export async function createTrack(data: CreateApplicationSchema) {
//   // const session = await getServerSession();
//   return prisma.application.create({
//     data: {
//       company: data.company,
//       datePosted: '',
//       description: data.description,
//       location: data.location,
//       status: data.status.label.toUpperCase,
//     },
//   });
// }
