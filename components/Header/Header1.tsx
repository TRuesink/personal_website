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
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  COMPANY_NAME,
  NAVIGATION_ITEMS,
  PRIMARY_ACTION,
  SECONDARY_ACTION,
} from '../../constants';

import Logo from '../../public/brand1.png';
import CustomMenuItem from '../Links/CustomMenuItem';

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
    <AppBar sx={{ backgroundColor: 'white' }} position="sticky">
      <Container>
        <Toolbar disableGutters>
          <Box className={styles.Company}>
            <Image
              className={styles.Logo}
              src={Logo}
              height={50}
              width={50}
              alt="logo"
            />
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
              <Button
                className={styles.NavButton}
                color="primary"
                key={item.label}
                href={item.href}
              >
                {item.label}
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
                <CustomMenuItem
                  key={item.label}
                  onClick={handleCloseNavMenu}
                  href={item.href}
                >
                  <Typography textAlign="center">{item.label}</Typography>
                </CustomMenuItem>
              )
            )}
          </Menu>
          <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <Button
              variant="contained"
              color="secondary"
              className={styles.ActionButton}
              href={PRIMARY_ACTION.href}
            >
              {PRIMARY_ACTION.label}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header1;
