import React from 'react'
import Hero from '../components/Hero'
import ServicesOverview from '../components/ServicesOverview'
import CaseStudiesPreview from '../components/CaseStudiesPreview'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'
import CallToAction from '../components/CallToAction'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ServicesOverview />
      <CaseStudiesPreview />
      <Testimonials />
      <Stats />
      <CallToAction />
    </motion.div>
  )
}

export default Home