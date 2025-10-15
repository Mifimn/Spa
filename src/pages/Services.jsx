
import { useState } from 'react';

export default function Services() {
  const [expandedService, setExpandedService] = useState(null);

  const serviceCategories = [
    {
      category: 'Aesthetic Injectables',
      services: [
        {
          name: 'Botox',
          price: 'Starting from $12/unit',
          description: 'Reduce fine lines and wrinkles with FDA-approved neurotoxin injections.',
          details: 'Botox works by temporarily relaxing facial muscles that cause wrinkles. Results typically last 3-4 months. Treatment takes 10-15 minutes with no downtime.'
        },
        {
          name: 'Dermal Fillers',
          price: 'Starting from $650/syringe',
          description: 'Restore volume and contour with hyaluronic acid fillers.',
          details: 'Our range of premium fillers can enhance lips, cheeks, and smooth deep lines. Results are immediate and can last 6-18 months depending on the product.'
        },
        {
          name: 'Kybella',
          price: 'Starting from $800/session',
          description: 'Non-surgical double chin reduction treatment.',
          details: 'FDA-approved injectable that destroys fat cells under the chin. Most patients need 2-4 treatments spaced 4-6 weeks apart.'
        }
      ]
    },
    {
      category: 'Non-Surgical Lifting & Tightening',
      services: [
        {
          name: 'Morpheus8',
          price: 'Starting from $1,200/session',
          description: 'Revolutionary microneedling with radiofrequency for skin tightening.',
          details: 'Combines microneedling with RF energy to remodel collagen and tighten skin. Treats face, neck, and body. 3-4 sessions recommended for optimal results.'
        },
        {
          name: 'Ultherapy',
          price: 'Starting from $2,500/treatment',
          description: 'Ultrasound-based non-surgical facelift.',
          details: 'Uses focused ultrasound to lift and tighten skin on the face, neck, and décolletage. Results develop over 2-3 months and can last up to 2 years.'
        }
      ]
    },
    {
      category: 'Laser Treatments',
      services: [
        {
          name: 'Laser Hair Removal',
          price: 'Starting from $150/session',
          description: 'Permanent hair reduction using advanced Candela technology.',
          details: 'Safe for all skin types. Most areas require 6-8 treatments spaced 4-6 weeks apart. Virtually painless with our cooling system.'
        },
        {
          name: 'Laser Skin Resurfacing',
          price: 'Starting from $800/session',
          description: 'Improve skin texture, tone, and reduce scarring.',
          details: 'Fractional CO2 laser treatment for dramatic skin renewal. Addresses wrinkles, sun damage, acne scars, and uneven texture.'
        },
        {
          name: 'IPL Photofacial',
          price: 'Starting from $400/session',
          description: 'Treat sun damage, redness, and pigmentation.',
          details: 'Intense pulsed light therapy that targets brown spots, redness, and broken capillaries. No downtime. 3-5 sessions recommended.'
        }
      ]
    },
    {
      category: 'Advanced Facials & Skincare',
      services: [
        {
          name: 'HydraFacial',
          price: '$250/session',
          description: 'Deep cleansing, exfoliation, and hydration treatment.',
          details: 'Patented technology that cleanses, extracts, and hydrates skin. Immediate results with no downtime. Perfect before special events.'
        },
        {
          name: 'Medical Grade Peels',
          price: 'Starting from $150/session',
          description: 'Customized chemical peels for various skin concerns.',
          details: 'Range from light to deep peels addressing acne, pigmentation, and aging. Tailored to your specific skin type and goals.'
        },
        {
          name: 'Microneedling',
          price: 'Starting from $350/session',
          description: 'Collagen induction therapy for smoother, firmer skin.',
          details: 'Stimulates natural collagen production to improve texture, reduce scarring, and minimize pores. 3-6 sessions recommended.'
        }
      ]
    },
    {
      category: 'Dental Aesthetics',
      services: [
        {
          name: 'Teeth Whitening',
          price: 'Starting from $500',
          description: 'Professional-grade whitening for a brighter smile.',
          details: 'In-office treatment that can lighten teeth up to 8 shades in one session. Results last 1-2 years with proper care.'
        },
        {
          name: 'Smile Makeover Consultation',
          price: 'Complimentary',
          description: 'Comprehensive assessment and treatment planning.',
          details: 'Personalized consultation to discuss veneers, bonding, and other cosmetic dental options.'
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-instagram-blue to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Full Spectrum of Aesthetic & Wellness Services</h1>
          <p className="text-xl">Personalized treatments designed for your unique beauty goals</p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {serviceCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-instagram-blue border-b-2 border-instagram-blue pb-2">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, svcIdx) => {
                  const serviceKey = `${catIdx}-${svcIdx}`;
                  const isExpanded = expandedService === serviceKey;
                  
                  return (
                    <div key={svcIdx} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
                      <div className="p-6">
                        <div className="w-12 h-12 bg-instagram-blue rounded-lg mb-4 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                        <p className="text-instagram-blue font-semibold mb-3">{service.price}</p>
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
                          <button className="flex-1 bg-instagram-blue text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition text-sm font-semibold">
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
          <button className="bg-instagram-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition">
            Book Your Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
