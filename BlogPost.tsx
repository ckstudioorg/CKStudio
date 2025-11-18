import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from './blogData';
import { Calendar, User, Tag, Clock, ArrowLeft } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold mb-8 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Featured Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Title & Meta */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Author & Date Info */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-red-600" />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-red-600" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-red-600" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          {post.categories.map(category => (
            <span key={category} className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {category}
            </span>
          ))}
        </div>

        {/* Excerpt */}
        <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
          {post.excerpt}
        </p>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-800 leading-relaxed space-y-6">
            <p className="text-lg">
              {post.content}
            </p>
            <p className="text-lg">
              This is a placeholder article. In a real implementation, you would store full article content in your blogData.ts file or fetch it from a CMS/API.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Key Takeaways</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Professional video production requires careful planning and expertise</li>
              <li>Quality equipment and skilled team make all the difference</li>
              <li>CK Studio delivers exceptional results for clients across India</li>
            </ul>
            <p className="text-lg mt-8">
              Ready to elevate your video content? Contact CK Studio today to discuss your project and get a custom quote.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {post.tags.map(tag => (
              <span key={tag} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-red-50 hover:text-red-600 transition-colors">
                <Tag className="w-4 h-4" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Something Amazing?</h2>
          <p className="text-xl mb-8 text-red-100">Let's bring your vision to life with professional video production</p>
          <Link to="/#contact" className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors shadow-xl">
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
