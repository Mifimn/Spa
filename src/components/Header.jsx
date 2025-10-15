
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location]);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsLoading(true);
  };

  return (
    <>
      {/* Loading Bar */}
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gold-gradient z-[100] animate-pulse">
          <div className="h-full bg-gold-primary animate-[shimmer_1s_ease-in-out_infinite]" 
               style={{
                 animation: 'shimmer 0.8s ease-in-out',
                 background: 'linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)',
                 backgroundSize: '200% 100%',
               }}>
          </div>
        </div>
      )}

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" onClick={handleLinkClick} className="flex items-center">
              <h1 className="text-2xl font-bold bg-gold-gradient bg-clip-text text-transparent">
                VCP Laser & Aesthetics
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" onClick={handleLinkClick} className="text-gray-700 hover:text-gold-primary transition">Home</Link>
              <Link to="/services" onClick={handleLinkClick} className="text-gray-700 hover:text-gold-primary transition">Services</Link>
              <Link to="/portfolio" onClick={handleLinkClick} className="text-gray-700 hover:text-gold-primary transition">Portfolio</Link>
              <Link to="/blog" onClick={handleLinkClick} className="text-gray-700 hover:text-gold-primary transition">Blog</Link>
              <Link to="/contact" onClick={handleLinkClick} className="text-gray-700 hover:text-gold-primary transition">Contact</Link>
            </nav>

            <button className="hidden md:block bg-gold-gradient text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Book Appointment
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gold-primary"
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
              <Link to="/" onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-gold-primary">Home</Link>
              <Link to="/services" onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-gold-primary">Services</Link>
              <Link to="/portfolio" onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-gold-primary">Portfolio</Link>
              <Link to="/blog" onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-gold-primary">Blog</Link>
              <Link to="/contact" onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-gold-primary">Contact</Link>
              <button className="w-full bg-gold-gradient text-white px-6 py-3 rounded-lg font-semibold mt-2">
                Book Appointment
              </button>
            </nav>
          )}
        </div>
      </header>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
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
