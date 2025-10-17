import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1920&q=80" 
            alt="Dental care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-sage-primary/50"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Enhance Your Natural Beauty</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Life Care Aesthetics offers premium dental and wellness services delivered to your home.</p>
          <button className="bg-brand-gradient text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition">
            Book Home Service Now
          </button>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Home Service</h3>
              <p className="text-gray-600">Professional care at your doorstep</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Expert Care</h3>
              <p className="text-gray-600">Experienced professionals</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Flexible Scheduling</h3>
              <p className="text-gray-600">Book at your convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-cream-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-sage-primary">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: 'Teeth Whitening', 
                desc: 'Professional whitening for a brighter smile',
                img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
              },
              { 
                name: 'Scaling & Polishing', 
                desc: 'Deep cleaning for healthy teeth',
                img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80'
              },
              { 
                name: 'IV Drips', 
                desc: 'Wellness and beauty infusions',
                img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80'
              },
              { 
                name: 'Tooth Gems', 
                desc: 'Decorative dental jewelry',
                img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
                <img src={service.img} alt={service.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <Link to="/services" className="text-sage-primary font-semibold hover:underline">Learn More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-sage-primary">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', text: 'Amazing home service! The teeth whitening was professional and convenient.' },
              { name: 'Jennifer L.', text: 'Nurse Blessing was incredible. I feel confident and beautiful!' },
              { name: 'Michael R.', text: 'Outstanding service from booking to follow-up. Highly recommend!' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-cream-light p-6 rounded-lg">
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

      {/* Meet Nurse Blessing */}
      <section className="py-16 bg-cream-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <img 
              src="/images/blessing.jpg" 
              alt="Nurse Blessing"
              className="w-64 h-64 rounded-lg object-cover shadow-lg"
            />
            <div>
              <h2 className="text-4xl font-bold mb-4 text-sage-primary">Meet Nurse Blessing</h2>
              <p className="text-gray-700 text-lg mb-4">With extensive experience in dental and aesthetic care, Nurse Blessing brings expertise and compassion to every home visit. Committed to enhancing your natural beauty with professional treatments delivered right to your doorstep.</p>
              <Link to="/contact" className="inline-block bg-brand-gradient text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Enhance Your Natural Beauty?</h2>
          <p className="text-xl mb-8">Book your home service today!</p>
          <button className="bg-white text-sage-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cream-light transition">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
}