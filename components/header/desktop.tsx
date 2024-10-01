import React, { useState } from 'react'
import { motion } from 'framer-motion'

import type { Nav } from '@/hooks/use-navs'

import { Button } from '../ui/button'

interface Props {
  navs: Nav[]
  selectedNav: string
  onNavClick: (nav: Nav) => void
}

export const DesktopHeader = (props: Props) => {
  const { navs, selectedNav, onNavClick } = props
  const [hoverIdx, setHoverIdx] = useState(-1)

  const animatedIcon = (n: Nav, i: number) => {
    // If not have icon, don't render icon.
    if (!n.icon) return

    return (
      <motion.div
        animate={{
          x: hoverIdx === i ? 0 : 10,
          opacity: hoverIdx === i ? 1 : 0,
        }}
      >
        {React.createElement(n.icon, { size: 16 })}
      </motion.div>
    )
  }

  return (
    <nav className="h-full flex items-center">
      {navs.map((n, i) => {
        const isSelected = selectedNav === n.title
        const hasIcon = !!n.icon

        return (
          <Button
            key={n.id}
            variant={isSelected ? 'outline' : 'ghost'}
            className="mr-4"
            size="lg"
            rounded="full"
            onMouseEnter={() => setHoverIdx(i)}
            onMouseLeave={() => setHoverIdx(-1)}
            onClick={() => onNavClick(n)}
            startIcon={
              hasIcon && isSelected
                ? React.createElement(n.icon, { size: 16 })
                : animatedIcon(n, i)
            }
          >
            {n.title}
          </Button>
        )
      })}
    </nav>
  )
}

export default DesktopHeader
