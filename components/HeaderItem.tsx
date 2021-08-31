import Link from 'next/link'

type IconProps = {
  className: string
}

type HeaderItemProps = {
  title: string;
  Icon: React.ComponentType<IconProps>
  href: string;
}

const HeaderItem = (props: HeaderItemProps) => {
  const { Icon, title } = props
  return (
    <Link href={props.href}>
      <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20'>
        <Icon className={'h-8 mb-1'} />
        <p className={'opacity-0 group-hover:opacity-100 tracking-widest'}>{title}</p>
      </div>
    </Link>
  )
}

export default HeaderItem;
