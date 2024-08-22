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
    time: "Nov '23 - Present",
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
    description:
      '',
  },
  {
    company: 'NextSketch',
    position: 'Software Engineer',
    time: "May '23 - Nov '23",
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
      'EC2'
    ],
    link: 'https://nextsketch.vercel.app/',
  },
];
