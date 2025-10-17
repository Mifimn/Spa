
import { useState } from 'react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = ['all', 'Dental Services', 'Wellness'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Benefits of Professional Teeth Whitening at Home',
      category: 'Dental Services',
      author: 'Nurse Blessing',
      date: 'March 15, 2024',
      excerpt: 'Discover how professional teeth whitening delivered to your home can give you a brighter, more confident smile without the hassle of clinic visits...',
      thumbnail: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80',
      fullContent: `Professional teeth whitening is one of the most popular cosmetic dental treatments, and now you can enjoy it in the comfort of your own home with Life Care Aesthetics.

**How It Works:**
Our advanced whitening treatment uses professional-grade products that are significantly more effective than over-the-counter options. Nurse Blessing brings all the necessary equipment to your home and performs the treatment with expert care.

**Benefits:**
- Noticeably whiter teeth in just one session
- Safe and effective professional treatment
- Convenient home service
- No sensitivity issues with proper application
- Long-lasting results with proper care

**What to Expect:**
The treatment takes 60-90 minutes. You'll see immediate results, with teeth several shades whiter. Results can last 6-12 months with good oral hygiene.

**Aftercare:**
Avoid dark-colored foods and drinks for 24-48 hours after treatment for best results.`
    },
    {
      id: 2,
      title: 'IV Drip Therapy: Boost Your Health and Beauty',
      category: 'Wellness',
      author: 'Nurse Blessing',
      date: 'March 10, 2024',
      excerpt: 'Learn how IV drip therapy can enhance your wellness, boost immunity, and improve skin radiance with our home service treatments...',
      thumbnail: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
      fullContent: `IV drip therapy delivers essential vitamins, minerals, and nutrients directly into your bloodstream for maximum absorption and immediate benefits.

**Our IV Drip Services:**
- **Detox IV:** Full body cleansing and detoxification
- **Energy Booster:** Increase vitality and reduce fatigue
- **Immune Booster:** Strengthen your immune system
- **Radiance IV:** Skin brightening and anti-aging benefits

**Benefits:**
- 100% absorption of nutrients
- Immediate effects
- Customized to your needs
- Convenient home service
- Administered by trained professionals

**What to Expect:**
Treatment takes 30-45 minutes. You'll feel relaxed during the infusion and may notice increased energy and improved well-being shortly after.`
    },
    {
      id: 3,
      title: 'Understanding Scaling and Polishing for Optimal Oral Health',
      category: 'Dental Services',
      author: 'Nurse Blessing',
      date: 'March 5, 2024',
      excerpt: 'Professional teeth cleaning is essential for maintaining healthy teeth and gums. Learn why scaling and polishing should be part of your routine...',
      thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80'
    },
    {
      id: 4,
      title: 'Fashion Braces: Style Meets Dental Aesthetics',
      category: 'Dental Services',
      author: 'Nurse Blessing',
      date: 'February 28, 2024',
      excerpt: 'Fashion braces are the latest trend in dental aesthetics. Discover how these decorative braces can enhance your smile and express your personality...',
      thumbnail: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80'
    },
    {
      id: 5,
      title: 'The Importance of Gum Health',
      category: 'Dental Services',
      author: 'Nurse Blessing',
      date: 'February 20, 2024',
      excerpt: 'Healthy gums are the foundation of a beautiful smile. Learn about our gum treatment services and how to maintain optimal gum health...',
      thumbnail: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80'
    },
    {
      id: 6,
      title: 'Tooth Gems: Add Sparkle to Your Smile',
      category: 'Dental Services',
      author: 'Nurse Blessing',
      date: 'February 15, 2024',
      excerpt: 'Tooth gems are a fun, temporary way to add some sparkle to your smile. Learn about the application process and how to care for your tooth jewelry...',
      thumbnail: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80'
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
      <section className="relative py-20 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80" 
            alt="Blog background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-sage-primary/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Health & Beauty Insights</h1>
          <p className="text-xl">Expert guidance from Life Care Aesthetics</p>
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
                    <div className="h-48 overflow-hidden">
                      <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
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
                      <button 
                        onClick={() => setSelectedPost(post)}
                        className="text-gold-primary font-semibold hover:underline"
                      >
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

      {/* Full Blog Post Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto"
          onClick={() => setSelectedPost(null)}
        >
          <div className="min-h-screen px-4 py-8 flex items-center justify-center">
            <div 
              className="relative max-w-4xl w-full bg-white rounded-lg shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="h-64 overflow-hidden rounded-t-lg">
                <img src={selectedPost.thumbnail} alt={selectedPost.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-8">
                <span className="inline-block bg-gold-gradient text-white text-xs px-3 py-1 rounded-full mb-4">
                  {selectedPost.category}
                </span>
                <h2 className="text-3xl font-bold mb-4">{selectedPost.title}</h2>
                <div className="flex items-center text-sm text-gray-600 mb-6">
                  <span>{selectedPost.author}</span>
                  <span className="mx-2">•</span>
                  <span>{selectedPost.date}</span>
                </div>
                <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                  {selectedPost.fullContent}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Signup */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-700 mb-8">Subscribe to our newsletter for the latest health and beauty insights and exclusive offers</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-primary"
            />
            <button className="bg-brand-gradient text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
