export type Story = {
  author: { username: string; profilePicture: string }
  stories: Array<string>
}

export const stories: Array<Story> = [
  {
    author: {
      username: 'Demeter',
      profilePicture:
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    stories: [
      'https://picsum.photos/500',
      'https://picsum.photos/500',
      'https://picsum.photos/500'
    ]
  },
  {
    author: {
      username: 'Vaxo',
      profilePicture:
        'https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710720000&semt=ais'
    },
    stories: [
      'https://picsum.photos/500',
      'https://picsum.photos/500',
      'https://picsum.photos/500',
      'https://picsum.photos/500',
      'https://picsum.photos/500',
      'https://picsum.photos/500'
    ]
  },
  {
    author: {
      username: 'Saba',
      profilePicture:
        'https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg'
    },
    stories: ['https://picsum.photos/500']
  },
  {
    author: {
      username: 'Jano',
      profilePicture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGCg4pLQ1ckWPPMqf4s4eLyiKKMUU9bpjtA&usqp=CAU'
    },
    stories: ['https://picsum.photos/500', 'https://picsum.photos/500']
  },
  {
    author: {
      username: 'Gio',
      profilePicture: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
    },
    stories: ['https://picsum.photos/500', 'https://picsum.photos/500']
  }
]

export const generateLeftStories = (activeIndex: number) => {
  if (activeIndex === 0) {
    return []
  }

  if (activeIndex === 1) {
    return [activeIndex - 1]
  }

  return [activeIndex - 2, activeIndex - 1]
}

export const generateRightStories = (activeIndex: number, size: number) => {
  if (activeIndex === size - 1) {
    return []
  }

  if (activeIndex === size - 2) {
    return [activeIndex + 1]
  }

  return [activeIndex + 1, activeIndex + 2]
}
