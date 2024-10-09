import React from 'react'
import { motion } from 'framer-motion'

const caseStudies = [
  {
    title: 'E-commerce Revenue Boost',
    description: 'Increased online sales by 150% through targeted PPC campaigns and conversion rate optimization for a leading fashion retailer.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    results: ['150% increase in online sales', '200% ROI on ad spend', '40% improvement in conversion rate']
  },
  {
    title: 'B2B Lead Generation',
    description: 'Generated 500+ qualified leads for a SaaS company using content marketing and LinkedIn advertising strategies.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    results: ['500+ qualified leads generated', '35% increase in demo requests', '20% reduction in cost per lead']
  },
  {
    title: 'Brand Awareness Campaign',
    description: 'Increased social media following by 200% and engagement rate by 75% for a lifestyle brand through influencer partnerships and viral content.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    results: ['200% increase in social media following', '75% boost in engagement rate', '50% increase in website traffic']
  },
  {
    title: 'Local SEO Domination',
    description: 'Achieved top 3 Google rankings for 50+ local keywords, resulting in a 300% increase in organic traffic for a multi-location dental practice.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    results: ['Top 3 rankings for 50+ local keywords', '300% increase in organic traffic', '80% increase in new patient inquiries']
  }
]

const CaseStudies = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Case Studies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <img src={study.image} alt={study.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{study.title}</h2>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <h3 className="text-lg font-semibold mb-2">Key Results:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {study.results.map((result, idx) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default CaseStudies