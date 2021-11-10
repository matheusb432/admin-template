import Link from 'next/link';

interface SidebarItemProps {
  text: string;
  icon: JSX.Element;
  className?: string;
  url?: string;
  onClick?: (e: any) => void;
}

export default function SidebarItem(props: SidebarItemProps) {
  function renderItem() {
    return (
      <a
        className={`
            flex flex-col justify-center items-center
            w-20 h-20 text-gray-600 ${props.className}
        `}>
        {props.icon}
        <span
          className={`
         text-xs font-light
      `}>
          {props.text}
        </span>
      </a>
    );
  }

  return (
    <li className={`hover:bg-gray-100 cursor-pointer`} onClick={props.onClick}>
      {props.url ? (
        <Link href={props.url} passHref>
          {renderItem()}
        </Link>
      ) : (
        renderItem()
      )}
    </li>
  );
}
