import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Zap } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">DigitalPulse</span>
            </div>
            <p className="text-gray-400">Elevating brands in the digital realm.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Digital Street</p>
            <p className="text-gray-400">Techville, TX 12345</p>
            <p className="text-gray-400">contact@digitalpulse.com</p>
            <p className="text-gray-400">(555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 DigitalPulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer