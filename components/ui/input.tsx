import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const inputVariants = cva('', {
  variants: {
    rounded: {
      md: 'rounded-md',
      full: 'rounded-full',
    },
  },
})

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  border?: boolean
  inputClass?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    inputClass,
    type,
    startIcon,
    endIcon,
    rounded,
    border = true,
    ...restProps
  } = props

  const hasIcon = !!startIcon || !!endIcon
  const hasNotIcon = !hasIcon

  return (
    <div
      className={cn(
        hasIcon && 'flex items-center focus-within:ring-2 rounded-md',
        hasIcon && 'px-3 ring-ring',
        border && 'border border-input',
        inputVariants({ rounded }),
        className
      )}
    >
      {startIcon}
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md',
          'bg-background px-3 py-2 text-sm ring-offset-background',
          'file:border-0 file:bg-transparent file:text-sm',
          'file:font-medium placeholder:text-muted-foreground',
          'disabled:cursor-not-allowed disabled:opacity-50',
          inputClass,
          border && 'border border-input',
          hasNotIcon && 'focus-visible:outline-none focus-visible:ring-2',
          hasNotIcon && 'focus-visible:ring-ring focus-visible:ring-offset-2',
          hasIcon && 'px-2 ring-0 outline-none'
        )}
        ref={ref}
        {...restProps}
      />
      {endIcon}
    </div>
  )
})

Input.displayName = 'Input'

export { Input }
