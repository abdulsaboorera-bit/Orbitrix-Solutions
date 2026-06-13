import React from 'react'
import { Typography } from 'antd'
import member1 from '../../../Images/member1.png'
import member2 from '../../../Images/member2.png'
import member3 from '../../../Images/member3.png'
import Footer from '../../Footer'

const FAQ = () => {
  return (
    <>
      <section className="about-section">
        <Typography.Title level={2} className="text-center">Meet Our Team</Typography.Title>
        <div className="about-team-grid">
          <div className="about-team-card">
            <img src={member3} alt="Orbitrix Solutions Strategy Lead - Team Member" />
            <h4>Strategy Lead</h4>
            <p>Aligns positioning, messaging, and growth goals.</p>
          </div>
          <div className="about-team-card">
            <img src={member2} alt="Orbitrix Solutions Design Director - Team Member" />
            <h4>Design Director</h4>
            <p>Shapes premium visual systems and UX.</p>
          </div>
          <div className="about-team-card">
            <img src={member1} alt="Orbitrix Solutions Engineering Lead - Team Member" />
            <h4>Engineering Lead</h4>
            <p>Delivers high-performance web builds.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default FAQ
