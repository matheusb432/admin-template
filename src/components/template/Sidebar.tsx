import { IconHome, IconCog, IconBell, IconNews, IconLogout } from '../icons';
import Logo from './Logo';
import SidebarItem from './SidebarItem';

interface SidebarProps {}

export default function Sidebar(props: SidebarProps) {
  return (
    // <aside className='flex items-stretch p-4 bg-gradient-to-r from-yellow-700  to-purple-500'>
    <aside className='flex flex-col'>
      <div
        className={`
        flex flex-col items-center
        justify-center bg-gradient-to-r from-indigo-500 
        to-purple-800 h-20 w-20`}>
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <SidebarItem url='/' text='Home' icon={IconHome} />
        <SidebarItem url='/settings' text='Settings' icon={IconCog} />
        <SidebarItem url='/news' text='News' icon={IconNews} />
        <SidebarItem url='/notifications' text='Notifications' icon={IconBell} />
      </ul>

      <ul>
        <SidebarItem
          text='Logout'
          icon={IconLogout}
          className='text-red-600 hover:bg-red-400 hover:text-white'
          onClick={() => console.log('logout')}
        />
      </ul>
    </aside>
  );
}
