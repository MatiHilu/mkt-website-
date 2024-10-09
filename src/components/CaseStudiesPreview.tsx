import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const caseStudies = [
  {
    title: 'E-commerce Revenue Boost',
    description: 'Increased online sales by 150% through targeted PPC campaigns and conversion rate optimization.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'B2B Lead Generation',
    description: 'Generated 500+ qualified leads for a SaaS company using content marketing and LinkedIn advertising.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Brand Awareness Campaign',
    description: 'Increased social media following by 200% and engagement rate by 75% for a lifestyle brand.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
]

const CaseStudiesPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <Link to="/case-studies" className="text-blue-600 hover:text-blue-800 font-semibold">Read More</Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/case-studies" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesPreview