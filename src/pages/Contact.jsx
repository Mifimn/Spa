import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, send via mailto
      const subject = encodeURIComponent(`Service Inquiry - ${formData.service || 'General'}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service || 'Not specified'}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:thelifecareaesthetics@gmail.com?subject=${subject}&body=${body}`;
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-sage-primary to-sage-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Ready to Enhance Your Natural Beauty?</h1>
          <p className="text-xl">Book your home service appointment today</p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="teeth-whitening">Teeth Whitening</option>
                    <option value="scaling-polishing">Scaling And Polishing</option>
                    <option value="tooth-gems">Tooth Gems</option>
                    <option value="gum-treatment">Gum Treatment</option>
                    <option value="fluoride-therapy">Fluoride Therapy</option>
                    <option value="fashion-braces">Fashion Braces</option>
                    <option value="detox-iv">Detox IV</option>
                    <option value="energy-booster">Energy Booster</option>
                    <option value="immune-booster">Immune Booster</option>
                    <option value="radiance-iv">Radiance IV</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your aesthetic goals..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-gradient text-white px-6 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-sage-primary mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Service Area</h3>
                      <p className="text-gray-600">Home Service Only<br />We come to you!</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-sage-primary mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <a href="tel:+2349030699797" className="text-gray-600 hover:text-sage-primary">+234-903-069-9797</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-sage-primary mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <a href="mailto:thelifecareaesthetics@gmail.com" className="text-gray-600 hover:text-sage-primary">thelifecareaesthetics@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-sage-primary mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Booking Hours</h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 8:00 PM<br />
                        Sunday: 10:00 AM - 6:00 PM<br />
                        <span className="text-sm italic">Flexible scheduling available</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Home Service Notice */}
              <div className="bg-gradient-to-br from-sage-primary to-sage-dark h-80 rounded-lg flex items-center justify-center text-white p-8">
                <div className="text-center">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <h3 className="text-2xl font-bold mb-2">We Come to You!</h3>
                  <p className="text-lg mb-4">Life Care Aesthetics provides professional dental and wellness services at your home</p>
                  <p className="text-sm italic">No need to travel - we bring the care to your doorstep</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Booking CTA */}
      <section className="bg-brand-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Home Service?</h2>
          <p className="text-xl mb-8">Contact us today to schedule your appointment at your convenience</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+2349030699797" className="bg-white text-sage-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Call Now
            </a>
            <a href="mailto:thelifecareaesthetics@gmail.com" className="bg-white text-sage-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Life Care Aesthetics. All rights reserved.</p>
          <p className="mt-2 text-sm italic">Enhance Your Natural Beauty</p>
        </div>
      </footer>
    </div>
  );
}