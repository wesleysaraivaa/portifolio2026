import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  onComplete: () => void
}

export function Loader({ onComplete }: LoaderProps) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
  const onCompleteRef = useRef(onComplete)

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    let start = 0
    const duration = 1200
    const step = 16
    const steps = duration / step
    const increment = 100 / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= 100) {
        setCount(100)
        clearInterval(timer)
        setTimeout(() => setDone(true), 200)
        setTimeout(() => onCompleteRef.current(), 900)
      } else {
        setCount(Math.floor(start))
      }
    }, step)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="fixed inset-0 z-300 bg-[#09090b] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#a1a1aa] mb-4">
              PORTFÓLIO
            </p>
            <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-black uppercase tracking-tighter text-[#fafafa] leading-none">
              WESLEY{' '}
              <span className="text-purple-500">SARAIVA</span>
            </h1>
          </motion.div>

          <div className="w-[min(400px,80vw)]">
            <div className="h-0.5 w-full bg-[#27272a] mb-3">
              <motion.div
                className="h-full bg-purple-500"
                style={{ width: `${count}%` }}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#a1a1aa] uppercase tracking-widest">
                CARREGANDO
              </span>
              <span className="text-2xl font-black font-mono text-purple-400 tabular-nums">
                {count.toString().padStart(3, '0')}
              </span>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
