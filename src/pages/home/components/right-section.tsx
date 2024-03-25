import { Link } from 'react-router-dom'
import { SuggestionList } from '../suggestions/suggestion-list'
import { Suggestion, suggestions } from '../suggestions/utils'

type Props = Suggestion

export const RightSection = ({ profilePicture, username }: Props) => {
  return (
    <div className='flex flex-col gap-4 py-4'>
      <div className='flex flex-col gap-8'>
        <div className='flex gap-2 items-center justify-between'>
          <div className='flex gap-2 items-center'>
            <img
              src={profilePicture}
              alt='Profile picture'
              className='w-[44px] h-[44px] rounded-full object-cover'
            />
            <p className='text-sm text-black font-bold'>{username}</p>
          </div>
          <Link to='/sign-in' className='text-primary text-sm font-semibold'>
            Switch
          </Link>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-gray text-sm  font-bold'>Suggested for you</p>
        <p className='text-black text-xs  font-bold'>See All</p>
      </div>
      <SuggestionList suggestions={suggestions} />
      <div className='mt-[40px] flex flex-col gap-4'>
        <div className='text-secondary text-xs'>
          <Link to=''>About</Link> . <Link to=''>Help</Link>{' '}
          <Link to=''>Press</Link> . <Link to=''>API</Link> .{' '}
          <Link to=''>Jobs</Link> . <Link to=''>Privacy</Link> .{' '}
          <Link to=''>Terms</Link> . <Link to=''>Location</Link> .{' '}
          <Link to=''>Language</Link> . <Link to=''>Meta verified</Link>
        </div>
        <p className='text-secondary text-xs'>© 2024 INSTAGRAM FROM META</p>
      </div>
    </div>
  )
}
