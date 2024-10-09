import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Clients Served' },
  { value: '50M+', label: 'Leads Generated' },
  { value: '200%', label: 'Average ROI' },
  { value: '10+', label: 'Years of Experience' }
]

const Stats = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats