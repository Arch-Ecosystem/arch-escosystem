import React from 'react'

export interface CardsBaseProps extends React.ComponentProps<'div'> {
  cards?: Card[]
  anchor?: string
}

export interface Card {
  id: string
  title: React.ReactNode
  intro: string
  logo?: string
  href?: string
}
