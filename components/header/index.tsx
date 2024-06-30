import { useTranslations } from 'next-intl'
import ChangeLang from './changeLang'

import logo from '@/assets/logo.svg'
import Image from 'next/image'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { User } from 'lucide-react'
import { Link } from '@/navigation'

const Header = () => {
  const t = useTranslations()
  const pathname = usePathname()
  const pathnames = ['/login', '/registration']

  const token = ''

  return (
    <header className={cn('flex items-center justify-between py-2 px-4 md:px-6 relative z-20', pathname !== '/' && 'bg-header')}>
      <Link href='/'>
        <Image src={logo} alt="logo" width={180} height={180} className='w-[120px] sm:w-[150px] lg:w-[180px]' />
      </Link>
      <div className='flex gap-6 items-center'>
        <ChangeLang />
        {!pathnames.includes(pathname) && !token &&
          <Link href='/login'>
            <Button size='icon' variant='ghost' className='text-primary'>
              <User width={25} />
            </Button>
          </Link>
        }
      </div>
    </header>
  )
}

export default Header
