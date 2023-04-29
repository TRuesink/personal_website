import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import styles from './Features.module.css';

type HighlightedFeatureProps = {
  invert?: boolean;
  imgSrc: string;
  heading: string;
  content: string;
};

const HighlightedFeature = ({
  invert,
  imgSrc,
  heading,
  content,
}: HighlightedFeatureProps) => {
  return (
    <Grid
      container
      columnGap={4}
      rowGap={8}
      direction={invert ? 'row-reverse' : 'row'}
      justifyContent="space-around"
      alignItems="center"
      minHeight="inherit"
      paddingTop="3rem"
      paddingBottom="3rem"
    >
      <Grid item xs={10} sm={5}>
        <Typography variant="h4">{heading}</Typography>
        <Typography sx={{ margin: '0.5rem 0' }}>{content}</Typography>
        <Button variant="contained">Read More</Button>
      </Grid>
      <Grid item xs={10} sm={4}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '50vh',
            boxShadow: 3,
            borderRadius: '8px',
          }}
        >
          <Image
            className={styles.FeatureImage}
            fill
            src={imgSrc}
            alt="feature-image"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HighlightedFeature;
