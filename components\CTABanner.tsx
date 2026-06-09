'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const CTABanner = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const calculateCountdown = () => {
      // Set target date to 30 days from now
      const targetDate = new Date()
      targetDate.setDate(targetDate.getDate() + 30)

      const interval = setInterval(() => {
        const now = new Date().getTime()
        const distance = targetDate.getTime() - now

        if (distance < 0) {
          clearInterval(interval)
          setDays(0)
          setHours(0)
          setMinutes(0)
          setSeconds(0)
        } else {
          setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
          setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
          setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
          setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
        }
      }, 1000)

      return () => clearInterval(interval)
    }

    calculateCountdown()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-accent to-primary overflow-hidden relative">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-5 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-5 rounded-full"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Admissions Open
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Batch 2026 - Limited seats available. Enroll now and transform your career!
            </p>
            <motion.button
              className="px-8 py-4 bg-white text-primary font-bold rounded-lg flex items-center gap-2 hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
              <ArrowRight size={24} />
            </motion.button>
          </motion.div>

          {/* Right - Countdown */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center text-white">
              <p className="text-lg opacity-90 mb-4">Registration closes in</p>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { value: days, label: 'Days' },
                  { value: hours, label: 'Hours' },
                  { value: minutes, label: 'Minutes' },
                  { value: seconds, label: 'Seconds' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/20 backdrop-blur rounded-lg p-4 border-2 border-white/30"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="text-3xl font-bold mb-2"
                      key={item.value}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                    >
                      {String(item.value).padStart(2, '0')}
                    </motion.div>
                    <div className="text-xs opacity-90">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTABanner
