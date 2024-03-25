import { IconComment } from '@/assets/icons/comment'
import { IconHeart } from '@/assets/icons/heart'
import { IconSave } from '@/assets/icons/save'
import { IconShare } from '@/assets/icons/share'
import { IconThreeDot } from '@/assets/icons/three-dot'
import { IconVerified } from '@/assets/icons/verified'

type Props = {
  profilePicture: string
  username: string
  postPicture: string
  onStoryOpen: () => void
}

export const FeedItem = ({
  postPicture,
  profilePicture,
  username,
  onStoryOpen
}: Props) => {
  return (
    <>
      <div className='flex gap-2 items-center justify-between'>
        <div className='flex gap-2 items-center'>
          <div
            className='p-[0.75px] border-2 border-primary rounded-full cursor-pointer'
            onClick={onStoryOpen}
          >
            <img
              src={profilePicture}
              alt='Profile picture'
              className='w-[32px] h-[32px] rounded-full object-cover'
            />
          </div>
          <div className='flex gap-1'>
            <p className='text-sm text-black font-bold'>{username}</p>
            <p className='text-sm text-secondary-dark'>• 5h</p>
          </div>
        </div>
        <button className='text-primary text-xs font-semibold'>
          <IconThreeDot />
        </button>
      </div>
      <div className='flex flex-col gap-3'>
        <img
          className='rounded-md h-[468px] w-full object-cover'
          src={postPicture}
        />
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <IconHeart />
            <IconComment />
            <IconShare />
          </div>
          <IconSave />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-sm font-semibold'>2311 likes</p>
        <p className='text-sm font-semibold inline'>
          <div className='flex items-center gap-1'>
            {username} <IconVerified />
          </div>
          <span className='text-sm text-black font-normal'>
            LIMITED EDITION SS24 | Paint it red, black or in shades of neutrals.
            Wear it to express your arty side. Explore the collection in stores
            and massimodutti.com #MassimoDutti #NewInDutti
          </span>
        </p>
      </div>
      <div className='flex flex-col gap-1'>
        <p className='text-sm text-secondary-dark'>View all 6 comments</p>
        <p className='text-sm text-secondary-dark'>Add comment...</p>
      </div>
      <div className='mt-3 mb-5'>
        <div className='w-full h-[1px] border-b border-divider' />
      </div>
    </>
  )
}
