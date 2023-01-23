import { Box, Container, SvgIcon } from '@mui/material';
import React from 'react';

import styles from './Backgrounds.module.css';

type ColorType = 'primary.main' | 'primary.light' | 'primary.dark' | 'white';

export type SolidBackgroundProps = {
  height: string;
  backgroundColor: ColorType;
  textColor: string;
  children: React.ReactElement;
  shapes?: {
    key: string;
    color: string;
    opacity: number;
    icon: React.ReactElement;
    size: string;
    showOn?: string;
    position: {
      left: string | undefined;
      right: string | undefined;
      top: string | undefined;
      bottom: string | undefined | any;
    };
  }[];
};

const SolidBackground = ({
  height,
  backgroundColor,
  textColor,
  children,
  shapes,
}: SolidBackgroundProps) => {
  return (
    <Box
      className={styles.Background}
      sx={{
        minHeight: height,
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      {shapes?.map((shape) => (
        <SvgIcon
          sx={{
            color: shape.color,
            opacity: shape.opacity,
            position: 'absolute',
            fontSize: shape.size,
            left: shape.position.left,
            right: shape.position.right,
            top: shape.position.top,
            bottom: shape.position.bottom,
            display: { xs: 'none', [shape?.showOn || 'md']: 'block' },
          }}
          key={shape.key}
        >
          {shape.icon}
        </SvgIcon>
      ))}
      <Container className={styles.Content} sx={{ minHeight: 'inherit' }}>
        {children}
      </Container>
    </Box>
  );
};

export default SolidBackground;
