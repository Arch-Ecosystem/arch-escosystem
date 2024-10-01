'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/utils'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer
      className={cn(
        'h-footer flex items-center justify-center',
        'bg-black px-16 max-sm:px-4'
      )}
    >
      © {new Date().getFullYear()} Arch Ecosystem {t('copyright')}
    </footer>
  )
}

export default Footer
