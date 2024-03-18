import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: ReactNode
}

const footerLinks = [
  {
    label: 'Meta',
    path: '/meta'
  },
  {
    label: 'About',
    path: '/about'
  },
  {
    label: 'Blog',
    path: '/blog'
  },
  {
    label: 'Jobs',
    path: '/jobs'
  }
]

export const UnauthorizedLayout = ({ children }: Props) => {
  return (
    <div className='mx-auto max-w-[968px] mt-[100px] flex flex-col gap-8'>
      <div className='flex gap-8 justify-center max-w-[762px]'>
        <div className='w-[380px] h-[581px] border border-divider' />
        <div>{children}</div>
      </div>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <div className='flex gap-2'>
          {footerLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              target='_blank'
              className='text-xs text-secondary-dark'
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className='flex gap-2'>
          <p className='text-xs text-secondary-dark'>English</p>
          <p className='text-xs text-secondary-dark'>
            © 2024 Instagram from Meta
          </p>
        </div>
      </div>
    </div>
  )
}
