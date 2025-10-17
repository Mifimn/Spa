import { useState, useEffect } from 'react';
// Import the animation component from the library
import { Fade } from 'react-awesome-reveal';

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allCategories = ['all', 'Dental Services', 'IV Drips'];

  const serviceCategories = [
    {
      category: 'Dental Services',
      services: [
        {
          name: 'Scaling And Polishing',
          description: 'Professional teeth cleaning and polishing for a brighter smile',
          image: '/images/scaling_and_polishing.jpg',
          whatsappLink: 'https://wa.link/kcgq4j'
        },
        {
          name: 'Teeth Whitening',
          description: 'Advanced whitening treatment for radiant, white teeth',
          image: '/images/teeth_whitening.jpg',
          whatsappLink: 'https://wa.link/y8oc2m'
        },
        {
          name: 'Tooth Gems',
          description: 'Decorative dental jewelry to enhance your smile',
          image: '/images/tooth_gems.jpeg',
          whatsappLink: 'https://wa.link/2jl39h'
        },
        {
          name: 'Gum Treatment',
          description: 'Comprehensive care for healthy gums',
          image: '/images/gum_treatment.jpg',
          whatsappLink: 'https://wa.link/ko3477'
        },
        {
          name: 'Fluoride Therapy',
          description: 'Strengthen tooth enamel and prevent cavities',
          image: '/images/fluoride_therapy.webp',
          whatsappLink: 'https://wa.link/da4azz'
        },
        {
          name: 'Fashion Braces',
          description: 'Stylish decorative braces to enhance your look',
          image: '/images/fashion_braces.jpeg',
          whatsappLink: 'https://wa.link/507i5z'
        }
      ]
    },
    {
      category: 'IV Drips',
      services: [
        {
          name: 'Detox IV',
          description: 'Full body detoxification and cleansing',
          image: '/images/detox_iv.jpg',
          whatsappLink: 'https://wa.link/q9y73g'
        },
        {
          name: 'Energy Booster',
          description: 'Increase energy and vitality',
          image: '/images/energy_booster.jpeg',
          whatsappLink: 'https://wa.link/o11hqh'
        },
        {
          name: 'Immune Booster',
          description: 'Strengthen your immune system',
          image: '/images/immune_booster.jpeg',
          whatsappLink: 'https://wa.link/dm505r'
        },
        {
          name: 'Radiance IV',
          description: 'Skin brightening and beauty enhancement',
          image: '/images/radiance_iv.jpeg',
          whatsappLink: 'https://wa.link/0hvy98'
        }
      ]
    }
  ];

  const filteredServiceCategories = serviceCategories
    .map(category => {
      const filteredServices = category.services.filter(service => {
        const matchesSearch =
          service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
      });

      return {
        ...category,
        services: filteredServices
      };
    })
    .filter(category => {
      const matchesCategory = selectedCategory === 'all' || category.category === selectedCategory;
      return matchesCategory && category.services.length > 0;
    });

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-20 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1920&q=80"
            alt="Services background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-sage-primary/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <Fade direction="down" triggerOnce>
            <h1 className="text-5xl font-bold mb-4">Home Delivery Services</h1>
            <p className="text-xl mb-4">Professional dental and wellness treatments delivered to your doorstep</p>
            <p className="text-lg italic">Available for home delivery only - Book now!</p>
          </Fade>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white border-b sticky top-[80px] z-40">
        <Fade direction="down" triggerOnce>
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="w-full md:w-96">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-primary"
                  />
                  <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {allCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-semibold transition text-sm ${
                      selectedCategory === category
                        ? 'bg-brand-gradient text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'All Services' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-cream-light">
        <div className="max-w-7xl mx-auto px-4">
          {filteredServiceCategories.length === 0 ? (
            <Fade triggerOnce>
              <div className="text-center py-16">
                <p className="text-gray-500 text-xl">No services found matching your search.</p>
              </div>
            </Fade>
          ) : (
            filteredServiceCategories.map((category, catIdx) => (
              <div key={catIdx} className="mb-16">
                <Fade direction="down" triggerOnce>
                  <h2 className="text-3xl font-bold mb-8 text-sage-primary border-b-2 border-sage-primary pb-2">
                    {category.category}
                  </h2>
                </Fade>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, svcIdx) => (
                    // Staggered animation for each service card
                    <Fade key={svcIdx} direction="up" delay={svcIdx * 100} triggerOnce>
                      <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden flex flex-col h-full">
                        <div className="h-48 overflow-hidden">
                          <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                          <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>

                          <a
                            href={service.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center w-full bg-brand-gradient text-white px-4 py-2 rounded-lg hover:opacity-90 transition font-semibold mt-auto"
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </Fade>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Home Delivery Notice */}
      <section className="bg-sage-primary text-white py-12">
        <Fade direction="up" triggerOnce>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Home Delivery Service</h2>
            <p className="text-lg mb-6">All our services are exclusively available for home delivery. Experience professional care in the comfort of your own home.</p>

            <a
              href="https://wa.link/j8q708"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-sage-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cream-light transition"
            >
              Book Your Appointment Now
            </a>
          </div>
        </Fade>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-brand-gradient text-white p-4 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}