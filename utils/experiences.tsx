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
    company: 'NextSketch',
    position: 'Software Engineer',
    time: "May '23 - Present",
    description:
      "Build critical components to construct NextSketch's frontend, across the whole product. Worked closely with a team of engineers to implement and develop drag-and-drop interfaces, file directory, a collapsible tree visualize, and a code preview window for a Next.js prototyping tool.",
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
