import { Box, Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import styles from './Backgrounds.module.css';

type ColorType = 'primary.main' | 'primary.light' | 'primary.dark' | 'white';

import imaage from '../../public/workout.jpg';

export type PictureBackgroundProps = {
  height: string;
  backgroundColor: ColorType;
  textColor: string;
  children: React.ReactElement;
  overlayColor: string;
  overlayOpacity: number;
};

const PictureBackground = ({
  height,
  backgroundColor,
  textColor,
  children,
  overlayColor,
  overlayOpacity,
}: PictureBackgroundProps) => {
  return (
    <Box
      className={styles.Background}
      sx={{
        minHeight: height,
        color: textColor,
      }}
    >
      <Box
        sx={{
          minHeight: height,
          backgroundColor: backgroundColor,
          opacity: 0.4,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '100vw',
          minHeight: height,
        }}
      >
        <Image className="BackgroundImage" fill src={imaage} alt="bg-image" />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '100vw',
          minHeight: height,
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />
      <Container className={styles.Content} sx={{ minHeight: 'inherit' }}>
        {children}
      </Container>
    </Box>
  );
};

export default PictureBackground;
