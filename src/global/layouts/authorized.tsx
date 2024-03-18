import { ReactNode } from 'react'
import { Sidebar } from '../navigation/sidebar'

type Props = {
  children: ReactNode
}

export const AuthorizedLayout = ({ children }: Props) => {
  return <Sidebar>{children}</Sidebar>
}
