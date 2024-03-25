import { Dispatch, SetStateAction, useEffect } from 'react'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'
import { LeftArrow, RightArrow } from './carousel-arrows'
import { StoryCard } from './story-card'
import { StoryCarousel } from './story-carousel'
import { stories } from './utils'

type Props = {
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
  isStoryOpen: boolean
  setIsStoryOpen: Dispatch<SetStateAction<boolean>>
}

export const StoryList = ({
  activeIndex,
  setActiveIndex,
  isStoryOpen,
  setIsStoryOpen
}: Props) => {
  const onStoryOpen = (idx: number) => {
    setActiveIndex(idx)
    setIsStoryOpen(true)
  }

  useEffect(() => {
    if (isStoryOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isStoryOpen])

  return (
    <>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        scrollContainerClassName='flex items-center px-2 gap-2'
      >
        {/* <div className='flex items-center px-2 gap-6 overflow-scroll'> */}
        {stories.map((story, index) => (
          <div className='w-[66px]' key={story.author.username}>
            <StoryCard
              profilePicture={story.author.profilePicture}
              username={story.author.username}
              onStoryOpen={() => onStoryOpen(index)}
            />
          </div>
        ))}
        {/* </div> */}
      </ScrollMenu>
      {isStoryOpen && (
        <StoryCarousel
          activeIndex={activeIndex}
          stories={stories}
          onClose={() => setIsStoryOpen(false)}
          onNextActive={nextIndex => setActiveIndex(nextIndex)}
        />
      )}
    </>
  )
}
