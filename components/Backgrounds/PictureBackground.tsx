import { Box, Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import styles from './Backgrounds.module.css';

import imaage from '../../public/code2.jpg';

export type PictureBackgroundProps = {
  imgSrc: string;
  height: string;
  textColor: string;
  children: React.ReactElement;
  overlayColor: string;
  overlayOpacity: number;
};

const PictureBackground = ({
  imgSrc,
  height,
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
          position: 'absolute',
          width: '100vw',
          minHeight: height,
        }}
      >
        <Image className="BackgroundImage" fill src={imgSrc} alt="bg-image" />
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
