import { GitHub, LinkedIn } from '@mui/icons-material';
import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { COMPANY_NAME, CONTACT_ITEMS, SITE_MAP } from '../../constants';
import { theme } from '../../constants/theme';
import CustomLink from '../Links/CustomLink';

import styles from './Footer1.module.css';

const Footer1 = () => {
  return (
    <Box sx={{ backgroundColor: theme.palette.grey[200] }}>
      <Container className={styles.Footer}>
        <Stack
          sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          className={styles.SiteMap}
          divider={
            <>
              <Divider
                className={styles.SiteMapDivider}
                orientation="vertical"
                flexItem
                sx={{ display: { xs: 'none', md: 'flex' } }}
              />
              <Divider
                orientation="horizontal"
                flexItem
                sx={{ display: { xs: 'flex', md: 'none' } }}
              />
            </>
          }
        >
          <Box
            className={styles.SiteMapItem}
            sx={{ width: { xs: '90vw', md: '30vw' } }}
          >
            <Typography
              color="primary"
              className={COMPANY_NAME.FONT.className}
              sx={{
                fontSize: COMPANY_NAME.FONT_SIZE,
              }}
            >
              {COMPANY_NAME.FULL_NAME}
            </Typography>
            <Stack direction="row">
              <IconButton color="primary">
                <GitHub />
              </IconButton>
              <IconButton color="primary">
                <LinkedIn />
              </IconButton>
            </Stack>
          </Box>
          <Box
            className={styles.SiteMapItem}
            sx={{ width: { xs: '90vw', md: '30vw' } }}
          >
            <Typography variant="h6">{SITE_MAP.HEADING}</Typography>
            {SITE_MAP.ITEMS.map((item) => (
              <CustomLink href={item.href} key={item.href}>
                <Typography className={styles.SiteMapText} variant="body2">
                  {item.label}
                </Typography>
              </CustomLink>
            ))}
          </Box>
          <Box
            className={styles.SiteMapItem}
            sx={{ width: { xs: '90vw', md: '30vw' } }}
          >
            <Typography variant="h6">{CONTACT_ITEMS.HEADING}</Typography>
            {CONTACT_ITEMS.ITEMS.map((item) => (
              <Typography
                className={styles.SiteMapText}
                variant="body2"
                key={item.label}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer1;
