'use client'

import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

const SuccessStories = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const stories = [
    {
      name: 'Ahmad Hassan',
      role: 'Web Developer',
      income: '$1,500/month',
      image: '👨‍💼',
      story: 'From zero coding knowledge to earning on Upwork. The mentorship was incredible!',
      rating: 5,
    },
    {
      name: 'Fatima Khan',
      role: 'Graphic Designer',
      income: '$1,200/month',
      image: '👩‍🎨',
      story: 'Now running my own design agency with clients from 5 countries!',
      rating: 5,
    },
    {
      name: 'Ali Raza',
      role: 'Digital Marketer',
      income: '$800/month',
      image: '👨‍💼',
      story: 'Got hired at a startup and now managing their entire marketing strategy.',
      rating: 5,
    },
    {
      name: 'Zainab Ahmed',
      role: 'Data Analyst',
      income: '$2,000/month',
      image: '👩‍💼',
      story: 'Data skills opened doors I never thought possible. Thank you Bano Qabil!',
      rating: 5,
    },
    {
      name: 'Hassan Khan',
      role: 'Freelancer',
      income: '$1,800/month',
      image: '👨‍💻',
      story: 'Started freelancing and now have more projects than I can handle!',
      rating: 5,
    },
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-cardBg to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real students, real results, real success
          </p>
        </motion.div>

        {/* Stories Carousel */}
        <div className="relative group">
          <motion.div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {stories.map((story, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-72 bg-white rounded-2xl p-6 border-2 border-accent/20 hover:border-accent transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Header with Image and Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{story.image}</div>
                  <div>
                    <h3 className="font-bold text-lg text-textDark">{story.name}</h3>
                    <p className="text-sm text-accent font-semibold">{story.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Story */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  "{story.story}"
                </p>

                {/* Income */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600 mb-1">Current Income</p>
                  <p className="text-2xl font-bold gradient-text">{story.income}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
