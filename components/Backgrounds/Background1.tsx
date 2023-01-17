import { Box, Container } from '@mui/material';
import React from 'react';

import styles from './Backgrounds.module.css';

type ColorType = 'primary.main' | 'primary.light' | 'primary.dark' | 'white';

export type Background1Props = {
  height: string;
  backgroundColor: ColorType;
  textColor: string;
  children: React.ReactElement;
};

const Background1 = ({
  height,
  backgroundColor,
  textColor,
  children,
}: Background1Props) => {
  return (
    <Box
      className={styles.Background}
      sx={{
        minHeight: height,
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <Container className={styles.Content} sx={{ minHeight: 'inherit' }}>
        {children}
      </Container>
    </Box>
  );
};

export default Background1;
