import React from 'react'
import { motion } from 'framer-motion'
import { Search, BarChart, Mail, Globe, TrendingUp, Users } from 'lucide-react'

const services = [
  { icon: Search, title: 'SEO Optimization', description: 'Boost your online visibility and drive organic traffic to your website through advanced SEO techniques and strategies.' },
  { icon: BarChart, title: 'Social Media Marketing', description: 'Engage your audience and build brand awareness across social platforms with tailored content and targeted campaigns.' },
  { icon: Mail, title: 'Email Marketing', description: 'Create targeted campaigns that convert leads into loyal customers using personalized and automated email strategies.' },
  { icon: Globe, title: 'Content Strategy', description: 'Develop compelling content that resonates with your target audience and drives engagement across all digital channels.' },
  { icon: TrendingUp, title: 'PPC Advertising', description: 'Maximize your ROI with data-driven pay-per-click campaigns across search engines and social media platforms.' },
  { icon: Users, title: 'Influencer Marketing', description: 'Leverage the power of influencers to expand your reach and build authentic connections with your target audience.' }
]

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Services