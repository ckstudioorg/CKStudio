import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const BlogPost: React.FC = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-dark-950 flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-display font-bold mb-4">Post Not Found</h1>
                    <Link to="/blog" className="text-primary-red hover:underline">← Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-dark-950">
            <SEO
                title={post.title}
                description={post.excerpt}
                image={post.image}
                type="article"
            />

            {/* Hero Image */}
            <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary-red transition-colors mb-6">
                                <ArrowLeft className="w-4 h-4" /> Back to Blog
                            </Link>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.categories.map(cat => (
                                    <span key={cat} className="px-3 py-1 rounded-full bg-primary-red/90 text-white text-xs font-bold">{cat}</span>
                                ))}
                            </div>
                            <h1 className="text-3xl md:text-5xl font-display font-black text-white leading-tight mb-4">{post.title}</h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                                <span className="flex items-center gap-2"><User className="w-4 h-4" />{post.author}</span>
                                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{post.date}</span>
                                <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime}</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card p-8 md:p-12"
                >
                    <p className="text-lg text-gray-300 leading-relaxed mb-8">{post.excerpt}</p>
                    <div className="divider-glow mb-8" />
                    <div className="prose prose-invert prose-red max-w-none text-gray-400 leading-relaxed">
                        <p>{post.content}</p>
                    </div>
                </motion.div>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.04] text-gray-500 rounded-full text-xs border border-white/[0.06]">
                            <Tag className="w-3 h-3" />{tag}
                        </span>
                    ))}
                </div>

                {/* Related Posts */}
                <div className="mt-16">
                    <h3 className="text-xl font-display font-bold text-white mb-6">Related Articles</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {blogPosts
                            .filter(p => p.slug !== post.slug)
                            .slice(0, 2)
                            .map(relatedPost => (
                                <Link
                                    key={relatedPost.slug}
                                    to={`/blog/${relatedPost.slug}`}
                                    className="glass-card overflow-hidden hover:border-primary-red/20 transition-all duration-300 group"
                                >
                                    <div className="relative h-40 overflow-hidden">
                                        <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent opacity-60" />
                                    </div>
                                    <div className="p-5">
                                        <h4 className="text-sm font-display font-bold text-white group-hover:text-primary-red transition-colors line-clamp-2">{relatedPost.title}</h4>
                                        <p className="text-xs text-gray-500 mt-2">{relatedPost.date} · {relatedPost.readTime}</p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
