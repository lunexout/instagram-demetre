import { IconHome } from '@/assets/icons/home'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { MorePopover } from './more-popover'

type Props = {
  children: ReactNode
}

export const Sidebar = ({ children }: Props) => {
  return (
    <>
      <aside
        id='default-sidebar'
        className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div className='h-full overflow-y-auto bg-paper border-r border-r-divider flex flex-col justify-between pb-8'>
          <div>
            <p className='text-black text-2xl font-bold p-6 pb-8 '>Instagram</p>
            <ul className='space-y-2 font-medium px-4'>
              {new Array(3).fill(null).map((_, index) => (
                <li
                  key={`navigation-${index}`}
                  className='p-2 rounded-xl hover:bg-secondary-hover'
                >
                  <Link
                    to='/home'
                    className='flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                  >
                    <IconHome />
                    <span className='ms-3 text-md font-bold'>Home</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className='space-y-2 font-medium px-4'>
              <li className='p-2 rounded-xl hover:bg-secondary-hover'>
                <Link
                  to='/home'
                  className='flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                >
                  <IconHome />
                  <span className='ms-3 text-md font-bold'>Threads</span>
                </Link>
              </li>
              <MorePopover />
            </ul>
          </div>
        </div>
      </aside>
      <div className='p-4 sm:ml-64'>{children}</div>
    </>
  )
}
