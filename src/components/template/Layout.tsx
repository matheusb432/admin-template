import Content from './Content';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`
        flex h-screen w-screen
    `}>
      <Sidebar />
      <div
        className={`
        flex flex-col w-full p-7
        bg-gray-300
      `}>
        <Topbar title={props.title} subtitle={props.subtitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
}
