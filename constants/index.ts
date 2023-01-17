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
