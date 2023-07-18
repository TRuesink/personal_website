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
        overlayColor="grey.100"
        overlayOpacity={0.2}
      >
        <Stack
          direction="row"
          alignItems="center"
          width="100%"
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            justifyContent: { xs: 'center', sm: 'space-around' },
            gap: '2rem',
            padding: '3rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              flexDirection: 'column',
              flex: { xs: 'unset', sm: 1 },
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              flex: { xs: 'unset', sm: 1 },
              minWidth: { xs: '80vw', sm: 'unset' },
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
