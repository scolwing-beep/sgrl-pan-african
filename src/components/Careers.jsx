import { FaBriefcase, FaLocationDot, FaClock } from 'react-icons/fa6'
import { useInView } from '../hooks/useInView'
import './Careers.css'

const openings = [
  {
    title: 'Business Development Manager',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'Spearhead market expansion across Africa, building strategic partnerships with commodity suppliers and international buyers.',
  },
  {
    title: 'Operations & Documentation Coordinator',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'Manage end-to-end trade documentation, supplier onboarding, and logistics coordination.',
  },
  {
    title: 'Marketing & Social Media Officer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build SGRL\'s brand presence across African markets through digital marketing and social media strategy.',
  },
  {
    title: 'Country Market Liaison',
    location: 'Ghana / Cameroon',
    type: 'Part-time',
    description: 'Serve as the in-country representative, connecting local commodity suppliers with SGRL\'s facilitation chain.',
  },
  {
    title: 'Trade Research Analyst',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'Conduct market research on African commodity prices, trade corridors, and supply-demand dynamics.',
  },
  {
    title: 'NYSC / Intern Attachment',
    location: 'Lagos, Nigeria',
    type: 'Internship',
    description: 'Gain hands-on experience in international trade facilitation, commodity sourcing, and business operations.',
  },
]

function Careers() {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section className="careers" id="careers">
      <div className="careers-container">
        <div className="careers-header" ref={headerRef}>
          <span className={`careers-tag anim-slide-right${headerInView ? ' in-view' : ''}`}>CAREERS</span>
          <h2 className={`careers-title anim-slide-right${headerInView ? ' in-view' : ''} delay-1`}>Join Our Team</h2>
          <p className={`careers-subtitle anim-slide-right${headerInView ? ' in-view' : ''} delay-2`}>
            Be part of the team building Africa's commodity trade infrastructure.
            We're looking for passionate professionals to drive our mission forward.
          </p>
        </div>
        <div className="careers-grid" ref={gridRef}>
          {openings.map((job, index) => (
            <div key={index} className={`career-card anim-fade-up${gridInView ? ' in-view' : ''} delay-${index + 1}`}>
              <div className="career-card-header">
                <FaBriefcase className="career-icon" />
                <h3 className="career-title">{job.title}</h3>
              </div>
              <div className="career-meta">
                <span className="career-meta-item">
                  <FaLocationDot /> {job.location}
                </span>
                <span className="career-meta-item">
                  <FaClock /> {job.type}
                </span>
              </div>
              <p className="career-desc">{job.description}</p>
              <a href="#" className="career-apply">Apply Now &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Careers
