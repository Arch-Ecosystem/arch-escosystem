import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { useTranslation } from 'react-i18next'

export interface Category {
  id: string
  title: string
  anchor: string
  children: CategoryChild[]
}

export interface CategoryChild {
  id: string
  title: string
  intro: string
  logo: string
  href: string
}

export const useCategory = () => {
  const { t, i18n } = useTranslation()
  const oldCategories: Category[] = [
    //all
    {
      id: nanoid(),
      title: t('all'),
      anchor: '#all',
      children: [],
    },
    // TODO: add more
  ]
  const originCategories = oldCategories.map((item) => {
    if (item.anchor === '#all')
      return {
        ...item,
        children: oldCategories.flatMap((item) => item.children),
      }

    return item
  })
  const [categories, setCategories] = useState(originCategories)

  const search = (kw: string) => {
    if (!kw.trim()) {
      setCategories(originCategories)
      return
    }
    const newCategories = originCategories.map((category) => {
      const newChildren = category.children.filter((child) =>
        child.title.toLowerCase().includes(kw.toLowerCase())
      )
      return {
        ...category,
        children: newChildren,
      }
    })
    setCategories(newCategories)
  }

  useEffect(() => {
    setCategories(originCategories)
  }, [i18n.language])

  return {
    categories,
    search,
  }
}
