import { IconFacebook } from '@/assets/icons/facebook'
import { ControlledInput } from '@/global/controlled/textfield'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

type AuthFields = {
  email: string
  fullName: string
  username: string
  password: string
}

export const SignUpForm = () => {
  const { control, handleSubmit } = useForm<AuthFields>({
    defaultValues: { email: '', password: '' }
  })

  const onSubmit = (form: AuthFields) => {
    console.log(form)
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='bg-paper w-[350px] py-[10px] flex flex-col items-center gap-4 border border-divider'>
        <p className='text-black text-4xl font-bold px-8 pt-8'>Instagram</p>
        <div className='flex flex-col gap-4'>
          <p className='text-gray text-base font-bold text-center mt-4 max-w-[268px]'>
            Sign up to see photos and videos from your friends.
          </p>
          <button
            type='button'
            className='flex items-center gap-2 bg-primary py-1 px-10 rounded-md w-full'
          >
            <IconFacebook />
            <p className='text-paper text-base font-bold'>
              Log in with Facebook
            </p>
          </button>
          <div className='flex gap-4 justify-center items-center'>
            <div className='w-[100px] h-[1px] border-b border-divider' />
            <p className='text-sm text-secondary-dark font-bold'>OR</p>
            <div className='w-[100px] h-[1px] border-b border-divider' />
          </div>
        </div>
        <form className='w-[268px]' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-2'>
            <ControlledInput
              control={control}
              required
              name='email'
              placeholder='Mobile Number or Email'
            />
            <ControlledInput
              control={control}
              required
              name='fullName'
              placeholder='Full Name'
            />
            <ControlledInput
              control={control}
              required
              name='username'
              placeholder='Username'
            />
            <ControlledInput
              control={control}
              name='password'
              type='password'
              required
              placeholder='Password'
            />
          </div>
          <p className='text-xs text-center text-secondary-dark mt-[16px]'>
            People who use our service may have uploaded your contact
            information to Instagram.
            <Link to='/lear-more' className='text-link text-xs'>
              Learn More
            </Link>
          </p>
          <p className='text-xs text-center text-secondary-dark mt-[16px]'>
            By signing up, you agree to our{' '}
            <Link to='/terms' className='text-link text-xs'>
              Terms
            </Link>{' '}
            ,{' '}
            <Link to='/privacy-policy' className='text-link text-xs'>
              Privacy policy
            </Link>{' '}
            and{' '}
            <Link to='/privacy-policy' className='text-link text-xs'>
              Cookies Policy
            </Link>{' '}
            .
          </p>
          <button
            type='submit'
            className='bg-primary text-base font-bold py-1 px-10 rounded-md text-paper w-full mt-4 mb-8'
          >
            Sign up
          </button>
        </form>
      </div>
      <div className='bg-paper w-[350px] py-[10px] flex flex-col items-center gap-4 border border-divider'>
        <div className='flex items-center gap-1 p-[10px]'>
          <p className='text-sm'>Have an account?</p>
          <Link to='/sign-in' className='text-primary text-sm font-bold'>
            Log in
          </Link>
        </div>
      </div>
    </div>
  )
}
