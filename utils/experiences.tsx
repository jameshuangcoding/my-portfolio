export interface Experience {
  company: string;
  position: string;
  time: string;
  technologiesUsed: string[];
  link: string;
}

export const experiences: Experience[] = [
  {
    company: 'NextSketch',
    position: 'Software Engineer',
    time: "August '23 - Present",
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
