import { Story } from './utils'

type Props = {
  story: Story
  onNextActive: () => void
}

export const StoryCarouselSmallCard = ({ story, onNextActive }: Props) => {
  return (
    <div
      className='w-[250px] h-[400px] relative p-4 rounded-xl overflow-hidden cursor-pointer'
      onClick={onNextActive}
    >
      <div className='absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex flex-col gap-2 items-center'>
          <div className='rounded-full p-[0.5px]'>
            <img
              src={story.author.profilePicture}
              alt='Profile image'
              className='rounded-full w-[56px] h-[56px] object-cover cursor-pointer'
            />
          </div>
          <p className='text-xs'>{story.author.username}</p>
        </div>
      </div>
      <img
        src={story.stories[0]}
        className='absolute block w-[250px] h-[400px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-fill blur-sm'
      />
      {/* </div> */}
    </div>
  )
}
