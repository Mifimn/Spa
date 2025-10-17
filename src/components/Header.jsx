import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [location]);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsLoading(true);
  };

  return (
    <>
      {/* Loading Animation */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold bg-brand-gradient bg-clip-text text-transparent animate-pulse">
              LCA
            </h1>
            <div className="mt-4 flex justify-center space-x-2">
              <div className="w-3 h-3 bg-sage-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-3 h-3 bg-sage-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-sage-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      )}

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" onClick={handleLinkClick} className="flex items-center">
              <div>
                <h1 className="text-2xl font-bold bg-brand-gradient bg-clip-text text-transparent">
                  Life Care Aesthetics
                </h1>
                <p className="text-xs text-sage-primary italic">Enhance Your Natural Beauty</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" onClick={handleLinkClick} className="text-gray-700 hover:text-sage-primary transition">Home</Link>
              <Link to="/services" onClick={handleLinkClick} className="text-gray-700 hover:text-sage-primary transition">Services</Link>
              <Link to="/portfolio" onClick={handleLinkClick} className="text-gray-700 hover:text-sage-primary transition">Portfolio</Link>
              <Link to="/blog" onClick={handleLinkClick} className="text-gray-700 hover:text-sage-primary transition">Blog</Link>
              <Link to="/contact" onClick={handleLinkClick} className="text-gray-700 hover:text-sage-primary transition">Contact</Link>
            </nav>

            {/* UPDATED: Desktop Book Appointment Button is now a Link */}
            <Link
              to="/services" // Added link destination
              onClick={handleLinkClick}
              className="hidden md:block bg-brand-gradient text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Book Appointment
            </Link>

            {/* Mobile Menu Button (unchanged as it controls the menu) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-sage-primary"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <nav className="md:hidden pb-4 space-y-2 animate-fadeIn">
              <Link to="/" onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-sage-primary">Home</Link>
              <Link to="/services" onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-sage-primary">Services</Link>
              <Link to="/portfolio" onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-sage-primary">Portfolio</Link>
              <Link to="/blog" onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-sage-primary">Blog</Link>
              <Link to="/contact" onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-sage-primary">Contact</Link>

              {/* UPDATED: Mobile Book Appointment Button is now a Link */}
              <Link
                to="/services" // Added link destination
                onClick={handleLinkClick}
                className="block w-full text-center bg-brand-gradient text-white px-6 py-3 rounded-lg font-semibold mt-2"
              >
                Book Appointment
              </Link>
            </nav>
          )}
        </div>
      </header>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}