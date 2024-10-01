import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useCategory } from '@/hooks/use-category'
import { useResponsive } from '@/hooks/use-responsive'
import { useDebounce } from 'react-use'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'
import { Button } from '../ui/button'
import CategoryTabs from '../category-tabs'

export const HomeBody = () => {
  const { t } = useTranslation()
  const { categories, search } = useCategory()
  const { isMobile } = useResponsive()
  const [kw, setKw] = useState('')

  const debouncer = () => {
    // If null, reset the list.
    if (!kw.trim()) search('')
    search(kw)
  }

  useDebounce(debouncer, 300, [kw])

  return (
    <div className="flex flex-col mt-10">
      <div className="sm:sticky sm:top-20 z-10">
        <div className="flex justify-between items-center space-x-4 mb-4">
          <Input
            value={kw}
            onChange={(e) => setKw(e.target.value)}
            placeholder={t('search')}
            inputClass="border-none"
            rounded="full"
            startIcon={
              <Search className="cursor-pointer" onClick={() => search(kw)} />
            }
            className="max-sm:w-full md:min-w-[30rem]"
            onKeyUp={(e) => e.key === 'Enter' && search(kw)}
          />

          <Button
            className="text-sm"
            size={isMobile ? 'sm' : 'default'}
            onClick={() => window.open('https://forms.gle/9kzRSjNRMUhSRs27A')}
          >
            {t('application')}
          </Button>
        </div>
        <CategoryTabs categories={categories} />
      </div>
    </div>
  )
}

export default HomeBody
