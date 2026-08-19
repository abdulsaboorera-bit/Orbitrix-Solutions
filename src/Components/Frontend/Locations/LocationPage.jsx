import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowRight, faGlobe, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import SEO from '../../SEO';
import Breadcrumbs from '../../Breadcrumbs';
import Footer from '../../Footer';
import './Locations.css';

const locationData = {
  usa: {
    title: 'Web Development Agency in the USA',
    subtitle: 'Professional Web Development, SEO & Digital Marketing Services for Businesses Across the United States',
    description: 'Orbitrix Solutions provides comprehensive web development, SEO, and digital marketing services for businesses across the United States. From startups in San Francisco to enterprises in New York, we help American businesses build powerful digital presences that drive growth.',
    services: ['Custom Web Development', 'React & WordPress Development', 'SEO Services for US Markets', 'Google Ads & Meta Advertising', 'Digital Marketing Strategy', 'AI Automation Solutions'],
    cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'San Francisco', 'Miami', 'Austin', 'Seattle'],
    localSeo: 'We specialize in local SEO for US businesses, helping you dominate Google Business Profile rankings, attract local customers, and build trust in your community. Our US-focused SEO strategies target the keywords your customers are actually searching for.',
    stats: [
      { value: '50+', label: 'US Projects Delivered' },
      { value: '30%', label: 'Average Traffic Increase' },
      { value: '24h', label: 'Response Time' },
    ],
    cta: 'Ready to grow your US business online? Contact us for a free consultation.',
  },
  canada: {
    title: 'Web Development Agency in Canada',
    subtitle: 'Full-Service Digital Solutions for Canadian Businesses from Coast to Coast',
    description: 'Orbitrix Solutions partners with Canadian businesses to deliver web development, SEO, and digital marketing services that generate real results. Whether you are in Toronto, Vancouver, Montreal, or Calgary, we understand the Canadian market.',
    services: ['Bilingual Web Development', 'SEO Services for Canadian Markets', 'E-commerce Solutions', 'Social Media Marketing', 'Content Marketing', 'AI-Powered Analytics'],
    cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Edmonton', 'Winnipeg', 'Halifax'],
    localSeo: 'Canadian businesses benefit from our bilingual SEO capabilities and understanding of both English and French markets. We optimize for Google.ca and help you rank in local searches across all Canadian provinces.',
    stats: [
      { value: '15+', label: 'Canadian Clients' },
      { value: '25%', label: 'Average Conversion Boost' },
      { value: '24h', label: 'Response Time' },
    ],
    cta: 'Let us help your Canadian business succeed online. Get in touch today.',
  },
  uk: {
    title: 'Web Development Agency in the UK',
    subtitle: 'Digital Growth Partner for Businesses Across the United Kingdom',
    description: 'Orbitrix Solutions serves UK businesses with web development, SEO, and digital marketing services designed for the British market. From London to Manchester, Birmingham to Edinburgh, we help UK companies achieve digital excellence.',
    services: ['Responsive Web Design', 'UK SEO & Local Search', 'PPC Management (Google Ads)', 'E-commerce Development', 'Brand Strategy', 'Marketing Automation'],
    cities: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Edinburgh', 'Glasgow', 'Bristol', 'Liverpool'],
    localSeo: 'We optimize for Google.co.uk and understand the nuances of UK search behavior. Our local SEO strategies help UK businesses rank in their target cities and attract customers from their specific regions.',
    stats: [
      { value: '20+', label: 'UK Projects Delivered' },
      { value: '35%', label: 'Average Lead Increase' },
      { value: '24h', label: 'Response Time' },
    ],
    cta: 'Ready to boost your UK business online? Let us discuss your goals.',
  },
  germany: {
    title: 'Web Development Agency in Germany',
    subtitle: 'Technical Excellence for the German Market — Web Development, SEO & AI Automation',
    description: 'Orbitrix Solutions delivers web development, SEO, and AI automation services tailored for the German market. We understand the importance of precision, quality, and data privacy that German businesses expect.',
    services: ['Technical Web Development', 'German Market SEO', 'Data-Privacy Compliant Solutions', 'AI Workflow Automation', 'Performance Optimization', 'Enterprise Web Applications'],
    cities: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne', 'Stuttgart', 'Düsseldorf', 'Leipzig'],
    localSeo: 'We optimize for Google.de and understand German search patterns. Our SEO strategies include German-language keyword research, local citation building, and compliance with German data protection regulations.',
    stats: [
      { value: '10+', label: 'German Projects' },
      { value: '40%', label: 'Average Performance Gain' },
      { value: '24h', label: 'Response Time' },
    ],
    cta: 'Transform your German business with modern web solutions. Contact us.',
  },
  netherlands: {
    title: 'Web Development Agency in the Netherlands',
    subtitle: 'Digital Solutions for Dutch Businesses — From Amsterdam to Rotterdam',
    description: 'Orbitrix Solutions serves businesses across the Netherlands with web development, SEO, and digital marketing services. We understand the Dutch market and deliver solutions that resonate with Dutch consumers and businesses.',
    services: ['Modern Web Development', 'Dutch Market SEO', 'E-commerce Optimization', 'Digital Marketing Strategy', 'Conversion Rate Optimization', 'AI-Powered Customer Insights'],
    cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven', 'Tilburg', 'Groningen', 'Maastricht'],
    localSeo: 'We optimize for Google.nl and understand Dutch search behavior. Our strategies help Dutch businesses rank locally and attract customers from across the Netherlands.',
    stats: [
      { value: '8+', label: 'Dutch Projects' },
      { value: '30%', label: 'Average ROI Increase' },
      { value: '24h', label: 'Response Time' },
    ],
    cta: 'Let us help your Dutch business grow online. Start with a free consultation.',
  },
  france: {
    title: 'Web Development Agency in France',
    subtitle: 'Solutions Numériques Pour Entreprises Françaises — De Paris à Lyon',
    description: 'Orbitrix Solutions helps French businesses build powerful digital presences with custom web development, SEO optimization, and AI-driven marketing strategies. We understand the French market and deliver solutions that resonate with French consumers.',
    services: ['Custom Web Development', 'French Market SEO', 'E-commerce Solutions', 'Digital Marketing Strategy', 'AI Automation', 'Bilingual Content Strategy'],
    cities: ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Bordeaux'],
    localSeo: 'We optimize for Google.fr and understand French search patterns. Our SEO strategies include French-language keyword research, local citation building, and compliance with CNIL data protection regulations.',
    stats: [
      { value: '12+', label: 'French Projects' },
      { value: '35%', label: 'Average Traffic Increase' },
      { value: '24h', label: 'Response Time' },
    ],
    cta: 'Prêt à digitaliser votre entreprise française? Contactez-nous pour une consultation gratuite.',
  },
  spain: {
    title: 'Web Development Agency in Spain',
    subtitle: 'Desarrollo Web y Marketing Digital Para Empresas Españolas',
    description: 'Orbitrix Solutions partners with Spanish businesses to deliver web development, SEO, and digital marketing services tailored for the Spanish market. From Barcelona to Madrid, we help Spanish companies achieve digital excellence.',
    services: ['Custom Web Development', 'Spanish Market SEO', 'E-commerce Platforms', 'Social Media Marketing', 'AI-Powered Analytics', 'Bilingual Content Strategy'],
    cities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Bilbao', 'Málaga', 'Zaragoza', 'Palma'],
    localSeo: 'We optimize for Google.es and understand Spanish search behavior. Our local SEO strategies help Spanish businesses rank in their target cities and attract customers from their specific regions.',
    stats: [
      { value: '10+', label: 'Spanish Projects' },
      { value: '28%', label: 'Average Conversion Boost' },
      { value: '24h', label: 'Response Time' },
    ],
    cta: 'Impulsa tu empresa española con soluciones digitales modernas. Contáctanos hoy.',
  },
  ireland: {
    title: 'Web Development Agency in Ireland',
    subtitle: 'Digital Growth Partner for Irish Businesses Across the Emerald Isle',
    description: 'Orbitrix Solutions serves Irish businesses with web development, SEO, and digital marketing services designed for the Irish market. From Dublin to Cork, Galway to Limerick, we help Irish companies build powerful digital presences.',
    services: ['Responsive Web Design', 'Irish Market SEO', 'E-commerce Development', 'PPC Management', 'AI Automation Solutions', 'Content Marketing'],
    cities: ['Dublin', 'Cork', 'Galway', 'Limerick', 'Waterford', 'Kilkenny', 'Sligo', 'Drogheda'],
    localSeo: 'We optimize for Google.ie and understand Irish search patterns. Our local SEO strategies help Irish businesses dominate local search results and attract customers from their target regions.',
    stats: [
      { value: '8+', label: 'Irish Projects' },
      { value: '32%', label: 'Average Lead Increase' },
      { value: '24h', label: 'Response Time' },
    ],
    cta: 'Ready to grow your Irish business online? Let us discuss your goals today.',
  },
  australia: {
    title: 'Web Development Agency in Australia',
    subtitle: 'Full-Service Digital Solutions for Australian Businesses from Sydney to Melbourne',
    description: 'Orbitrix Solutions partners with Australian businesses to deliver web development, SEO, and digital marketing services that generate real results. Whether you are in Sydney, Melbourne, Brisbane, or Perth, we understand the Australian market.',
    services: ['Custom Web Development', 'Australian Market SEO', 'E-commerce Solutions', 'Google Ads Management', 'AI Automation', 'Social Media Marketing'],
    cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Hobart'],
    localSeo: 'We optimize for Google.com.au and understand Australian search behavior. Our local SEO strategies help Australian businesses rank in their target cities and attract customers from their specific regions.',
    stats: [
      { value: '15+', label: 'Australian Projects' },
      { value: '30%', label: 'Average Traffic Increase' },
      { value: '24h', label: 'Response Time' },
    ],
    cta: 'Ready to grow your Australian business online? Contact us for a free consultation.',
  },
  dubai: {
    title: 'Web Development Agency in Dubai & UAE',
    subtitle: 'Premium Digital Solutions for Businesses in Dubai, Abu Dhabi & Across the UAE',
    description: 'Orbitrix Solutions delivers premium web development, SEO, and digital marketing services for businesses in the UAE. From Dubai to Abu Dhabi, we understand the unique dynamics of the Middle Eastern market and deliver solutions that drive growth.',
    services: ['Premium Web Development', 'UAE Market SEO', 'E-commerce Platforms', 'Google Ads & Social Advertising', 'AI Automation Solutions', 'Arabic & English Bilingual Sites'],
    cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'],
    localSeo: 'We optimize for Google.ae and understand UAE search patterns. Our strategies help businesses in Dubai and across the Emirates rank locally and attract high-value customers.',
    stats: [
      { value: '20+', label: 'UAE Projects' },
      { value: '40%', label: 'Average ROI Increase' },
      { value: '24h', label: 'Response Time' },
    ],
    cta: 'Elevate your Dubai business with world-class digital solutions. Contact us today.',
  },
};

