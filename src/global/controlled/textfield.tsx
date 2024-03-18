/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl } from '@/global/form-control'
import { isRequired } from '@/global/validations'
import clsx from 'clsx'
import {
  Control,
  FieldValues,
  RegisterOptions,
  useController
} from 'react-hook-form'

type Props<T extends FieldValues> = {
  control: Control<T>
  name: keyof T
  rules?: Omit<
    RegisterOptions<T, any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
  disabled?: boolean
  placeholder?: string
  required?: boolean
  type?: string
  label?: string
  helperText?: string
}

export const ControlledInput = <T extends FieldValues>({
  name,
  control,
  rules,
  disabled,
  required,
  label,
  helperText,
  type = 'text',
  placeholder = 'Enter value'
}: Props<T>) => {
  const { field, formState } = useController({
    name,
    control,
    rules: {
      required: required && isRequired,
      ...rules
    },
    disabled
  })

  return (
    <FormControl
      name={name}
      errors={formState.errors}
      helperText={helperText}
      label={label}
    >
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        className={clsx(
          'border border-divider placeholder:text-xs text-xs p-2 h-[36px]',
          {
            'border-error': formState.errors?.[name]
          }
        )}
      />
    </FormControl>
  )
}
