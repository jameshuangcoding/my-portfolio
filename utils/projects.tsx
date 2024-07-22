export interface Project {
  title: string;
  description: string;
  technologiesUsed: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: 'Clearview',
    description: 'Tool for detecting types of chest cancer based on CT scans',
    technologiesUsed: ['Python', 'Tensorflow', 'Keras'],
    link: 'https://www.kaggle.com/code/jameshuangcoding/chest-cancer-ct-scan-detector',
  },
  {
    title: 'Alley',
    description: 'Web app for locating tennis courts',
    technologiesUsed: [
      'React',
      'React Router',
      'Redux',
      'Node.js',
      'Express',
      'JavaScript',
      'MaterialUI',
      'MongoDB',
      'Webpack',
    ],
    link: 'https://github.com/Stab-Rabbit-NYOI7/tennis-mapper',
  },
  {
    title: 'Memo',
    description: 'Web app that assists in vocabulary memorization.',
    technologiesUsed: [
      'React',
      'Redux',
      'Node.js',
      'Express',
      'SCSS',
      'PostgreSQL',
      'Webpack',
    ],
    link: 'https://github.com/NYOI7-Study-Cards-Scratch-Project/study-cards/',
  },
  {
    title: "What's Above Me?",
    description:
      "Web app for tracking what's in the sky, including planes, stars, and much more.",
    technologiesUsed: [
      'React',
      'Node.js',
      'Express',
      'JavaScript',
      'TypeScript',
      'MaterialUI',
      'MongoDB',
      'Webpack',
    ],
    link: 'https://github.com/NYOI7-Mewtwo/whats-above-me',
  },
  {
    title: 'jameshuang.dev (v1)',
    description: 'Current portfolio site built with Next.js',
    technologiesUsed: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'TailwindCSS',
    ],
    link: 'https://github.com/jameshuangcoding/my-portfolio',
  },
];
