import { IconHome, IconCog, IconBell, IconNews, IconLogout, IconLogin } from '../icons';
import Logo from './Logo';
import SidebarItem from './SidebarItem';

interface SidebarProps {}

export default function Sidebar(props: SidebarProps) {
  return (
    <aside
      className='
    flex flex-col
    bg-gray-200 text-gray-700
    dark:bg-gray-900 
    '>
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
        <SidebarItem url='/auth' text='Login' icon={IconLogin} />
        <SidebarItem
          text='Logout'
          icon={IconLogout}
          className={`
          text-red-600 dark:text-red-400 
          hover:bg-red-400 dark:hover:text-white
          hover:text-white`}
          onClick={() => console.log('logout')}
        />
      </ul>
    </aside>
  );
}
