import HeaderItem from './HeaderItem';
import { CodeIcon, CollectionIcon, HomeIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import { Session } from '@supabase/supabase-js';
import { useRouter } from 'next/router';

type HeaderProps = {
  session: Session | null
}

// NEED TO MAKE NAVBAR NOT RE-RENDER THE SAME PAGE
export const Header = (props: HeaderProps) => {
  const router = useRouter()
  return (
    <header className='flex flex-col sm:flex-row px-5 pt-4 justify-between items-center h-auto bg-primary-pink sticky top-0 z-10'>
      <Link href='/'>
        <div className={'cursor-pointer'}>
          <p className={"pb-6 font-medium text-5xl text-secondary-pink select-none"}>
            speakeezy.
          </p>
        </div>
      </Link>
      <div className={'flex justify-evenly max-w-2xl text-secondary-pink'}>
        <HeaderItem title={"HOME"} Icon={HomeIcon} href={'/'} />
        <HeaderItem title={"COLLECTIONS"} Icon={CollectionIcon} href={'/coming-soon'} />
        <HeaderItem title={"ACCOUNT"} Icon={UserIcon} href={!props.session ? '/auth' : '/profile'} />
      </div>
    </header>
  );
}
