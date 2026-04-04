import { FaHandshake, FaGlobe, FaSeedling, FaTruckFast } from 'react-icons/fa6'
import { useInView } from '../hooks/useInView'
import './Partners.css'

const partners = [
  {
    icon: <FaSeedling />,
    category: 'Supplier Networks',
    description: 'Verified agricultural commodity suppliers across Nigeria, Ghana, Cameroon, and other African nations.',
  },
  {
    icon: <FaGlobe />,
    category: 'International Buyers',
    description: 'Global commodity buyers seeking quality African agricultural products and raw materials.',
  },
  {
    icon: <FaTruckFast />,
    category: 'Logistics Partners',
    description: 'Freight forwarders and shipping companies ensuring seamless delivery from origin to destination.',
  },
  {
    icon: <FaHandshake />,
    category: 'Trade Associations',
    description: 'Industry bodies and trade associations supporting the growth of African agribusiness.',
  },
]

function Partners() {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section className="partners" id="partners">
      <div className="partners-container">
        <div className="partners-header" ref={headerRef}>
          <span className={`partners-tag anim-slide-right${headerInView ? ' in-view' : ''}`}>PARTNERS</span>
          <h2 className={`partners-title anim-slide-right${headerInView ? ' in-view' : ''} delay-1`}>Our Partner Network</h2>
          <p className={`partners-subtitle anim-slide-right${headerInView ? ' in-view' : ''} delay-2`}>
            Building a robust ecosystem of suppliers, buyers, and service providers across Africa.
          </p>
        </div>
        <div className="partners-grid" ref={gridRef}>
          {partners.map((partner, index) => (
            <div key={index} className={`partner-card anim-fade-up${gridInView ? ' in-view' : ''} delay-${index + 1}`}>
              <div className="partner-icon">{partner.icon}</div>
              <h3 className="partner-category">{partner.category}</h3>
              <p className="partner-desc">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
