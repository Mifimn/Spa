
import { useState } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const beforeAfterPhotos = [
    { id: 1, service: 'Botox', title: 'Forehead Lines Reduction', before: '', after: '' },
    { id: 2, service: 'Morpheus8', title: 'Skin Tightening', before: '', after: '' },
    { id: 3, service: 'Fillers', title: 'Lip Enhancement', before: '', after: '' },
    { id: 4, service: 'Laser', title: 'Pigmentation Treatment', before: '', after: '' },
    { id: 5, service: 'Botox', title: 'Crows Feet Treatment', before: '', after: '' },
    { id: 6, service: 'Morpheus8', title: 'Face Contouring', before: '', after: '' },
  ];

  const treatmentVideos = [
    { id: 1, title: 'Morpheus8 Treatment Process', thumbnail: '', videoUrl: '' },
    { id: 2, title: 'Botox Injection Technique', thumbnail: '', videoUrl: '' },
    { id: 3, title: 'HydraFacial Experience', thumbnail: '', videoUrl: '' },
    { id: 4, title: 'Laser Hair Removal', thumbnail: '', videoUrl: '' },
  ];

  const serviceTypes = ['all', 'Botox', 'Morpheus8', 'Fillers', 'Laser'];

  const filteredPhotos = selectedFilter === 'all' 
    ? beforeAfterPhotos 
    : beforeAfterPhotos.filter(photo => photo.service === selectedFilter);

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-instagram-blue to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
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
                  ? 'bg-instagram-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Before & After Photos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeTab === 'videos'
                  ? 'bg-instagram-blue text-white'
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
                      ? 'bg-instagram-blue text-white'
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
                    <div className="w-1/2 bg-gray-300 h-64 flex items-center justify-center">
                      <span className="text-gray-600 font-semibold">Before</span>
                    </div>
                    <div className="w-1/2 bg-gray-200 h-64 flex items-center justify-center">
                      <span className="text-gray-600 font-semibold">After</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="inline-block bg-instagram-blue text-white text-xs px-3 py-1 rounded-full mb-2">
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
                  <div className="relative bg-gray-300 h-64 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-instagram-blue rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-gray-600 font-semibold">Video Thumbnail</span>
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
                  <div className="w-1/2 bg-gray-300 h-96 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-gray-600 font-semibold block mb-2">Before</span>
                      <span className="text-gray-500 text-sm">Image Placeholder</span>
                    </div>
                  </div>
                  <div className="w-1/2 bg-gray-200 h-96 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-gray-600 font-semibold block mb-2">After</span>
                      <span className="text-gray-500 text-sm">Image Placeholder</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{selectedMedia.data.title}</h3>
                  <span className="inline-block bg-instagram-blue text-white px-3 py-1 rounded-full text-sm">
                    {selectedMedia.data.service}
                  </span>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="bg-gray-900 h-96 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    <p className="text-gray-400">Video Player Placeholder</p>
                  </div>
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
