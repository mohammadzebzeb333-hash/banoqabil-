'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const MobileApplyButton = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      setIsVisible(scrollPosition + windowHeight < documentHeight - 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    isVisible && (
      <motion.div
        className="fixed bottom-6 left-4 right-4 md:hidden z-40"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
      >
        <button className="w-full py-3 px-6 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full flex items-center justify-center gap-2 shadow-lg">
          Apply Now <ArrowRight size={20} />
        </button>
      </motion.div>
    )
  )
}

export default MobileApplyButton
