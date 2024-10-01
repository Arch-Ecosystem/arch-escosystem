import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'

import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

export const HomeHero = () => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <div className="mt-20 max-sm:mt-10">
      <h1
        className={cn('text-6xl font-bold mb-10 max-sm:text-4xl max-sm:mb-6')}
      >
        {t('title.desc')}
      </h1>
      <div
        className={cn(
          'flex items-center justify-between max-sm:flex-col sm:space-x-4'
        )}
      >
        <p className="max-sm:mb-6">{t('arch-eye.intro')}</p>
        {/* <Button
          size="xl"
          rounded="full"
          className="max-sm:w-full"
          onClick={() => router.push('#official')}
        >
          {t('explore')}
        </Button> */}
      </div>
    </div>
  )
}

export default HomeHero
