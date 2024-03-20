import { useState } from 'react'
import { Story } from './utils'

type Props = {
  story: Story
  onNextUser: () => void
  onNextPrev: () => void
}

export const StoryCarouselCard = ({ story, onNextUser, onNextPrev }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='w-[500px] h-full relative p-4 '>
      <div className='absolute z-40 top-[60px] w-full'>
        <div className='flex w-full gap-2 pr-8'>
          {story.stories.map((_, index) => {
            return (
              <div
                key={`stories-${index}`}
                className={`w-full h-1 ${
                  index === activeIndex ? 'bg-paper' : 'bg-[rgb(130,136,152)]'
                } rounded-full`}
              />
            )
          })}
        </div>
      </div>
      <div className='absolute z-40 top-[80px]'>
        <div className='flex flex gap-2 items-center'>
          <div className='rounded-full p-[0.5px]'>
            <img
              src={story.author.profilePicture}
              alt='Profile image'
              className='rounded-full w-[32px] h-[32px] object-cover cursor-pointer'
            />
          </div>
          <p className='text-xs'>{story.author.username}</p>
        </div>
      </div>
      <div
        id='animation-carousel'
        className='z-30 absolute w-[500px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
        data-carousel='static'
      >
        <div className=''>
          <div className='duration-200 ease-linear' data-carousel-item>
            {/* hidden */}
            {story.stories.map(storyItem => {
              return (
                <img
                  src={storyItem}
                  className='py-12 absolute block w-full h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                  alt={storyItem}
                />
              )
            })}
          </div>
        </div>
        <button
          type='button'
          className='absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-prev
          onClick={() =>
            setActiveIndex(prev => {
              if (prev !== 0) {
                return prev - 1
              }
              onNextPrev()
              return prev
            })
          }
        >
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              className='w-4 h-4 text-paper dark:text-gray-800 rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M5 1 1 5l4 4'
              />
            </svg>
            <span className='sr-only'>Previous</span>
          </span>
        </button>
        <button
          type='button'
          className='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-next
          onClick={() => {
            setActiveIndex(prev => {
              if (prev !== story.stories.length - 1) {
                return prev + 1
              }
              onNextUser()
              return prev
            })
          }}
        >
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              className='w-4 h-4 text-paper dark:text-gray-800 rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='m1 9 4-4-4-4'
              />
            </svg>
            <span className='sr-only'>Next</span>
          </span>
        </button>
      </div>
    </div>
  )
}
