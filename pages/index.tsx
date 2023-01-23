import type { ReactElement } from 'react';
import { Circle } from '@mui/icons-material';
import Banner1 from '../components/Banners/Banner1';
import Layout1 from '../components/Layout/Layout1';
import Features1 from '../components/Features/Features1';
import { BRAND, FEATURES, PRIMARY_ACTION, TESTIMONIALS } from '../constants';
import SolidBackground from '../components/Backgrounds/SolidBackground';
import PictureBackground from '../components/Backgrounds/PictureBackground';
import CallToAction from '../components/CallToAction/CallToAction';
import type { NextPageWithLayout } from './_app';
import Testimonials from '../components/Testimonials/Testimonials';

const taglineWords = BRAND.tagline.split(' ');

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <SolidBackground
        height="70vh"
        backgroundColor="primary.main"
        textColor="white"
      >
        <Banner1
          tagline1={taglineWords.slice(0, 2).join(' ')}
          tagline2={taglineWords.slice(2).join(' ')}
          imgSrc="/55185_1.png"
          subTagline={BRAND.subTagline}
        />
      </SolidBackground>
      <SolidBackground
        height="70vh"
        backgroundColor="white"
        textColor="test.primary"
        shapes={[
          {
            icon: <Circle />,
            key: 'circle-1',
            color: 'secondary.main',
            opacity: 0.2,
            size: '20rem',
            position: {
              top: undefined,
              left: '-10rem',
              right: undefined,
              bottom: '-5rem',
            },
          },
          {
            icon: <Circle />,
            key: 'circle-1',
            color: 'primary.main',
            opacity: 0.3,
            size: '25rem',
            position: {
              top: '-10vh',
              left: undefined,
              right: ' -15rem',
              bottom: undefined,
            },
          },
        ]}
      >
        <Features1
          features={FEATURES}
          title="Features"
          iconSize={3}
          iconColor="primary.text"
          textAlign="center"
          clickable
        />
      </SolidBackground>
      <SolidBackground
        height="70vh"
        backgroundColor="white"
        textColor="text.primary"
      >
        <Testimonials title="Testimonials" testimonials={TESTIMONIALS} />
      </SolidBackground>
      <PictureBackground
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
