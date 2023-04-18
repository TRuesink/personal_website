import { Box, Button, IconButton, SvgIcon, Typography } from '@mui/material';
import { FaReact, FaPython } from 'react-icons/fa';
import { TbBrandGolang } from 'react-icons/tb';
import { Stack } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import { PRIMARY_ACTION, SOCIAL_LINKS } from '../../constants';

import styles from './Banner.module.css';
import Link from 'next/link';

type Feature = {
  icon: JSX.Element;
  title: string;
  content: string;
};

type Banner2Props = {
  headline: string;
  features: Feature[];
  imgSrc: string;
};

const Banner2 = ({ headline, features, imgSrc }: Banner2Props) => {
  return (
    <Stack
      gap={2}
      sx={{
        display: 'flex',
        height: 'auto',
        width: '100%',
        alignItems: 'center',
        justifyContent: { xs: 'center', sm: 'flex-start' },
        paddingTop: { xs: '3rem', sm: '0' },
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Stack spacing={2}>
        <Box
          sx={{
            display: {
              xs: 'flex',
              md: 'none',
            },
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ whiteSpace: 'nowrap' }}
          >
            {headline}
          </Typography>
          {features.map((feature) => (
            <Stack direction="row" gap={2} alignItems="center">
              {feature.icon}
              <Typography variant="h6">{feature.title}</Typography>
            </Stack>
          ))}
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
          }}
        >
          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{ whiteSpace: 'nowrap' }}
          >
            {headline}
          </Typography>
          {features.map((feature) => (
            <Stack direction="row" gap={2} alignItems="center">
              <SvgIcon fontSize="large">{feature.icon}</SvgIcon>
              <Typography variant="h4">{feature.title}</Typography>
            </Stack>
          ))}
        </Box>
        <Stack direction="row">
          <Button
            variant="contained"
            color="secondary"
            href={PRIMARY_ACTION.href}
            sx={{ marginRight: '1rem' }}
          >
            {PRIMARY_ACTION.label}
          </Button>
          {SOCIAL_LINKS.map((link) => (
            <Link href={link.href}>
              <IconButton color="secondary">{link.icon}</IconButton>
            </Link>
          ))}
        </Stack>
      </Stack>
      <Box
        className={styles.BannerImageContainer}
        sx={{
          height: { xs: '45vh', sm: '90vh' },
          minWidth: { xs: '100%', sm: '70%', md: '50%' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            borderRadius: '50%',
            padding: '0.5rem',
            fontSize: '4rem',
            boxShadow: 2,
            backgroundColor: 'white',
            color: 'secondary.dark',
            left: '10%',
            top: '10%',
            zIndex: 4,
          }}
        >
          <FaReact />
        </Box>
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            borderRadius: '50%',
            padding: '0.5rem',
            fontSize: '3rem',
            boxShadow: 2,
            backgroundColor: 'white',
            color: 'secondary.dark',
            right: '10%',
            top: '30%',
            zIndex: 4,
          }}
        >
          <TbBrandGolang />
        </Box>
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            borderRadius: '50%',
            padding: '0.5rem',
            fontSize: '2rem',
            boxShadow: 2,
            backgroundColor: 'white',
            color: 'secondary.dark',
            left: '20%',
            bottom: '10%',
            zIndex: 4,
          }}
        >
          <FaPython />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '80%',
            height: '80%',
            backgroundColor: 'secondary.main',
            transform: 'rotate(30deg)',
            left: '10%',
            bottom: '-5%',
            borderRadius: '40px',
            boxShadow: 10,
          }}
        />
        <Image
          className={styles.BannerImage}
          src={imgSrc}
          alt="banner-image"
          fill
        />
      </Box>
    </Stack>
  );
};

export default Banner2;
