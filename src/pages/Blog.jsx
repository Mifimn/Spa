
import { useState } from 'react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['all', 'Skincare', 'Injectables', 'Laser Treatments', 'Wellness'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Ultimate Guide to Morpheus8 Treatment',
      category: 'Laser Treatments',
      author: 'Dr. Smith',
      date: 'March 15, 2024',
      excerpt: 'Discover how this revolutionary treatment can transform your skin with minimal downtime and maximum results. Learn about the science behind Morpheus8...',
      thumbnail: ''
    },
    {
      id: 2,
      title: 'Botox vs. Dysport: What\'s the Difference?',
      category: 'Injectables',
      author: 'Dr. Smith',
      date: 'March 10, 2024',
      excerpt: 'Understanding the key differences between popular neurotoxin treatments to help you make an informed decision for your aesthetic goals...',
      thumbnail: ''
    },
    {
      id: 3,
      title: 'Spring Skincare Routine for Glowing Skin',
      category: 'Skincare',
      author: 'Sarah Chen, Aesthetician',
      date: 'March 5, 2024',
      excerpt: 'As the seasons change, so should your skincare routine. Here are our expert tips for maintaining radiant skin this spring...',
      thumbnail: ''
    },
    {
      id: 4,
      title: 'Understanding Medical Grade Peels',
      category: 'Skincare',
      author: 'Dr. Smith',
      date: 'February 28, 2024',
      excerpt: 'Chemical peels can dramatically improve skin texture and tone. Learn which peel is right for your skin concerns...',
      thumbnail: ''
    },
    {
      id: 5,
      title: 'Laser Hair Removal: What to Expect',
      category: 'Laser Treatments',
      author: 'Jennifer Lee, RN',
      date: 'February 20, 2024',
      excerpt: 'Everything you need to know before your first laser hair removal session, from preparation to aftercare...',
      thumbnail: ''
    },
    {
      id: 6,
      title: 'The Importance of Medical-Grade Skincare',
      category: 'Skincare',
      author: 'Dr. Smith',
      date: 'February 15, 2024',
      excerpt: 'Why professional skincare products deliver better results than over-the-counter alternatives...',
      thumbnail: ''
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gold-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Aesthetic Insights & Wellness Advice</h1>
          <p className="text-xl">Expert guidance from our medical professionals</p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full md:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary"
                />
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full font-semibold transition ${
                    selectedCategory === category
                      ? 'bg-gold-gradient text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {paginatedPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map(post => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                    <div className="bg-gray-300 h-48 flex items-center justify-center">
                      <span className="text-gray-600">Article Thumbnail</span>
                    </div>
                    <div className="p-6">
                      <span className="inline-block bg-gold-gradient text-white text-xs px-3 py-1 rounded-full mb-3">
                        {post.category}
                      </span>
                      <h2 className="text-xl font-bold mb-2 hover:text-instagram-blue cursor-pointer">
                        {post.title}
                      </h2>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                      <p className="text-gray-700 mb-4">{post.excerpt}</p>
                      <button className="text-gold-primary font-semibold hover:underline">
                        Read More →
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-12">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  
                  {[...Array(totalPages)].map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(idx + 1)}
                      className={`px-4 py-2 rounded-lg font-semibold ${
                        currentPage === idx + 1
                          ? 'bg-gold-gradient text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-700 mb-8">Subscribe to our newsletter for the latest aesthetic insights and exclusive offers</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-instagram-blue"
            />
            <button className="bg-gold-gradient text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
