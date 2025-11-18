export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  categories: string[];
  tags: string[];
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'top-10-video-production-tips-for-2025',
    title: '10 Essential Video Production Tips Every Filmmaker Should Know in 2025',
    excerpt: 'Master the art of video production with these proven tips that will elevate your filmmaking skills and create stunning visual content.',
    content: 'Full article content here...',
    image: 'https://picsum.photos/seed/videopro1/800/600',
    author: 'CK Studio Team',
    date: 'Jan 15, 2025',
    categories: ['Video Production', 'Tips & Tricks'],
    tags: ['filmmaking', 'production tips', 'video quality', 'cinematography'],
    readTime: '8 min read'
  },
  {
    slug: 'how-to-plan-corporate-video-shoot',
    title: 'How to Plan a Successful Corporate Video Shoot: Complete Guide',
    excerpt: 'Planning is everything. Learn our step-by-step process for executing flawless corporate video shoots that deliver results.',
    content: 'Full article content here...',
    image: 'https://picsum.photos/seed/corporate1/800/600',
    author: 'CK Studio Team',
    date: 'Jan 12, 2025',
    categories: ['Corporate Videos', 'Planning'],
    tags: ['corporate', 'pre-production', 'video planning', 'business videos'],
    readTime: '10 min read'
  },
  {
    slug: 'best-cameras-for-commercial-video-production-2025',
    title: 'Best Cameras for Commercial Video Production in 2025',
    excerpt: 'Discover the top camera equipment we use at CK Studio for high-quality commercial video production.',
    content: 'Full article content here...',
    image: 'https://picsum.photos/seed/cameras1/800/600',
    author: 'CK Studio Team',
    date: 'Jan 10, 2025',
    categories: ['Equipment', 'Commercial'],
    tags: ['cameras', 'gear', 'commercial video', 'equipment review'],
    readTime: '12 min read'
  },
  {
    slug: 'why-invest-in-professional-video-marketing',
    title: 'Why Your Business Needs Professional Video Marketing in 2025',
    excerpt: 'Video marketing is no longer optional. Learn why professional video content is crucial for your business growth.',
    content: 'Full article content here...',
    image: 'https://picsum.photos/seed/marketing1/800/600',
    author: 'CK Studio Team',
    date: 'Jan 8, 2025',
    categories: ['Video Marketing', 'Business'],
    tags: ['marketing', 'business growth', 'ROI', 'video strategy'],
    readTime: '6 min read'
  },
  {
    slug: 'behind-scenes-client-project-hyderabad',
    title: 'Behind the Scenes: Our Latest Corporate Video Project in Hyderabad',
    excerpt: 'Take a behind-the-scenes look at how we created a stunning corporate video for one of Hyderabad\'s leading tech companies.',
    content: 'Full article content here...',
    image: 'https://picsum.photos/seed/bts1/800/600',
    author: 'CK Studio Team',
    date: 'Jan 5, 2025',
    categories: ['Behind the Scenes', 'Case Studies'],
    tags: ['BTS', 'Hyderabad', 'case study', 'client work'],
    readTime: '7 min read'
  },
  {
    slug: 'lighting-techniques-for-professional-videos',
    title: 'Mastering Lighting: Professional Techniques for Cinematic Videos',
    excerpt: 'Lighting can make or break your video. Learn professional lighting techniques that create cinema-quality results.',
    content: 'Full article content here...',
    image: 'https://picsum.photos/seed/lighting1/800/600',
    author: 'CK Studio Team',
    date: 'Jan 3, 2025',
    categories: ['Technical', 'Tips & Tricks'],
    tags: ['lighting', 'cinematography', 'technical skills', 'production'],
    readTime: '9 min read'
  },
  {
    slug: 'video-production-costs-breakdown-india',
    title: 'Video Production Costs in India: Complete Breakdown for 2025',
    excerpt: 'Transparent pricing guide: Understand what goes into video production costs and how to budget for your project.',
    content: 'Full article content here...',
    image: 'https://picsum.photos/seed/costs1/800/600',
    author: 'CK Studio Team',
    date: 'Dec 28, 2024',
    categories: ['Business', 'Planning'],
    tags: ['pricing', 'budget', 'costs', 'India'],
    readTime: '11 min read'
  },
  {
    slug: 'post-production-workflow-guide',
    title: 'Post-Production Workflow: From Raw Footage to Final Cut',
    excerpt: 'Follow our professional post-production workflow to create polished, high-quality videos every time.',
    content: 'Full article content here...',
    image: 'https://picsum.photos/seed/postpro1/800/600',
    author: 'CK Studio Team',
    date: 'Dec 25, 2024',
    categories: ['Post-Production', 'Technical'],
    tags: ['editing', 'workflow', 'post-production', 'video editing'],
    readTime: '10 min read'
  },
  {
    slug: 'wedding-cinematography-trends-2025',
    title: 'Top Wedding Cinematography Trends to Watch in 2025',
    excerpt: 'Stay ahead of the curve with the latest wedding video trends that couples are loving in 2025.',
    content: 'Full article content here...',
    image: 'https://picsum.photos/seed/wedding1/800/600',
    author: 'CK Studio Team',
    date: 'Dec 22, 2024',
    categories: ['Wedding Videos', 'Trends'],
    tags: ['weddings', 'trends', 'cinematography', 'couples'],
    readTime: '8 min read'
  }
];
