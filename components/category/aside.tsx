import React from 'react'
import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { Category } from '@/hooks/use-category'

interface Props extends React.ComponentProps<'div'> {
  items: Category[]
}

export const CategoryAside = (props: Props) => {
  const { className, items } = props
  const router = useRouter()

  return (
    <div className={cn('flex flex-col items-start max-w-aside', className)}>
      {items.map((e, i) => (
        <Button
          key={i}
          variant="ghost"
          rounded="full"
          className="w-full justify-start"
          onClick={() => router.push(e.anchor)}
        >
          {e.title}
        </Button>
      ))}
    </div>
  )
}

export default CategoryAside
