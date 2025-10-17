import { useState } from 'react';
import { Helmet } from 'react-helmet-async'; // <-- 1. Import Helmet for SEO
import { Fade } from 'react-awesome-reveal';

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
      fullContent: `Professional teeth whitening is one of the most popular cosmetic dental treatments, and now you can enjoy its full benefits in the comfort of your own home with Life Care Aesthetics.

**How It Works:**
Our advanced whitening treatment uses professional-grade whitening agents that are significantly more effective and safer than over-the-counter options. Nurse Blessing brings all the necessary equipment to your home and performs the treatment with expert care, ensuring even and brilliant results.

**Key Benefits:**
- **Noticeably Whiter Teeth:** See a dramatic improvement of several shades in just one session.
- **Safety First:** Professional application minimizes the risk of gum irritation and tooth sensitivity.
- **Utmost Convenience:** Skip the travel and waiting rooms. We bring the complete service to you.
- **Long-Lasting Results:** With proper care, your brighter smile can last for many months.

**What to Expect During Your Appointment:**
The entire home treatment typically takes between 60 to 90 minutes. You'll be able to relax in your own space while we transform your smile.

**Aftercare Tips:**
To maximize the longevity of your results, we recommend avoiding dark-colored foods and drinks (like coffee, red wine, and berries) for 24-48 hours after the treatment.`
    },
    {
      id: 2,
      title: 'IV Drip Therapy: Boost Your Health and Beauty from Within',
      category: 'Wellness',
      author: 'Nurse Blessing',
      date: 'March 10, 2024',
      excerpt: 'Learn how IV drip therapy can enhance your wellness, boost immunity, and improve skin radiance with our home service treatments...',
      thumbnail: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
      fullContent: `IV (intravenous) drip therapy is a safe and effective way to deliver essential vitamins, minerals, and nutrients directly into your bloodstream for maximum absorption and immediate benefits.

**Our Signature IV Drip Services:**
- **Detox IV:** Helps your body flush out toxins and supports liver function for a full-body cleanse.
- **Energy Booster:** A powerful blend of B vitamins and amino acids to increase vitality and combat fatigue.
- **Immune Booster:** Packed with Vitamin C, Zinc, and other immune-supporting nutrients to strengthen your body's defenses.
- **Radiance IV:** A beauty-enhancing formula with antioxidants like glutathione to brighten skin and promote a youthful glow.

**Why Choose IV Drips?**
- **100% Absorption:** Nutrients bypass the digestive system, ensuring complete absorption, unlike oral supplements.
- **Immediate Effects:** Many clients report feeling more energetic and revitalized shortly after treatment.
- **Customized Care:** Each drip is administered based on your wellness goals.
- **Convenient Home Service:** Receive professional care in the privacy and comfort of your home.

**What to Expect:**
The treatment is relaxing and typically takes 30-45 minutes. It is administered by a trained professional, ensuring your safety and comfort throughout the session.`
    },
    {
      id: 3,
      title: 'Understanding Scaling and Polishing for Optimal Oral Health',
      category: 'Dental Services',
      author: 'Nurse Blessing',
      date: 'March 5, 2024',
      excerpt: 'Professional teeth cleaning is essential for maintaining healthy teeth and gums. Learn why scaling and polishing should be part of your routine...',
      thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80',
      fullContent: `Regular brushing and flossing are crucial, but a professional cleaning, known as scaling and polishing, is the cornerstone of excellent oral health.

**What is Scaling and Polishing?**
- **Scaling:** This is the process of carefully removing hardened plaque, known as tartar or calculus, from the tooth surface, especially below the gumline where your brush can't reach.
- **Polishing:** After scaling, your teeth are polished to remove surface stains and create a smooth surface, which makes it harder for new plaque to accumulate.

**Why is it Important?**
- **Prevents Cavities:** By removing plaque and tartar, we remove the bacteria that cause tooth decay.
- **Stops Gum Disease:** It's the most effective way to prevent gingivitis (inflammation of the gums) and more serious gum diseases.
- **Freshens Breath:** Eliminates the bacteria responsible for persistent bad breath.
- **Brighter Smile:** Polishing removes stains from coffee, tea, and tobacco, revealing a brighter, cleaner smile.

**Our Home Service Advantage:**
Life Care Aesthetics brings this essential dental service to you. We provide a thorough and comfortable cleaning experience at your home, making it easier than ever to prioritize your oral health.`
    },
    {
      id: 4,
      title: 'Fashion Braces: Style Meets Dental Aesthetics',
      category: 'Dental Services',
      author: 'Nurse Blessing',
      date: 'February 28, 2024',
      excerpt: 'Fashion braces are the latest trend in dental aesthetics. Discover how these decorative braces can enhance your smile and express your personality...',
      thumbnail: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80',
      fullContent: `Fashion braces are a fun, temporary, and non-orthodontic way to accessorize your smile and make a unique style statement.

**What Are Fashion Braces?**
Unlike traditional orthodontic braces used to straighten teeth, fashion braces are purely decorative. They consist of brackets and colored bands that are safely bonded to the surface of your teeth without the need for wires that apply pressure.

**The Appeal of Fashion Braces:**
- **Express Your Personality:** With a wide variety of colors and styles, you can customize your look to match your mood or outfit.
- **Completely Safe:** When applied by a professional like Nurse Blessing, the process is non-damaging to your tooth enamel. We use dental-grade, safe materials.
- **Temporary and Reversible:** The braces can be easily removed by a professional whenever you decide you want a change, with no long-term commitment.
- **Painless Application:** The process is quick, simple, and completely painless.

**Important Note:**
Fashion braces are a cosmetic enhancement and do not move or straighten your teeth. They should always be applied and removed by a trained professional to ensure the health of your teeth and gums is maintained.`
    },
    {
      id: 5,
      title: 'The Unseen Hero: Why Gum Health is So Important',
      category: 'Dental Services',
      author: 'Nurse Blessing',
      date: 'February 20, 2024',
      excerpt: 'Healthy gums are the foundation of a beautiful smile. Learn about our gum treatment services and how to maintain optimal gum health...',
      thumbnail: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80',
      fullContent: `We often focus on our teeth, but healthy gums are the essential foundation that keeps our smile strong and beautiful. Neglecting them can lead to serious issues.

**Signs of Unhealthy Gums:**
- Redness, swelling, or tenderness
- Bleeding when you brush or floss
- Gums that have pulled away from the teeth (receding gums)
- Persistent bad breath

**What is Gum Treatment?**
Our professional gum treatment, often called a "deep cleaning," involves two main steps:
1.  **Scaling:** We remove plaque and tartar buildup from above and below the gumline.
2.  **Root Planing:** We smooth the tooth roots to help the gums reattach firmly to the teeth.

**Benefits of Professional Gum Care:**
- **Prevents Tooth Loss:** Gum disease is a leading cause of tooth loss in adults. Treatment halts its progression.
- **Improves Overall Health:** Poor gum health is linked to other health issues like heart disease and diabetes.
- **Eliminates Discomfort:** Soothes inflammation and stops bleeding for more comfortable daily care.
- **Creates a Healthier Smile:** Healthy, pink gums frame your teeth beautifully and contribute to a confident appearance.

At Life Care Aesthetics, we provide gentle and effective gum treatments in your home to restore your oral health foundation.`
    },
    {
      id: 6,
      title: 'Tooth Gems: Add a Dazzling Sparkle to Your Smile',
      category: 'Dental Services',
      author: 'Nurse Blessing',
      date: 'February 15, 2024',
      excerpt: 'Tooth gems are a fun, temporary way to add some sparkle to your smile. Learn about the application process and how to care for your tooth jewelry...',
      thumbnail: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80',
      fullContent: `Want to add a unique and dazzling touch to your smile? Tooth gems are a trendy, non-invasive cosmetic treatment that lets your personality shine.

**What Are Tooth Gems?**
A tooth gem is a small rhinestone or crystal jewel designed specifically to be attached to the surface of a tooth with a dental-grade adhesive.

**The Application Process:**
The procedure is simple, quick, and completely painless.
1.  **Preparation:** The chosen tooth is cleaned and prepared.
2.  **Bonding:** A safe, dental-grade adhesive is applied to the tooth.
3.  **Placement:** Nurse Blessing carefully places the gem onto the adhesive and sets it securely.

**Key Features:**
- **No Drilling Required:** The process is non-invasive and does not damage your tooth enamel.
- **Safe and Hygienic:** We only use materials that are specifically designed to be safe for your mouth.
- **Temporary and Reversible:** Tooth gems can last for months, but can be easily removed by a professional at any time.

**Caring for Your Tooth Gem:**
Maintaining your gem is easy. Simply continue your regular oral hygiene routine, but be gentle when brushing around the gem. It's also wise to avoid biting directly on hard foods with the bejeweled tooth.`
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
      {/* 2. Add the Helmet block for this page's SEO */}
      <Helmet>
        <title>Health & Beauty Insights Blog | Life Care Aesthetics</title>
        <meta
          name="description"
          content="Read the latest articles from Nurse Blessing on at-home dental care, wellness IV drips, and aesthetic tips for clients in Lagos."
        />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative py-20 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80"
            alt="A person reading health articles on a tablet" // <-- SEO Update
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-sage-primary/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <Fade direction="down" triggerOnce>
            <h1 className="text-5xl font-bold mb-4">Health & Beauty Insights</h1>
            <p className="text-xl">Expert guidance from Life Care Aesthetics</p>
          </Fade>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white border-b sticky top-[80px] z-40">
        <Fade direction="down" triggerOnce>
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:w-96">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-primary"
                  />
                  <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-full font-semibold transition text-sm ${
                      selectedCategory === category
                        ? 'bg-brand-gradient text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'All' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-cream-light">
        <div className="max-w-7xl mx-auto px-4">
          {paginatedPosts.length === 0 ? (
            <Fade triggerOnce>
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
              </div>
            </Fade>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post, index) => (
                  <Fade key={post.id} direction="up" delay={index * 100} triggerOnce>
                    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition flex flex-col h-full">
                      <div className="h-48 overflow-hidden">
                        {/* SEO Update: Descriptive alt text */}
                        <img src={post.thumbnail} alt={`Blog post thumbnail for: ${post.title}`} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <span className="inline-block bg-brand-gradient text-white text-xs px-3 py-1 rounded-full mb-3">
                          {post.category}
                        </span>
                        <h2 className="text-xl font-bold mb-2">
                          {post.title}
                        </h2>
                        <div className="flex items-center text-sm text-gray-600 mb-3">
                          <span>{post.author}</span>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                        </div>
                        <p className="text-gray-700 mb-4 flex-grow">{post.excerpt}</p>
                        <button
                          onClick={() => setSelectedPost(post)}
                          className="text-sage-primary font-semibold hover:underline mt-auto text-left"
                        >
                          Read More →
                        </button>
                      </div>
                    </article>
                  </Fade>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Fade triggerOnce>
                  <div className="flex justify-center items-center space-x-2 mt-12">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-lg bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    {[...Array(totalPages)].map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentPage(idx + 1)}
                        className={`px-4 py-2 rounded-lg font-semibold ${
                          currentPage === idx + 1
                            ? 'bg-brand-gradient text-white'
                            : 'bg-white hover:bg-gray-100'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 rounded-lg bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                </Fade>
              )}
            </>
          )}
        </div>
      </section>

      {/* Full Blog Post Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto animate-fadeIn"
          onClick={() => setSelectedPost(null)}
        >
          <div className="min-h-screen px-4 py-8 flex items-center justify-center">
            <div
              className="relative max-w-4xl w-full bg-white rounded-lg shadow-xl animate-scaleUp"
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
              <div className="h-64 md:h-80 overflow-hidden rounded-t-lg">
                <img src={selectedPost.thumbnail} alt={selectedPost.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <span className="inline-block bg-brand-gradient text-white text-xs px-3 py-1 rounded-full mb-4">
                  {selectedPost.category}
                </span>
                <h2 className="text-3xl font-bold mb-4">{selectedPost.title}</h2>
                <div className="flex items-center text-sm text-gray-600 mb-6">
                  <span>{selectedPost.author}</span>
                  <span className="mx-2">•</span>
                  <span>{selectedPost.date}</span>
                </div>
                <div className="prose max-w-none text-gray-700 whitespace-pre-wrap">
                  {selectedPost.fullContent}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Signup */}
      <section className="bg-gray-50 py-16">
        <Fade direction="up" triggerOnce>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-sage-primary">Stay Updated</h2>
            <p className="text-gray-700 mb-8">Subscribe to our newsletter for the latest health and beauty insights and exclusive offers.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-primary"
                required
              />
              <button type="submit" className="bg-brand-gradient text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Subscribe
              </button>
            </form>
          </div>
        </Fade>
      </section>

      {/* Add CSS for Modal Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
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