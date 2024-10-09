import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Zap } from 'lucide-react'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About DigitalPulse</h1>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2015, DigitalPulse was born out of a passion for helping businesses thrive in the digital age. Our founders, seasoned digital marketing experts, recognized the need for a data-driven, results-oriented approach to digital marketing that could adapt to the rapidly evolving online landscape.
          </p>
          <p className="text-gray-600">
            Since then, we've grown into a team of over 50 digital marketing specialists, each bringing unique expertise and insights to our clients' campaigns. Our commitment to innovation, transparency, and measurable results has made us a trusted partner for businesses of all sizes, from startups to Fortune 500 companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">Our diverse team of specialists brings a wealth of experience across all digital marketing disciplines.</p>
          </div>
          <div className="text-center">
            <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Award-Winning</h3>
            <p className="text-gray-600">Recognized for our innovative campaigns and outstanding results in the industry.</p>
          </div>
          <div className="text-center">
            <Zap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data-Driven</h3>
            <p className="text-gray-600">We leverage advanced analytics and AI to deliver measurable, impactful results for our clients.</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At DigitalPulse, our mission is to empower businesses to reach their full potential in the digital world. We believe that every company, regardless of size or industry, deserves a strong and effective online presence.
          </p>
          <p className="text-gray-600">
            Through our innovative strategies, cutting-edge technologies, and passionate team, we aim to drive meaningful growth for our clients, helping them connect with their audience, build brand loyalty, and achieve sustainable success in an ever-changing digital landscape.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default About