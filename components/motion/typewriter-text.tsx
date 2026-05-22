'use client'

import { useEffect, useMemo, useState } from 'react'

export function TypewriterText({
  words,
}: {
  words: string[]
}) {
  const safeWords = useMemo(() => (words.length ? words : ['developer']), [words])
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = safeWords[wordIndex]
    const doneTyping = !deleting && displayed === current
    const doneDeleting = deleting && displayed === ''
    const delay = doneTyping ? 2000 : deleting ? 50 : 100

    const timer = window.setTimeout(() => {
      if (doneTyping) {
        setDeleting(true)
        return
      }

      if (doneDeleting) {
        setDeleting(false)
        setWordIndex((index) => (index + 1) % safeWords.length)
        return
      }

      setDisplayed((value) =>
        deleting ? current.slice(0, Math.max(value.length - 1, 0)) : current.slice(0, value.length + 1),
      )
    }, delay)

    return () => window.clearTimeout(timer)
  }, [deleting, displayed, safeWords, wordIndex])

  return (
    <span className="inline-flex min-h-[1.2em] items-center text-[var(--color-text-info)]">
      {displayed}
      <span className="cursor-blink ml-1 inline-block h-[1em] w-[2px] bg-[var(--color-text-info)]" />
    </span>
  )
}
