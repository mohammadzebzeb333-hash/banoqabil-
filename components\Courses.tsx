'use client'

import { motion } from 'framer-motion'
import { Code2, Sparkles, Palette, TrendingUp, Briefcase, BarChart3, Star } from 'lucide-react'
import { useState } from 'react'

const Courses = () => {
  const courses = [
    {
      icon: Code2,
      title: 'Web Development',
      duration: '3 Months',
      modules: '24 Modules',
      salary: '50K-150K/month',
    },
    {
      icon: Sparkles,
      title: 'AI & ChatGPT',
      duration: '3 Months',
      modules: '18 Modules',
      salary: '60K-180K/month',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      duration: '3 Months',
      modules: '20 Modules',
      salary: '40K-120K/month',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      duration: '3 Months',
      modules: '22 Modules',
      salary: '45K-140K/month',
    },
    {
      icon: Briefcase,
      title: 'Freelancing Mastery',
      duration: '2 Months',
      modules: '16 Modules',
      salary: '30K-100K/month',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      duration: '3 Months',
      modules: '25 Modules',
      salary: '70K-200K/month',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-focused curriculum designed to make you job-ready
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <CourseCard key={index} course={course} Icon={Icon} variants={cardVariants} />
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function CourseCard({ course, Icon, variants }: any) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative bg-cardBg rounded-2xl p-6 border-2 border-transparent hover:border-accent transition-all duration-300 cursor-pointer overflow-hidden"
      variants={variants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      {/* Background Glow */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all"
          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
        >
          <Icon size={32} className="text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold text-textDark mb-2">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{course.duration}</p>
        <p className="text-sm text-primary font-semibold mb-4">{course.modules}</p>

        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-accent text-accent" />
          ))}
        </div>

        {/* Salary - Shows on Hover */}
        <motion.div
          className="pt-4 border-t border-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm text-gray-600">Average Salary</p>
          <p className="text-lg font-bold text-primary">{course.salary}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Courses
