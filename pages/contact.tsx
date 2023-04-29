import type { ReactElement } from 'react';
import Layout1 from '../components/Layout/Layout1';
import type { NextPageWithLayout } from './_app';
import { Box, Paper, Stack, Typography } from '@mui/material';
import ContactForm from '../components/Forms/ContactForm';
import PictureBackground from '../components/Backgrounds/PictureBackground';

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <PictureBackground
        imgSrc="/contact_bg.svg"
        height="90vh"
        textColor="text.primary"
        overlayColor="secondary.light"
        overlayOpacity={0.2}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          width="100%"
        >
          <Box
            sx={{
              width: '45%',
              height: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h2" color="primary.light">
              Get in touch
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              eleifend, sem vel pellentesque dapibus, dui mauris euismod elit,
              eu tempor dolor elit sed diam. Phasellus ac massa orci. Nam felis
              felis, dapibus et aliquet ac, malesuada sed ante.
            </Typography>
          </Box>
          <Box
            sx={{
              width: '45%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Paper sx={{ width: '100%', padding: '2rem' }}>
              <ContactForm />
            </Paper>
          </Box>
        </Stack>
      </PictureBackground>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout1>{page}</Layout1>;
};

export default Page;
