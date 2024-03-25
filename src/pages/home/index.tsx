import { AuthorizedLayout } from '@/global/layouts/authorized'
import { useState } from 'react'
import { ContentDiv } from './components/content-div'
import { RightSection } from './components/right-section'
import { Feed } from './feed'
import { StoryList } from './stories/story-list'

const Home = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isStoryOpen, setIsStoryOpen] = useState<boolean>(false)

  console.log(activeIndex)

  return (
    <AuthorizedLayout>
      <ContentDiv
        left={
          <>
            <StoryList
              isStoryOpen={isStoryOpen}
              setIsStoryOpen={setIsStoryOpen}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
            <Feed
              setActiveIndex={setActiveIndex}
              setIsStoryOpen={setIsStoryOpen}
            />
          </>
        }
        right={
          <RightSection
            profilePicture='https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
            username='__gazashvilij'
          />
        }
      />
    </AuthorizedLayout>
  )
}

export default Home
