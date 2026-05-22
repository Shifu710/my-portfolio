'use client'

import { motion } from 'framer-motion'

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.96 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.2, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
