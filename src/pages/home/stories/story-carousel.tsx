import { StoryCarouselCard } from './story-carousel-card'
import { StoryCarouselSmallCard } from './story-carousel-small-card'
import { Story, generateLeftStories, generateRightStories } from './utils'

type Props = {
  stories: Array<Story>
  activeIndex: number
  onNextActive: (idx: number) => void
  onClose: () => void
}

export const StoryCarousel = ({
  activeIndex,
  onNextActive,
  stories,
  onClose
}: Props) => {
  const carouselSize = stories.length
  const currentStory = stories[activeIndex]

  const left = generateLeftStories(activeIndex).map(index => stories[index])
  const right = generateRightStories(activeIndex, carouselSize).map(
    index => stories[index]
  )

  return (
    <div className='absolute z-20 bg-modal-background w-full h-screen top-0 left-0'>
      <div className='absolute right-[24px] top-[24px]' onClick={onClose}>
        <p className='text-paper text-4xl cursor-pointer'>X</p>
      </div>
      <div className='flex gap-6 items-center h-full justify-between'>
        {left.map((story, index) => {
          return (
            <StoryCarouselSmallCard
              key={story.author.username}
              story={story}
              onNextActive={() => {
                console.log()
                if (activeIndex - 2 + index !== -1) {
                  return onNextActive(activeIndex - 2 + index)
                }
                return onNextActive(0)
              }}
            />
          )
        })}
        <StoryCarouselCard
          key={currentStory.author.username}
          story={currentStory}
          onNextPrev={() => {
            onNextActive(activeIndex - 1)
          }}
          onNextUser={() => {
            onNextActive(activeIndex + 1)
          }}
        />
        {right.map((story, index) => {
          return (
            <StoryCarouselSmallCard
              key={story.author.username}
              story={story}
              onNextActive={() => onNextActive(activeIndex + index + 1)}
            />
          )
        })}
      </div>
    </div>
  )
}
