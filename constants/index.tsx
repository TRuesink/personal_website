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

export const TESTIMONIALS = [
  {
    name: 'Ashley',
    quote:
      'I have felt really good! I don’t think I would have noticed the progress if we were not doing the side by sides or measurements. But the overall energy I have is what I notice the most.',
    date: '11/14/22',
    rating: 5,
  },
  {
    name: 'Eric',
    quote: 'I think I have found a passion with this stuff!',
    date: '11/14/22',
    rating: 3,
  },
  {
    name: 'Kathy',
    quote: 'I had given up all hope…that’s when I reached out to coach Anthony',
    date: '6/26/22',
    rating: 4,
  },
];

export const ABOUT_ME = {
  heading: 'Meet Your Coach',
  content:
    'Hi! I’m Anthony. I am a certified macro nutrition and fitness coach. I specialize in metabolism repair, fat loss, and body recomposition. Learn more about me on the “Meet the coach” page! ',
};