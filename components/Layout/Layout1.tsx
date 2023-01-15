import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import Header1 from '../Header/Header1';
import { theme } from '../../constants/theme';
import Footer1 from '../Footer/Footer1';

import styles from './Layout1.module.css';

const Layout1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={styles.Layout}>
        <Header1 />
        <Container className={styles.MainPage}>{children}</Container>
        <Footer1 />
      </Box>
    </ThemeProvider>
  );
};

export default Layout1;
