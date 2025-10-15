
import { useState } from 'react';

export default function Services() {
  const [expandedService, setExpandedService] = useState(null);

  const serviceCategories = [
    {
      category: 'Aesthetic Injectables',
      services: [
        {
          name: 'Botox',
          price: 'Starting from ₦18,500/unit',
          description: 'Reduce fine lines and wrinkles with FDA-approved neurotoxin injections.',
          details: 'Botox works by temporarily relaxing facial muscles that cause wrinkles. Results typically last 3-4 months. Treatment takes 10-15 minutes with no downtime.',
          image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80'
        },
        {
          name: 'Dermal Fillers',
          price: 'Starting from ₦1,000,000/syringe',
          description: 'Restore volume and contour with hyaluronic acid fillers.',
          details: 'Our range of premium fillers can enhance lips, cheeks, and smooth deep lines. Results are immediate and can last 6-18 months depending on the product.',
          image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80'
        },
        {
          name: 'Kybella',
          price: 'Starting from ₦1,230,000/session',
          description: 'Non-surgical double chin reduction treatment.',
          details: 'FDA-approved injectable that destroys fat cells under the chin. Most patients need 2-4 treatments spaced 4-6 weeks apart.',
          image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=80'
        }
      ]
    },
    {
      category: 'Non-Surgical Lifting & Tightening',
      services: [
        {
          name: 'Morpheus8',
          price: 'Starting from ₦1,845,000/session',
          description: 'Revolutionary microneedling with radiofrequency for skin tightening.',
          details: 'Combines microneedling with RF energy to remodel collagen and tighten skin. Treats face, neck, and body. 3-4 sessions recommended for optimal results.',
          image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80'
        },
        {
          name: 'Ultherapy',
          price: 'Starting from ₦3,845,000/treatment',
          description: 'Ultrasound-based non-surgical facelift.',
          details: 'Uses focused ultrasound to lift and tighten skin on the face, neck, and décolletage. Results develop over 2-3 months and can last up to 2 years.',
          image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80'
        }
      ]
    },
    {
      category: 'Laser Treatments',
      services: [
        {
          name: 'Laser Hair Removal',
          price: 'Starting from ₦230,000/session',
          description: 'Permanent hair reduction using advanced Candela technology.',
          details: 'Safe for all skin types. Most areas require 6-8 treatments spaced 4-6 weeks apart. Virtually painless with our cooling system.',
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80'
        },
        {
          name: 'Laser Skin Resurfacing',
          price: 'Starting from ₦1,230,000/session',
          description: 'Improve skin texture, tone, and reduce scarring.',
          details: 'Fractional CO2 laser treatment for dramatic skin renewal. Addresses wrinkles, sun damage, acne scars, and uneven texture.',
          image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80'
        },
        {
          name: 'IPL Photofacial',
          price: 'Starting from ₦615,000/session',
          description: 'Treat sun damage, redness, and pigmentation.',
          details: 'Intense pulsed light therapy that targets brown spots, redness, and broken capillaries. No downtime. 3-5 sessions recommended.',
          image: 'https://images.unsplash.com/photo-1614252368970-c1b3d43e8ccd?w=400&q=80'
        }
      ]
    },
    {
      category: 'Advanced Facials & Skincare',
      services: [
        {
          name: 'HydraFacial',
          price: '₦385,000/session',
          description: 'Deep cleansing, exfoliation, and hydration treatment.',
          details: 'Patented technology that cleanses, extracts, and hydrates skin. Immediate results with no downtime. Perfect before special events.',
          image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&q=80'
        },
        {
          name: 'Medical Grade Peels',
          price: 'Starting from ₦230,000/session',
          description: 'Customized chemical peels for various skin concerns.',
          details: 'Range from light to deep peels addressing acne, pigmentation, and aging. Tailored to your specific skin type and goals.',
          image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&q=80'
        },
        {
          name: 'Microneedling',
          price: 'Starting from ₦538,000/session',
          description: 'Collagen induction therapy for smoother, firmer skin.',
          details: 'Stimulates natural collagen production to improve texture, reduce scarring, and minimize pores. 3-6 sessions recommended.',
          image: 'https://images.unsplash.com/photo-1594312915251-48db9280c8f1?w=400&q=80'
        }
      ]
    },
    {
      category: 'Dental Aesthetics',
      services: [
        {
          name: 'Teeth Whitening',
          price: 'Starting from ₦770,000',
          description: 'Professional-grade whitening for a brighter smile.',
          details: 'In-office treatment that can lighten teeth up to 8 shades in one session. Results last 1-2 years with proper care.',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
        },
        {
          name: 'Smile Makeover Consultation',
          price: 'Complimentary',
          description: 'Comprehensive assessment and treatment planning.',
          details: 'Personalized consultation to discuss veneers, bonding, and other cosmetic dental options.',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80'
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-20 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80" 
            alt="Services background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-purple-primary/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Full Spectrum of Aesthetic & Wellness Services</h1>
          <p className="text-xl">Personalized treatments designed for your unique beauty goals</p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {serviceCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gold-primary border-b-2 border-gold-primary pb-2">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, svcIdx) => {
                  const serviceKey = `${catIdx}-${svcIdx}`;
                  const isExpanded = expandedService === serviceKey;
                  
                  return (
                    <div key={svcIdx} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
                      <div className="h-48 overflow-hidden">
                        <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                        <p className="text-gold-primary font-semibold mb-3">{service.price}</p>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        
                        {isExpanded && (
                          <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                            <p className="text-gray-700">{service.details}</p>
                          </div>
                        )}
                        
                        <div className="flex gap-2">
                          <button
                            onClick={() => setExpandedService(isExpanded ? null : serviceKey)}
                            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition text-sm font-semibold"
                          >
                            {isExpanded ? 'Show Less' : 'Learn More'}
                          </button>
                          <button className="flex-1 bg-gold-gradient text-white px-4 py-2 rounded-lg hover:opacity-90 transition text-sm font-semibold">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Transformation?</h2>
          <p className="text-gray-700 mb-8 text-lg">Schedule a complimentary consultation with our expert team</p>
          <button className="bg-gold-gradient text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition">
            Book Your Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
