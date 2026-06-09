'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const HowToApply = () => {
  const steps = [
    {
      number: 1,
      title: 'Register',
      description: 'Create your account and complete your profile',
    },
    {
      number: 2,
      title: 'Aptitude Test',
      description: 'Take our online assessment to understand your level',
    },
    {
      number: 3,
      title: 'Interview',
      description: 'Speak with our counselors about your goals',
    },
    {
      number: 4,
      title: 'Start Learning',
      description: 'Begin your journey with world-class instructors',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cardBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">How to Apply</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple 4-step process to start your IT career journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <motion.div
            className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
          />

          <div className="grid md:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Step Circle */}
                <motion.div
                  className="w-20 h-20 mx-auto mb-4 relative"
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Outer glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-full opacity-20"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {/* Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {step.number}
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-textDark mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>

                {/* Check Mark */}
                <motion.div
                  className="mt-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle size={24} className="mx-auto text-accent" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToApply
