import type { ReactElement } from 'react';
import Layout1 from '../components/Layout/Layout1';
import { PRIMARY_ACTION } from '../constants';
import PictureBackground from '../components/Backgrounds/PictureBackground';
import type { NextPageWithLayout } from './_app';
import { Box, Button, Typography } from '@mui/material';

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <PictureBackground
        imgSrc="/tim1.jpg"
        height="90vh"
        textColor="white"
        overlayColor="primary.dark"
        overlayOpacity={0.8}
        backgroundImageClass="BackgroundImageRightTop"
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: { xs: '100%', md: '50%' },
          }}
        >
          <Typography variant="h1">About</Typography>
          <Typography variant="h6">
            Hi there! I&apos;m a passionate <strong>software engineer</strong>{' '}
            who thrives on the thrill of solving complex problems and creating
            elegant solutions. When I&apos;m not immersed in coding, you&apos;ll
            likely find me out in nature, exploring breathtaking trails on my
            bike, embarking on exciting backpacking adventures, or carving
            through pristine snow on skis.
          </Typography>
          <br />
          <Button
            href={PRIMARY_ACTION.href}
            variant="contained"
            color="secondary"
          >
            {PRIMARY_ACTION.label}
          </Button>
        </Box>
      </PictureBackground>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout1>{page}</Layout1>;
};

export default Page;
