import type { ReactElement } from 'react';
import Layout1 from '../components/Layout/Layout1';
import {
  FEATURES,
  PRIMARY_ACTION,
  ABOUT_ME,
  COMPANY_NAME,
  TIMELINE_ITEMS,
} from '../constants';
import SolidBackground from '../components/Backgrounds/SolidBackground';
import PictureBackground from '../components/Backgrounds/PictureBackground';
import CallToAction from '../components/CallToAction/CallToAction';
import type { NextPageWithLayout } from './_app';
import HighlightedFeature from '../components/Features/HighlightedFeature';
import Banner2 from '../components/Banners/Banner2';
import { Box, Card, Stack, Typography } from '@mui/material';
import Accordion from '../components/Accordion/Accordion';
import CustomTimeline from '../components/Timeline/Timeline';
import { EXPERIENCE } from '../constants/experience';
import { BACKGROUND_DESIGNS } from '../components/Backgrounds/backgroundDesigns';
import { FormatQuote } from '@mui/icons-material';
import FeatureCard from '../components/Card/FeatureCard';

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <SolidBackground
        height="90vh"
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
        overflow="visible"
        design={BACKGROUND_DESIGNS.ONE_LEFT}
      >
        <>
          <Box
            sx={{
              position: 'absolute',
              height: '20%',
              top: '30%',
              width: '100%',
              right: '60%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'center',
              padding: '3rem',
              backgroundColor: 'secondary.main',
              borderRadius: '50px 50px',
            }}
          >
            <Typography variant="h2" color="primary">
              EXPERIENCE
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                width: '50%',
                textAlign: 'right',
                padding: '3rem',
                top: '100%',
              }}
            >
              <FormatQuote
                sx={{
                  fontSize: '5rem',
                  position: 'absolute',
                  top: '10px',
                  left: '0',
                  transform: 'scaleX(-1)',
                  opacity: 0.2,
                }}
              />
              <Typography variant="h4">
                The most certain way to succeed is always to try just one more
                time.
              </Typography>
              <Typography> - Thomas Edison</Typography>
            </Box>
          </Box>
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
              sx={{
                height: '100%',
                width: { xs: '100%', sm: '80%', md: '50%' },
              }}
            >
              <Accordion width="100%" items={EXPERIENCE} />
            </Box>
          </Stack>
        </>
      </SolidBackground>
      <SolidBackground
        height="100vh"
        backgroundColor="white"
        textColor="text.primary"
        overflow="visible"
        design={BACKGROUND_DESIGNS.ONE_RIGHT}
      >
        <>
          <Box
            sx={{
              position: 'absolute',
              height: '20%',
              top: '30%',
              width: '100%',
              left: '60%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '3rem',
              backgroundColor: 'primary.light',
              borderRadius: '50px',
            }}
          >
            <Typography variant="h2" color="white">
              EDUCATION
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                width: '50%',
                textAlign: 'left',
                padding: '3rem',
                top: '100%',
              }}
            >
              <FormatQuote
                sx={{
                  fontSize: '5rem',
                  position: 'absolute',
                  top: '10px',
                  left: '0',
                  transform: 'scaleX(-1)',
                  opacity: 0.2,
                }}
              />
              <Typography variant="h4">
                Education is what remains after one has forgotten what one has
                learned in school.
              </Typography>
              <Typography> - Albert Einstein</Typography>
            </Box>
          </Box>
          <Stack
            gap={2}
            width="100%"
            height="auto"
            marginTop="3rem"
            marginBottom="3rem"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: { xs: 'flex-start', md: 'space-between' },
              alignItems: { xs: 'center', md: 'flex-start' },
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
              <CustomTimeline items={TIMELINE_ITEMS} />
            </Box>
          </Stack>
        </>
      </SolidBackground>
      <SolidBackground
        height="70vh"
        backgroundColor="white"
        textColor="text.primary"
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography sx={{ marginBottom: '5rem' }} variant="h2">
            Core Competencies
          </Typography>
          <Stack
            gap={4}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {FEATURES.map((feature) => (
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                content={feature.content}
              />
            ))}
          </Stack>
        </Box>
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
