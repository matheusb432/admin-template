import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

interface SidebarItemProps {
  text: string;
  icon: JSX.Element;
  className?: string;
  url?: string;
  onClick?: (e: any) => void;
}

// ? using object destructuring in props
export default function SidebarItem({
  text,
  icon,
  className,
  url,
  onClick,
}: SidebarItemProps) {
  const { pathname } = useRouter();
  const selectedStyle = 'bg-gray-100 dark:bg-gray-800';

  function renderItem() {
    return (
      <a
        className={`
            flex flex-col justify-center items-center
            w-20 h-20 text-gray-600 dark:text-gray-200 ${className}
        `}>
        {icon}
        <span
          className={`
         text-xs font-light
      `}>
          {text}
        </span>
      </a>
    );
  }

  const isCurrentUrl = () => pathname === url;

  return (
    <li
      className={`
      ${isCurrentUrl() ? selectedStyle : ''}
    hover:bg-gray-100 cursor-pointer
    dark:hover:bg-gray-800 transition-all
    `}
      onClick={onClick}>
      {url ? (
        <Link href={url} passHref>
          {renderItem()}
        </Link>
      ) : (
        renderItem()
      )}
    </li>
  );
}
