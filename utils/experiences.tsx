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
    position: 'Software Engineer',
    time: "Mar '24 - Present",
    technologiesUsed: [
      'Python',
      'Playwright',
      'DynamoDB',
      'AWS Lambda',
      'GitHub Actions',
      'Bash',
    ],
    link: '',
    description:
      'Develop and test bank scrapers and building pipelines for CircAlert',
  },
  {
    company: 'OSLabs',
    position: 'Software Engineer',
    time: "May '23 - March '24",
    description: 'Constructed critical features for NextSketch',
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
