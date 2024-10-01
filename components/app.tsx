"use client"

import { ReactNode } from "react"

import { useMounted } from "@/hooks/use-mounted"

export const App = ({ children }: { children: ReactNode }) => {
  const { isNotMounted } = useMounted()

  if (isNotMounted) return

  return <>{children}</>
}

export default App
