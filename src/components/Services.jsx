import { FaHandshake, FaSeedling, FaTruckFast, FaChartLine, FaGlobe, FaUsers } from 'react-icons/fa6'
import { useInView } from '../hooks/useInView'
import './Services.css'

const services = [
  {
    icon: <FaHandshake />,
    title: 'Trade Facilitation',
    description: 'Connecting verified African commodity suppliers with international buyers through our robust facilitation chain.'
  },
  {
    icon: <FaSeedling />,
    title: 'Commodity Sourcing',
    description: 'Sourcing quality agricultural and natural resource commodities from trusted suppliers across Africa.'
  },
  {
    icon: <FaTruckFast />,
    title: 'Export Logistics',
    description: 'End-to-end logistics support from farm gate to international ports, ensuring seamless commodity delivery.'
  },
  {
    icon: <FaChartLine />,
    title: 'Market Intelligence',
    description: 'Providing real-time market data and trade intelligence to empower informed decision-making.'
  },
  {
    icon: <FaGlobe />,
    title: 'Pan-African Network',
    description: 'Extensive network spanning Nigeria, Ghana, Cameroon and other key African commodity markets.'
  },
  {
    icon: <FaUsers />,
    title: 'Member Services',
    description: 'Exclusive tools, contracts, and support for our registered suppliers and buyer members.'
  }
]

function Services() {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header" ref={headerRef}>
          <span className={`services-tag anim-slide-right${headerInView ? ' in-view' : ''}`}>WHAT WE DO</span>
          <h2 className={`services-title anim-slide-right${headerInView ? ' in-view' : ''} delay-1`}>Our Core Services</h2>
          <p className={`services-subtitle anim-slide-right${headerInView ? ' in-view' : ''} delay-2`}>
            Driving sustainable trade and economic growth across Africa through
            our integrated facilitation chain.
          </p>
        </div>
        <div className="services-grid" ref={gridRef}>
          {services.map((service, index) => (
            <div key={index} className={`service-card anim-fade-up${gridInView ? ' in-view' : ''} delay-${index + 1}`}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
