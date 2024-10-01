import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const dividerVariants = cva('', {
  variants: {
    my: {
      sm: 'my-2',
      md: 'my-4',
      lg: 'my-8',
      xl: 'my-10',
    },
  },
  defaultVariants: {
    my: 'xl',
  },
})

interface Props
  extends React.ComponentProps<'hr'>,
    VariantProps<typeof dividerVariants> {}

export const Divider = (props: Props) => {
  const { my, className } = props

  return <hr className={cn(dividerVariants({ my }), className)} />
}

export default Divider
