import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faSearch,
  faRobot,
  faBullhorn,
  faShareAlt,
  faCheckCircle,
  faArrowRight,
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
  faGlobe,
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

const serviceDetails = [
  {
    id: 'wordpress-development',
    title: 'WordPress Development',
    subtitle: 'Custom WordPress Websites Built for Performance & Growth',
    icon: faWordpress,
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
    relatedLinks: [
      { label: 'SEO Services', href: '#service-seo-services' },
      { label: 'Digital Marketing', href: '#service-digital-marketing' },
    ],
    features: [
      { icon: faTachometerAlt, label: 'Speed Optimized' },
      { icon: faShieldAlt, label: 'Secure & Reliable' },
      { icon: faMobileAlt, label: 'Fully Responsive' },
      { icon: faPalette, label: 'Custom Design' },
    ],
  },
  {
    id: 'react-development',
    title: 'React Web Development',
    subtitle: 'Modern React Applications with Enterprise-Grade Performance',
    icon: faCode,
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
    relatedLinks: [
      { label: 'WordPress Development', href: '#service-wordpress-development' },
      { label: 'AI Automation', href: '#service-ai-automation-services' },
    ],
    features: [
      { icon: faRocket, label: 'Blazing Fast' },
      { icon: faCode, label: 'Clean Architecture' },
      { icon: faMobileAlt, label: 'Cross-Platform' },
      { icon: faChartLine, label: 'SEO Ready' },
    ],
  },
  {
    id: 'seo-services',
    title: 'SEO Services',
    subtitle: 'Data-Driven SEO Strategies for Sustainable Organic Growth',
    icon: faSearch,
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
    relatedLinks: [
      { label: 'Digital Marketing', href: '#service-digital-marketing' },
      { label: 'AI Ads & Marketing', href: '#service-ai-ads-marketing' },
    ],
    features: [
      { icon: faSearchPlus, label: 'Technical SEO' },
      { icon: faLink, label: 'Link Building' },
      { icon: faFileAlt, label: 'Content Strategy' },
      { icon: faChartBar, label: 'Analytics & Reporting' },
    ],
  },
  {
    id: 'ai-ads-marketing',
    title: 'AI Ads & Marketing',
    subtitle: 'AI-Powered Advertising Campaigns That Maximize ROI',
    icon: faRobot,
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
    relatedLinks: [
      { label: 'SEO Services', href: '#service-seo-services' },
      { label: 'AI Automation', href: '#service-ai-automation-services' },
    ],
    features: [
      { icon: faBrain, label: 'AI-Driven' },
      { icon: faCrosshairs, label: 'Precise Targeting' },
      { icon: faMoneyBillWave, label: 'Cost Efficient' },
      { icon: faChartLine, label: 'Real-Time Analytics' },
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    subtitle: 'Full-Funnel Digital Marketing Strategies That Drive Revenue',
    icon: faBullhorn,
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
    relatedLinks: [
      { label: 'SEO Services', href: '#service-seo-services' },
      { label: 'Social Media Marketing', href: '#service-social-media-marketing' },
    ],
    features: [
      { icon: faBullseye, label: 'Full Funnel' },
      { icon: faEnvelope, label: 'Email Marketing' },
      { icon: faChartPie, label: 'CRO Optimization' },
      { icon: faHandshake, label: 'Brand Strategy' },
    ],
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    subtitle: 'Strategic Social Media Management That Builds Communities',
    icon: faShareAlt,
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
    relatedLinks: [
      { label: 'Digital Marketing', href: '#service-digital-marketing' },
      { label: 'AI Ads & Marketing', href: '#service-ai-ads-marketing' },
    ],
    features: [
      { icon: faUsers, label: 'Community Building' },
      { icon: faPaintBrush, label: 'Content Creation' },
      { icon: faVideo, label: 'Video Marketing' },
      { icon: faHashtag, label: 'Hashtag Strategy' },
    ],
  },
  {
    id: 'ai-automation-services',
    title: 'AI Automation Services',
    subtitle: 'Intelligent Automation Solutions for Operational Excellence',
    icon: faRobot,
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
    relatedLinks: [
      { label: 'AI Ads & Marketing', href: '#service-ai-ads-marketing' },
      { label: 'React Development', href: '#service-react-development' },
    ],
    features: [
      { icon: faCogs, label: 'Custom Workflows' },
      { icon: faBrain, label: 'AI Powered' },
      { icon: faClipboardList, label: 'Process Automation' },
      { icon: faDollarSign, label: 'Cost Reduction' },
    ],
  },
];

const ServiceDetails = () => {
  return (
    <section id="service-details" className="service-details-section">
      <div className="service-details-container">
        <div className="service-details-header reveal-blur">
          <span className="about-label">Our Expertise</span>
          <h2>
            Detailed <span className="heading-accent">Service Breakdown</span>
          </h2>
          <p>
            Each service is tailored to solve specific business challenges. Learn how our expertise
            in web development, SEO, AI automation, and digital marketing helps businesses
            across the USA, Canada, UK, Germany, and Europe achieve their growth objectives.
          </p>
        </div>

        {serviceDetails.map((service, index) => (
          <article
            key={service.id}
            id={`service-${service.id}`}
            className="service-detail-block reveal"
            style={{ scrollMarginTop: '100px' }}
          >
            <div className="service-detail-header">
              <div className="service-detail-icon-wrap">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <div>
                <span className="service-detail-num">Service {String(index + 1).padStart(2, '0')}</span>
                <h3>{service.title}</h3>
                <p className="service-detail-subtitle">{service.subtitle}</p>
              </div>
            </div>

            <div className="service-detail-content">
              <div className="service-detail-main">
                <p className="service-detail-description">{service.description}</p>

                <div className="service-detail-features">
                  {service.features.map((feature, fi) => (
                    <div key={fi} className="service-detail-feature">
                      <FontAwesomeIcon icon={feature.icon} />
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>

                <div className="service-detail-benefits">
                  <h4>Key Benefits</h4>
                  <ul>
                    {service.benefits.map((benefit, bi) => (
                      <li key={bi}>
                        <FontAwesomeIcon icon={faCheckCircle} className="benefit-check" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-detail-problems">
                  <h4>Problems We Solve</h4>
                  <ul>
                    {service.problemsSolved.map((problem, pi) => (
                      <li key={pi}>
                        <FontAwesomeIcon icon={faCheckCircle} className="problem-check" />
                        {problem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="service-detail-sidebar">
                <div className="service-detail-international">
                  <h4>
                    <FontAwesomeIcon icon={faGlobe} />
                    International Business Value
                  </h4>
                  <p>{service.internationalValue}</p>
                </div>

                <div className="service-detail-related">
                  <h4>Related Services</h4>
                  <div className="related-links">
                    {service.relatedLinks.map((link, li) => (
                      <a key={li} href={link.href} className="related-link">
                        {link.label}
                        <FontAwesomeIcon icon={faArrowRight} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServiceDetails;
