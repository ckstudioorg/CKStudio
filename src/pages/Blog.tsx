import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Calendar, Tag, User, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', ...Array.from(new Set(blogPosts.flatMap(post => post.categories)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.categories.includes(selectedCategory);
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Hero Banner */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-red/10 via-dark-900 to-dark-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary-red/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-red" />
            Our Blog
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black mb-4"
          >
            <span className="heading-gradient">AI Film Making</span>{' '}
            <span className="heading-red">Insights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl"
          >
            Insights, tips & stories from the frontier of AI-powered video production
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Bar */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl focus:border-primary-red/50 focus:outline-none text-sm text-white placeholder:text-gray-600 backdrop-blur-sm transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <Filter className="w-4 h-4 text-gray-600 mr-1" />
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-red text-white shadow-lg shadow-primary-red/20'
                    : 'bg-white/[0.04] text-gray-500 border border-white/[0.06] hover:text-white hover:border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-8">Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}</p>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group glass-card overflow-hidden hover:border-primary-red/20 transition-all duration-300 block h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent opacity-60" />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary-red/90 text-white text-xs font-bold">{post.categories[0]}</div>
                </div>
                <div className="p-6">
                  <h2 className="text-base font-display font-bold text-white mb-3 group-hover:text-primary-red transition-colors line-clamp-2">{post.title}</h2>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
                    <div className="flex items-center gap-2"><User className="w-3 h-3" /><span>{post.author}</span></div>
                    <div className="flex items-center gap-2"><Calendar className="w-3 h-3" /><span>{post.date}</span></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/[0.04] text-gray-500 rounded-full text-xs border border-white/[0.06]">
                        <Tag className="w-2.5 h-2.5" />{tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-primary-red font-semibold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                    Read More
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-base">No articles found. Try a different search or category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
