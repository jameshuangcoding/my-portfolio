export interface NavLink {
  path: string;
  name: string;
}

export const navLinks: NavLink[] = [
  {
    path: '#about',
    name: 'About',
  },
  {
    path: '#skills',
    name: 'Skills',
  },
  {
    path: '#experience',
    name: 'Experience',
  },
  {
    path: '#projects',
    name: 'Projects',
  },
];
