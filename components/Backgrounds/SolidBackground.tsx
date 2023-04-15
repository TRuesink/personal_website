import { Box, Container, SvgIcon } from '@mui/material';
import React from 'react';

import styles from './Backgrounds.module.css';

type ColorType =
  | 'primary.main'
  | 'primary.light'
  | 'primary.dark'
  | 'secondary.light'
  | 'white'
  | 'grey.100';

export type SolidBackgroundProps = {
  height: string;
  backgroundColor: ColorType;
  backgroundOpacity?: number;
  textColor: string;
  children: React.ReactElement;
  shapes?: React.ReactElement[];
  overflow?: string;
};

const SolidBackground = ({
  height,
  backgroundColor,
  textColor,
  children,
  shapes,
  backgroundOpacity,
  overflow,
}: SolidBackgroundProps) => {
  return (
    <Box
      className={styles.Background}
      sx={{
        minHeight: height,
        backgroundColor: backgroundColor,
        color: textColor,
        opacity: backgroundOpacity || 1,
        overflowY: overflow || 'hidden',
      }}
    >
      {shapes?.map((shape) => shape)}
      <Container className={styles.Content}>{children}</Container>
    </Box>
  );
};

export default SolidBackground;
