import React from 'react'
import { Search, BarChart, Mail, Globe } from 'lucide-react'

const services = [
  { icon: Search, title: 'SEO Optimization', description: 'Boost your online visibility and drive organic traffic to your website.' },
  { icon: BarChart, title: 'Social Media Marketing', description: 'Engage your audience and build brand awareness across social platforms.' },
  { icon: Mail, title: 'Email Marketing', description: 'Create targeted campaigns that convert leads into loyal customers.' },
  { icon: Globe, title: 'Content Strategy', description: 'Develop compelling content that resonates with your target audience.' },
]

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services