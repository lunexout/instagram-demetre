import { ReactNode } from 'react'

type Props = {
  left: ReactNode
  right: ReactNode
}

export const ContentDiv = ({ left, right }: Props) => {
  return (
    <div className='max-w-screen-lg mx-auto w-full h-screen mt-4'>
      <div className='flex gap-16'>
        <div className='w-full max-w-[630px]'>{left}</div>
        <div className='w-full max-w-[320px]'>{right}</div>
      </div>
    </div>
  )
}
