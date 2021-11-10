import Layout from '../components/template/Layout';

import type { NextPage } from 'next';
const Home: NextPage = () => {
  return (
    <Layout title='Landing Page' subtitle='Building an admin template!'>
      <h3>content wow</h3>
    </Layout>
    // ? tailwind is neat
    // <div
    //   className={`
    //   flex justify-center items-center h-screen
    //   bg-gradient-to-r from-green-500  to-blue-500`}>
    //   Admin
    // </div>
  );
};

export default Home;
