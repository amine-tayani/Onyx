import * as z from 'zod';

export const createApplicationSchema = z.object({
  title: z.string({ required_error: 'Please type a title.' }),
  company: z.string({ required_error: 'Please type a company name.' }),
  description: z
    .string()
    .min(40, { message: 'The name must be longer than 40 characters' })
    .max(200, {
      message: 'The description must be shorter than 200 characters',
    }),
  status: z
    .enum(['APPLIED', 'INTERVIEW', 'REJECTED', 'OFFER', 'CLOSED'])
    .default('APPLIED'),
  url: z.string().url({ message: 'Please enter a valid URL.' }),
  location: z.string(),
});

export type CreateApplicationSchema = z.infer<typeof createApplicationSchema>;
