import type { ReactElement } from 'react';
import Layout1 from '../components/Layout/Layout1';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout1>{page}</Layout1>;
};

export default Page;
