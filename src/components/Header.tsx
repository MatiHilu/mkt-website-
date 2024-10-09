import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Zap className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-800">DigitalPulse</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-600 transition duration-300">Services</Link>
          <Link to="/case-studies" className="text-gray-600 hover:text-blue-600 transition duration-300">Case Studies</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition duration-300">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white py-2"
        >
          <Link to="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/services" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/case-studies" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
          <Link to="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </motion.div>
      )}
    </header>
  )
}

export default Header