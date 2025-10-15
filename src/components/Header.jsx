
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">VCP Laser & Aesthetics</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-instagram-blue transition">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-instagram-blue transition">Services</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-instagram-blue transition">Portfolio</Link>
            <Link to="/blog" className="text-gray-700 hover:text-instagram-blue transition">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-instagram-blue transition">Contact</Link>
          </nav>

          <button className="hidden md:block bg-instagram-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
            Book Appointment
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-instagram-blue">Home</Link>
            <Link to="/services" className="block py-2 text-gray-700 hover:text-instagram-blue">Services</Link>
            <Link to="/portfolio" className="block py-2 text-gray-700 hover:text-instagram-blue">Portfolio</Link>
            <Link to="/blog" className="block py-2 text-gray-700 hover:text-instagram-blue">Blog</Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-instagram-blue">Contact</Link>
            <button className="w-full bg-instagram-blue text-white px-6 py-3 rounded-lg font-semibold mt-2">
              Book Appointment
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
