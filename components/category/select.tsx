import React from 'react'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import type { Category } from '@/hooks/use-category'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { cn } from '@/lib/utils'

interface Props extends React.ComponentProps<'div'> {
  items: Category[]
}

export const CategorySelect = (props: Props) => {
  const { className, items } = props
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <div className={cn('mb-10', className)}>
      <Select onValueChange={(anchor) => router.push(anchor)}>
        <SelectTrigger className={cn('rounded-full px-4', className)}>
          <SelectValue placeholder={t('select-category')} />
        </SelectTrigger>
        <SelectContent className="rounded-2xl">
          {items.map((e, i) => (
            <SelectItem key={i} value={e.anchor} className="rounded-full">
              {e.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default CategorySelect
