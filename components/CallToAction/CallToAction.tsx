import { Box, Button, Typography } from '@mui/material';
import React from 'react';

type CallToActionProps = {
  title: string;
  content: string;
  buttonText: string;
  buttonHref: string;
};

const CallToAction = ({
  title,
  content,
  buttonText,
  buttonHref,
}: CallToActionProps) => {
  return (
    <Box
      sx={{
        minHeight: 'inherit',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ maxWidth: { xs: '90%', sm: '70%' } }}>
        <Typography variant="h4">{title}</Typography>
        <Typography
          variant="body1"
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          {content}
        </Typography>
        <Typography
          variant="body2"
          sx={{ display: { xs: 'flex', sm: 'none' } }}
        >
          {content}
        </Typography>
      </Box>

      <Button
        sx={{
          whiteSpace: 'nowrap',
          marginLeft: { xs: '0', sm: '2rem' },
          marginTop: { xs: '2rem', sm: '0' },
        }}
        href={buttonHref}
        variant="contained"
        color="secondary"
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default CallToAction;
