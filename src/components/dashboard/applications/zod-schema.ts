import * as z from 'zod';

export const createApplicationSchema = z.object({
  title: z.string({ required_error: 'Please type a title.' }),
  company: z.string({ required_error: 'Please type a company name.' }),
  description: z
    .string({ required_error: 'Please type the job description.' })
    .min(40, { message: 'description must be longer than 40 characters' })
    .max(200, {
      message: 'The description must be shorter than 200 characters',
    }),
  status: z
    .enum(['APPLIED', 'INTERVIEW', 'REJECTED', 'OFFER', 'CLOSED'], {
      required_error: 'choose a status',
    })
    .default('APPLIED'),
  location: z.string({ required_error: 'Please enter the location' }),
  Url: z
    .string({ required_error: 'Please enter URL.' })
    .url({ message: 'Please enter a valid URL' }),
  datePosted: z.date({
    required_error: 'A date when the job was posted is required.',
  }),
});

export type CreateApplicationSchema = z.infer<typeof createApplicationSchema>;
