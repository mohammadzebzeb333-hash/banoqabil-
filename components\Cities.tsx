'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const Cities = () => {
  const cities = [
    { name: 'Karachi', x: '35%', y: '75%' },
    { name: 'Lahore', x: '45%', y: '30%' },
    { name: 'Islamabad', x: '50%', y: '15%' },
    { name: 'Peshawar', x: '55%', y: '5%' },
    { name: 'Swabi', x: '58%', y: '8%' },
    { name: 'Multan', x: '40%', y: '50%' },
    { name: 'Faisalabad', x: '48%', y: '40%' },
  ]

  return (
    <section id="cities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">15+ Cities Covered</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Available across Pakistan - Find a center near you
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          className="relative bg-gradient-to-br from-cardBg to-white rounded-2xl p-8 border-2 border-accent/20 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Map Background */}
          <div className="absolute inset-0 opacity-5 text-6xl flex items-center justify-center">
            🇵🇰
          </div>

          {/* Cities Grid */}
          <div className="relative h-96 md:h-96">
            {cities.map((city, index) => (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  left: city.x,
                  top: city.y,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.3 }}
              >
                {/* Pin */}
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.2 }}
                >
                  <MapPin size={24} />
                </motion.div>

                {/* City Label */}
                <motion.div
                  className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-textDark text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap shadow-lg"
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  {city.name}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cities List */}
        <motion.div
          className="grid md:grid-cols-3 lg:grid-cols-7 gap-3 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {cities.map((city, index) => (
            <motion.div
              key={index}
              className="bg-cardBg border-2 border-accent rounded-lg p-4 text-center font-semibold text-primary hover:bg-accent hover:text-white transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {city.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Cities
