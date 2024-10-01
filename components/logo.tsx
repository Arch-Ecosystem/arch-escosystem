import React from 'react'
import Link from 'next/link'
import { useNavStore } from '@/stores/use-nav-store'

interface Props extends React.ComponentProps<'img'> {
  size?: number
}

export const Logo = (props: Props) => {
  const { size = 60, onClick } = props
  const { setSelectedNav } = useNavStore()

  return (
    <Link href="/" className="flex items-center space-x-4 max-sm:space-x-2">
      <img
        src="./logo.jpg"
        alt="Logo"
        width={size}
        height={size}
        onClick={(e) => {
          setSelectedNav('')
          onClick?.(e)
        }}
      />
      <span className="text-2xl max-sm:text-lg">Arch Ecosystem</span>
    </Link>
  )
}

export default Logo
