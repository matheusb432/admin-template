import Layout from '../components/template/Layout';

import type { NextPage } from 'next';
const Profile: NextPage = () => {
  return (
    <Layout title='User Profile' subtitle='Manage user info'>
      <h1>User Profile Content</h1>
    </Layout>
  );
};

export default Profile;
