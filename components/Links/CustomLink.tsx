import { LinkProps, Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';

function CustomLink(props: LinkProps<'a'>) {
  return <MuiLink component={NextLink} {...props} />;
}

export default CustomLink;
