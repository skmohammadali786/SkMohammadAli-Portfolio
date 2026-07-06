'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const loadWhenIdle = (callback: () => void) => {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, { timeout: 3500 })
  }

  return window.setTimeout(callback, 3500)
}

const cancelIdleLoad = (handle: number) => {
  if ('cancelIdleCallback' in window) {
    window.cancelIdleCallback(handle)
    return
  }

  window.clearTimeout(handle)
}

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || window.gtag) {
      return
    }

    let idleHandle: number | null = null

    const initializeAnalytics = () => {
      idleHandle = loadWhenIdle(() => {
        window.dataLayer = window.dataLayer || []
        window.gtag = (...args: unknown[]) => {
          window.dataLayer?.push(args)
        }

        window.gtag('js', new Date())
        window.gtag('config', GA_MEASUREMENT_ID, {
          anonymize_ip: true,
          transport_type: 'beacon',
        })

        const script = document.createElement('script')
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
        document.head.appendChild(script)
      })
    }

    if (document.readyState === 'complete') {
      initializeAnalytics()
    } else {
      window.addEventListener('load', initializeAnalytics, { once: true })
    }

    return () => {
      window.removeEventListener('load', initializeAnalytics)
      if (idleHandle !== null) {
        cancelIdleLoad(idleHandle)
      }
    }
  }, [GA_MEASUREMENT_ID])

  return null
}
