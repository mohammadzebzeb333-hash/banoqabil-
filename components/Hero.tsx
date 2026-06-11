'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            Free IT Skills Program for Pakistani Youth
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn in-demand skills from industry experts and get hired
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn-primary flex items-center gap-2">
              Apply Now <ArrowRight size={20} />
            </button>
            <button className="btn-secondary">Watch Video</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
