import { Assignment, People, Scale } from '@mui/icons-material';
import { Abril_Fatface } from '@next/font/google';
const companyFont = Abril_Fatface({ weight: '400', subsets: ['latin'] });

export const COMPANY_NAME = {
  FULL_NAME: 'Trobeck Transformations',
  ACRONYM: 'TT',
  FONT: companyFont,
  FONT_SIZE: '1.5rem',
};

export const NAVIGATION_ITEMS = [
  { label: 'Macros', href: '/macros' },
  { label: 'Transformations', href: '/transformations' },
  { label: 'Coaching', href: '/coaching' },
  { label: 'About Me', href: '/about' },
];

export const PRIMARY_ACTION = {
  label: 'Free Consultation',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie, risus eu tristique tempor, arcu dolor suscipit turpis, eget venenatisligula lorem vel tellus. Curabitur efficitur massa a condimentum interdum. Maecenas convallis imperdiet sapien sit amet pellentesque.',
  href: '/consultation',
};

export const SECONDARY_ACTION = { label: 'Contact', href: '/contact' };

export const CONTACT_ITEMS = {
  HEADING: 'Contact',
  ITEMS: [
    { label: 'Anthony Trobeck' },
    { label: '(123)1234-0987' },
    { label: 'anthony.trobeck@gmail.com' },
  ],
};

export const SITE_MAP = {
  HEADING: 'Company',
  ITEMS: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
  ],
};

export const BRAND = {
  tagline: 'Eat More Weigh Less',
  subTagline: 'Rediscover your metabolism by eating more and dieting less',
};

export const FEATURES = [
  {
    icon: <Scale />,
    title: 'Personalized Macro Calculation',
    href: '/macros',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien massa, sodales eu rhoncus sed, maximus ut nisl. Duis semper.',
  },
  {
    icon: <People />,
    title: '1:1 Coaching',
    href: '/coaching',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien massa, sodales eu rhoncus sed, maximus ut nisl. Duis semper.',
  },
  {
    icon: <Assignment />,
    title: 'Tailored Workout Plan',
    href: '/workout-plan',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien massa, sodales eu rhoncus sed, maximus ut nisl. Duis semper.',
  },
];
