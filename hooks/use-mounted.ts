import { useEffect, useState } from 'react'

export const useMounted = (onMounted?: (isMounted: boolean) => void) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    onMounted?.(isMounted)
  }, [])

  return {
    isMounted,
    isNotMounted: !isMounted,
  }
}
