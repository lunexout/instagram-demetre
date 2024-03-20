import { AuthorizedLayout } from '@/global/layouts/authorized'
import { ContentDiv } from './components/content-div'
import { StoryList } from './stories/story-list'

const Home = () => {
  return (
    <AuthorizedLayout>
      <ContentDiv
        left={
          <>
            <StoryList />
            {new Array(50).fill(null).map((_box, index) => (
              <div key={index} className='w-full h-[600px]'>
                {index + 1}
              </div>
            ))}
          </>
        }
        right={<h1>menu content</h1>}
      />
    </AuthorizedLayout>
  )
}

export default Home
