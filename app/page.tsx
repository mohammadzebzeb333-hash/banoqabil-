'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Courses from '@/components/Courses'
import WhyBanoQabil from '@/components/WhyBanoQabil'
import HowToApply from '@/components/HowToApply'
import Cities from '@/components/Cities'
import SuccessStories from '@/components/SuccessStories'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import MobileApplyButton from '@/components/MobileApplyButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Courses />
      <WhyBanoQabil />
      <HowToApply />
      <Cities />
      <SuccessStories />
      <CTABanner />
      <Footer />
      <MobileApplyButton />
    </main>
  )
}
