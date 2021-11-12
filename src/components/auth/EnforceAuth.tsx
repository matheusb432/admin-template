import Image from 'next/image';
import router from 'next/router';

import loadingGif from '../../../public/images/infinity-loading.gif';
import useAuth from '../../data/hook/useAuth';

export default function EnforceAuth(props: any) {
  const { user, loading } = useAuth();

  function renderContent() {
    return <>{props.children}</>;
  }

  function renderLoading() {
    return (
      <div
        className={`
                flex justify-center items-center h-screen

            `}>
        <Image src={loadingGif} alt='Loading' />
      </div>
    );
  }

  if (!loading && user?.email) {
    return renderContent();
  } else if (loading) {
    return renderLoading();
  } else {
    router.push('/auth');

    return null;
  }
}
