import clsx from 'clsx'
import { ReactNode } from 'react'
import { FieldError, FieldErrors, FieldValues } from 'react-hook-form'

type Props<T extends FieldValues> = {
  children: ReactNode
  name: keyof T
  label?: string
  helperText?: string
  errors?: FieldErrors<T>
}

export const FormControl = <T extends FieldValues>({
  name,
  errors,
  label,
  helperText,
  children
}: Props<T>) => {
  const error = errors?.[name] as FieldError

  return (
    <div className='flex flex-col relative'>
      {label && (
        <p
          className={clsx('', {
            'text-error': errors?.[name]
          })}
        >
          {label}
        </p>
      )}
      {children}
      {error ? (
        <>
          <p className='text-error text-xs'>{error.message}</p>
          <div className='absolute right-[8px] top-1/4 -translate-y-1/4 w-[22px] h-[22px] rounded-full border border-error text-error flex justify-center items-center'>
            X
          </div>
        </>
      ) : (
        helperText && <p className='text-base ml-4'>{helperText}</p>
      )}
    </div>
  )
}
