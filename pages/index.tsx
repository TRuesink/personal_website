import type { ReactElement } from 'react';
import Banner1 from '../components/Banners/Banner1';
import Layout1 from '../components/Layout/Layout1';
import Features1 from '../components/Features/Features1';
import { BRAND, FEATURES } from '../constants';
import type { NextPageWithLayout } from './_app';

const taglineWords = BRAND.tagline.split(' ');

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <Banner1
        height="70vh"
        backgroundColor="primary.main"
        textColor="white"
        tagline1={taglineWords.slice(0, 2).join(' ')}
        tagline2={taglineWords.slice(2).join(' ')}
        imgSrc="/55185_1.png"
        subTagline={BRAND.subTagline}
      />
      <Features1
        height="70vh"
        backgroundColor="white"
        textColor="test.primary"
        features={FEATURES}
        title="Features"
        iconSize={3}
        iconColor="primary.text"
        textAlign="center"
        clickable
      />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout1>{page}</Layout1>;
};

export default Page;
