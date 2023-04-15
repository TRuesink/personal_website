import type { ReactElement } from 'react';
import Layout1 from '../components/Layout/Layout1';
import type { NextPageWithLayout } from './_app';
import SolidBackground from '../components/Backgrounds/SolidBackground';
import dynamic from 'next/dynamic';
const PDFViewer = dynamic(() => import('../components/PdfViewer/PdfViewer'), {
  ssr: false,
});

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <SolidBackground
        height="90vh"
        textColor="text.primary"
        backgroundColor="white"
      >
        <PDFViewer />
      </SolidBackground>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout1>{page}</Layout1>;
};

export default Page;
