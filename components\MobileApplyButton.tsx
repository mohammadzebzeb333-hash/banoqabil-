'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const MobileApplyButton = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Hide button when near footer (last 500px)
      if (scrollPosition + windowHeight > documentHeight - 500) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-4 right-4 md:hidden z-40"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <motion.button
            className="w-full py-3 px-6 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full flex items-center justify-center gap-2 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Apply Now
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      )}
    </>
  )
}

export default MobileApplyButton
