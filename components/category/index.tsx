import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useDebounce } from 'react-use'

import type { Category as ICategory } from '@/hooks/use-category'

import { useResponsive } from '@/hooks/use-responsive'
import { CategorySelect } from './select'
import { CategoryAside } from './aside'
import { Input } from '../ui/input'

interface Props extends React.ComponentProps<'div'> {
  categories: ICategory[]
  search: (kw: string) => void
}

export const Category = (props: Props) => {
  const { categories, search } = props
  const { isMobile } = useResponsive()
  const { t } = useTranslation()
  const [kw, setKw] = useState('')

  const debouncer = () => {
    // If null, reset the list.
    if (!kw.trim()) search('')
    search(kw)
  }

  useDebounce(debouncer, 300, [kw])

  return (
    <div className="sm:sticky sm:top-20 z-10 sm:h-96">
      <Input
        value={kw}
        onChange={(e) => setKw(e.target.value)}
        placeholder={t('search')}
        inputClass="border-none"
        rounded="full"
        startIcon={
          <Search className="cursor-pointer" onClick={() => search(kw)} />
        }
        className="max-sm:w-full mb-4"
        onKeyUp={(e) => e.key === 'Enter' && search(kw)}
      />
      {isMobile ? (
        <CategorySelect items={categories} />
      ) : (
        <CategoryAside items={categories} />
      )}
    </div>
  )
}

export default Category
