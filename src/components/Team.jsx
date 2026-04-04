import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa6'
import { useInView } from '../hooks/useInView'
import './Team.css'

const teamMembers = [
  {
    name: 'Eddy Omoruyi',
    role: 'CEO & Founder',
    description: 'Visionary leader driving SGRL\'s Pan-African trade facilitation mission, with expertise in commodity sourcing and international trade.',
    initials: 'EO',
    email: 'info@scolwingglobal.com',
  },
  {
    name: 'Business Development Manager',
    role: 'Business Development',
    description: 'Spearheading market expansion across Africa, building strategic partnerships with suppliers and buyers across the continent.',
    initials: 'BDM',
  },
  {
    name: 'Operations Coordinator',
    role: 'Operations & Documentation',
    description: 'Managing end-to-end trade documentation, ensuring seamless operations from supplier onboarding to delivery.',
    initials: 'OPS',
  },
  {
    name: 'Marketing Officer',
    role: 'Marketing & Social Media',
    description: 'Building SGRL\'s brand presence across Africa and beyond, connecting with stakeholders through strategic communications.',
    initials: 'MKT',
  },
]

function Team() {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section className="team" id="our-team">
      <div className="team-container">
        <div className="team-header" ref={headerRef}>
          <span className={`team-tag anim-slide-right${headerInView ? ' in-view' : ''}`}>OUR TEAM</span>
          <h2 className={`team-title anim-slide-right${headerInView ? ' in-view' : ''} delay-1`}>Meet The Team Behind SGRL</h2>
          <p className={`team-subtitle anim-slide-right${headerInView ? ' in-view' : ''} delay-2`}>
            A dedicated team of professionals committed to building sustainable
            trade across Africa.
          </p>
        </div>
        <div className="team-grid" ref={gridRef}>
          {teamMembers.map((member, index) => (
            <div key={index} className={`team-card anim-fade-up${gridInView ? ' in-view' : ''} delay-${index + 1}`}>
              <div className="team-avatar">
                <span>{member.initials}</span>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p className="team-desc">{member.description}</p>
              <div className="team-social">
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href={member.email ? `mailto:${member.email}` : '#'} aria-label="Email"><FaEnvelope /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
