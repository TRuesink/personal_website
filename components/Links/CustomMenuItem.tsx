import React, { forwardRef, Ref } from 'react';
import Link, { LinkProps } from 'next/link';
import { MenuItem, MenuItemProps } from '@mui/material';

type LinkRef = HTMLLIElement;
type NextLinkProps = MenuItemProps &
  Pick<LinkProps, 'href' | 'as' | 'prefetch' | 'locale'>;

const CustomMenuItem = (
  { href, as, prefetch, locale, ...props }: NextLinkProps,
  ref: Ref<LinkRef>
) => (
  <Link
    style={{ textDecoration: 'none', color: 'unset' }}
    href={href}
    as={as}
    prefetch={prefetch}
    locale={locale}
    passHref
  >
    <MenuItem ref={ref} {...props} />
  </Link>
);

export default forwardRef<LinkRef, NextLinkProps>(CustomMenuItem);
