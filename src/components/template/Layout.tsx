import useAppData from '../../data/hook/useAppData';
import EnforceAuth from '../auth/EnforceAuth';
import Content from './Content';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Layout({ title, subtitle, children }: LayoutProps) {
  const { theme } = useAppData();

  return (
    <EnforceAuth>
      <div
        className={`
        ${theme} flex h-screen w-screen
    `}>
        <Sidebar />
        <div
          className={`
        flex flex-col w-full p-7
        bg-gray-300 dark:bg-gray-800
      `}>
          <Topbar title={title} subtitle={subtitle} />
          <Content>{children}</Content>
        </div>
      </div>
    </EnforceAuth>
  );
}
