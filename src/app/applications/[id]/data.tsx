import { Application, ApplicationStatus } from '@/lib/db/types';

export const applications: Application[] = [
  {
    id: '0e8f2401-9b17-45d4-8583-a8f7688017f7',
    company: 'Netflix inc',
    title: 'Full Stack developer',
    location: 'San Fransisco, California',
    Url: 'https://www.linkedin.com/jobs/full-stack-developer-jobs',
    description:
      'We are seeking multiple Software Engineers across all levels with full stack (any mix of front end, backend, and database) experience to join our team building the future of radiology. This role will work alongside our high-performing cross-functional team of Full Stack Engineers, ML Engineers, and Product Leaders, and various other teams internally and externally to develop this responsive and performant application',
    datePosted: new Date(),
    deadlineDate: new Date(),
    status: ApplicationStatus.APPLIED,
  },
  {
    id: '0e2f2401-0928-2123-1232-a8f7682643f7',
    company: 'Google inc',
    title: 'Frontend Developer',
    location: 'Berlin, Germany',
    Url: 'https://www.linkedin.com/jobs/Frontend-developer-Germany',
    description:
      'We are seeking multiple Frontend Engineers across all levels with full stack (any mix of front end, backend, and database) experience to join our team building the future of radiology. This role will work alongside our high-performing cross-functional team of Full Stack Engineers, ML Engineers, and Product Leaders, and various other teams internally and externally to develop this responsive and performant application',
    datePosted: new Date(),
    deadlineDate: new Date(),
    status: ApplicationStatus.INTERVIEW,
  },
];

export type ApplicationT = (typeof applications)[number];
