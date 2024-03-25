import { Suggestion } from './utils'

type Props = Suggestion

export const SuggestionItem = ({ profilePicture, username }: Props) => {
  return (
    <div className='flex gap-2 items-center justify-between'>
      <div className='flex gap-2 items-center'>
        <img
          src={profilePicture}
          alt='Profile picture'
          className='w-[44px] h-[44px] rounded-full object-cover'
        />
        <div className='flex flex-col'>
          <p className='text-sm text-black font-bold'>{username}</p>
          <p className='text-xs text-secondary-dark'>Suggested for you</p>
        </div>
      </div>
      <button className='text-primary text-xs font-semibold'>Follow</button>
    </div>
  )
}
