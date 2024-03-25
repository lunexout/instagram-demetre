import { Dispatch, SetStateAction } from 'react'
import { stories } from '../stories/utils'
import { FeedItem } from './feed-item'

type Props = {
  setActiveIndex: Dispatch<SetStateAction<number>>
  setIsStoryOpen: Dispatch<SetStateAction<boolean>>
}

export const Feed = ({ setActiveIndex, setIsStoryOpen }: Props) => {
  return (
    <div className='flex flex-col w-[630px] mt-[36px]'>
      <div className='px-[86px] flex flex-col gap-3'>
        {stories.map((story, index) => {
          return (
            <FeedItem
              key={story.author.username}
              postPicture={story.stories[0]}
              profilePicture={story.author.profilePicture}
              username={story.author.username}
              onStoryOpen={() => {
                setActiveIndex(index)
                setIsStoryOpen(true)
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
