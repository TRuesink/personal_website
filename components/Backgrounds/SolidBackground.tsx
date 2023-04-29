import { Box, Container, SvgIcon } from '@mui/material';
import React from 'react';
import { BACKGROUND_DESIGNS } from './backgroundDesigns';

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
  design?: string;
  shapes?: React.ReactElement[];
  overflow?: string;
};

const designMap = {
  [BACKGROUND_DESIGNS.ONE_LEFT]: styles.Design1Left,
  [BACKGROUND_DESIGNS.ONE_RIGHT]: styles.Design1Right,
};

const SolidBackground = ({
  height,
  backgroundColor,
  textColor,
  children,
  shapes,
  backgroundOpacity,
  overflow,
  design,
}: SolidBackgroundProps) => {
  return (
    <Box
      className={`${styles.Background} ${design ? designMap[design] : ''}`}
      sx={{
        minHeight: height,
        backgroundColor: backgroundColor,
        color: textColor,
        opacity: backgroundOpacity || 1,
        overflowX: 'clip',
        overflowY: overflow || 'hidden',
      }}
    >
      {shapes?.map((shape) => shape)}
      <Container maxWidth="xl" className={styles.Content}>
        {children}
      </Container>
    </Box>
  );
};

export default SolidBackground;
