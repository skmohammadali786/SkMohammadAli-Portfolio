'use client'

import { useState, useEffect } from 'react'

interface EmailDisplayProps {
  email: string
  className?: string
}

export default function EmailDisplay({ email, className }: EmailDisplayProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <span className={className}>[Email Protected]</span>
  }

  return (
    <a href={`mailto:${email}`} className={`${className} hover:underline`}>
      {email}
    </a>
  )
}
