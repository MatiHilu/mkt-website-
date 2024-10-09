import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "DigitalPulse transformed our online presence. Their SEO strategies increased our organic traffic by 200% in just 6 months!",
    author: "Sarah Johnson",
    company: "TechStart Inc."
  },
  {
    quote: "The social media campaign DigitalPulse created for us was a game-changer. We saw a 150% increase in engagement and a significant boost in sales.",
    author: "Michael Chen",
    company: "FashionForward"
  },
  {
    quote: "Working with DigitalPulse has been an incredible experience. Their team's expertise and dedication have helped us achieve our marketing goals and beyond.",
    author: "Emily Rodriguez",
    company: "GreenEats Co."
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials