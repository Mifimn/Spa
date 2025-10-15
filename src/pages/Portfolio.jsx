
import { useState } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const beforeAfterPhotos = [
    { 
      id: 1, 
      service: 'Botox', 
      title: 'Forehead Lines Reduction', 
      before: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80', 
      after: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80' 
    },
    { 
      id: 2, 
      service: 'Morpheus8', 
      title: 'Full Face Skin Tightening', 
      before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80', 
      after: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80' 
    },
    { 
      id: 3, 
      service: 'Fillers', 
      title: 'Lip Enhancement', 
      before: 'https://images.unsplash.com/photo-1614252368970-c1b3d43e8ccd?w=600&q=80', 
      after: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80' 
    },
    { 
      id: 4, 
      service: 'Laser', 
      title: 'Full Face Laser Treatment', 
      before: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80', 
      after: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80' 
    },
    { 
      id: 5, 
      service: 'Dental', 
      title: 'Teeth Whitening Results', 
      before: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80', 
      after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80' 
    },
    { 
      id: 6, 
      service: 'Morpheus8', 
      title: 'Jawline Contouring', 
      before: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80', 
      after: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&q=80' 
    },
    { 
      id: 7, 
      service: 'Facial', 
      title: 'VCP Celebrity Facial', 
      before: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&q=80', 
      after: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80' 
    },
    { 
      id: 8, 
      service: 'PRP', 
      title: 'Vampire Facial Results', 
      before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80', 
      after: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80' 
    },
    { 
      id: 9, 
      service: 'Laser', 
      title: 'Laser Cellulite Treatment', 
      before: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80', 
      after: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' 
    },
  ];

  const treatmentVideos = [
    { 
      id: 1, 
      title: 'Morpheus8 Full Face Treatment', 
      thumbnail: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80', 
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' 
    },
    { 
      id: 2, 
      title: 'Botox Injection Technique', 
      thumbnail: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80', 
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' 
    },
    { 
      id: 3, 
      title: 'VCP Celebrity Facial Experience', 
      thumbnail: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80', 
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' 
    },
    { 
      id: 4, 
      title: 'Full Body Laser Treatment', 
      thumbnail: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80', 
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' 
    },
    { 
      id: 5, 
      title: 'Dental Whitening Procedure', 
      thumbnail: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80', 
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' 
    },
    { 
      id: 6, 
      title: 'PRP Vampire Facial', 
      thumbnail: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', 
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' 
    },
  ];

  const serviceTypes = ['all', 'Botox', 'Morpheus8', 'Fillers', 'Laser', 'Dental', 'Facial', 'PRP'];

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
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-purple-primary/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Results. Your Confidence.</h1>
          <p className="text-xl">Real transformations from real clients</p>
        </div>
      </section>

      {/* Tab Selector */}
      <section className="bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-4 py-6">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeTab === 'photos'
                  ? 'bg-gold-gradient text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Before & After Photos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeTab === 'videos'
                  ? 'bg-gold-gradient text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Treatment Videos
            </button>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {activeTab === 'photos' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            {/* Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {serviceTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedFilter(type)}
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                    selectedFilter === type
                      ? 'bg-gold-gradient text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPhotos.map(photo => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedMedia({ type: 'photo', data: photo })}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
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
                    <span className="inline-block bg-gold-gradient text-white text-xs px-3 py-1 rounded-full mb-2">
                      {photo.service}
                    </span>
                    <h3 className="font-bold text-lg">{photo.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video Gallery */}
      {activeTab === 'videos' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentVideos.map(video => (
                <div
                  key={video.id}
                  onClick={() => setSelectedMedia({ type: 'video', data: video })}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
                >
                  <div className="relative h-64">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition">
                      <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center">
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
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Media Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-6xl w-full" onClick={e => e.stopPropagation()}>
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
                <div className="flex">
                  <div className="w-1/2 h-96 relative">
                    <img src={selectedMedia.data.before} alt="Before" className="w-full h-full object-cover" />
                    <span className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded text-lg font-semibold">Before</span>
                  </div>
                  <div className="w-1/2 h-96 relative">
                    <img src={selectedMedia.data.after} alt="After" className="w-full h-full object-cover" />
                    <span className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-2 rounded text-lg font-semibold">After</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{selectedMedia.data.title}</h3>
                  <span className="inline-block bg-gold-gradient text-white px-3 py-1 rounded-full text-sm">
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
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs text-gray-600 text-center">
            <strong>Disclaimer:</strong> Individual results may vary. Photos and videos are of actual patients who have consented to share their images. Results depicted are not guaranteed and will depend on individual circumstances. Consult with our medical professionals to determine the best treatment plan for your specific needs.
          </p>
        </div>
      </section>
    </div>
  );
}
