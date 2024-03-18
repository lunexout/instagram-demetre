import { AuthorizedLayout } from '@/global/layouts/authorized'
import { ContentDiv } from './components/content-div'

const Home = () => {
  return (
    <AuthorizedLayout>
      <ContentDiv
        left={
          <>
            {new Array(50).fill(null).map((box, index) => (
              <div key={box} className='w-full h-[600px]'>
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
