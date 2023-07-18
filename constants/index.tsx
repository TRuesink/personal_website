import {
  Code,
  DesignServices,
  GitHub,
  Groups,
  LinkedIn,
} from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Source_Sans_Pro } from '@next/font/google';
const companyFont = Source_Sans_Pro({ weight: '400', subsets: ['latin'] });

export const COMPANY_NAME = {
  FULL_NAME: 'Tim Ruesink',
  ACRONYM: 'Tim',
  FONT: companyFont,
  FONT_SIZE: '1.5rem',
};

export const NAVIGATION_ITEMS = [
  { label: 'Resume', href: '/resume' },
  { label: 'About Me', href: '/about' },
];

export const PRIMARY_ACTION = {
  label: 'Contact Me',
  content:
    'Need a software engineer to bring your ideas to life? Look no further! With my strong technical skills and experience in developing cutting-edge software solutions, Im ready to tackle any challenge. Lets collaborate and create something amazing together - reach out to me today!',
  href: '/contact',
};

export const SECONDARY_ACTION = { label: 'Resume', href: '/resume' };

export const CONTACT_ITEMS = {
  HEADING: 'Contact',
  ITEMS: [
    { label: 'Tim Ruesink' },
    { label: '(608)327-9816' },
    { label: 'timothy.ruesink@gmail.com' },
  ],
};

export const SITE_MAP = {
  HEADING: 'Site',
  ITEMS: [
    { label: 'About', href: '/about' },
    { label: 'Resume', href: '/resume' },
  ],
};

export const SOCIAL_LINKS = [
  { icon: <LinkedIn />, href: 'https://www.linkedin.com/in/tim-ruesink/' },
  { icon: <GitHub />, href: 'https://github.com/TRuesink' },
];

export const BRAND = {
  tagline: 'Tim Ruesink',
  subTagline: 'Bridging the gap between engineers and users',
};

export const FEATURES = [
  {
    icon: <Code />,
    title: 'Fullstack Engineering',
    content:
      'From the front-end to the back-end, I cover the full engineering stack! A few technologies I work with: HTML/CSS, Javascript, React, Next.js, Python, Flask, Golang, PostgreSQL, and more.',
  },
  {
    icon: <DesignServices />,
    title: 'Usability Design',
    content:
      'With meticulous attention to detail and a passion for creating intuitive interfaces, I craft designs that effortlessly guide users on a delightful journey, ensuring every interaction leaves a lasting impression.',
  },
  {
    icon: <Groups />,
    title: 'Project Management',
    content:
      'I orchestrate the seamless execution of complex projects, ensuring milestones are met on time. With a thorough approach and communication, I lead cross-functional teams to deliver software solutions that drive company growth.',
  },
];

export const ABOUT_ME = {
  heading: 'A few things about me',
  content:
    "When I'm not immersed in the world of software engineering, I find joy in pursuing my hobbies. I have a passion for road cycling and backpacking. Additionally, I enjoy staying active through hiking and discovering new trails, immersing myself in nature's beauty while recharging my creativity. Click more to learn more about me!",
};

export const TIMELINE_ITEMS = [
  {
    title: 'WMU',
    content: (
      <div>
        <Typography fontSize="1.2rem" fontWeight="bold">
          2012 - 2016
        </Typography>
        <Typography fontSize="1.2rem">B.S. Mechanical Engineerg</Typography>
        <Typography fontSize="1.2rem">summa cum laude</Typography>
      </div>
    ),
    imgSrc: './wmu.svg',
  },
  {
    title: 'UW-Madison',
    content: (
      <div>
        <Typography fontSize="1.2rem" fontWeight="bold">
          2017 - 2019
        </Typography>
        <Typography fontSize="1.2rem">M.S. Mechanical Engineerg</Typography>
        <Typography fontSize="1.2rem">GPA: 3.85 / 4.00</Typography>
      </div>
    ),
    imgSrc: './uw.svg',
  },
];
