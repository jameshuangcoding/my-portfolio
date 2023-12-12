export interface Project {
  title: string;
  description: string;
  technologiesUsed: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: 'Rackdar',
    description: 'Tennis Court Locator',
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
    description: 'Vocabulary Assistance Tool',
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
    description: 'Dynamic Sky Tracker',
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
];
