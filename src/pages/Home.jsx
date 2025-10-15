import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Doctor Led. Confidently You.</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">VCP Laser & Aesthetics offers premier medical aesthetics and wellness in a safe, professional environment.</p>
          <button className="bg-instagram-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition">
            Book a Consultation
          </button>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Doctor Led</h3>
              <p className="text-gray-600">Medical professionals you can trust</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Certified Specialists</h3>
              <p className="text-gray-600">Highly trained and experienced</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Candela Partner</h3>
              <p className="text-gray-600">Premium equipment and technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Botox', desc: 'Smooth wrinkles and fine lines with precision injections' },
              { name: 'Morpheus8', desc: 'Revolutionary skin tightening and contouring' },
              { name: 'Dental Aesthetics', desc: 'Enhance your smile with professional care' },
              { name: 'Advanced Facials', desc: 'Customized treatments for radiant skin' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="w-12 h-12 bg-gold-gradient rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link to="/services" className="text-gold-gradient font-semibold hover:underline">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', text: 'The best aesthetic clinic I\'ve ever visited. Professional, caring, and amazing results!' },
              { name: 'Jennifer L.', text: 'Dr. Smith is incredible. I feel confident and beautiful after my treatments.' },
              { name: 'Michael R.', text: 'Outstanding service from consultation to follow-up. Highly recommend!' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Doctor */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 bg-gray-300 rounded-lg flex-shrink-0"></div>
            <div>
              <h2 className="text-4xl font-bold mb-4">Meet Dr. Smith</h2>
              <p className="text-gray-700 text-lg mb-4">With over 15 years of experience in aesthetic medicine, Dr. Smith brings expertise and artistry to every treatment. Board-certified and passionate about helping clients achieve their aesthetic goals, Dr. Smith leads our team with a commitment to safety, natural results, and personalized care.</p>
              <Link to="/contact" className="inline-block bg-gold-gradient text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Latest From Our Blog</h2>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gray-300 h-64 md:h-auto"></div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">The Ultimate Guide to Morpheus8 Treatment</h3>
                <p className="text-gray-600 mb-4">Discover how this revolutionary treatment can transform your skin with minimal downtime and maximum results...</p>
                <Link to="/blog" className="text-gold-gradient font-semibold hover:underline">Read More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2023 VCP Laser & Aesthetics. All rights reserved.</p>
          <p>Designed by mifimn</p>
        </div>
      </footer>
    </div>
  );
}