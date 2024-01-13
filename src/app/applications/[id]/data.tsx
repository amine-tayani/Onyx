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
    id: 'b54a54a5-4a55-54a5-4a54-54a554a554a6',
    company: 'Google',
    title: 'Frontend Developer',
    location: 'Berlin, Germany',
    Url: 'https://www.linkedin.com/jobs/frontend-developer-germany',
    description:
      'We are seeking a passionate and skilled Frontend Developer to join our growing team in Berlin. You will be responsible for building and maintaining user interfaces for our products, working closely with backend engineers and designers. You should have experience with modern JavaScript frameworks and libraries, and a strong understanding of web development best practices.',
    datePosted: new Date(),
    deadlineDate: new Date('2024-03-05'),
    status: ApplicationStatus.APPLIED,
  },
  {
    id: 'c54a54a5-4a55-54a5-4a54-54a554a554a6',
    company: 'Netflix',
    title: 'Data Analyst',
    location: 'Los Angeles, California',
    Url: 'https://jobs.netflix.com/jobs/data-analyst',
    description:
      'Netflix is seeking a data-driven and analytical mind to join our team in Los Angeles. You will be responsible for analyzing user data to inform product decisions, identifying trends and patterns, and creating compelling data visualizations. Strong SQL skills and experience with data analysis tools are required.',
    datePosted: new Date(),
    deadlineDate: new Date('2024-02-25'),
    status: ApplicationStatus.APPLIED,
  },
  {
    id: 'd54a54a5-4a55-54a5-4a54-54a554a554a6',
    company: 'Dropbox',
    title: 'Product Manager',
    location: 'San Francisco, California',
    Url: 'https://dropbox.com/jobs/product-manager',
    description:
      'Dropbox is looking for a creative and strategic Product Manager to join our team in San Francisco. You will be responsible for owning the product roadmap for a specific feature or product line, conducting user research, and defining product requirements. Strong communication and collaboration skills are essential.',
    datePosted: new Date(),
    deadlineDate: new Date('2024-03-10'),
    status: ApplicationStatus.APPLIED,
  },
  {
    id: 'e54a54a5-4a55-54a5-4a54-54a554a554a6',
    company: 'Spotify',
    title: 'Backend Engineer ',
    location: 'Stockholm, Sweden',
    Url: 'https://www.spotifyjobs.com/jobs/software-engineer-backend',
    description:
      'Spotify is looking for a talented and experienced Backend Software Engineer to join our team in Stockholm. You will be responsible for designing, developing, and maintaining our backend systems, ensuring scalability and performance. Expertise in Go and cloud technologies is preferred.',
    datePosted: new Date(),
    deadlineDate: new Date('2024-02-15'),
    status: ApplicationStatus.REJECTED,
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
  {
    id: '0e2f2401-1212-f2f2-f73d-a8f7682643f7',
    company: 'Discord inc',
    title: 'Product Manager',
    location: 'Denver, Colorado',
    Url: 'https://www.linkedin.com/jobs/Product-Manager-Position',
    description:
      'We are seeking multiple Frontend Engineers across all levels with full stack (any mix of front end, backend, and database) experience to join our team building the future of radiology. This role will work alongside our high-performing cross-functional team of Full Stack Engineers, ML Engineers, and Product Leaders, and various other teams internally and externally to develop this responsive and performant application',
    datePosted: new Date(),
    deadlineDate: new Date(),
    status: ApplicationStatus.REJECTED,
  },
  {
    id: '0e2f2401-020f-2c2d-f73d-a8f7682643f7',
    company: 'Notion',
    title: 'Ux Designer',
    location: 'Los Angelos, California',
    Url: 'https://www.linkedin.com/jobs/Product-Manager-Position',
    description:
      'We are seeking multiple Frontend Engineers across all levels with full stack (any mix of front end, backend, and database) experience to join our team building the future of radiology. This role will work alongside our high-performing cross-functional team of Full Stack Engineers, ML Engineers, and Product Leaders, and various other teams internally and externally to develop this responsive and performant application',
    datePosted: new Date(),
    deadlineDate: new Date(),
    status: ApplicationStatus.CLOSED,
  },
  {
    id: '154a254a-54bc-4a85-a554-54a554a554a5',
    company: 'Meta',
    title: 'Senior Software Engineer',
    location: 'Menlo Park, California',
    Url: 'https://www.metacareers.com/jobs/senior-software-engineer-backend/',
    description:
      'Meta is seeking an experienced backend software engineer to join our team in building innovative solutions for our platform. In this role, you will be responsible for designing and developing scalable backend systems, collaborating with cross-functional teams, and contributing to all phases of the development process.',
    datePosted: new Date(),
    deadlineDate: new Date('2024-02-20'),
    status: ApplicationStatus.OFFER,
  },
  {
    id: '4a854a54-4a55-454a-54a5-54a554a554a5',
    company: 'Microsoft',
    title: 'Cloud Solutions Architect',
    location: 'Redmond, Washington',
    Url: 'https://careers.microsoft.com/us/en/job/1454605/Cloud-Solutions-Architect',
    description:
      'Microsoft is looking for a passionate and experienced Cloud Solutions Architect to design and implement cloud-based solutions for our clients. You will work closely with customers to understand their business needs and translate them into technical solutions, leveraging Microsoft Azure cloud services.',
    datePosted: new Date(),
    deadlineDate: new Date('2024-03-15'),
    status: ApplicationStatus.OFFER,
  },
  {
    id: '854a54a5-54a5-4a54-4a55-54a554a554a5',
    company: 'Amazon',
    title: 'Machine Learning Engineer',
    location: 'Seattle, Washington',
    Url: 'https://www.amazon.jobs/en/jobs/1954625/machine-learning-engineer',
    description:
      'Amazon is seeking a talented Machine Learning Engineer to join our team and drive innovation in our AI-powered products and services. You will be responsible for developing and deploying machine learning models, working with large datasets, and collaborating with engineers and scientists across various domains.',
    datePosted: new Date(),
    deadlineDate: new Date('2024-02-10'),
    status: ApplicationStatus.OFFER,
  },
  {
    id: 'a54a54a5-4a55-54a5-4a54-54a554a554a5',
    company: 'Apple',
    title: 'Senior UX Designer',
    location: 'Cupertino, California',
    Url: 'https://jobs.apple.com/en-us/details/200312815/senior-ux-designer',
    description:
      'Apple is looking for a passionate and experienced Senior UX Designer to create intuitive and user-friendly experiences for our products. You will work closely with cross-functional teams to design and implement innovative solutions that meet the needs of our users.',
    datePosted: new Date(),
    deadlineDate: new Date('2024-03-01'),
    status: ApplicationStatus.OFFER,
  },
];

export type ApplicationT = (typeof applications)[number];