const LocationPage = () => {
  const { country } = useParams();
  const data = locationData[country];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [country]);

  if (!data) {
    return (
      <main id="main-content">
        <div className="location-not-found">
          <h1>Location Not Found</h1>
          <p>The location page you are looking for does not exist.</p>
          <Link to="/" className="location-back-link">
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Home
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const otherLocations = Object.entries(locationData).filter(([key]) => key !== country);

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Web Development Services in ${country.toUpperCase()}`,
    "description": data.description.substring(0, 300),
    "provider": {
      "@type": "Organization",
      "name": "Orbitrix Solutions",
      "url": "https://orbitrixsolutions.com"
    },
      "areaServed": {
        "@type": "Country",
        "name": country === 'usa' ? 'United States' : country === 'uk' ? 'United Kingdom' : country === 'dubai' ? 'United Arab Emirates' : country.charAt(0).toUpperCase() + country.slice(1)
      },
    "serviceType": "Web Development, SEO, Digital Marketing",
    "url": `https://orbitrixsolutions.com/locations/${country}`
  };

  return (
    <main id="main-content">
      <SEO
        title={`${data.title} | Orbitrix Solutions`}
        description={data.description.substring(0, 160)}
        keywords={`web development ${country}, SEO agency ${country}, digital marketing ${country}, Orbitrix Solutions ${country}`}
        schema={locationSchema}
      />

      <Breadcrumbs />

      <section className="location-hero">
        <div className="location-hero-bg" aria-hidden="true">
          <div className="location-orb orb-1"></div>
          <div className="location-orb orb-2"></div>
        </div>
        <div className="location-hero-container">
          <Link to="/services" className="location-back-link">
            <FontAwesomeIcon icon={faArrowLeft} />
            Our Services
          </Link>
          <div className="location-badge">
            <FontAwesomeIcon icon={faGlobe} />
            {country === 'dubai' ? 'UAE' : country.toUpperCase()}
          </div>
          <h1>{data.title}</h1>
          <p className="location-subtitle">{data.subtitle}</p>
          <div className="location-stats">
            {data.stats.map((stat, i) => (
              <div key={i} className="location-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="location-content">
        <div className="location-container">
          <div className="location-main">
            <h2>Our Services in {data.cities[0]} & Across {country.toUpperCase()}</h2>
            <p>{data.description}</p>

            <div className="location-services">
              <h3>What We Offer</h3>
              <ul>
                {data.services.map((service, i) => (
                  <li key={i}>
                    <FontAwesomeIcon icon={faCheckCircle} className="location-check" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="location-seo-section">
              <h3>Local SEO for {country.toUpperCase()}</h3>
              <p>{data.localSeo}</p>
            </div>

            <div className="location-cities">
              <h3>Cities We Serve</h3>
              <div className="location-cities-grid">
                {data.cities.map((city, i) => (
                  <span key={i} className="location-city-tag">{city}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="location-sidebar">
            <div className="location-cta-box">
              <h3>Get Started Today</h3>
              <p>{data.cta}</p>
              <a
                className="location-cta-btn"
                href="https://wa.me/qr/7GSRQFMD6AMZG1"
                target="_blank"
                rel="noreferrer"
              >
                Free Consultation
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>

            <div className="location-other-box">
              <h3>Other Locations</h3>
              <div className="location-other-links">
                {otherLocations.map(([key, loc]) => (
                  <Link key={key} to={`/locations/${key}`} className="location-other-link">
                    {loc.title.replace('Web Development Agency in the ', '').replace('Web Development Agency in ', '')}
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

export default LocationPage;
