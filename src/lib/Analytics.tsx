'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import * as gtag from './gtag'

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    gtag.pageview(pathname)
  }, [pathname])

  return null
}
