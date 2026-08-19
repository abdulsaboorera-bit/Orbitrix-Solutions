import {
  faShieldAlt,
  faFileContract,
  faPalette,
  faTags,
  faCode,
  faSearch,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';

const toolsData = [
  {
    id: 'privacy-policy-generator',
    title: 'Privacy Policy Generator',
    description: 'Generate a professional privacy policy for your website in seconds. Customizable for any country and business type.',
    icon: faShieldAlt,
    path: '/tools/privacy-policy-generator',
    badge: 'Free',
  },
  {
    id: 'terms-generator',
    title: 'Terms & Conditions Generator',
    description: 'Create legally structured terms and conditions for your website or app. Tailored to your business type and jurisdiction.',
    icon: faFileContract,
    path: '/tools/terms-generator',
    badge: 'Free',
  },
  {
    id: 'color-palette-generator',
    title: 'Color Palette Generator',
    description: 'Generate beautiful color palettes using color theory. Export as CSS, Tailwind config, or JSON.',
    icon: faPalette,
    path: '/tools/color-palette-generator',
    badge: 'Free',
  },
  {
    id: 'meta-tag-generator',
    title: 'Meta Tag Generator',
    description: 'Generate SEO-optimized meta tags including Open Graph and Twitter Card tags for better social sharing.',
    icon: faTags,
    path: '/tools/meta-tag-generator',
    badge: 'Free',
  },
  {
    id: 'seo-audit',
    title: 'Free SEO Audit Tool',
    description: 'Analyze your website performance, SEO, mobile-friendliness, and security with real data from Google PageSpeed.',
    icon: faSearch,
    path: '/free-seo-audit',
    badge: 'Free',
  },
  {
    id: 'pricing-calculator',
    title: 'Pricing Calculator',
    description: 'Get an instant estimate for web development, SEO, digital marketing, and AI automation services.',
    icon: faBolt,
    path: '/pricing-calculator',
    badge: 'Free',
  },
  {
    id: 'schema-generator',
    title: 'Schema Markup Generator',
    description: 'Generate structured data markup to help search engines understand your content and enable rich snippets.',
    icon: faCode,
    path: '/tools/schema-generator',
    badge: 'Free',
  },
];

export default toolsData;
