'use client'

import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { useTranslation } from 'react-i18next'

import { i18nConfig } from '@/i18n'
import { HomeHero } from '@/components/home/home-hero'
import { HomeBody } from '@/components/home/home-body'
import { Divider } from '@/components/divider'
import { useStorage } from '@/hooks/use-storage'
import { useMounted } from '@/hooks/use-mounted'

export const App = () => {
  const { i18n } = useTranslation()
  const { getLang } = useStorage()
  const { isNotMounted } = useMounted(() => {
    initLang()
  })

  const initLang = () => {
    const lang = getLang()
    if (!lang) return

    i18n.changeLanguage(lang)
  }

  if (isNotMounted) return <></>

  return (
    <I18nextProvider i18n={i18nConfig}>
      <HomeHero />
      <Divider />
      <p className="text-center text-2xl">Coming soon...</p>
      {/* <HomeBody /> */}
    </I18nextProvider>
  )
}

export default App
