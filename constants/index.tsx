import {
  Code,
  DesignServices,
  GitHub,
  Groups,
  LinkedIn,
} from '@mui/icons-material';
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
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie, risus eu tristique tempor, arcu dolor suscipit turpis, eget venenatisligula lorem vel tellus. Curabitur efficitur massa a condimentum interdum. Maecenas convallis imperdiet sapien sit amet pellentesque.',
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
    href: undefined,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien massa, sodales eu rhoncus sed, maximus ut nisl. Duis semper.',
  },
  {
    icon: <DesignServices />,
    title: 'Usability Design',
    href: undefined,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien massa, sodales eu rhoncus sed, maximus ut nisl. Duis semper.',
  },
  {
    icon: <Groups />,
    title: 'Leadership',
    href: undefined,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien massa, sodales eu rhoncus sed, maximus ut nisl. Duis semper.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Ashley',
    quote: '',
    date: '11/14/22',
    rating: 0,
  },
];

export const ABOUT_ME = {
  heading: 'A few things about me',
  content:
    'Hi! I’m Anthony. I am a certified macro nutrition and fitness coach. I specialize in metabolism repair, fat loss, and body recomposition. Learn more about me on the “Meet the coach” page! ',
};
