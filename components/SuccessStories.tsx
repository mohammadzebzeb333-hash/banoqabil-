'use client'

import { motion } from 'framer-motion'

const SuccessStories = () => {
  const stories = [
    { name: 'Ahmad', role: 'Web Dev', income: '$1,500/mo' },
    { name: 'Fatima', role: 'Designer', income: '$1,200/mo' },
    { name: 'Ali', role: 'Marketer', income: '$800/mo' },
  ]

  return (
    <section className="py-20 bg-cardBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center gradient-text mb-12">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg"
              whileHover={{ y: -10 }}
            >
              <p className="text-4xl mb-4">👨‍💼</p>
              <h3 className="text-xl font-bold">{s.name}</h3>
              <p className="text-accent font-bold">{s.role}</p>
              <p className="text-primary font-bold text-lg mt-4">{s.income}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
