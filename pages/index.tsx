import type { ReactElement } from 'react';
import Banner1 from '../components/Banners/Banner1';
import Layout1 from '../components/Layout/Layout1';
import Offering1 from '../components/Offerings/Offering1';
import { BRAND, OFFERINGS } from '../constants';
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
      <Offering1
        height="70vh"
        backgroundColor="white"
        textColor="test.primary"
        features={OFFERINGS}
        title="Features"
      />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout1>{page}</Layout1>;
};

export default Page;
