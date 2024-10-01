import { nanoid } from 'nanoid'
import { useTranslation } from 'react-i18next'
import { icons, type LucideIcon } from 'lucide-react'
import { Routes } from '@/routes'

export interface Nav {
  id: string
  title: string
  icon: LucideIcon
  route: Routes
}

export const useNavs = () => {
  const { t } = useTranslation()
  const navs: Nav[] = [
    // {
    //   id: nanoid(),
    //   title: t('tutorials'),
    //   icon: icons.BookMarked,
    //   route: Routes.tutorials,
    // },
  ]

  return {
    navs,
  }
}
