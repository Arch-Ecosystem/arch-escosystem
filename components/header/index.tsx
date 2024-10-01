'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import { MdLanguage } from 'react-icons/md'
import { useRouter } from 'next/navigation'

import { DesktopHeader } from './desktop'
import { MobileHeader } from './mobile'
import { cn } from '@/lib/utils'
import { useResponsive } from '@/hooks/use-responsive'
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select'
import { resources } from '@/i18n'
import { useStorage } from '@/hooks/use-storage'
import { Logo } from '../logo'
import { useNavs } from '@/hooks/use-navs'
import { useNavStore } from '@/stores/use-nav-store'
import { useMounted } from '@/hooks/use-mounted'
import { Button } from '../ui/button'

const langs = Object.entries(resources).map(([key, val]) => ({
  title: val.name as string,
  code: key,
}))

export const Header = () => {
  const { t, i18n } = useTranslation()
  const { isMobile } = useResponsive()
  const { getLang, setLang } = useStorage()
  const { navs } = useNavs()
  const router = useRouter()
  const { selectedNav, setSelectedNav } = useNavStore()
  const { isNotMounted } = useMounted()

  const onLangChange = (lang: string) => {
    i18n.changeLanguage(lang)
    setLang(lang)
  }

  const onNavClick = (nav: (typeof navs)[number]) => {
    router.push(nav.route)
    setSelectedNav(nav.title)
  }

  if (isNotMounted) return <></>

  return (
    <header className={cn('sticky top-0 z-50 bg-black', 'max-sm:px-4')}>
      <div
        className={cn(
          'h-header flex items-center justify-between',
          'max-w-main w-full mx-auto'
        )}
      >
        <Logo size={isMobile ? 40 : 60} />
        <div className="flex items-center">
          {/* {isMobile ? (
            <MobileHeader
              navs={navs}
              selectedNav={selectedNav}
              onNavClick={onNavClick}
            />
          ) : (
            <DesktopHeader
              navs={navs}
              selectedNav={selectedNav}
              onNavClick={onNavClick}
            />
          )} */}
          <Select
            onValueChange={onLangChange}
            value={getLang() || i18n.language}
          >
            <SelectTrigger className="w-14 rounded-xl">
              <MdLanguage size={24} />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {langs.map((lang) => (
                <SelectItem
                  key={lang.code}
                  value={lang.code}
                  className="rounded-lg"
                >
                  {lang.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  )
}

export default Header
