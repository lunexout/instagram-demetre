import { ReactNode } from 'react'

type Props = {
  left: ReactNode
  right: ReactNode
}

export const ContentDiv = ({ left, right }: Props) => {
  return (
    <div className='max-w-screen-lg mx-auto w-full h-screen mt-4 border border-divider'>
      <div className='flex gap-8'>
        <div className='w-full max-w-[630px] border border-primary'>{left}</div>
        <div className='border border-error w-full max-w-[320px]'>{right}</div>
      </div>
    </div>
  )
}
