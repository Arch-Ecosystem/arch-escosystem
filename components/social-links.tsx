import React, { type ComponentProps } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaGlobe } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { AiFillBook } from 'react-icons/ai'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

interface Props extends ComponentProps<'div'> {
  x?: string
  tg?: string
  website?: string
  whitepaper?: string
  buttonProps?: ComponentProps<typeof Button>
  size?: number
}

export const SocialLinks = ({
  className,
  x,
  tg,
  website,
  whitepaper,
  buttonProps,
  size = 20,
  ...props
}: Props) => {
  const { className: buttonClass } = buttonProps ?? {}
  const links = [
    {
      title: 'Twitter',
      link: x,
      icon: <FaXTwitter size={size} />,
    },
    {
      title: 'Telegram',
      link: tg,
      icon: <FaTelegramPlane size={size} />,
    },
    {
      title: 'Website',
      link: website,
      icon: <FaGlobe size={size} />,
    },
    {
      title: 'Whitepaper',
      link: whitepaper,
      icon: <AiFillBook size={size} />,
    },
  ]

  return (
    <div
      className={cn(
        'flex justify-center items-center mt-1 space-x-1',
        className
      )}
      {...props}
    >
      {links.map(({ title, link, icon }) =>
        !!link ? (
          <Button
            type="button"
            key={title}
            size="icon"
            title={title}
            onClick={() => open(link)}
            className={cn(
              'border-transparent hover:border-2 hover:!border-zinc-500 !bg-transparent text-white sm:hover:border-black',
              buttonClass
            )}
            {...buttonProps}
          >
            {icon}
          </Button>
        ) : null
      )}
    </div>
  )
}

export default SocialLinks
