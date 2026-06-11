'use client'

import { motion } from 'framer-motion'

const HowToApply = () => {
  const steps = [
    { num: 1, title: 'Register', desc: 'Create your account' },
    { num: 2, title: 'Test', desc: 'Take aptitude test' },
    { num: 3, title: 'Interview', desc: 'Talk with counselor' },
    { num: 4, title: 'Start', desc: 'Begin learning' },
  ]

  return (
    <section className="py-20 bg-cardBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center gradient-text mb-12">How to Apply</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                {s.num}
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowToApply
