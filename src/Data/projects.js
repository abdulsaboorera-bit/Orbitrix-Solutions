import fonalizeImg from '../Images/Fonalize.webp';
import primeSafariImg from '../Images/PrimeSafariDubai.webp';
import stayImg from '../Images/Stay.webp';
import b2bImg from '../Images/b2b-MobileWholesale.webp';
import imranWoodImg from '../Images/imran-wood-working.webp';
import sawapakImg from '../Images/Sawapak.webp';
import getSalonsImg from '../Images/GetSalons.webp';


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
    slug: 'sawa-industries',
    name: 'SAWA Industries',
    url: 'https://www.sawapak.com/',
    category: 'website-development',
    categoryLabel: 'Website Development',
    status: 'Live',
    thumb: sawapakImg,
    shortDescription: 'A full-spectrum e-commerce platform for SAWA Industries featuring sublimation textile printing services, product catalog, and seamless shopping experience for sportswear, apparel, and swimwear.',
    heroImage: sawapakImg,
    challenge: 'SAWA Industries needed a professional e-commerce platform to showcase their full range of textile printing services — sublimation, screen printing, DTF, DTG, UV, and embroidery — while making it easy for global customers to browse products and request quotes.',
    approach: 'We designed a visually rich, product-focused platform with category-based browsing, high-quality product galleries, and a streamlined quote request system. The site needed to convey the quality and vibrancy of their printing work.',
    solution: 'Built a custom Next.js e-commerce platform with product categorization (Apparel, Sports Wears, Swimwear), quote request forms, WhatsApp integration, and responsive design. Optimized for international SEO to reach clients across 30+ countries.',
    results: [
      { metric: '500+', label: 'Happy clients worldwide' },
      { metric: '30+', label: 'Countries served' },
      { metric: '50K+', label: 'Products delivered' },
    ],
    technologies: ['Next.js', 'E-commerce', 'Product Catalog', 'Quote System', 'WhatsApp Integration', 'International SEO'],
    testimonial: {
      quote: 'Orbitrix Solutions delivered a stunning e-commerce platform that perfectly showcases our textile printing capabilities. The site has helped us reach clients across 30+ countries.',
      author: 'SAWA Industries Team',
      role: 'Client',
    },
    projectDetails: {
      client: 'SAWA Industries',
      timeline: '6 weeks',
      industry: 'Textile & Manufacturing',
      deliverables: ['E-commerce Platform', 'Product Catalog', 'Quote Request System', 'SEO Strategy', 'WhatsApp Integration'],
    },
  },
  {
    slug: 'getsalons',
    name: 'GetSalons',
    url: 'https://www.getsalons.com/',
    category: 'website-development',
    categoryLabel: 'Website Development',
    status: 'Live',
    thumb: getSalonsImg,
    shortDescription: 'Pakistan\'s leading salon discovery and booking platform built with Next.js. Features salon search, real-time booking, verified reviews, partner dashboard, and AI-powered recommendations.',
    heroImage: getSalonsImg,
    challenge: 'The salon industry in Pakistan relied entirely on word-of-mouth and phone calls. Customers had no way to compare prices, read reviews, or book appointments online. Salon owners struggled with no-shows and manual scheduling.',
    approach: 'We designed a mobile-first platform with intuitive search, real-time availability, and a seamless booking flow. The partner dashboard gives salon owners full control over their listings, schedules, and customer relationships.',
    solution: 'Built a full-stack Next.js application with server-side rendering for SEO, real-time booking system, review verification, AI-powered salon recommendations, partner management dashboard, and automated booking confirmations via email and WhatsApp.',
    results: [
      { metric: '1+', label: 'Partner salons' },
      { metric: '25', label: 'Cities covered' },
      { metric: '< 30s', label: 'Average booking time' },
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'Cloudinary', 'WhatsApp API', 'AI Recommendations', 'SSR/SEO'],
    testimonial: {
      quote: 'GetSalons transformed how our customers find and book salon services. The platform handles everything from discovery to confirmation seamlessly.',
      author: 'GetSalons Team',
      role: 'Client',
    },
    projectDetails: {
      client: 'GetSalons',
      timeline: '8 weeks',
      industry: 'Beauty & Wellness',
      deliverables: ['Full-Stack Web App', 'Booking System', 'Partner Dashboard', 'Review System', 'AI Recommendations', 'Email/WhatsApp Notifications'],
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
    slug: 'ai-social-media-automation',
    name: 'AI Automation Suite',
    url: '#',
    category: 'ai-automation',
    categoryLabel: 'AI Automation',
    status: 'Live',
    thumb: fonalizeImg,
    shortDescription: 'A comprehensive AI automation platform featuring voice agents, smart chatbots, email auto-responders, blog auto-publishers, and social media auto-posters — all orchestrated via n8n workflows and custom AI models.',
    heroImage: fonalizeImg,
    challenge: 'Businesses were losing customers to missed calls, slow email responses, inconsistent content publishing, and manual social media management. Each pain point required a separate tool, creating fragmented workflows and wasted hours every day.',
    approach: 'We built an integrated AI automation suite that addresses every operational bottleneck. Each module — voice agents, chatbots, email routing, blog publishing, and social media — is designed as an independent service that works standalone or as part of a unified automation pipeline.',
    solution: 'Developed AI voice agents that answer calls and book appointments 24/7, custom AI chatbots with API key integration, an AI email auto-responder that detects intent and routes to the right department, an n8n-powered blog auto-publisher that generates and posts SEO content, and an AI social media auto-poster that creates and schedules content across platforms.',
    results: [
      { metric: '24/7', label: 'Automated customer handling' },
      { metric: '10x', label: 'Faster content creation' },
      { metric: '70%', label: 'Reduction in manual tasks' },
    ],
    technologies: ['n8n', 'Custom AI Models', 'Voice AI', 'WhatsApp API', 'Email AI', 'Social Media APIs', 'SEO Automation', 'API Key Integration'],
    testimonial: {
      quote: 'The AI Automation Suite replaced five separate tools with one integrated system. Missed calls are now handled instantly, emails auto-route to the right team, and content publishes itself — all running 24/7.',
      author: 'Orbitrix Automation Team',
      role: 'Internal Project',
    },
    projectDetails: {
      client: 'Orbitrix Solutions',
      timeline: '6 weeks',
      industry: 'Digital Marketing & AI',
      deliverables: ['AI Voice Agents', 'Custom Chatbots', 'Email Auto-Responder', 'Blog Auto-Publisher', 'Social Media Auto-Poster', 'n8n Workflow Orchestration'],
    },
    chartData: [
      { label: 'Voice', value: 100, displayValue: '100 calls/day' },
      { label: 'Chat', value: 85, displayValue: '85 chats/day' },
      { label: 'Email', value: 70, displayValue: '70 emails/day' },
      { label: 'Blog', value: 30, displayValue: '30 posts/mo' },
      { label: 'Social', value: 60, displayValue: '60 posts/wk' },
      { label: 'Tasks', value: 95, displayValue: '95% automated' },
    ],
    chartTitle: 'AI Automation Output (Daily/Monthly)',
    chartMetric: 'Automated Interactions',
    keyHighlights: [
      { label: 'Missed Calls', before: '40%', after: '0%', unit: '' },
      { label: 'Email Response Time', before: '4 hrs', after: '< 30s', unit: '' },
      { label: 'Manual Content Work', before: '20 hrs/wk', after: '< 2 hrs/wk', unit: '' },
    ],
    seoKeywords: 'AI automation suite, AI voice agents, AI chatbots, email auto-responder, blog auto-publisher, social media auto-poster, n8n automation, AI voice agent for salons, AI voice agent for clinics, automated appointment booking, AI email routing, automated blog publishing, AI social media automation, business automation AI, AI workflow automation, n8n workflows, custom AI models, WhatsApp automation, AI customer service, 24/7 AI agents',
    seoTitle: 'AI Automation Suite | Voice Agents, Chatbots, Email & Content Automation | Orbitrix Solutions',
    seoDescription: 'Comprehensive AI automation suite with voice agents, smart chatbots, email auto-responders, blog auto-publishers, and social media auto-posters. Built on n8n and custom AI models for 24/7 automated operations.',
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
