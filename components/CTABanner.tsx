'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CTABanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold">Admissions Open Now!</h2>
          <p className="text-xl opacity-90">Limited seats available. Batch 2026</p>
          <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg flex items-center gap-2 mx-auto hover:shadow-2xl transition-all">
            Apply Now <ArrowRight size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default CTABanner
