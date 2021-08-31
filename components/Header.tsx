import HeaderItem from './HeaderItem';
import { BadgeCheckIcon, CodeIcon, CollectionIcon, HomeIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row px-5 pt-4 justify-between items-center h-auto bg-primary-pink sticky top-0 z-10'>
      {/* <Image className={"object-contain"} src={"https://links.papareact.com/ua6"} width={200} height={100} /> */}
      <Link href='/'>
        <div className={'cursor-pointer'}>
          <p className={"pb-6 font-medium text-5xl text-secondary-pink select-none"}>
            speakeezy.
          </p>
        </div>
      </Link>
      <div className={'flex justify-evenly max-w-2xl text-secondary-pink'}>
        <HeaderItem title={"HOME"} Icon={HomeIcon} href={'/'} />
        <HeaderItem title={"DEVELOPER"} Icon={CodeIcon} href={'https://mouch.io'} />
        <HeaderItem title={"COLLECTIONS"} Icon={CollectionIcon} href={'/coming-soon'} />
        <HeaderItem title={"SEARCH"} Icon={SearchIcon} href={'/coming-soon'} />
        <HeaderItem title={"ACCOUNT"} Icon={UserIcon} href={'/coming-soon'} />
      </div>
    </header>
  );
}
