'use client'

import { motion } from 'framer-motion'

const Cities = () => {
  const cities = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Multan', 'Faisalabad']

  return (
    <section id="cities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center gradient-text mb-12">15+ Cities Covered</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cities.map((city, i) => (
            <motion.div
              key={i}
              className="bg-cardBg border-2 border-accent rounded-lg p-4 text-center font-bold text-primary hover:bg-accent hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
            >
              📍 {city}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cities
