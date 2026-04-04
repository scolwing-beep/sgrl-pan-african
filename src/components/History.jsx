import { useInView } from '../hooks/useInView'
import './History.css'

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Scolwing Global Resources Limited was incorporated in Lagos, Nigeria with RC 1743970, beginning its journey as a Pan-African trade facilitator.',
  },
  {
    year: '2021',
    title: 'First Trade Facilitations',
    description: 'Successfully facilitated first commodity trade deals, connecting Nigerian agricultural suppliers with international buyers.',
  },
  {
    year: '2022',
    title: 'Pan-African Expansion',
    description: 'Expanded operations to cover Ghana, Cameroon, and other West African markets, building a network of verified suppliers.',
  },
  {
    year: '2023',
    title: 'Facilitator Chain Launch',
    description: 'Launched the SGRL Facilitator Chain — a comprehensive system for supplier onboarding, commodity sourcing, and buyer matching.',
  },
  {
    year: '2024',
    title: 'Digital Transformation',
    description: 'Digitized trade operations with standardized contracts, invoicing, and member management tools across the facilitation chain.',
  },
]

function History() {
  const [headerRef, headerInView] = useInView()
  const [timelineRef, timelineInView] = useInView()

  return (
    <section className="history" id="our-history">
      <div className="history-container">
        <div className="history-header" ref={headerRef}>
          <span className={`history-tag anim-slide-right${headerInView ? ' in-view' : ''}`}>OUR HISTORY</span>
          <h2 className={`history-title anim-slide-right${headerInView ? ' in-view' : ''} delay-1`}>Our Journey So Far</h2>
          <p className={`history-subtitle anim-slide-right${headerInView ? ' in-view' : ''} delay-2`}>
            From inception to a growing Pan-African trade facilitation platform.
          </p>
        </div>
        <div className="timeline" ref={timelineRef}>
          {milestones.map((milestone, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} anim-fade-up${timelineInView ? ' in-view' : ''} delay-${index + 1}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-year">{milestone.year}</span>
                <h3 className="timeline-card-title">{milestone.title}</h3>
                <p className="timeline-card-desc">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default History
