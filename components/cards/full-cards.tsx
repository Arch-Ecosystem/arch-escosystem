import React from 'react'

import { cn } from '@/lib/utils'
import { Card } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { CardsBaseProps } from './types'

export const FullCards = (props: CardsBaseProps) => {
  const { id, className, title, cards } = props

  return (
    <div id={id} className={cn('mb-10 max-sm:mb-8', className)}>
      {title && (
        <h2 className="text-2xl font-bold mb-6 max-sm:mb-3">{title}</h2>
      )}
      <div
        className={cn('flex justify-between items-center', 'max-sm:flex-col')}
      >
        {cards?.map((c) => (
          <Card
            key={c.id}
            className={cn(
              'mr-4 last:mr-0 h-full-card w-card flex flex-col',
              'justify-end max-sm:w-full max-sm:mr-0 max-sm:mb-4',
              'max-sm:last:mb-0'
            )}
            onClick={() => window.open(c.href)}
          >
            <div className="flex items-center mb-4">
              <Avatar>
                <AvatarImage src={c.logo} />
                <AvatarFallback>{c.title}</AvatarFallback>
              </Avatar>
              <p className="text-lg font-bold ml-2">{c.title}</p>
            </div>
            <p className="break-all">{c.intro}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default FullCards
