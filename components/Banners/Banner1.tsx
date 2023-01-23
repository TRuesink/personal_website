import { Box, Button, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import { PRIMARY_ACTION } from '../../constants';

type Banner1Props = {
  tagline1: string;
  tagline2: string;
  subTagline: string;
  imgSrc: string;
};

const Banner1 = ({ tagline1, tagline2, subTagline, imgSrc }: Banner1Props) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      minHeight="inherit"
      paddingTop="3rem"
      paddingBottom="3rem"
    >
      <Grid item xs={11} sm={7}>
        <Stack spacing={2}>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Typography variant="h2" fontWeight="bold">
              {tagline1}
            </Typography>
            <Typography variant="h2">{tagline2}</Typography>
            <Typography variant="h6">{subTagline}</Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Typography variant="h1" fontWeight="bold">
              {tagline1}
            </Typography>
            <Typography variant="h1">{tagline2}</Typography>
            <Typography variant="h4">{subTagline}</Typography>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            href={PRIMARY_ACTION.href}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {PRIMARY_ACTION.label}
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: '30vh', sm: '50vh' },
          }}
        >
          <Image className="CustomImage" src={imgSrc} fill alt="test" />
        </Box>
      </Grid>
      <Grid item xs={9} sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Button
          variant="contained"
          color="secondary"
          href={PRIMARY_ACTION.href}
          fullWidth
        >
          {PRIMARY_ACTION.label}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Banner1;
