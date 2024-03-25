import { IconSave } from '@/assets/icons/save'
import { IconShare } from '@/assets/icons/share'
import { useContext } from 'react'
import { VisibilityContext } from 'react-horizontal-scrolling-menu'

export const LeftArrow = () => {
  const visibility = useContext(VisibilityContext)
  const isFirstItemVisible = visibility.useIsVisible('first', true)
  return (
    <button
      disabled={isFirstItemVisible}
      onClick={() => visibility.scrollPrev()}
      className='left'
    >
      <IconSave />
    </button>
  )
}

export const RightArrow = () => {
  const visibility = useContext(VisibilityContext)
  const isLastItemVisible = visibility.useIsVisible('last', false)
  return (
    <button
      disabled={isLastItemVisible}
      onClick={() => visibility.scrollNext()}
      className='right'
    >
      <IconShare />
    </button>
  )
}
