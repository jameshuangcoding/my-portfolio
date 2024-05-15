export interface Experience {
  company: string;
  position: string;
  time: string;
  technologiesUsed: string[];
  link: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    company: 'Dev-Overflow',
    position: 'Volunteer Software Engineer',
    time: "Jan '24 - Present",
    technologiesUsed: ['Python', 'Playwright', 'DynamoDB', 'AWS Lambda'],
    link: '',
    description:
      'Develop and test bank scrapers for CircAlert - a product that monitors bank circulars globally and alerts users when a new circular is published. Build two pipelines to streamline scarped data to DynamoDB and to notify users through email using Amazon SQS and Postmark.',
  },
  {
    company: 'OSLabs',
    position: 'Software Engineer',
    time: "May '23 - Present",
    description:
      'Construct critical features for NextSketch - a prototyping and visualization tool for Next.js developers. Work closely with a team of engineers to implement and develop drag-and-drop interfaces, file directory, a collapsible tree visualize, and a code preview window.',
    technologiesUsed: [
      'React',
      'Node.js',
      'Express',
      'JavaScript',
      'TypeScript',
      'Vite',
      'MaterialUI',
      'D3.js',
      'Prism.js',
      'Jest',
    ],
    link: 'https://nextsketch.vercel.app/',
  },
];
