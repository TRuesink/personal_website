import type { ReactElement } from 'react';
import Layout1 from '../components/Layout/Layout1';
import { PRIMARY_ACTION } from '../constants';
import PictureBackground from '../components/Backgrounds/PictureBackground';
import CallToAction from '../components/CallToAction/CallToAction';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <PictureBackground
        imgSrc="/tim1.jpg"
        height="90vh"
        textColor="white"
        overlayColor="primary.dark"
        overlayOpacity={0.8}
      >
        <div>test</div>
      </PictureBackground>

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
