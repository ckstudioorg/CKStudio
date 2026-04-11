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
    slug: 'how-ai-revolutionizing-ad-film-production',
    title: 'How AI is Revolutionizing Ad Film Production in 2025',
    excerpt: 'Discover how artificial intelligence is transforming every stage of advertising film production — from concept to delivery — and why studios are embracing AI-first workflows.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    author: 'CK Studio Team',
    date: 'Mar 15, 2025',
    categories: ['AI Technology', 'Ad Films'],
    tags: ['AI filmmaking', 'advertising', 'production technology', 'AI workflow'],
    readTime: '10 min read'
  },
  {
    slug: 'ai-color-grading-cinema-grade-results',
    title: 'AI Color Grading: Achieving Cinema-Grade Results 10× Faster',
    excerpt: 'Learn how neural network-powered color grading tools are enabling filmmakers to achieve Hollywood-quality color science at a fraction of the time and cost.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop',
    author: 'CK Studio Team',
    date: 'Mar 10, 2025',
    categories: ['AI Technology', 'Post-Production'],
    tags: ['color grading', 'AI tools', 'post-production', 'neural networks'],
    readTime: '8 min read'
  },
  {
    slug: 'future-of-ai-generated-vfx-in-advertising',
    title: 'The Future of AI-Generated Visual Effects in Advertising',
    excerpt: 'From neural rendering to AI compositing, explore how generative AI is creating visual effects that were previously impossible for advertising budgets.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop',
    author: 'CK Studio Team',
    date: 'Mar 5, 2025',
    categories: ['AI Technology', 'VFX'],
    tags: ['VFX', 'AI generation', 'neural rendering', 'visual effects'],
    readTime: '12 min read'
  },
  {
    slug: 'ai-storyboarding-creative-process',
    title: 'AI Storyboarding: How We Use AI to Supercharge the Creative Process',
    excerpt: 'See how our studio leverages AI-generated storyboards to accelerate pre-production while maintaining the creative vision of every project.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop',
    author: 'CK Studio Team',
    date: 'Feb 28, 2025',
    categories: ['AI Technology', 'Pre-Production'],
    tags: ['storyboarding', 'AI tools', 'pre-production', 'creative process'],
    readTime: '7 min read'
  },
  {
    slug: 'why-brands-choosing-ai-powered-ad-films',
    title: 'Why Leading Brands Are Choosing AI-Powered Ad Film Production',
    excerpt: 'Major brands are shifting to AI-enhanced ad film production. Here\'s why the ROI, speed, and creative possibilities make it the future of advertising.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1551817958-d9d86fb29431?w=800&h=600&fit=crop',
    author: 'CK Studio Team',
    date: 'Feb 20, 2025',
    categories: ['Business', 'Ad Films'],
    tags: ['branding', 'ROI', 'AI advertising', 'marketing strategy'],
    readTime: '9 min read'
  },
  {
    slug: 'ai-audio-mastering-film-production',
    title: 'AI Audio Mastering: The Silent Revolution in Film Production',
    excerpt: 'AI-powered audio tools are transforming how filmmakers handle sound design, mixing, and mastering — delivering studio-quality sound with remarkable efficiency.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
    author: 'CK Studio Team',
    date: 'Feb 15, 2025',
    categories: ['AI Technology', 'Post-Production'],
    tags: ['audio mastering', 'sound design', 'AI audio', 'mixing'],
    readTime: '8 min read'
  },
  {
    slug: 'corporate-video-production-ai-era',
    title: 'Corporate Video Production in the AI Era: A Complete Guide',
    excerpt: 'How AI is transforming corporate video production — from AI-optimized scripting and scheduling to intelligent editing and delivery.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
    author: 'CK Studio Team',
    date: 'Feb 10, 2025',
    categories: ['Corporate Films', 'AI Technology'],
    tags: ['corporate video', 'AI production', 'business video', 'enterprise'],
    readTime: '11 min read'
  },
  {
    slug: 'behind-scenes-ai-powered-tvc-production',
    title: 'Behind the Scenes: Our AI-Powered TVC Production Process',
    excerpt: 'Take a behind-the-scenes look at how CK Studio combines human creativity with AI technology to produce award-worthy television commercials.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
    author: 'CK Studio Team',
    date: 'Feb 5, 2025',
    categories: ['Behind the Scenes', 'Ad Films'],
    tags: ['BTS', 'TVC production', 'AI workflow', 'commercials'],
    readTime: '7 min read'
  },
  {
    slug: 'generative-ai-advertising-creative-development',
    title: 'Generative AI in Advertising: Transforming Creative Development',
    excerpt: 'How generative AI tools are changing the way advertising agencies and studios develop creative concepts, from ideation to final execution.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&h=600&fit=crop',
    author: 'CK Studio Team',
    date: 'Jan 28, 2025',
    categories: ['AI Technology', 'Creative'],
    tags: ['generative AI', 'creative development', 'advertising', 'innovation'],
    readTime: '10 min read'
  },
];
