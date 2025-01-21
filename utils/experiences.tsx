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
    company: 'Chickasaw Nation Industries',
    position: 'Software Engineer',
    time: "Oct '24 - Present",
    technologiesUsed: ['C#', 'ASP.NET', 'AWS'],
    link: 'https://www.chickasaw.com/',
    description: '',
  },
  {
    company: 'Dev-Overflow',
    position: 'Software Engineer',
    time: "Aug '23 - Oct '24",
    technologiesUsed: [
      'Python',
      'Playwright',
      'DynamoDB',
      'AWS Lambda',
      'GitHub Actions',
      'Bash',
      'React',
      'TypeScript',
      'TailwindCSS',
      'React Testing Library',
      'Jest',
      'Vitest',
    ],
    link: '',
    description: '',
  },
  {
    company: 'OSLabs',
    position: 'Software Engineer',
    time: "Jan '23 - Aug '23",
    description: '',
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
      'Electron',
      'Vercel',
      'EC2',
    ],
    link: 'https://nextsketch.vercel.app/',
  },
];
