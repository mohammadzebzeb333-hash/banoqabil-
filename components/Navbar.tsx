'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">BQ</span>
            </div>
            <span className="text-xl font-bold text-primary hidden sm:inline">Bano Qabil</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-textDark hover:text-accent">Home</a>
            <a href="#courses" className="text-textDark hover:text-accent">Courses</a>
            <a href="#why" className="text-textDark hover:text-accent">About</a>
            <a href="#contact" className="text-textDark hover:text-accent">Contact</a>
          </div>
          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold">
            Apply Now
          </button>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
