import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowRight, faRocket, faArrowLeft, faHardHat, faGavel, faUtensils, faTooth, faHome } from '@fortawesome/free-solid-svg-icons';
import SEO from '../../SEO';
import Breadcrumbs from '../../Breadcrumbs';
import Footer from '../../Footer';
import './Industries.css';

const industryData = {
  startups: {
    title: 'Web Development for Startups',
    subtitle: 'Launch Fast, Scale Confidently — Digital Solutions Built for Startups',
    description: 'Startups need speed, flexibility, and cost-effective solutions. Orbitrix Solutions helps startups build MVPs, launch marketing websites, and implement growth strategies that attract users and investors. We understand the startup journey from idea to Series A and beyond.',
    challenges: [
      'Limited budget requiring maximum ROI from every dollar',
      'Need to launch quickly to capture market opportunity',
      'Building a technical foundation that scales with growth',
      'Establishing brand credibility from day one',
      'Attracting early users and investors with a compelling digital presence',
    ],
    solutions: [
      'Lean MVP development with React or WordPress for rapid launches',
      'Growth-focused SEO strategies targeting early adopter keywords',
      'Cost-effective digital marketing with measurable KPIs',
      'Scalable architecture that grows with your user base',
      'Investor-ready pitch deck design and presentation websites',
    ],
    services: ['React Web Development', 'WordPress Development', 'SEO Services', 'Digital Marketing', 'AI Automation'],
    stats: [
      { value: '20+', label: 'Startups Launched' },
      { value: '60%', label: 'Faster Time to Market' },
    ],
  },
  saas: {
    title: 'Web Development for SaaS Companies',
    subtitle: 'High-Performance SaaS Platforms That Convert and Scale',
    description: 'SaaS companies need more than a website — they need a high-converting digital ecosystem. Orbitrix Solutions builds React-based SaaS dashboards, optimizes landing pages for trial signups, and implements SEO strategies that drive qualified organic traffic to your product.',
    challenges: [
      'High customer acquisition costs eating into margins',
      'Complex product requiring intuitive user experience',
      'Need for strong organic presence to reduce paid dependency',
      'Churn reduction through better onboarding and UX',
      'Scaling infrastructure as user base grows',
    ],
    solutions: [
      'React-based dashboards with component architecture for scalability',
      'Landing page optimization for trial-to-paid conversion',
      'Technical SEO targeting high-intent SaaS keywords',
      'AI-powered chatbots for instant customer support',
      'Performance monitoring and Core Web Vitals optimization',
    ],
    services: ['React Web Development', 'SEO Services', 'AI Ads & Marketing', 'Social Media Marketing'],
    stats: [
      { value: '15+', label: 'SaaS Clients' },
      { value: '45%', label: 'Avg. Trial Increase' },
    ],
  },
  ecommerce: {
    title: 'Web Development for E-commerce',
    subtitle: 'Online Stores That Load Fast, Look Great, and Convert Visitors into Buyers',
    description: 'E-commerce success depends on speed, design, and conversion optimization. Orbitrix Solutions builds WooCommerce and custom e-commerce stores that deliver exceptional shopping experiences. Our SEO and marketing services help you attract more customers and increase average order value.',
    challenges: [
      'High bounce rates from slow-loading product pages',
      'Low conversion rates despite strong traffic',
      'Difficulty competing with Amazon and large retailers',
      'Cart abandonment reducing revenue',
      'Managing inventory and product catalogs efficiently',
    ],
    solutions: [
      'Custom WooCommerce stores optimized for Core Web Vitals',
      'Product page optimization with schema markup for rich snippets',
      'Conversion rate optimization (CRO) across the purchase funnel',
      'Google Shopping and Meta Dynamic Ads integration',
      'Email automation for cart recovery and customer retention',
    ],
    services: ['WordPress Development', 'SEO Services', 'Digital Marketing', 'AI Ads & Marketing'],
    stats: [
      { value: '25+', label: 'Stores Built' },
      { value: '35%', label: 'Avg. Conversion Boost' },
    ],
  },
  healthcare: {
    title: 'Web Development for Healthcare',
    subtitle: 'Professional Healthcare Websites That Build Patient Trust',
    description: 'Healthcare organizations need websites that inspire trust, comply with regulations, and make it easy for patients to find and connect with providers. Orbitrix Solutions creates professional healthcare websites with HIPAA-conscious design, local SEO, and patient communication automation.',
    challenges: [
      'Building patient trust through professional web presence',
      'Meeting HIPAA and healthcare compliance requirements',
      'Attracting new patients through local search',
      'Streamlining appointment booking and patient communication',
      'Managing online reputation and patient reviews',
    ],
    solutions: [
      'Professional, accessible websites with HIPAA-conscious design',
      'Local SEO optimization for healthcare providers',
      'Online appointment booking integration',
      'AI chatbots for patient inquiries and triage',
      'Review management and reputation building strategies',
    ],
    services: ['WordPress Development', 'SEO Services', 'AI Automation Services', 'Social Media Marketing'],
    stats: [
      { value: '10+', label: 'Healthcare Clients' },
      { value: '50%', label: 'More Patient Inquiries' },
    ],
  },
  'real-estate': {
    title: 'Web Development for Real Estate',
    subtitle: 'Property Websites That Attract Buyers and Close Deals',
    description: 'Real estate businesses need visually compelling websites, strong local SEO, and effective lead generation systems. Orbitrix Solutions builds property listing platforms, optimizes for local search, and creates marketing funnels that connect agents with potential buyers and sellers.',
    challenges: [
      'Showcasing properties with immersive visual experiences',
      'Generating quality leads in a competitive market',
      'Dominating local search for real estate keywords',
      'Managing multiple listings and property data',
      'Converting website visitors into scheduled viewings',
    ],
    solutions: [
      'Visual property listing websites with search and filter functionality',
      'Local SEO targeting "[city] real estate" keywords',
      'Lead capture forms and automated follow-up sequences',
      'Virtual tour integration and interactive property maps',
      'Social media marketing for property promotion',
    ],
    services: ['WordPress Development', 'SEO Services', 'Digital Marketing', 'Social Media Marketing'],
    stats: [
      { value: '12+', label: 'Real Estate Clients' },
      { value: '40%', label: 'More Qualified Leads' },
    ],
  },
  'small-business': {
    title: 'Web Development for Small Businesses',
    subtitle: 'Affordable Digital Solutions That Help Small Businesses Compete Online',
    description: 'Small businesses need cost-effective digital solutions that deliver real results. Orbitrix Solutions provides affordable web development, local SEO, and social media management that help small businesses compete with larger competitors in their local markets.',
    challenges: [
      'Limited budget for digital marketing and web development',
      'Difficulty competing with larger competitors online',
      'Lack of technical knowledge for managing a website',
      'Need to attract local customers consistently',
      'Measuring ROI from marketing efforts',
    ],
    solutions: [
      'Affordable WordPress websites with easy content management',
      'Local SEO optimization for Google Business Profile',
      'Social media management across key platforms',
      'Google Ads management with budget-conscious strategies',
      'Monthly reporting with clear ROI metrics',
    ],
    services: ['WordPress Development', 'SEO Services', 'Social Media Marketing', 'Digital Marketing'],
    stats: [
      { value: '30+', label: 'Small Business Clients' },
      { value: '3x', label: 'Avg. Local Visibility Increase' },
    ],
  },
  construction: {
    title: 'Web Development for Construction Companies',
    subtitle: 'Build Your Digital Foundation — Web Solutions for the Construction Industry',
    description: 'The construction industry is evolving, and a strong digital presence is no longer optional. Construction companies need professional websites that showcase completed projects, streamline bid management, and demonstrate safety compliance. Orbitrix Solutions builds construction-focused websites that help you win more contracts and establish your reputation as a reliable contractor. From project portfolios to equipment catalogs, we create digital experiences that reflect the quality of your work.',
    challenges: [
      'Showcasing large-scale projects with compelling visual content',
      'Managing bid processes and client communications efficiently',
      'Demonstrating safety compliance and industry certifications',
      'Standing out in a competitive local and regional market',
      'Attracting commercial clients who vet contractors online',
    ],
    solutions: [
      'Project portfolio websites with before/after galleries and drone photography integration',
      'Bid management systems and client portals for streamlined communication',
      'Safety compliance pages and certification displays for trust-building',
      'Local SEO targeting construction keywords in your service area',
      'Equipment catalogs and service listings for comprehensive project presentations',
    ],
    services: ['WordPress Development', 'SEO Services', 'Digital Marketing', 'Social Media Marketing'],
    stats: [
      { value: '15+', label: 'Construction Projects' },
      { value: '40%', label: 'More Bids Won' },
    ],
  },
  'law-firms': {
    title: 'Web Development for Law Firms',
    subtitle: 'Establish Authority and Attract Clients — Digital Solutions for Legal Practices',
    description: 'Law firms need websites that convey professionalism, establish legal authority, and make it easy for potential clients to take the first step. Orbitrix Solutions creates sophisticated law firm websites with case management integration, client intake forms, and legal content marketing that positions your firm as a trusted advocate. We understand the unique compliance and trust-building needs of the legal industry.',
    challenges: [
      'Building trust and credibility with potential clients online',
      'Converting website visitors into qualified consultations',
      'Establishing thought leadership through legal content',
      'Managing client intake and appointment scheduling efficiently',
      'Competing with larger firms in search results',
    ],
    solutions: [
      'Professional firm websites with trust-building design and attorney profiles',
      'Client intake forms and appointment booking systems for streamlined onboarding',
      'Legal blog and content marketing for authority building',
      'Local SEO targeting legal keywords and practice area searches',
      'Case results and testimonial displays for social proof',
    ],
    services: ['WordPress Development', 'SEO Services', 'Digital Marketing', 'AI Automation Services'],
    stats: [
      { value: '12+', label: 'Law Firm Projects' },
      { value: '35%', label: 'More Consultations' },
    ],
  },
  restaurants: {
    title: 'Web Development for Restaurants & Food Businesses',
    subtitle: 'Serve Up Success — Digital Solutions for the Food Industry',
    description: 'Restaurants and food businesses need websites that drive orders, simplify reservations, and keep customers coming back. Orbitrix Solutions builds online ordering systems, menu management platforms, and loyalty program integrations that boost revenue and streamline operations. From local food blogs to delivery partnerships, we create digital experiences that match the quality of your cuisine.',
    challenges: [
      'Increasing online orders and delivery revenue',
      'Keeping menus and specials updated across all platforms',
      'Managing reservations and reducing no-shows',
      'Building customer loyalty and repeat business',
      'Competing with delivery apps and food aggregators',
    ],
    solutions: [
      'Online ordering systems with integrated payment processing',
      'Dynamic menu management with photos and dietary information',
      'Reservation systems with automated confirmations and reminders',
      'Loyalty programs and email marketing for customer retention',
      'Social media integration and food blog content for engagement',
    ],
    services: ['WordPress Development', 'SEO Services', 'Social Media Marketing', 'AI Automation Services'],
    stats: [
      { value: '20+', label: 'Restaurant Projects' },
      { value: '50%', label: 'More Online Orders' },
    ],
  },
  dentists: {
    title: 'Web Development for Dental Practices',
    subtitle: 'Smile-Worthy Websites That Attract and Retain Patients',
    description: 'Dental practices need websites that make patients feel comfortable, showcase expertise, and simplify appointment booking. Orbitrix Solutions creates patient-friendly dental websites with online scheduling, before/after galleries, and local SEO that helps new patients find your practice. We understand the unique needs of dental marketing, from insurance information to patient education content.',
    challenges: [
      'Attracting new patients through local search',
      'Simplifying appointment booking and reducing no-shows',
      'Showcasing dental work with compelling before/after content',
      'Communicating insurance and payment information clearly',
      'Managing online reviews and building practice reputation',
    ],
    solutions: [
      'Appointment booking systems with automated reminders and confirmations',
      'Before/after galleries and smile makeover showcases',
      'Patient portals with forms, insurance info, and educational content',
      'Local SEO optimization for dental practice searches',
      'Review management and reputation building strategies',
    ],
    services: ['WordPress Development', 'SEO Services', 'Digital Marketing', 'Social Media Marketing'],
    stats: [
      { value: '10+', label: 'Dental Projects' },
      { value: '45%', label: 'More Appointments' },
    ],
  },
  'real-estate-agents': {
    title: 'Web Development for Real Estate Agents',
    subtitle: 'Agent-Focused Websites That Generate Leads and Close More Deals',
    description: 'Individual real estate agents need personal brands, lead generation systems, and property showcase platforms that set them apart from the competition. Orbitrix Solutions builds agent-focused websites with MLS integration, virtual tours, and CRM systems that help you capture leads and convert them into clients. Unlike generic real estate company sites, our agent solutions focus on personal branding and relationship building.',
    challenges: [
      'Building a personal brand that stands out in a crowded market',
      'Generating quality leads without relying solely on referrals',
      'Showcasing listings with immersive property experiences',
      'Managing client relationships and follow-up sequences',
      'Dominating local search as an individual agent',
    ],
    solutions: [
      'Personal branding websites with agent profiles and testimonials',
      'MLS integration with property search and saved listing alerts',
      'Virtual tour integration and interactive neighborhood guides',
      'Lead capture systems with automated CRM follow-up sequences',
      'Local SEO targeting agent-specific keywords and service areas',
    ],
    services: ['WordPress Development', 'SEO Services', 'Digital Marketing', 'Social Media Marketing'],
    stats: [
      { value: '18+', label: 'Agent Projects' },
      { value: '55%', label: 'More Leads' },
    ],
  },
};

