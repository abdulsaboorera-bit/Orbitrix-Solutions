import {
  faCode,
  faSearch,
  faRobot,
  faBullhorn,
  faShareAlt,
  faPalette,
  faShieldAlt,
  faTachometerAlt,
  faMobileAlt,
  faChartLine,
  faChartPie,
  faCogs,
  faEnvelope,
  faUsers,
  faBullseye,
  faBrain,
  faRocket,
  faSearchPlus,
  faLink,
  faFileAlt,
  faChartBar,
  faMoneyBillWave,
  faCrosshairs,
  faHandshake,
  faPaintBrush,
  faVideo,
  faHashtag,
  faClipboardList,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';

const servicesData = [
  {
    id: 'wordpress-development',
    num: '01',
    title: 'WordPress Development',
    icon: faWordpress,
    slug: '/services/wordpress-development',
    summary:
      'Custom WordPress websites with responsive themes, plugin integration, WooCommerce stores, and speed optimization — built for scalability and easy content management.',
    subtitle: 'Custom WordPress Websites Built for Performance & Growth',
    description:
      'As a leading WordPress development agency, Orbitrix Solutions creates custom WordPress websites that are fast, secure, and designed for easy content management. Whether you need a corporate site, a WooCommerce store, or a content-heavy publishing platform, our WordPress developers build solutions that scale with your business goals.',
    benefits: [
      'Custom theme development tailored to your brand identity',
      'Plugin integration and custom functionality',
      'WooCommerce setup for e-commerce businesses',
      'Speed optimization for Core Web Vitals compliance',
      'Security hardening and malware protection',
      'Responsive design across all devices and browsers',
      'CMS training so your team can manage content independently',
    ],
    problemsSolved: [
      'Slow-loading WordPress sites that hurt SEO rankings',
      'Outdated themes that look unprofessional on modern devices',
      'Security vulnerabilities from poorly maintained plugins',
      'Difficulty managing content without technical knowledge',
      'Poor mobile experience losing potential customers',
    ],
    internationalValue:
      'For businesses in the USA, Canada, UK, and Europe, a professionally built WordPress website serves as the foundation of digital credibility. Our WordPress development services help international businesses establish a professional online presence that builds trust with customers across markets.',
    features: [
      { icon: faTachometerAlt, label: 'Speed Optimized' },
      { icon: faShieldAlt, label: 'Secure & Reliable' },
      { icon: faMobileAlt, label: 'Fully Responsive' },
      { icon: faPalette, label: 'Custom Design' },
    ],
    relatedLinks: [
      { label: 'SEO Services', slug: '/services/seo-services' },
      { label: 'Digital Marketing', slug: '/services/digital-marketing' },
    ],
  },
  {
    id: 'react-development',
    num: '02',
    title: 'React Web Development',
    icon: faCode,
    slug: '/services/react-development',
    summary:
      'Modern, blazing-fast React applications with component-based architecture, real-time interactions, API integration, and production-ready performance for enterprise and startup clients.',
    subtitle: 'Modern React Applications with Enterprise-Grade Performance',
    description:
      'Orbitrix Solutions is a React development company building blazing-fast single-page applications with component-based architecture. Our React developers create modern web applications with real-time data handling, API integration, and responsive interfaces that deliver exceptional user experiences across all devices.',
    benefits: [
      'Component-based architecture for maintainable codebases',
      'Real-time data updates and dynamic content rendering',
      'API integration with RESTful and GraphQL backends',
      'Progressive Web App (PWA) capabilities',
      'Server-side rendering for SEO-friendly React apps',
      'State management with Redux, Context API, or Zustand',
      'TypeScript integration for type-safe development',
    ],
    problemsSolved: [
      'Slow, clunky web applications that frustrate users',
      'Difficulty scaling traditional jQuery-based websites',
      'Poor mobile performance on complex web applications',
      'Inability to handle real-time data and interactions',
      'SEO challenges with single-page applications',
    ],
    internationalValue:
      'For SaaS companies and tech startups in the USA, Canada, and Europe, React web development provides the performance and scalability needed to compete in global markets. Our React applications help businesses deliver seamless experiences to users worldwide.',
    features: [
      { icon: faRocket, label: 'Blazing Fast' },
      { icon: faCode, label: 'Clean Architecture' },
      { icon: faMobileAlt, label: 'Cross-Platform' },
      { icon: faChartLine, label: 'SEO Ready' },
    ],
    relatedLinks: [
      { label: 'WordPress Development', slug: '/services/wordpress-development' },
      { label: 'AI Automation', slug: '/services/ai-automation-services' },
    ],
  },
  {
    id: 'seo-services',
    num: '03',
    title: 'SEO Services',
    icon: faSearch,
    slug: '/services/seo-services',
    summary:
      'Data-driven SEO strategies including technical audits, keyword research, on-page optimization, content planning, and link building to improve rankings and organic traffic.',
    subtitle: 'Data-Driven SEO Strategies for Sustainable Organic Growth',
    description:
      'Orbitrix Solutions is a results-focused SEO agency providing comprehensive search engine optimization services for businesses in the USA, Canada, UK, Germany, and beyond. Our SEO experts combine technical audits, keyword research, on-page optimization, content strategy, and authority-building link campaigns to improve your rankings and drive qualified organic traffic.',
    benefits: [
      'Comprehensive technical SEO audits and fixes',
      'In-depth keyword research and competitive analysis',
      'On-page optimization for all target pages',
      'Content strategy aligned with search intent',
      'High-quality link building and outreach campaigns',
      'Local SEO optimization for multi-market businesses',
      'Monthly reporting with actionable insights and ROI tracking',
    ],
    problemsSolved: [
      'Low organic rankings despite having quality content',
      'Website technical issues preventing proper indexing',
      'Lack of visibility in local and international search results',
      'Declining traffic due to algorithm updates',
      'Difficulty competing with established competitors in SERPs',
    ],
    internationalValue:
      'For businesses targeting international markets, our SEO services include hreflang implementation, multi-market keyword research, and region-specific optimization strategies. We help businesses in the USA, Canada, UK, Germany, and the Netherlands rank in their target markets.',
    features: [
      { icon: faSearchPlus, label: 'Technical SEO' },
      { icon: faLink, label: 'Link Building' },
      { icon: faFileAlt, label: 'Content Strategy' },
      { icon: faChartBar, label: 'Analytics & Reporting' },
    ],
    relatedLinks: [
      { label: 'Digital Marketing', slug: '/services/digital-marketing' },
      { label: 'AI Ads & Marketing', slug: '/services/ai-ads-marketing' },
    ],
  },
  {
    id: 'ai-ads-marketing',
    num: '04',
    title: 'AI Ads & Marketing',
    icon: faRobot,
    slug: '/services/ai-ads-marketing',
    summary:
      'AI-powered advertising campaigns across Google, Meta, and other platforms with automated bid optimization, audience targeting, A/B testing, and predictive budget allocation.',
    subtitle: 'AI-Powered Advertising Campaigns That Maximize ROI',
    description:
      'Our AI automation agency leverages machine learning and artificial intelligence to create high-performing advertising campaigns across Google Ads, Meta Ads, and other major platforms. We use AI-driven audience targeting, automated bid optimization, and predictive analytics to ensure every advertising dollar delivers maximum return.',
    benefits: [
      'AI-powered audience targeting and segmentation',
      'Automated bid management for cost-efficient campaigns',
      'A/B testing with AI-driven creative variations',
      'Predictive analytics for budget allocation',
      'Real-time campaign optimization and performance tracking',
      'Cross-platform campaign management (Google, Meta, LinkedIn)',
      'Detailed attribution modeling and conversion tracking',
    ],
    problemsSolved: [
      'High customer acquisition costs from inefficient ad spend',
      'Poor targeting leading to irrelevant impressions and clicks',
      'Difficulty scaling ad campaigns without increasing costs',
      'Lack of data-driven insights for campaign optimization',
      'Manual campaign management consuming valuable time',
    ],
    internationalValue:
      'For businesses in the USA, Canada, UK, and European markets, our AI-powered advertising services optimize campaigns for regional audiences, local preferences, and market-specific buying behaviors. This ensures your advertising budget delivers results in every target market.',
    features: [
      { icon: faBrain, label: 'AI-Driven' },
      { icon: faCrosshairs, label: 'Precise Targeting' },
      { icon: faMoneyBillWave, label: 'Cost Efficient' },
      { icon: faChartLine, label: 'Real-Time Analytics' },
    ],
    relatedLinks: [
      { label: 'SEO Services', slug: '/services/seo-services' },
      { label: 'AI Automation', slug: '/services/ai-automation-services' },
    ],
  },
  {
    id: 'digital-marketing',
    num: '05',
    title: 'Digital Marketing',
    icon: faBullhorn,
    slug: '/services/digital-marketing',
    summary:
      'Full-funnel digital marketing strategies covering brand positioning, email marketing, content marketing, conversion rate optimization, and performance analytics.',
    subtitle: 'Full-Funnel Digital Marketing Strategies That Drive Revenue',
    description:
      'Orbitrix Solutions delivers comprehensive digital marketing services that cover every stage of the customer journey. From brand positioning and content marketing to email funnels and conversion rate optimization, our digital marketing agency creates integrated strategies that turn visitors into customers and customers into brand advocates.',
    benefits: [
      'Complete brand positioning and messaging strategy',
      'Content marketing calendars and production',
      'Email marketing automation and funnel optimization',
      'Conversion rate optimization (CRO) across all touchpoints',
      'Performance analytics dashboards with real-time metrics',
      'Multi-channel campaign coordination',
      'A/B testing and data-driven optimization',
    ],
    problemsSolved: [
      'Fragmented marketing efforts across multiple channels',
      'Low conversion rates despite high website traffic',
      'Difficulty measuring marketing ROI across campaigns',
      'Inconsistent brand messaging across digital touchpoints',
      'Lack of systematic approach to lead nurturing',
    ],
    internationalValue:
      'For businesses operating across the USA, Canada, UK, Germany, and the Netherlands, our digital marketing services create cohesive campaigns that resonate with local audiences while maintaining global brand consistency. We help businesses adapt their messaging for different markets.',
    features: [
      { icon: faBullseye, label: 'Full Funnel' },
      { icon: faEnvelope, label: 'Email Marketing' },
      { icon: faChartPie, label: 'CRO Optimization' },
      { icon: faHandshake, label: 'Brand Strategy' },
    ],
    relatedLinks: [
      { label: 'SEO Services', slug: '/services/seo-services' },
      { label: 'Social Media Marketing', slug: '/services/social-media-marketing' },
    ],
  },
  {
    id: 'social-media-marketing',
    num: '06',
    title: 'Social Media Marketing',
    icon: faShareAlt,
    slug: '/services/social-media-marketing',
    summary:
      'Strategic social media management including content calendars, community engagement, paid social campaigns, influencer outreach, and growth analytics across all major platforms.',
    subtitle: 'Strategic Social Media Management That Builds Communities',
    description:
      'Our social media marketing services help businesses build engaged communities, increase brand awareness, and drive traffic across Instagram, LinkedIn, Facebook, TikTok, X (Twitter), and other platforms. We create platform-specific content strategies, manage communities, and run paid social campaigns that deliver measurable growth.',
    benefits: [
      'Platform-specific content strategy and calendar planning',
      'Community management and engagement optimization',
      'Paid social advertising with precise audience targeting',
      'Influencer outreach and partnership coordination',
      'Brand reputation management across social channels',
      'Growth analytics and performance reporting',
      'Content creation including graphics, videos, and copywriting',
    ],
    problemsSolved: [
      'Low social media engagement despite regular posting',
      'Difficulty creating content that resonates with target audiences',
      'Inconsistent posting schedule hurting brand visibility',
      'Struggling to convert social followers into customers',
      'Lack of strategy for different social media platforms',
    ],
    internationalValue:
      'For businesses targeting customers in the USA, Canada, UK, Germany, and Europe, our social media marketing services include market-specific content strategies that account for cultural differences, platform preferences, and local engagement patterns.',
    features: [
      { icon: faUsers, label: 'Community Building' },
      { icon: faPaintBrush, label: 'Content Creation' },
      { icon: faVideo, label: 'Video Marketing' },
      { icon: faHashtag, label: 'Hashtag Strategy' },
    ],
    relatedLinks: [
      { label: 'Digital Marketing', slug: '/services/digital-marketing' },
      { label: 'AI Ads & Marketing', slug: '/services/ai-ads-marketing' },
    ],
  },
  {
    id: 'ai-automation-services',
    num: '07',
    title: 'AI Automation Services',
    icon: faRobot,
    slug: '/services/ai-automation-services',
    summary:
      'Intelligent automation solutions using AI to streamline business workflows, automate repetitive tasks, and create data-driven decision systems for operational efficiency.',
    subtitle: 'Intelligent Automation Solutions for Operational Excellence',
    description:
      'As a leading AI automation agency, Orbitrix Solutions implements intelligent automation solutions that streamline business workflows, automate repetitive tasks, and create data-driven decision systems. Our AI automation services help businesses reduce operational costs, eliminate manual errors, and free up teams to focus on high-value strategic work.',
    benefits: [
      'Custom AI workflow automation for business processes',
      'Chatbot and virtual assistant development',
      'Automated data collection and analysis pipelines',
      'Email automation and lead scoring systems',
      'Content generation and curation automation',
      'Integration of AI tools with existing business systems',
      'Ongoing monitoring and optimization of automated processes',
    ],
    problemsSolved: [
      'Repetitive manual tasks consuming valuable team time',
      'Human errors in data entry and processing',
      'Inability to scale operations without proportional cost increases',
      'Slow response times to customer inquiries',
      'Difficulty making data-driven decisions without proper analytics',
    ],
    internationalValue:
      'For international businesses operating across multiple time zones in the USA, Canada, UK, Germany, and the Netherlands, AI automation services provide 24/7 operational capability without the overhead of round-the-clock staffing. Our automation solutions help businesses serve global customers efficiently.',
    features: [
      { icon: faCogs, label: 'Custom Workflows' },
      { icon: faBrain, label: 'AI Powered' },
      { icon: faClipboardList, label: 'Process Automation' },
      { icon: faDollarSign, label: 'Cost Reduction' },
    ],
    relatedLinks: [
      { label: 'AI Ads & Marketing', slug: '/services/ai-ads-marketing' },
      { label: 'React Development', slug: '/services/react-development' },
    ],
  },
];

export default servicesData;
