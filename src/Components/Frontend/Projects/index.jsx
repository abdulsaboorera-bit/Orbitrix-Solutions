import React from 'react'
import { Typography } from 'antd'
import SEO from '../../SEO'
import Footer from '../../Footer'
import './index.css'

import fonalizeImg from '../../../Images/Fonalize.png'
import primeSafariImg from '../../../Images/PrimeSafariDubai.png'
import royalBeautyImg from '../../../Images/RoyalBeautySalon.png'
import stayImg from '../../../Images/Stay.png'
import b2bImg from '../../../Images/b2b-MobileWholesale.png'
import imranWoodImg from '../../../Images/imran-wood-working.png'
import seoImg from '../../../Images/seo.png'
import socialMediaImg from '../../../Images/socialmediapagehandling.png'
import marketingImg from '../../../Images/marketing.png'
import aiAdsImg from '../../../Images/aiaddsmaking.png'

const projectThumbs = {
  teal: "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='420'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%231a8187'/%3E%3Cstop offset='100%25' stop-color='%2363c6b8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='420' fill='%23fdfaf3'/%3E%3Ccircle cx='140' cy='120' r='120' fill='url(%23g1)' opacity='0.8'/%3E%3Ccircle cx='440' cy='260' r='160' fill='%230b5c61' opacity='0.35'/%3E%3Crect x='70' y='260' width='260' height='90' rx='18' fill='%23ffffff' opacity='0.9'/%3E%3C/svg%3E",
  mint: "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='420'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='0' y1='1' x2='1' y2='0'%3E%3Cstop offset='0%25' stop-color='%2363c6b8'/%3E%3Cstop offset='100%25' stop-color='%231a8187'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='420' fill='%23fdfaf3'/%3E%3Crect x='60' y='60' width='480' height='300' rx='40' fill='url(%23g2)' opacity='0.85'/%3E%3Ccircle cx='470' cy='120' r='70' fill='%230b5c61' opacity='0.4'/%3E%3C/svg%3E",
  deep: "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='420'%3E%3Cdefs%3E%3ClinearGradient id='g3' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23184832'/%3E%3Cstop offset='100%25' stop-color='%231a8187'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='420' fill='%23fdfaf3'/%3E%3Cpath d='M0 300 C160 200 320 360 600 220 L600 420 L0 420 Z' fill='url(%23g3)' opacity='0.85'/%3E%3Ccircle cx='140' cy='120' r='90' fill='%2363c6b8' opacity='0.55'/%3E%3C/svg%3E"
}

const projects = [
  {
    name: 'Fonalize',
    url: 'https://fonalize.co.uk/',
    type: 'Brand Website',
    status: 'Live',
    thumb: fonalizeImg
  },
  {
    name: 'Royal Beauty Salon',
    url: 'https://royalbeautysaloon.com/',
    type: 'Beauty & Wellness',
    status: 'Live',
    thumb: royalBeautyImg
  },
  {
    name: 'Prime Safari Dubai',
    url: 'https://primesafaridubai.com/',
    type: 'Travel & Tours',
    status: 'Live',
    thumb: primeSafariImg
  },
  {
    name: 'Stay Pakistan',
    url: 'https://stay.com.pk/',
    type: 'Hospitality',
    status: 'Live',
    thumb: stayImg
  },
  {
    name: 'B2B Mobile Wholesalers',
    url: 'https://www.b2bmobilewholesalers.com/',
    type: 'Commerce',
    status: 'In Progress',
    thumb: b2bImg
  },
  {
    name: 'Imran Woodworking',
    url: 'https://imranwoodworking.com/',
    type: 'Manufacturing',
    status: 'Live',
    thumb: imranWoodImg
  }
]

const Projects = () => {
  return (
    <main>
      <SEO 
        title="Our Projects | Portfolio - Orbitrix Solutions" 
        description="Explore our web development and SEO projects. See how Orbitrix Solutions helps businesses scale with custom web platforms and performance-driven results." 
      />
      <section className="projects-page">
        <div className="projects-hero">
          <Typography.Title>Projects that turn strategy into results.</Typography.Title>
          <Typography.Paragraph>
            A curated selection of recent Orbitrix Solutions work. Each build pairs crisp design with performance-focused
            engineering so every brand looks premium and converts better.
          </Typography.Paragraph>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-thumb">
                <img src={project.thumb} alt={`${project.name} preview`} />
                <span className={`project-status ${project.status === 'Live' ? 'live' : 'progress'}`}>
                  {project.status}
                </span>
              </div>
              <div className="project-body">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.type}</p>
                </div>
                <a href={project.url} target="_blank" rel="noreferrer">Visit Website</a>
              </div>
            </article>
          ))}
        </div>

        <div className="service-detail">
          <div>
            <Typography.Title level={2}>SEO Optimization</Typography.Title>
            <Typography.Paragraph>
              Rank higher with AI-powered content planning, technical fixes, and data-driven optimization. We combine keyword
              research, site performance tuning, and intelligent post schedules to help your website reach page one.
            </Typography.Paragraph>
            <ul>
              <li>AI content outlines and posting cadence</li>
              <li>Technical SEO audits and fixes</li>
              <li>On-page optimization for every core page</li>
            </ul>
          </div>
          <div className="detail-card">
            <img src={seoImg} alt="SEO optimization visual" />
          </div>
        </div>

        <div className="service-detail reverse">
          <div>
            <Typography.Title level={2}>AI Ads</Typography.Title>
            <Typography.Paragraph>
              Launch ad campaigns that learn fast. We build AI-assisted creative testing, smart audience targeting, and
              performance tracking to push cost per lead down and conversions up.
            </Typography.Paragraph>
            <ul>
              <li>AI-generated ad variations</li>
              <li>Audience segmentation and retargeting</li>
              <li>Weekly optimization and reporting</li>
            </ul>
          </div>
          <div className="detail-card">
            <img src={aiAdsImg} alt="AI ads visual" />
          </div>
        </div>

        <div className="service-detail">
          <div>
            <Typography.Title level={2}>Marketing</Typography.Title>
            <Typography.Paragraph>
              From positioning to conversion, we create marketing systems that attract, nurture, and convert. Expect a clear
              funnel, premium content, and reliable reporting every month.
            </Typography.Paragraph>
            <ul>
              <li>Brand messaging and funnel strategy</li>
              <li>Landing pages and conversion optimization</li>
              <li>Campaign planning and performance reviews</li>
            </ul>
          </div>
          <div className="detail-card">
            <img src={marketingImg} alt="Marketing strategy visual" />
          </div>
        </div>

        <div className="service-detail reverse">
          <div>
            <Typography.Title level={2}>Social Media</Typography.Title>
            <Typography.Paragraph>
              Build a social presence that feels premium and consistent. We design content systems, manage posting, and drive
              engagement with performance reporting.
            </Typography.Paragraph>
            <ul>
              <li>Content calendars and creative direction</li>
              <li>Community management and engagement</li>
              <li>Performance tracking and improvement</li>
            </ul>
          </div>
          <div className="detail-card">
            <img src={socialMediaImg} alt="Social media visual" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Projects