const IndustryPage = () => {
  const { industry } = useParams();
  const data = industryData[industry];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [industry]);

  if (!data) {
    return (
      <main id="main-content">
        <div className="industry-not-found">
          <h1>Industry Not Found</h1>
          <p>The industry page you are looking for does not exist.</p>
          <Link to="/" className="industry-back-link">
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Home
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const otherIndustries = Object.entries(industryData).filter(([key]) => key !== industry);

  const industrySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Web Development for ${data.title.replace('Web Development for ', '')}`,
    "description": data.description.substring(0, 300),
    "provider": {
      "@type": "Organization",
      "name": "Orbitrix Solutions",
      "url": "https://orbitrixsolutions.com"
    },
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "United Kingdom" }
    ],
    "serviceType": "Industry-Specific Web Development",
    "url": `https://orbitrixsolutions.com/industries/${industry}`
  };

  return (
    <main id="main-content">
      <SEO
        title={`${data.title} | Orbitrix Solutions`}
        description={data.description.substring(0, 160)}
        keywords={`${data.title}, web development ${industry}, SEO ${industry}, Orbitrix Solutions ${industry}`}
        schema={industrySchema}
      />

      <Breadcrumbs />

      <section className="industry-hero">
        <div className="industry-hero-bg" aria-hidden="true">
          <div className="industry-orb orb-1"></div>
          <div className="industry-orb orb-2"></div>
        </div>
        <div className="industry-hero-container">
          <Link to="/services" className="industry-back-link">
            <FontAwesomeIcon icon={faArrowLeft} />
            Our Services
          </Link>
          <div className="industry-badge">
            <FontAwesomeIcon icon={faRocket} />
            {industry.replace('-', ' ')}
          </div>
          <h1>{data.title}</h1>
          <p className="industry-subtitle">{data.subtitle}</p>
          <div className="industry-stats">
            {data.stats.map((stat, i) => (
              <div key={i} className="industry-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-content">
        <div className="industry-container">
          <div className="industry-main">
            <h2>How We Help {data.title.replace('Web Development for ', '')} Businesses</h2>
            <p>{data.description}</p>

            <div className="industry-challenges">
              <h3>Common Challenges</h3>
              <ul>
                {data.challenges.map((challenge, i) => (
                  <li key={i}>
                    <FontAwesomeIcon icon={faCheckCircle} className="industry-check-problem" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div className="industry-solutions">
              <h3>Our Solutions</h3>
              <ul>
                {data.solutions.map((solution, i) => (
                  <li key={i}>
                    <FontAwesomeIcon icon={faCheckCircle} className="industry-check" />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>

            <div className="industry-services-section">
              <h3>Recommended Services</h3>
              <div className="industry-service-tags">
                {data.services.map((service, i) => (
                  <span key={i} className="industry-service-tag">{service}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="industry-sidebar">
            <div className="industry-cta-box">
              <h3>Ready to Grow Your {data.title.replace('Web Development for ', '')} Business?</h3>
              <p>Contact us today for a free consultation. We will discuss your goals and create a custom strategy.</p>
              <a
                className="industry-cta-btn"
                href="https://wa.me/qr/7GSRQFMD6AMZG1"
                target="_blank"
                rel="noreferrer"
              >
                Free Consultation
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>

            <div className="industry-other-box">
              <h3>Other Industries</h3>
              <div className="industry-other-links">
                {otherIndustries.map(([key, ind]) => (
                  <Link key={key} to={`/industries/${key}`} className="industry-other-link">
                    {ind.title.replace('Web Development for ', '')}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default IndustryPage;
