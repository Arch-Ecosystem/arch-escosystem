import React from 'react'
import { Menu } from 'lucide-react'

import type { Nav } from '@/hooks/use-navs'

import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer'
import { Button } from '../ui/button'
import { Divider } from '../divider'
import { Logo } from '../logo'

interface Props {
  navs: Nav[]
  selectedNav: string
  onNavClick: (nav: Nav) => void
}

export const MobileHeader = (props: Props) => {
  const { navs, selectedNav, onNavClick } = props

  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="fixed h-full w-[80vw] p-4" scrollbar={false}>
        <Logo />
        <Divider my="lg" />
        {navs.map((n, i) => (
          <Button
            key={i}
            className="mt-3 justify-start"
            variant={selectedNav === n.title ? 'default' : 'outline'}
            startIcon={React.createElement(n.icon, { size: 16 })}
            onClick={() => onNavClick(n)}
          >
            {n.title}
          </Button>
        ))}
      </DrawerContent>
    </Drawer>
  )
}

export default MobileHeader
