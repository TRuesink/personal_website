import type { ReactElement } from 'react';
import Layout1 from '../components/Layout/Layout1';
import { FEATURES, PRIMARY_ACTION, ABOUT_ME, COMPANY_NAME } from '../constants';
import SolidBackground from '../components/Backgrounds/SolidBackground';
import PictureBackground from '../components/Backgrounds/PictureBackground';
import CallToAction from '../components/CallToAction/CallToAction';
import type { NextPageWithLayout } from './_app';
import HighlightedFeature from '../components/Features/HighlightedFeature';
import Banner2 from '../components/Banners/Banner2';
import { Box, Stack, Typography } from '@mui/material';
import Accordion from '../components/Accordion/Accordion';
import CustomTimeline from '../components/Timeline/Timeline';

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <SolidBackground
        height="80vh"
        backgroundColor="primary.light"
        textColor="white"
      >
        <Banner2
          headline={COMPANY_NAME.FULL_NAME}
          features={FEATURES}
          imgSrc="/tim7.png"
        />
      </SolidBackground>
      <SolidBackground
        height="100vh"
        backgroundColor="white"
        textColor="text.primary"
      >
        <Stack
          gap={2}
          width="100%"
          height="auto"
          marginTop="3rem"
          marginBottom="3rem"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'flex-start', md: 'flex-end' },
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Box
            sx={{ height: '100%', width: { xs: '100%', sm: '80%', md: '50%' } }}
          >
            <Typography variant="h3">Experience</Typography>
            <Accordion
              width="100%"
              items={[
                { summary: 'DataChat', content: <div>DataChat</div> },
                { summary: 'Calimetrix', content: <div>DataChat</div> },
                { summary: 'PI', content: <div>DataChat</div> },
              ]}
            />
          </Box>
        </Stack>
      </SolidBackground>
      <SolidBackground
        height="100vh"
        backgroundColor="grey.100"
        textColor="text.primary"
      >
        <Stack
          gap={2}
          width="100%"
          height="auto"
          marginTop="3rem"
          marginBottom="3rem"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              width: { xs: '100%', sm: '80%', md: '50%' },
            }}
          >
            <Typography variant="h3">Education</Typography>
            <CustomTimeline
              items={[
                {
                  title: 'WMU',
                  content: <div>DataChat</div>,
                  imgSrc: './wmu.svg',
                },
                {
                  title: 'UW-Madison',
                  content: <div>DataChat</div>,
                  imgSrc: './uw.svg',
                },
              ]}
            />
          </Box>
        </Stack>
      </SolidBackground>
      <SolidBackground
        height="70vh"
        backgroundColor="grey.100"
        textColor="text.primary"
      >
        <div>placholder</div>
      </SolidBackground>
      <SolidBackground
        height="70vh"
        backgroundColor="white"
        textColor="text.primary"
      >
        <HighlightedFeature
          imgSrc="/tim4.png"
          heading={ABOUT_ME.heading}
          content={ABOUT_ME.content}
        />
      </SolidBackground>
      <SolidBackground
        height="70vh"
        backgroundColor="primary.main"
        textColor="white"
      >
        <HighlightedFeature imgSrc="/tim1.jpg" heading="test" content="test" />
      </SolidBackground>

      <PictureBackground
        imgSrc="/code2.jpg"
        height="50vh"
        textColor="white"
        overlayColor="primary.main"
        overlayOpacity={0.8}
      >
        <CallToAction
          title={PRIMARY_ACTION.label}
          content={PRIMARY_ACTION.content}
          buttonText={PRIMARY_ACTION.label}
          buttonHref={PRIMARY_ACTION.href}
        />
      </PictureBackground>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout1>{page}</Layout1>;
};

export default Page;
