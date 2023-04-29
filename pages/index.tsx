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
        backgroundColor="grey.100"
        textColor="text.primary"
        overflow="visible"
        design={BACKGROUND_DESIGNS.ONE_RIGHT}
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
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              height: '100%',
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                position: 'relative',
                height: 100,
                width: '100%',
                marginLeft: '-130%',
                backgroundColor: 'secondary.dark',
                borderRadius: '10px',
              }}
            />
            <Typography
              variant="h3"
              color="primary"
              sx={{
                position: 'relative',
                padding: '10px 20px',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  backgroundColor: 'secondary.light',
                  borderRadius: '10px',
                  top: 0,
                  left: '-200%',
                  bottom: 0,
                  right: 0,
                  zIndex: '-1',
                },
              }}
            >
              EXPERIENCE
            </Typography>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                position: 'relative',
                height: 50,
                width: '100%',
                marginLeft: '-150%',
                backgroundColor: 'primary.light',
                borderRadius: '10px',
              }}
            />
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                position: 'relative',
                height: 80,
                width: '100%',
                marginLeft: '-180%',
                backgroundColor: 'transparent',
                borderColor: 'secondary.dark',
                borderWidth: '3px',
                borderStyle: 'solid',
                borderRadius: '10px',
              }}
            />
          </Box>
          <Box
            sx={{
              flexShrink: 0,
              height: '90%',
              width: { xs: '100%', sm: '80%', md: '50%' },
            }}
          >
            <Accordion width="100%" items={EXPERIENCE} />
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
            flexDirection: { xs: 'column-reverse', md: 'row' },
            justifyContent: { xs: 'flex-start', md: 'space-between' },
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Box
            sx={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              height: '90%',
              width: { xs: '100%', sm: '80%', md: '50%' },
            }}
          >
            <CustomTimeline items={TIMELINE_ITEMS} />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              height: '100%',
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                position: 'relative',
                height: 100,
                width: '100%',
                marginRight: '-130%',
                backgroundColor: 'secondary.dark',
                borderRadius: '10px',
              }}
            />
            <Typography
              variant="h3"
              color="white"
              sx={{
                position: 'relative',
                padding: '10px 20px',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  backgroundColor: 'primary.light',
                  borderRadius: '10px',
                  top: 0,
                  right: '-200%',
                  bottom: 0,
                  left: 0,
                  zIndex: '-1',
                },
              }}
            >
              EDUCATION
            </Typography>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                position: 'relative',
                height: 50,
                width: '100%',
                marginRight: '-150%',
                backgroundColor: 'secondary.light',
                borderRadius: '10px',
              }}
            />
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                position: 'relative',
                height: 80,
                width: '100%',
                marginRight: '-180%',
                backgroundColor: 'transparent',
                borderColor: 'primary.main',
                borderWidth: '3px',
                borderStyle: 'solid',
                borderRadius: '10px',
              }}
            />
          </Box>
        </Stack>
      </SolidBackground>
      <SolidBackground
        height="70vh"
        backgroundColor="white"
        textColor="text.primary"
        design={BACKGROUND_DESIGNS.ONE_LEFT}
        overflow="visible"
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '3rem',
            paddingBottom: '3rem',
          }}
        >
          <Typography
            sx={{ marginBottom: '5rem', textAlign: 'center' }}
            variant="h3"
          >
            CORE COMPETENCIES
          </Typography>
          <Stack
            gap={4}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
            }}
            padding={4}
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
        design={BACKGROUND_DESIGNS.ONE_RIGHT}
      >
        <HighlightedFeature
          imgSrc="/tim2.jpg"
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
