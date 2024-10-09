import React from 'react'
import { motion } from 'framer-motion'
import { Search, BarChart, Mail, Globe, TrendingUp, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  { icon: Search, title: 'SEO Optimization' },
  { icon: BarChart, title: 'Social Media Marketing' },
  { icon: Mail, title: 'Email Marketing' },
  { icon: Globe, title: 'Content Strategy' },
  { icon: TrendingUp, title: 'PPC Advertising' },
  { icon: Users, title: 'Influencer Marketing' }
]

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <service.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Learn More About Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview