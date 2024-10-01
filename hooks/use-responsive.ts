import { useMediaQuery } from 'react-responsive'

/**
 * Responsive adaptation hook, use for device detection.
 */
export const useResponsive = () => {
  return {
    isMobile: useMediaQuery({ query: `(max-width: 640px)` }),
    isPad: useMediaQuery({ query: `(max-width: 1024px)` }),
    isDesktop: useMediaQuery({ query: `(min-width: 1024px)` }),
  }
}
