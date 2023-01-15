import { MenuTwoTone } from '@mui/icons-material';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  SvgIcon,
} from '@mui/material';
import React, { useState } from 'react';
import {
  COMPANY_NAME,
  NAVIGATION_ITEMS,
  PRIMARY_ACTION,
  SECONDARY_ACTION,
} from '../../constants';

import Dumbbell from '../../public/dumbbell.svg';

import styles from './Header1.module.css';

const Header1 = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color="default" position="sticky">
      <Container>
        <Toolbar disableGutters>
          <Box className={styles.Company}>
            <SvgIcon
              className={styles.Logo}
              component={Dumbbell}
              inheritViewBox
              fontSize="large"
              color="primary"
            ></SvgIcon>
            <Typography
              color="primary"
              className={styles.CompanyText + ' ' + COMPANY_NAME.FONT.className}
              sx={{
                display: { xs: 'flex', sm: 'none', lg: 'flex' },
                fontSize: COMPANY_NAME.FONT_SIZE,
              }}
            >
              {COMPANY_NAME.ACRONYM}
            </Typography>
            <Typography
              color="primary"
              className={styles.CompanyText + ' ' + COMPANY_NAME.FONT.className}
              sx={{
                display: { xs: 'none', sm: 'flex', lg: 'none' },
                fontSize: COMPANY_NAME.FONT_SIZE,
              }}
            >
              {COMPANY_NAME.FULL_NAME}
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
            {NAVIGATION_ITEMS.map((item) => (
              <Button className={styles.NavButton} color="primary" key={item}>
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="primary"
            onClick={handleOpenNavMenu}
            sx={{ display: { xs: 'flex', lg: 'none' } }}
          >
            <MenuTwoTone />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {NAVIGATION_ITEMS.concat([SECONDARY_ACTION, PRIMARY_ACTION]).map(
              (item) => (
                <MenuItem key={item} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{item}</Typography>
                </MenuItem>
              )
            )}
          </Menu>
          <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <Button
              variant="outlined"
              color="primary"
              sx={{ marginRight: '0.5rem' }}
              className={styles.ActionButton}
            >
              {SECONDARY_ACTION}
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={styles.ActionButton}
              href="/test"
            >
              {PRIMARY_ACTION}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header1;
