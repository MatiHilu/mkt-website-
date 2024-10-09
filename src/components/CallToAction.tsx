import React from 'react'
import { ArrowRight } from 'lucide-react'

const CallToAction = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Supercharge Your Digital Marketing?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Let's work together to create a tailored strategy that drives results for your business.</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold flex items-center mx-auto hover:bg-blue-100 transition duration-300">
          Get Your Free Consultation
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  )
}

export default CallToAction