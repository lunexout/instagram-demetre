import { UnauthorizedLayout } from '@/global/layouts/unauthorized'
import { SignInForm } from './components/sign-in-form'

const SignIn = () => {
  return (
    <UnauthorizedLayout>
      <SignInForm />
    </UnauthorizedLayout>
  )
}

export default SignIn
