import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Calendar, Tag, User, Search, Filter } from 'lucide-react';

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
    <div className="min-h-screen bg-white py-20">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">CK Studio Blog</h1>
          <p className="text-xl md:text-2xl text-red-100">Insights, Tips & Stories from the World of Video Production</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 space-y-6">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input type="text" placeholder="Search articles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none text-gray-800" />
          </div>
          <div className="flex flex-wrap gap-3">
            <Filter className="w-5 h-5 text-gray-600 mt-2" />
            {categories.map(category => (
              <button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category ? 'bg-red-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{category}</button>
            ))}
          </div>
        </div>
        <p className="text-gray-600 mb-8">Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-red-600 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{post.categories[0]}</div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>{post.author}</span></div>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{post.date}</span></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map(tag => (<span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"><Tag className="w-3 h-3" />{tag}</span>))}
                </div>
                <div className="mt-4 text-red-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">Read More →</div>
              </div>
            </Link>
          ))}
        </div>
        {filteredPosts.length === 0 && (<div className="text-center py-12"><p className="text-gray-500 text-lg">No articles found. Try a different search or category.</p></div>)}
      </div>
    </div>
  );
};

export default Blog;
