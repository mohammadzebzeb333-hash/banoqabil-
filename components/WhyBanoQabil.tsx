'use client'

import { motion } from 'framer-motion'
import { Zap, Users, Rocket, Award } from 'lucide-react'

const WhyBanoQabil = () => {
  const features = [
    { icon: Zap, title: '100% Free', desc: 'Quality education for everyone' },
    { icon: Users, title: 'Expert Mentors', desc: 'Learn from industry professionals' },
    { icon: Rocket, title: 'Live Projects', desc: 'Build your real portfolio' },
    { icon: Award, title: 'Job Placement', desc: '85% placement rate' },
  ]

  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center gradient-text mb-12">Why Bano Qabil?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={i}
                className="bg-cardBg rounded-2xl p-8 text-center"
                whileHover={{ y: -10 }}
              >
                <Icon size={40} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyBanoQabil
