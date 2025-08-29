// app/gtm-pageview.tsx
'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function GTMPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const firstLoad = useRef(true)

  useEffect(() => {
    // Pula o primeiro carregamento para evitar duplicidade com o GA4 Config Tag (All Pages)
    if (firstLoad.current) {
      firstLoad.current = false
      return
    }

    const query = searchParams?.toString()
    const path = query ? `${pathname}?${query}` : pathname
    const url = `${window.location.origin}${path}`

    // Garante dataLayer
    // @ts-ignore
    window.dataLayer = window.dataLayer || []
    // @ts-ignore
    window.dataLayer.push({
      event: 'virtual_page_view', // nome do evento que vamos usar como Trigger no GTM
      page_location: url,
      page_path: path,
      page_title: document.title,
    })
  }, [pathname, searchParams])

  return null
}
