type Props = {
  username: string
  profilePicture: string
  onStoryOpen: () => void
}

export const StoryCard = ({ username, profilePicture, onStoryOpen }: Props) => {
  return (
    <div className='flex flex-col gap-1 justify-center items-center w-[66px]'>
      <div
        className='rounded-full p-[1px] border-2 border-primary'
        onClick={onStoryOpen}
      >
        <img
          src={profilePicture}
          alt='Profile image'
          className='rounded-full w-[56px] h-[56px] object-cover cursor-pointer'
        />
      </div>
      <p className='text-xs'>{username}</p>
    </div>
  )
}
