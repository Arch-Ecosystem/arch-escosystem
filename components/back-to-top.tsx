'use client'

import { useScroll } from 'ahooks'
import { RiSkipUpLine } from 'react-icons/ri'

import { cn } from '@/lib/utils'
import { Button } from './ui/button'

const PERCENT = 0.3
export const BackToTop = () => {
  const { top } = useScroll(document) ?? { top: 0 }
  const isShow = top / window.innerHeight > PERCENT

  return (
    <Button
      size="icon"
      className={cn(
        'fixed right-14 bottom-14 z-50 max-sm:right-4 transition-all max-sm:bottom-[10vh] max-sm:w-[10vw] max-sm:h-[10vw]',
        isShow ? 'scale-100' : 'scale-0'
      )}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <RiSkipUpLine size={24} />
    </Button>
  )
}

export default BackToTop
