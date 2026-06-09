'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: 'About',
      links: ['About Us', 'Our Mission', 'Our Team', 'Careers'],
    },
    {
      title: 'Quick Links',
      links: ['Courses', 'Cities', 'Blog', 'FAQ'],
    },
    {
      title: 'Courses',
      links: [
        'Web Development',
        'AI & ChatGPT',
        'Graphic Design',
        'Digital Marketing',
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ]

  return (
    <footer id="contact" className="bg-textDark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">BQ</span>
              </div>
              <span className="text-2xl font-bold">Bano Qabil Pro</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Pakistani youth with free, world-class IT education and job placement support.
            </p>
          </motion.div>

          {/* Footer Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-lg mb-4 text-accent">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-accent transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-6 mb-8 border border-primary/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <Phone size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Call Us</p>
                <p className="font-semibold">+92 (0)300 1234567</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <Mail size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold">info@banoqabil.pk</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <MapPin size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="font-semibold">Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8" />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {currentYear} Bano Qabil Pro. All rights reserved. | Privacy Policy | Terms of Service
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
