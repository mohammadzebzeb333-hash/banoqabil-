'use client'

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="contact" className="bg-textDark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Bano Qabil Pro</h3>
            <p className="text-gray-400">Empowering Pakistani youth with free IT education</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#courses">Courses</a></li>
              <li><a href="#cities">Cities</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2"><Phone size={18} /> +92 300 123 4567</p>
              <p className="flex items-center gap-2"><Mail size={18} /> info@banoqabil.pk</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex justify-between items-center">
          <p className="text-gray-400">© 2024 Bano Qabil Pro. All rights reserved.</p>
          <div className="flex gap-4">
            <Facebook size={20} className="cursor-pointer hover:text-accent" />
            <Twitter size={20} className="cursor-pointer hover:text-accent" />
            <Instagram size={20} className="cursor-pointer hover:text-accent" />
            <Linkedin size={20} className="cursor-pointer hover:text-accent" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
