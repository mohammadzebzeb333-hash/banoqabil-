'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  const stats = [
    { number: '50,000+', label: 'Students' },
    { number: '15+', label: 'Cities' },
    { number: '85%', label: 'Job Rate' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen pt-20 pb-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold gradient-text leading-tight"
              variants={itemVariants}
            >
              Free IT Skills Program for Pakistani Youth
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Learn in-demand skills from industry experts and get hired by top companies. Start your journey today!
            </motion.p>

            {/* Buttons */}
            <motion.div className="flex gap-4" variants={itemVariants}>
              <button className="btn-primary flex items-center gap-2">
                Apply Now
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Play size={20} />
                Watch Video
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-cardBg rounded-lg border-l-4 border-accent"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div
            className="relative h-96 md:h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full">
              {/* Floating elements */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-2xl opacity-20"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-24 h-24 bg-accent rounded-full opacity-30"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                💻
              </motion.div>
              <motion.div
                className="absolute top-20 left-5 text-5xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                🎯
              </motion.div>
              <motion.div
                className="absolute bottom-20 right-10 text-5xl"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
              >
                ⭐
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
