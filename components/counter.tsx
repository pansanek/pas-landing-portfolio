'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

interface CounterProps {
  to: number
  suffix?: string
  className?: string
}

export function Counter({ to, suffix = '', className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(Math.floor(latest)),
    })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString('ru-RU')}
      {suffix}
    </span>
  )
}
