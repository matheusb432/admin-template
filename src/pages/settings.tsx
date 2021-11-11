import Layout from '../components/template/Layout';

import type { NextPage } from 'next';
import useAppData from '../data/hook/useAppData';
const Settings: NextPage = () => {
  const ctx = useAppData();

  return (
    <Layout title='Settings' subtitle='sett - Building an admin template!'>
      <h3>theme is {ctx.theme || 'light'}</h3>
      <button
        className={`
        border-none bg-yellow-600 transition-all text-white
        rounded  w-28 h-8 hover:bg-yellow-700 font-bold
        `}
        onClick={ctx.toggleTheme}>
        Toggle Theme
      </button>
    </Layout>
  );
};

export default Settings;
