import { IconHome } from '@/assets/icons/home'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  {
    label: 'Settings',
    path: '/settings',
    icon: <IconHome width='w-6' height='h-6' />
  },
  {
    label: 'Your activity',
    path: '/activity',
    icon: <IconHome width='w-6' height='h-6' />
  },
  {
    label: 'Saved',
    path: '/saved',
    icon: <IconHome width='w-6' height='h-6' />
  },
  {
    label: 'Switch appearance',
    path: '/switch-mode',
    icon: <IconHome width='w-6' height='h-6' />
  },
  {
    label: 'Report a problem',
    path: '/report',
    icon: <IconHome width='w-6' height='h-6' />
  }
]

const separatedLinks = [
  {
    label: 'Settings',
    path: '/settings',
    icon: <IconHome width='w-6' height='h-6' />
  },
  {
    label: 'Log out',
    path: '/sign-in',
    icon: <IconHome width='w-6' height='h-6' />
  }
]

export const MorePopover = () => {
  const [isOpen, setIsOpen] = useState(false)

  const mainDivRef = useRef<HTMLDivElement>(null)

  const handleOutsideClick = (e: Event) => {
    if (!e.target) return

    const target = e.target as Element
    if (mainDivRef.current && !mainDivRef.current?.contains(target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  })

  return (
    <div ref={mainDivRef}>
      <li
        onClick={() => setIsOpen(prev => !prev)}
        className='p-2 rounded-xl hover:bg-secondary-hover hover:cursor-pointer'
      >
        <button
          data-ripple-light='true'
          data-popover-target='popover-animation'
          className='flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
        >
          <IconHome />
          <span className='ms-3 text-md font-bold'>More</span>
        </button>
      </li>
      <div
        data-popover='popover-animation'
        data-popover-mount='opacity-100 scale-100'
        data-popover-unmount='opacity-0 scale-0 pointer-events-none'
        data-popover-transition='transition-all duration-200 origin-bottom'
        className={`${
          isOpen ? '' : 'hidden'
        } absolute font-sans text-sm font-normal break-words whitespace-normal rounded-xl shadow-lg w-max shadow-blue-gray-500/10 focus:outline-none bottom-[90px] z-10 bg-paper left-[16px] w-[266px]`}
      >
        <div className='p-2'>
          {links.map(link => {
            return (
              <div
                key={link.path}
                className='p-3 px-4 rounded-xl hover:bg-secondary-hover hover:cursor-pointer flex gap-1 items-center'
              >
                {link.icon}
                <span className='ms-3 text-md'>{link.label}</span>
              </div>
            )
          })}
        </div>
        <div className='h-2 bg-secondary-hover w-full' />
        <div className='p-2'>
          {separatedLinks.map(link => {
            return (
              <Link
                key={link.path}
                to={link.path}
                className='p-3 px-4 rounded-xl hover:bg-secondary-hover hover:cursor-pointer flex gap-1 items-center'
              >
                {link.icon}
                <span className='ms-3 text-md'>{link.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
