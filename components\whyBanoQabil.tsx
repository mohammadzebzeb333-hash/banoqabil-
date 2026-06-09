'use client'

import { motion } from 'framer-motion'
import { Zap, Users, Rocket, Award } from 'lucide-react'

const WhyBanoQabil = () => {
  const features = [
    {
      icon: Zap,
      title: '100% Free',
      description: 'No hidden fees. Quality education accessible to everyone.',
    },
    {
      icon: Users,
      title: 'Industry Mentors',
      description: 'Learn directly from professionals working at top companies.',
    },
    {
      icon: Rocket,
      title: 'Live Projects',
      description: 'Work on real-world projects and build your portfolio.',
    },
    {
      icon: Award,
      title: 'Job Placement',
      description: '85% students get placed within 3 months of completion.',
    },
  ]

  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Why Bano Qabil Pro?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience world-class IT education designed for your success
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="group bg-cardBg rounded-2xl p-8 border-2 border-transparent hover:border-accent transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                >
                  <Icon size={32} className="text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-textDark mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Decorative bottom line */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-6"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyBanoQabil
