/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import useAuth from '../../data/hook/useAuth';

interface UserAvatarProps {
  className?: string;
}

export default function UserAvatar({ className }: UserAvatarProps) {
  const { user } = useAuth();

  return (
    <Link href='/profile' passHref>
      <img
        src={user?.urlImage ?? '/images/avatar.svg'}
        alt='User Avatar'
        className={`h-10 w-10 rounded-full cursor-pointer ${className}`}
      />
    </Link>
  );
}
