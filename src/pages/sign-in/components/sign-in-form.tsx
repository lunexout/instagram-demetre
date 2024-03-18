import { ControlledInput } from '@/global/controlled/textfield'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

type AuthFields = {
  email: string
  password: string
}

export const SignInForm = () => {
  const { control, handleSubmit } = useForm<AuthFields>({
    defaultValues: { email: '', password: '' }
  })

  const onSubmit = (form: AuthFields) => {
    console.log(form)
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='bg-paper w-[350px] py-[10px] flex flex-col items-center gap-4 border border-divider'>
        <p className='text-black text-4xl font-bold p-8'>Instagram</p>
        <form className='w-[268px]' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-2'>
            <ControlledInput
              control={control}
              required
              name='email'
              placeholder='Phone number, username or email'
            />
            <ControlledInput
              control={control}
              name='password'
              type='password'
              required
              placeholder='Password'
            />
          </div>
          <button
            type='submit'
            className='bg-primary text-base font-bold py-1 px-10 rounded-md text-paper w-full mt-4'
          >
            Log in
          </button>
        </form>
        <div className='flex gap-4 justify-center items-center'>
          <div className='w-[100px] h-[1px] border-b border-divider' />
          <p className='text-sm text-secondary-dark font-bold'>OR</p>
          <div className='w-[100px] h-[1px] border-b border-divider' />
        </div>
        <Link to='/forgot-password' className='text-link text-xs'>
          Forgot password ?
        </Link>
      </div>
      <div className='bg-paper w-[350px] py-[10px] flex flex-col items-center gap-4 border border-divider'>
        <div className='flex items-center gap-1 p-[10px]'>
          <p className='text-sm'>Don't have an account ?</p>
          <Link to='/sign-up' className='text-primary text-sm font-bold'>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
