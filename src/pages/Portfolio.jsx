import { useState, useEffect } from 'react';
// Import the animation component
import { Fade } from 'react-awesome-reveal';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const beforeAfterPhotos = [
{ 
id: 1, 
service: 'Teeth Whitening', 
title: 'Professional Teeth Whitening Results', 
before: '/images/white_before.png', 
after: '/images/white_after.png' 
},
{ 
id: 2, 
service: 'Scaling And Polishing', 
title: 'Deep Cleaning Transformation', 
before: '/images/cleaning_before.png', 
after: '/images/cleaning_after.png' 
},
{ 
id: 3, 
service: 'Tooth Gems', 
title: 'Decorative Tooth Gem Application', 
before: '/images/gem_before.png', 
after: '/images/gem_after.png' 
},
{ 
id: 4, 
service: 'Radiance IV', 
title: 'Skin Brightening Results', 
before: '/images/iv_before.png', 
after: '/images/iv_after.png' 
},
{ 
id: 5, 
service: 'Gum Treatment', 
title: 'Healthy Gums Restoration', 
before: '/images/gum_before.png', 
after: '/images/gum_after.png' 
},
{ 
id: 6, 
service: 'Fashion Braces', 
title: 'Stylish Braces Installation', 
before: '/images/bracelet_before.png', 
after: '/images/bracelet_after.png' 
},
];

const treatmentVideos = [
{ 
id: 1, 
title: 'Teeth Whitening Procedure', 
thumbnail: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80', 
videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' 
},
{ 
id: 2, 
title: 'Scaling and Polishing Process', 
thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80', 
videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' 
},
{ 
id: 3, 
title: 'IV Drip Treatment at Home', 
thumbnail: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80', 
videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' 
},
{ 
id: 4, 
title: 'Tooth Gem Application', 
thumbnail: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80', 
videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' 
},
];

  const serviceTypes = ['all', 'Teeth Whitening', 'Scaling And Polishing', 'Tooth Gems', 'Gum Treatment', 'Fashion Braces', 'Radiance IV'];

  const filteredPhotos = selectedFilter === 'all'
    ? beforeAfterPhotos
    : beforeAfterPhotos.filter(photo => photo.service === selectedFilter);

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-20 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=80"
            alt="Portfolio background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-sage-primary/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <Fade direction="down" triggerOnce>
            <h1 className="text-5xl font-bold mb-4">Our Results. Your Confidence.</h1>
            <p className="text-xl">Real transformations from real clients</p>
          </Fade>
        </div>
      </section>

      {/* Tab Selector */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <Fade direction="up" triggerOnce>
            <div className="flex justify-center space-x-4 py-6">
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-8 py-3 rounded-lg font-semibold transition ${
                  activeTab === 'photos'
                    ? 'bg-brand-gradient text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Before & After Photos
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-8 py-3 rounded-lg font-semibold transition ${
                  activeTab === 'videos'
                    ? 'bg-brand-gradient text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Treatment Videos
              </button>
            </div>
          </Fade>
        </div>
      </section>

      {/* Photo Gallery */}
      {activeTab === 'photos' && (
        <section className="py-16 bg-cream-light">
          <div className="max-w-7xl mx-auto px-4">
            {/* Filter */}
            <Fade direction="down" cascade damping={0.1} triggerOnce>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {serviceTypes.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedFilter(type)}
                    className={`px-6 py-2 rounded-full font-semibold transition ${
                      selectedFilter === type
                        ? 'bg-brand-gradient text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type === 'all' ? 'All' : type}
                  </button>
                ))}
              </div>
            </Fade>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPhotos.map((photo, index) => (
                <Fade
                  key={photo.id}
                  direction="up"
                  delay={index * 100} // Staggered delay for each card
                  triggerOnce
                >
                  <div
                    onClick={() => setSelectedMedia({ type: 'photo', data: photo })}
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition h-full"
                  >
                    <div className="flex">
                      <div className="w-1/2 h-64 relative">
                        <img src={photo.before} alt="Before" className="w-full h-full object-cover" />
                        <span className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-semibold">Before</span>
                      </div>
                      <div className="w-1/2 h-64 relative">
                        <img src={photo.after} alt="After" className="w-full h-full object-cover" />
                        <span className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-semibold">After</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className="inline-block bg-brand-gradient text-white text-xs px-3 py-1 rounded-full mb-2">
                        {photo.service}
                      </span>
                      <h3 className="font-bold text-lg">{photo.title}</h3>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video Gallery */}
      {activeTab === 'videos' && (
        <section className="py-16 bg-cream-light">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentVideos.map((video, index) => (
                <Fade
                  key={video.id}
                  direction="up"
                  delay={index * 100} // Staggered delay for each card
                  triggerOnce
                >
                  <div
                    onClick={() => setSelectedMedia({ type: 'video', data: video })}
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
                  >
                    <div className="relative h-64">
                      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition">
                        <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{video.title}</h3>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Media Modal with Animation */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative max-w-6xl w-full animate-scaleUp"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {selectedMedia.type === 'photo' ? (
                <div className="bg-white rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 h-64 md:h-96 relative">
                            <img src={selectedMedia.data.before} alt="Before" className="w-full h-full object-cover" />
                            <span className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded text-lg font-semibold">Before</span>
                        </div>
                        <div className="w-full md:w-1/2 h-64 md:h-96 relative">
                            <img src={selectedMedia.data.after} alt="After" className="w-full h-full object-cover" />
                            <span className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-2 rounded text-lg font-semibold">After</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">{selectedMedia.data.title}</h3>
                        <span className="inline-block bg-brand-gradient text-white px-3 py-1 rounded-full text-sm">
                            {selectedMedia.data.service}
                        </span>
                    </div>
                </div>
            ) : (
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={selectedMedia.data.videoUrl}
                    title={selectedMedia.data.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{selectedMedia.data.title}</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Fade triggerOnce>
            <p className="text-xs text-gray-600 text-center">
              <strong>Disclaimer:</strong> Individual results may vary. Photos and videos are of actual patients who have consented to share their images. Results depicted are not guaranteed and will depend on individual circumstances.
            </p>
          </Fade>
        </div>
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

      {/* Add CSS for Modal Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scaleUp {
          animation: scaleUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}