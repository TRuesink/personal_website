import { LinkProps, Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';

type CustomLinkProps = LinkProps<'a'> & {
  textDecoration?: string;
  color?: string;
};

function CustomLink(props: CustomLinkProps) {
  return (
    <MuiLink
      component={NextLink}
      {...props}
      sx={{
        textDecoration: props.textDecoration,
        color: props.color,
      }}
    />
  );
}

export default CustomLink;
