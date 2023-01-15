import { Abril_Fatface } from '@next/font/google';
const companyFont = Abril_Fatface({ weight: '400', subsets: ['latin'] });

export const COMPANY_NAME = {
  FULL_NAME: 'Trobeck Transformations',
  ACRONYM: 'TT',
  FONT: companyFont,
  FONT_SIZE: '1.5rem',
};

export const NAVIGATION_ITEMS = [
  'Macros',
  'Transformations',
  'Coaching',
  'About Me',
];

export const PRIMARY_ACTION = 'Free Consultation';

export const SECONDARY_ACTION = 'Contact';

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
    { label: 'FAQ', href: 'faq' },
  ],
};
