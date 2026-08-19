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
    faq: [
      {
        question: 'How long does a WordPress website take to build?',
        answer: 'A standard WordPress website typically takes 4-8 weeks from kickoff to launch, depending on complexity. Simple brochure sites may be ready in 3 weeks, while custom WooCommerce stores or content-heavy platforms can take 8-12 weeks. We provide a detailed timeline during the proposal phase.',
      },
      {
        question: 'Can you redesign my existing WordPress site?',
        answer: 'Yes, we regularly redesign and migrate existing WordPress websites. We audit your current site for UX issues, performance bottlenecks, and outdated code, then rebuild it on a modern theme with improved speed and security — all while preserving your SEO rankings and existing content.',
      },
      {
        question: 'Do you provide WordPress hosting?',
        answer: 'We recommend and set up optimized hosting through trusted partners like Cloudways, SiteGround, or WP Engine. We configure caching, SSL, and CDN for maximum speed. While we don\'t operate our own servers, we manage your hosting setup and ongoing performance tuning.',
      },
      {
        question: 'How much does a custom WordPress website cost?',
        answer: 'Custom WordPress development projects typically range from $3,000 for a basic business site to $15,000+ for complex WooCommerce or membership platforms. Pricing depends on design requirements, custom functionality, number of pages, and integrations needed. We provide transparent quotes after an initial consultation.',
      },
      {
        question: 'Will I be able to update content myself?',
        answer: 'Absolutely. WordPress is chosen specifically for its user-friendly admin dashboard. We provide hands-on training for your team and create custom page templates with intuitive fields, so you can update text, images, blog posts, and products without touching any code.',
      },
      {
        question: 'Do you offer WordPress maintenance?',
        answer: 'Yes, we provide ongoing WordPress maintenance plans that include core and plugin updates, security monitoring, daily backups, uptime monitoring, and performance optimization. Our maintenance plans start at $99/month and keep your site secure and running fast.',
      },
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
    faq: [
      {
        question: 'When should I choose React over WordPress?',
        answer: 'React is ideal when you need a highly interactive web application, real-time data handling, complex user interfaces, or a custom-built SaaS product. WordPress is better for content-driven sites like blogs, corporate websites, and standard e-commerce stores. We help you choose the right technology during our discovery call.',
      },
      {
        question: 'Do React websites rank well on Google?',
        answer: 'Yes, when built correctly. We implement server-side rendering (SSR) or static site generation with Next.js to ensure search engines can fully index your React application. This gives you the performance benefits of React without sacrificing SEO visibility.',
      },
      {
        question: 'How long does a React project take?',
        answer: 'A typical React web application takes 6-14 weeks depending on scope. MVPs and landing pages can launch in 4-6 weeks, while full-featured SaaS platforms with API integrations and dashboards may take 12-16 weeks. We break projects into sprints so you can see progress every two weeks.',
      },
      {
        question: 'Can you migrate my existing site to React?',
        answer: 'Yes, we can migrate your existing website — whether it\'s built with WordPress, plain HTML, or another framework — to React. We preserve your URL structure, SEO rankings, and content while upgrading to a modern, faster architecture with improved user experience.',
      },
      {
        question: 'What backend works best with React?',
        answer: 'React is frontend-only, so you\'ll need a backend API. We typically pair React with Node.js/Express, Python/Django, or headless CMS platforms like Strapi or Contentful. The best choice depends on your data requirements, existing infrastructure, and team expertise.',
      },
      {
        question: 'Do you build React Native mobile apps too?',
        answer: 'Yes, our React expertise extends to React Native for cross-platform mobile development. We can build iOS and Android apps from a single codebase, sharing business logic with your web application to reduce development time and costs.',
      },
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
    faq: [
      {
        question: 'How long before I see SEO results?',
        answer: 'SEO is a long-term strategy. Most clients start seeing meaningful improvements in organic traffic and rankings within 3-6 months. Competitive industries may take 6-12 months to reach top positions. We provide monthly progress reports so you can track improvements from day one.',
      },
      {
        question: 'Do you guarantee #1 rankings on Google?',
        answer: 'No reputable SEO agency can guarantee specific rankings — Google\'s algorithm considers over 200 factors and changes frequently. What we do guarantee is following proven, white-hat SEO practices, transparent reporting, and a strategy designed to maximize your chances of ranking for your target keywords.',
      },
      {
        question: 'What SEO tools do you use?',
        answer: 'We use industry-leading tools including Ahrefs, SEMrush, Screaming Frog, Google Search Console, and Google Analytics 4 for technical audits, keyword research, competitor analysis, backlink monitoring, and performance tracking. We also use proprietary dashboards to consolidate reporting.',
      },
      {
        question: 'How do you track SEO performance?',
        answer: 'We provide monthly reports covering organic traffic, keyword rankings, click-through rates, backlink growth, and conversion metrics. Reports include actionable insights and next steps, not just data dumps. You\'ll also have real-time dashboard access to monitor key metrics anytime.',
      },
      {
        question: 'Do you offer local SEO?',
        answer: 'Yes, we provide local SEO services including Google Business Profile optimization, local citation building, review management, and location-specific landing pages. Local SEO is essential for businesses serving specific geographic areas and is included in our multi-market SEO packages.',
      },
      {
        question: 'What\'s included in monthly SEO services?',
        answer: 'Monthly SEO services include ongoing technical optimization, keyword-targeted content creation, link building outreach, competitor monitoring, and monthly strategy calls. Each month we audit your site for new issues, publish optimized content, and adjust the strategy based on performance data.',
      },
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
    faq: [
      {
        question: 'How does AI improve ad campaigns?',
        answer: 'AI analyzes vast amounts of data — user behavior, demographics, and conversion patterns — to identify the best audiences, optimize bids in real time, and predict which ad creatives will perform best. This results in lower cost-per-acquisition and higher return on ad spend compared to manual campaign management.',
      },
      {
        question: 'What advertising platforms do you manage?',
        answer: 'We manage campaigns across Google Ads (Search, Display, Shopping, YouTube), Meta Ads (Facebook and Instagram), LinkedIn Ads, TikTok Ads, and Microsoft Ads. We recommend platforms based on where your target audience is most active and where your budget will deliver the best ROI.',
      },
      {
        question: 'How much should I spend on ads?',
        answer: 'Ad budgets depend on your industry, competition, and goals. We typically recommend a minimum of $1,500-$3,000/month for Google Ads and $1,000-$2,000/month for Meta Ads to generate meaningful data. We\'ll analyze your market and recommend a budget that aligns with your customer acquisition targets.',
      },
      {
        question: 'Can you manage my existing campaigns?',
        answer: 'Yes, we regularly take over existing ad campaigns from businesses managing them in-house or through other agencies. We begin with a full audit of your account structure, targeting, creatives, and spending efficiency, then implement improvements while maintaining campaign continuity.',
      },
      {
        question: 'How quickly will I see results from paid ads?',
        answer: 'Paid advertising delivers immediate traffic once campaigns are live. Most clients see initial results within the first week. However, AI optimization improves performance over 2-4 weeks as the system gathers data and refines targeting. Peak performance typically occurs after 60-90 days of optimization.',
      },
      {
        question: 'Do you create ad creatives and copy?',
        answer: 'Yes, our team handles all ad creative production including copywriting, graphic design, video ads, and landing page design. We create multiple variations for A/B testing and use AI to predict which combinations of headlines, images, and calls-to-action will perform best.',
      },
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
      { label: 'Social Media Account Management', slug: '/services/social-media-account-management' },
    ],
    faq: [
      {
        question: 'What digital marketing services do you offer?',
        answer: 'We provide full-funnel digital marketing including brand strategy, content marketing, email marketing automation, conversion rate optimization (CRO), PPC campaign management, and analytics setup. Everything is integrated into a cohesive strategy rather than operating in silos.',
      },
      {
        question: 'How do you measure marketing ROI?',
        answer: 'We set up end-to-end tracking using Google Analytics 4, conversion pixels, and UTM parameters to attribute leads and sales to specific campaigns. Our monthly reports show cost-per-lead, customer acquisition cost, and revenue attribution so you know exactly where your marketing dollars are working hardest.',
      },
      {
        question: 'Do you work with small businesses?',
        answer: 'Yes, we work with businesses of all sizes, from startups and local businesses to mid-market companies and enterprises. Our strategies are scaled to your budget and goals. We offer starter packages for small businesses that focus on the highest-impact channels first.',
      },
      {
        question: 'What\'s your minimum contract?',
        answer: 'We offer both month-to-month and 6-month engagement options. We recommend a minimum 3-month commitment for new strategies to gather enough data for meaningful optimization. There are no long-term lock-in contracts — we earn your business through results, not agreements.',
      },
      {
        question: 'How often will I receive performance reports?',
        answer: 'We provide detailed monthly reports with a strategy review call, plus weekly email snapshots of key metrics. You also get real-time dashboard access to monitor campaign performance, traffic, and conversions anytime. We believe in full transparency.',
      },
      {
        question: 'What industries do you specialize in?',
        answer: 'We have experience across B2B and B2C industries including SaaS, e-commerce, professional services, healthcare, real estate, and technology. Our data-driven approach means we can apply proven strategies to virtually any industry while tailoring tactics to your specific market.',
      },
    ],
  },
  {
    id: 'social-media-account-management',
    num: '06',
    title: 'Social Media Account Management',
    icon: faShareAlt,
    slug: '/services/social-media-account-management',
    summary:
      'Strategic social media management including content calendars, community engagement, paid social campaigns, influencer outreach, and growth analytics across all major platforms.',
    subtitle: 'Strategic Social Media Management That Builds Communities',
    description:
      'Our social media account management services help businesses build engaged communities, increase brand awareness, and drive traffic across Instagram, LinkedIn, Facebook, TikTok, X (Twitter), and other platforms. We create platform-specific content strategies, manage communities, and run paid social campaigns that deliver measurable growth.',
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
      'For businesses targeting customers in the USA, Canada, UK, Germany, and Europe, our social media account management services include market-specific content strategies that account for cultural differences, platform preferences, and local engagement patterns.',
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
    faq: [
      {
        question: 'Which social media platforms do you manage?',
        answer: 'We manage all major platforms including Instagram, LinkedIn, Facebook, TikTok, X (Twitter), Pinterest, and YouTube. We recommend starting with 2-3 platforms where your target audience is most active, then expanding as we establish a content rhythm and grow your following.',
      },
      {
        question: 'How many posts per week do you create?',
        answer: 'Our standard plans include 3-5 posts per week per platform, with higher-volume plans available. We focus on quality and consistency over sheer quantity. Each post is crafted with platform-specific formatting, hashtags, and timing for maximum engagement.',
      },
      {
        question: 'Do you create the content?',
        answer: 'Yes, we handle everything: content strategy, copywriting, graphic design, video editing, and scheduling. We develop a content calendar each month for your approval, so you maintain full control over what goes out while we handle the creative production.',
      },
      {
        question: 'How do you measure social media success?',
        answer: 'We track engagement rate, reach, impressions, follower growth, click-through rate, and conversions driven from social channels. Beyond vanity metrics, we focus on business outcomes — leads, website traffic, and revenue attributed to social media efforts.',
      },
      {
        question: 'Do you handle community management and comments?',
        answer: 'Yes, community management is included in our plans. We monitor comments, respond to DMs, and engage with your audience to build relationships and trust. We establish brand voice guidelines so all interactions sound authentic and on-brand.',
      },
      {
        question: 'Can you run paid social media campaigns?',
        answer: 'Yes, paid social advertising is available as an add-on to our management plans. We create and manage targeted ad campaigns on Facebook, Instagram, LinkedIn, and TikTok to amplify your organic content and drive specific business objectives like lead generation or product sales.',
      },
    ],
  },
  {
    id: 'ai-automation-services',
    num: '07',
    title: 'AI Automation Services',
    icon: faRobot,
    slug: '/services/ai-automation-services',
    summary:
      'Intelligent AI automation solutions for salons, clinics, and businesses — including AI voice agents, smart chatbots, automated email routing, blog auto-publishing, and social media automation built on n8n and custom AI models.',
    subtitle: 'Intelligent AI Automation for Salons, Clinics & Businesses',
    description:
      'Orbitrix Solutions builds intelligent AI automation systems that handle the repetitive, time-consuming tasks killing your productivity. From AI voice agents that answer calls and book appointments 24/7, to smart chatbots, email auto-responders, blog auto-publishers, and social media auto-posters — our solutions run on n8n workflows and custom AI models, giving businesses a fully automated back office.',
    benefits: [
      'AI Voice Agents that answer calls and book appointments 24/7 for salons and clinics',
      'Custom AI Chatbots trained on your business data with direct API key integration',
      'AI Email Auto-Responder that detects intent, routes to departments, and auto-replies',
      'Blog Auto-Publisher using n8n workflows to auto-generate and post SEO-optimized blogs',
      'AI Social Media Auto-Poster that creates content and posts across Facebook, Instagram, and LinkedIn',
      'Unified n8n orchestration connecting all automation modules',
      'Ongoing monitoring, optimization, and scaling of automated workflows',
    ],
    problemsSolved: [
      'Missed phone calls from customers after hours or during busy periods',
      'Slow email response times causing lost leads and poor customer experience',
      'Hours wasted manually creating and scheduling blog content',
      'Inconsistent social media posting due to time constraints',
      'Manual appointment booking consuming staff time and leading to no-shows',
      'Multiple disconnected tools creating fragmented, inefficient workflows',
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
    faq: [
      {
        question: 'What AI voice agents do you build?',
        answer: 'We build custom AI voice agents for salons, clinics, and service businesses that answer incoming calls 24/7. The agent can greet callers, answer common questions (hours, pricing, services), and book appointments directly into your calendar system. It integrates with WhatsApp and phone systems for seamless customer experience.',
      },
      {
        question: 'How are your chatbots different from standard chat widgets?',
        answer: 'Our chatbots are custom-built and integrated via direct API keys — not hosted on third-party platforms that take ownership of your data. They\'re trained on your specific business information, can handle complex queries, and connect to your CRM and booking systems for real-time actions like scheduling or order tracking.',
      },
      {
        question: 'What does the AI Email Auto-Responder do?',
        answer: 'The AI Email Auto-Responder reads incoming emails, detects the customer\'s intent (inquiry, complaint, quote request, support ticket), routes the email to the appropriate department, and sends an intelligent auto-reply. It eliminates the lag between a customer writing in and your team responding.',
      },
      {
        question: 'How does the Blog Auto-Publisher work?',
        answer: 'Our n8n-powered blog auto-publisher generates SEO-optimized blog posts based on trending topics and your business niche. It researches keywords, writes the content, adds images, and publishes directly to your CMS — all on autopilot. You can review before publishing or set it to auto-post on a schedule.',
      },
      {
        question: 'Can I use individual services or do I need the full suite?',
        answer: 'Each service works independently. You can start with just AI voice agents for your salon, or just the email auto-responder for your clinic. Most clients start with one module and expand as they see the results. The full suite is for businesses wanting end-to-end automation across all touchpoints.',
      },
      {
        question: 'How much does AI automation cost?',
        answer: 'Pricing depends on which modules you need. A single AI voice agent or chatbot starts at $2,000-$5,000. The full automation suite with voice, chatbot, email, blog, and social media typically ranges from $8,000-$20,000 depending on integrations and complexity. We provide ROI projections so you can see how quickly the automation pays for itself.',
      },
    ],
  },
];

export default servicesData;
