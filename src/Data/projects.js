import fonalizeImg from '../Images/Fonalize.webp';
import primeSafariImg from '../Images/PrimeSafariDubai.webp';
import royalBeautyImg from '../Images/RoyalBeautySalon.webp';
import stayImg from '../Images/Stay.webp';
import b2bImg from '../Images/b2b-MobileWholesale.webp';
import imranWoodImg from '../Images/imran-wood-working.webp';


export const categories = [
  { slug: 'all', label: 'All Projects' },
  { slug: 'website-development', label: 'Website Development' },
  { slug: 'seo', label: 'SEO' },
  { slug: 'ai-automation', label: 'AI Automation' },
];

export const projects = [
  {
    slug: 'fonalize-brand-website',
    name: 'Fonalize',
    url: 'https://fonalize.co.uk/',
    category: 'website-development',
    categoryLabel: 'Website Development',
    status: 'Live',
    thumb: fonalizeImg,
    shortDescription: 'A modern brand website for Fonalize, built with clean design, fast performance, and conversion-focused layout to establish a strong digital presence.',
    heroImage: fonalizeImg,
    challenge: 'Fonalize needed a professional online presence that reflected their brand identity while driving customer engagement. Their existing digital footprint was minimal, making it hard to attract and retain customers in a competitive market.',
    approach: 'We conducted brand workshops to understand Fonalize\'s vision, then designed a custom website that balances aesthetics with functionality. The approach focused on mobile-first design, fast load times, and clear conversion paths.',
    solution: 'Built a responsive WordPress website with a custom theme, optimized images, and smooth scroll animations. Integrated contact forms, social proof sections, and a service showcase that guides visitors toward action.',
    results: [
      { metric: '3x', label: 'Increase in inquiries' },
      { metric: '< 2s', label: 'Page load time' },
      { metric: '95%', label: 'Mobile usability score' },
    ],
    technologies: ['WordPress', 'Custom Theme', 'Responsive Design', 'Speed Optimization', 'SEO Optimization'],
    testimonial: {
      quote: 'Orbitrix Solutions delivered a website that perfectly captures our brand. The attention to detail and performance optimization exceeded our expectations.',
      author: 'Fonalize Team',
      role: 'Client',
    },
    projectDetails: {
      client: 'Fonalize',
      timeline: '3 weeks',
      industry: 'Brand & Retail',
      deliverables: ['Custom Website', 'Responsive Design', 'SEO Setup', 'Performance Optimization'],
    },
  },
  {
    slug: 'royal-beauty-salon',
    name: 'Royal Beauty Salon',
    url: 'https://royalbeautysaloon.com/',
    category: 'website-development',
    categoryLabel: 'Website Development',
    status: 'Live',
    thumb: royalBeautyImg,
    shortDescription: 'An elegant beauty salon website with booking integration, service showcases, and a premium visual experience that reflects the brand\'s luxury positioning.',
    heroImage: royalBeautyImg,
    challenge: 'Royal Beauty Salon wanted a website that matched their premium in-store experience. They needed online booking capability, service presentation, and a visual identity that communicated luxury and trust.',
    approach: 'We designed a visually rich website with warm tones, elegant typography, and immersive imagery. The layout prioritizes service discovery and makes booking effortless.',
    solution: 'Developed a custom WordPress site with a booking system, service gallery with before/after showcases, team profiles, and an integrated contact system. Optimized for local SEO to capture nearby searches.',
    results: [
      { metric: '5x', label: 'More online bookings' },
      { metric: '40%', label: 'Increase in website traffic' },
      { metric: '4.8', label: 'Google rating maintained' },
    ],
    technologies: ['WordPress', 'Custom Theme', 'Booking System', 'Local SEO', 'Image Optimization'],
    testimonial: {
      quote: 'Our new website looks stunning and our booking rate has increased significantly. Clients often mention how professional our online presence looks.',
      author: 'Royal Beauty Team',
      role: 'Client',
    },
    projectDetails: {
      client: 'Royal Beauty Salon',
      timeline: '4 weeks',
      industry: 'Beauty & Wellness',
      deliverables: ['Custom Website', 'Booking Integration', 'Local SEO', 'Content Strategy'],
    },
  },
  {
    slug: 'prime-safari-dubai',
    name: 'Prime Safari Dubai',
    url: 'https://primesafaridubai.com/',
    category: 'website-development',
    categoryLabel: 'Website Development',
    status: 'Live',
    thumb: primeSafariImg,
    shortDescription: 'A stunning travel and tours website for Prime Safari Dubai, featuring immersive visuals, tour packages, and seamless booking experience for adventure seekers.',
    heroImage: primeSafariImg,
    challenge: 'Prime Safari Dubai needed a website that could showcase their adventure tours with breathtaking visuals while making it easy for customers to browse packages and book experiences.',
    approach: 'We created an immersive design with full-width hero imagery, interactive tour cards, and a booking flow that reduces friction. The site needed to perform well on mobile for travelers on the go.',
    solution: 'Built a custom WordPress website with lazy-loaded images, interactive tour galleries, pricing tables, and a multi-step booking form. Integrated WhatsApp for instant communication and added customer review sections.',
    results: [
      { metric: '4x', label: 'More tour inquiries' },
      { metric: '60%', label: 'Mobile conversion rate' },
      { metric: '2.5s', label: 'Average load time' },
    ],
    technologies: ['WordPress', 'Custom Theme', 'Interactive UI', 'WhatsApp Integration', 'Performance Optimization'],
    testimonial: {
      quote: 'The website perfectly captures the adventure spirit of our brand. Booking requests have increased dramatically since launch.',
      author: 'Prime Safari Team',
      role: 'Client',
    },
    projectDetails: {
      client: 'Prime Safari Dubai',
      timeline: '5 weeks',
      industry: 'Travel & Tourism',
      deliverables: ['Custom WordPress Website', 'Tour Gallery', 'Booking System', 'WhatsApp Integration'],
    },
  },
  {
    slug: 'stay-pakistan',
    name: 'Stay Pakistan',
    url: 'https://stay.com.pk/',
    category: 'website-development',
    categoryLabel: 'Website Development',
    status: 'Live',
    thumb: stayImg,
    shortDescription: 'A hospitality platform for Stay Pakistan featuring property listings, booking management, and a clean interface designed for trust and ease of use.',
    heroImage: stayImg,
    challenge: 'Stay Pakistan needed a professional platform to list properties, handle bookings, and build trust with customers in the competitive hospitality market of Pakistan.',
    approach: 'We designed a clean, trust-building interface with property cards, detailed listings, filters, and a streamlined booking process. Performance and SEO were critical for organic growth.',
    solution: 'Developed a custom web application with property management, search filters, booking forms, and responsive design. Implemented schema markup for properties and optimized for local search.',
    results: [
      { metric: '200+', label: 'Properties listed' },
      { metric: '3x', label: 'Organic traffic growth' },
      { metric: '85%', label: 'Booking completion rate' },
    ],
    technologies: ['Custom Web App', 'Schema Markup', 'Local SEO', 'Search & Filters', 'Responsive Design'],
    testimonial: {
      quote: 'The platform has transformed how we manage and present our properties. The booking system is smooth and our online visibility has improved tremendously.',
      author: 'Stay Pakistan Team',
      role: 'Client',
    },
    projectDetails: {
      client: 'Stay Pakistan',
      timeline: '6 weeks',
      industry: 'Hospitality',
      deliverables: ['Web Platform', 'Property Management', 'Booking System', 'SEO Strategy'],
    },
  },
  {
    slug: 'b2b-mobile-wholesalers',
    name: 'B2B Mobile Wholesalers',
    url: 'https://www.b2bmobilewholesalers.com/',
    category: 'website-development',
    categoryLabel: 'Website Development',
    status: 'In Progress',
    thumb: b2bImg,
    shortDescription: 'A B2B commerce platform for mobile wholesalers featuring product catalogs, bulk ordering, and streamlined wholesale operations.',
    heroImage: b2bImg,
    challenge: 'B2B Mobile Wholesalers needed a digital platform to manage their wholesale operations, showcase their extensive product catalog, and streamline the bulk ordering process for business customers.',
    approach: 'We designed a product-focused platform with advanced filtering, bulk order capabilities, and a clean catalog interface. The priority was making large product lists easy to navigate and order from.',
    solution: 'Building a custom commerce platform with product categorization, bulk ordering system, quote request forms, and inventory management. Optimized for fast browsing even with large product catalogs.',
    results: [
      { metric: '1000+', label: 'Products cataloged' },
      { metric: '50%', label: 'Faster order processing' },
      { metric: '24h', label: 'Quote turnaround' },
    ],
    technologies: ['E-commerce Platform', 'Product Catalog', 'Bulk Ordering', 'Inventory Management', 'Fast Loading'],
    testimonial: {
      quote: 'The new platform is making it much easier for our business clients to browse and place bulk orders. Our wholesale operations are becoming more efficient.',
      author: 'B2B Mobile Team',
      role: 'Client',
    },
    projectDetails: {
      client: 'B2B Mobile Wholesalers',
      timeline: '8 weeks',
      industry: 'Commerce',
      deliverables: ['E-commerce Platform', 'Product Catalog', 'Bulk Order System', 'Admin Dashboard'],
    },
  },
  {
    slug: 'imran-woodworking',
    name: 'Imran Woodworking',
    url: 'https://imranwoodworking.com/',
    category: 'website-development',
    categoryLabel: 'Website Development',
    status: 'Live',
    thumb: imranWoodImg,
    shortDescription: 'A craftsmanship-focused website for Imran Woodworking showcasing custom furniture, workshop capabilities, and artisan quality through rich visuals.',
    heroImage: imranWoodImg,
    challenge: 'Imran Woodworking needed a website that would showcase their handcrafted furniture and woodworking expertise. The challenge was translating the tactile, artisan quality of their work into a digital experience.',
    approach: 'We created a warm, craftsmanship-focused design with large imagery, project galleries, and storytelling sections that highlight the artisan process. The site needed to convey quality and attention to detail.',
    solution: 'Developed a WordPress site with custom post types for projects, high-resolution galleries, before/after showcases, and a contact system for custom orders. Optimized for local search and artisan-related keywords.',
    results: [
      { metric: '2x', label: 'More custom orders' },
      { metric: '80%', label: 'Traffic from local search' },
      { metric: '4.9', label: 'Customer satisfaction' },
    ],
    technologies: ['WordPress', 'Custom Post Types', 'Image Galleries', 'Local SEO', 'Contact Forms'],
    testimonial: {
      quote: 'The website beautifully showcases our craftsmanship. Customers now come to us having already seen our work quality, leading to better-qualified leads.',
      author: 'Imran Woodworking',
      role: 'Client',
    },
    projectDetails: {
      client: 'Imran Woodworking',
      timeline: '3 weeks',
      industry: 'Manufacturing',
      deliverables: ['Custom Website', 'Project Gallery', 'Local SEO', 'Lead Capture Forms'],
    },
  },
  {
    slug: 'fonalize-seo-campaign',
    name: 'Fonalize – SEO Campaign',
    url: 'https://fonalize.co.uk/',
    category: 'seo',
    categoryLabel: 'SEO',
    status: 'Live',
    thumb: fonalizeImg,
    shortDescription: 'A results-driven SEO campaign for Fonalize that boosted organic visibility, drove qualified traffic, and positioned the brand at the top of search results in a competitive market.',
    heroImage: fonalizeImg,
    challenge: 'Fonalize had a new website with minimal search presence. Competing brands dominated key search terms, and the business needed a way to attract organic traffic without relying solely on paid ads.',
    approach: 'We conducted a full SEO audit including technical crawl, keyword gap analysis, competitor benchmarking, and content audit. The strategy focused on high-intent commercial keywords with achievable competition levels.',
    solution: 'Implemented technical SEO fixes (Core Web Vitals, schema markup, XML sitemaps, robots.txt optimization), created 15+ SEO-optimized content pieces targeting buyer-intent keywords, built quality backlinks through digital PR, and set up ongoing rank tracking with monthly reporting.',
    results: [
      { metric: '35+', label: 'Keywords on page 1' },
      { metric: '280%', label: 'Organic traffic increase' },
      { metric: '60%', label: 'More qualified inquiries' },
    ],
    technologies: ['Technical SEO', 'Content Strategy', 'Keyword Research', 'Link Building', 'Rank Tracking'],
    testimonial: {
      quote: 'Our organic traffic has grown significantly since the SEO campaign began. We\'re now ranking for terms we never thought we could compete for.',
      author: 'Fonalize Team',
      role: 'Client',
    },
    projectDetails: {
      client: 'Fonalize',
      timeline: 'Ongoing (initial results in 3 months)',
      industry: 'Brand & Retail',
      deliverables: ['SEO Audit', 'Content Strategy', 'Technical Fixes', 'Monthly Reporting', 'Link Building'],
    },
    chartData: [
      { label: 'Jan', value: 12, displayValue: '1.2K' },
      { label: 'Feb', value: 18, displayValue: '1.8K' },
      { label: 'Mar', value: 35, displayValue: '3.5K' },
      { label: 'Apr', value: 52, displayValue: '5.2K' },
      { label: 'May', value: 78, displayValue: '7.8K' },
      { label: 'Jun', value: 95, displayValue: '9.5K' },
    ],
    chartTitle: 'Organic Traffic Growth (6 Months)',
    chartMetric: 'Monthly Visits',
    keyHighlights: [
      { label: 'Domain Authority', before: '12', after: '34', unit: '' },
      { label: 'Backlinks', before: '45', after: '280', unit: '+' },
      { label: 'Avg. Position', before: '38', after: '8.2', unit: '' },
    ],
  },
  {
    slug: 'royal-beauty-seo-campaign',
    name: 'Royal Beauty Salon – SEO Campaign',
    url: 'https://royalbeautysaloon.com/',
    category: 'seo',
    categoryLabel: 'SEO',
    status: 'Live',
    thumb: royalBeautyImg,
    shortDescription: 'A local SEO campaign for Royal Beauty Salon that drove nearby customers to book appointments, boosting organic visibility and local search dominance.',
    heroImage: royalBeautyImg,
    challenge: 'Royal Beauty Salon relied heavily on walk-ins and word-of-mouth. Their online visibility was poor, and competing salons were capturing local search traffic that should have been theirs.',
    approach: 'We focused on local SEO strategies including Google Business Profile optimization, local citation building, review management, and locally-targeted content. The goal was to dominate "salon near me" and service-specific local searches.',
    solution: 'Optimized Google Business Profile with complete info, service categories, and regular posts. Built 30+ local citations across directories, collected and managed customer reviews, created location-specific service pages, and implemented local schema markup. Monthly reporting tracked local rank positions and traffic.',
    results: [
      { metric: '1st', label: 'Local pack ranking (salon near me)' },
      { metric: '150%', label: 'Organic traffic from local searches' },
      { metric: '3x', label: 'Booking inquiries from Google' },
    ],
    technologies: ['Local SEO', 'Google Business Profile', 'Citation Building', 'Review Management', 'Local Schema'],
    testimonial: {
      quote: 'We\'re now the first salon customers see when they search for beauty services nearby. Our bookings have increased and more customers mention finding us on Google.',
      author: 'Royal Beauty Team',
      role: 'Client',
    },
    projectDetails: {
      client: 'Royal Beauty Salon',
      timeline: 'Ongoing (initial results in 2 months)',
      industry: 'Beauty & Wellness',
      deliverables: ['Google Business Optimization', 'Local Citations', 'Review Management', 'Local Content', 'Monthly Reports'],
    },
    chartData: [
      { label: 'Jan', value: 8, displayValue: '80' },
      { label: 'Feb', value: 22, displayValue: '220' },
      { label: 'Mar', value: 45, displayValue: '450' },
      { label: 'Apr', value: 68, displayValue: '680' },
      { label: 'May', value: 82, displayValue: '820' },
      { label: 'Jun', value: 98, displayValue: '980' },
    ],
    chartTitle: 'Local Search Impressions (6 Months)',
    chartMetric: 'Monthly Impressions',
    keyHighlights: [
      { label: 'Google Maps Views', before: '120/mo', after: '1,800/mo', unit: '' },
      { label: 'Review Score', before: '4.2', after: '4.9', unit: '★' },
      { label: 'Local Pack Position', before: '8th', after: '1st', unit: '' },
    ],
  },
  {
    slug: 'ai-social-media-automation',
    name: 'AI Social Media Automation',
    url: '#',
    category: 'ai-automation',
    categoryLabel: 'AI Automation',
    status: 'Live',
    thumb: fonalizeImg,
    shortDescription: 'An intelligent AI-powered social media automation system that researches trending growth topics, generates SEO-optimized posts with captions and descriptions, and auto-publishes across Facebook, Instagram, and LinkedIn.',
    heroImage: fonalizeImg,
    challenge: 'Managing social media manually was time-consuming and inconsistent. The business needed a way to maintain a consistent posting schedule with high-quality, growth-focused content without dedicating hours each day to content creation and platform management.',
    approach: 'We designed an end-to-end AI automation workflow that handles everything from keyword research and trend analysis to content generation and scheduled publishing. The system uses AI to research trending growth topics, craft engaging captions and descriptions, optimize each post for SEO with meta-targeted keywords, and automatically publish to connected social media accounts at optimal times.',
    solution: 'Built an intelligent AI agent pipeline that monitors industry trends, generates growth-focused social media content including posts, captions, and SEO descriptions, and publishes across multiple social platforms. The system includes automated scheduling, hashtag optimization, keyword targeting, and performance tracking to ensure maximum reach and engagement.',
    results: [
      { metric: '10x', label: 'Faster content creation' },
      { metric: '95%', label: 'Posting consistency rate' },
      { metric: '3x', label: 'Increase in social engagement' },
    ],
    technologies: ['AI Content Generation', 'Social Media APIs', 'Automated Scheduling', 'SEO Keyword Targeting', 'Trend Analysis'],
    testimonial: {
      quote: 'The AI automation completely transformed our social media presence. What used to take hours now happens automatically with better content and higher engagement.',
      author: 'Orbitrix Automation Team',
      role: 'Internal Project',
    },
    projectDetails: {
      client: 'Orbitrix Solutions',
      timeline: '4 weeks',
      industry: 'Digital Marketing & AI',
      deliverables: ['AI Content Pipeline', 'Social Media Integration', 'Automated Scheduling', 'SEO Optimization Engine', 'Performance Dashboard'],
    },
    chartData: [
      { label: 'Week 1', value: 15, displayValue: '15 posts' },
      { label: 'Week 2', value: 35, displayValue: '35 posts' },
      { label: 'Week 3', value: 55, displayValue: '55 posts' },
      { label: 'Week 4', value: 70, displayValue: '70 posts' },
      { label: 'Week 5', value: 85, displayValue: '85 posts' },
      { label: 'Week 6', value: 100, displayValue: '100 posts' },
    ],
    chartTitle: 'Automated Content Output (6 Weeks)',
    chartMetric: 'Posts Published',
    keyHighlights: [
      { label: 'Content Creation Time', before: '4 hrs/post', after: '2 min/post', unit: '' },
      { label: 'Monthly Posts', before: '8', after: '120+', unit: '' },
      { label: 'Social Engagement Rate', before: '1.2%', after: '4.8%', unit: '' },
    ],
    seoKeywords: 'AI social media automation, automated social media posting, AI content generation, social media growth automation, automated Facebook posting, automated Instagram posting, automated LinkedIn posting, AI-powered marketing, social media scheduling AI, content automation tools, AI marketing automation, growth hacking automation, SEO content automation, social media management AI, AI post scheduler, automated content creation, social media ROI, AI digital marketing, social media automation agency, AI social media manager',
    seoTitle: 'AI Social Media Automation | Automated Posting & Content Generation | Orbitrix Solutions',
    seoDescription: 'AI-powered social media automation that researches trending topics, generates SEO-optimized posts, and auto-publishes across Facebook, Instagram, and LinkedIn. 10x faster content creation with 3x more engagement.',
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category) {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
}

export function getRelatedProjects(currentSlug, limit = 3) {
  const current = getProjectBySlug(currentSlug);
  if (!current) return projects.slice(0, limit);
  return projects
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}

export function getAdjacentProjects(currentSlug) {
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  const prev = idx > 0 ? projects[idx - 1] : projects[projects.length - 1];
  const next = idx < projects.length - 1 ? projects[idx + 1] : projects[0];
  return { prev, next };
}
