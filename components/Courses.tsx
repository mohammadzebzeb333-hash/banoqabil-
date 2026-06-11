'use client'

import { motion } from 'framer-motion'
import { Code2, Sparkles, Palette, TrendingUp } from 'lucide-react'

const Courses = () => {
  const courses = [
    { icon: Code2, title: 'Web Development', duration: '3 Months', salary: '50K-150K/month' },
    { icon: Sparkles, title: 'AI & ChatGPT', duration: '3 Months', salary: '60K-180K/month' },
    { icon: Palette, title: 'Graphic Design', duration: '3 Months', salary: '40K-120K/month' },
    { icon: TrendingUp, title: 'Digital Marketing', duration: '3 Months', salary: '45K-140K/month' },
  ]

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center gradient-text mb-12">Our Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => {
            const Icon = course.icon
            return (
              <motion.div
                key={i}
                className="bg-cardBg rounded-2xl p-6 border-2 border-accent/20 hover:border-accent transition-all"
                whileHover={{ y: -10 }}
              >
                <Icon size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{course.duration}</p>
                <p className="text-primary font-bold">{course.salary}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Courses
