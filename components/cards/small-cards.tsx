import React from 'react'

import { cn } from '@/lib/utils'
import { Card } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'

import type { CardsBaseProps } from './types'
import SocialLinks from '../social-links'

interface Props extends CardsBaseProps {
  hasMore?: boolean
}

export const SmallCards = (props: Props) => {
  const { id, className, cards, hasMore = true } = props

  return (
    <div
      id={id}
      className={cn('mb-10 max-sm:mb-8 scroll-mt-20 mt-5', className)}
    >
      <div
        className={cn(
          'grid grid-cols-3 gap-5 justify-between',
          'max-sm:grid-cols-1 max-sm:gap-4',
          className
        )}
      >
        {cards?.map((c) => (
          <Card
            key={c.id}
            className={cn(
              'flex flex-col h-full-card justify-between items-center',
              'max-sm:w-full !pt-4 relative bg-zinc-900'
            )}
          >
            <div
              className="h-24 w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(https://zklink.io/ecosystem/assets/banner/ARPA.jpeg)`,
              }}
            />
            <Avatar className="absolute top-20 bg-zinc-900 w-16 h-16 p-1 rounded-lg">
              <AvatarImage src={c.logo} className="rounded-md" />
              <AvatarFallback>{c.title}</AvatarFallback>
            </Avatar>

            <div className="my-10 text-center space-y-4">
              <p className="text-2xl max-sm:text-lg font-bold ml-2 truncate">
                {c.title}
              </p>
              <p className={cn('text-gray-500 break-all text-sm')}>{c.intro}</p>
            </div>

            <SocialLinks
              tg="https://t.me/ARPA_official"
              website="https://www.arpanetwork.io/en-US"
            />
          </Card>
        ))}
      </div>

      {hasMore && (
        <Button className="mt-6" size="lg" rounded="full">
          View More
        </Button>
      )}
    </div>
  )
}

export default SmallCards
