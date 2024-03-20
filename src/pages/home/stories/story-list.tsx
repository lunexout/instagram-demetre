import { useEffect, useState } from 'react'
import { StoryCard } from './story-card'
import { StoryCarousel } from './story-carousel'
import { stories } from './utils'

export const StoryList = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isStoryOpen, setIsStoryOpen] = useState<boolean>(false)

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
      <div className='flex items-center p-2 gap-6'>
        {stories.map((story, index) => (
          <StoryCard
            key={story.author.username}
            profilePicture={story.author.profilePicture}
            username={story.author.username}
            onStoryOpen={() => onStoryOpen(index)}
          />
        ))}
      </div>
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
