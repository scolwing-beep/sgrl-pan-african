import { FaBookOpen, FaFileLines, FaChartBar } from 'react-icons/fa6'
import { useInView } from '../hooks/useInView'
import './KnowledgeCenter.css'

const resources = [
  {
    icon: <FaBookOpen />,
    title: 'Research',
    id: 'research',
    description: 'In-depth research on African commodity markets, trade corridors, and agricultural value chains.',
    items: ['Market Demand Analysis', 'Commodity Price Trends', 'Trade Corridor Studies', 'Agricultural Sector Reports'],
  },
  {
    icon: <FaFileLines />,
    title: 'Publications',
    id: 'publications',
    description: 'Published guides, toolkits, and resources for commodity traders, suppliers, and buyers.',
    items: ['SGRL Operations Toolkit', 'Supplier Membership Guide', 'Buyer Onboarding Manual', 'Trade Finance Guides'],
  },
  {
    icon: <FaChartBar />,
    title: 'Market Reports',
    id: 'market-reports',
    description: 'Regular market intelligence reports covering commodity prices, supply trends, and trade opportunities.',
    items: ['Monthly Price Bulletins', 'Quarterly Trade Reviews', 'Annual Market Outlook', 'Country Market Profiles'],
  },
]

function KnowledgeCenter() {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section className="knowledge" id="knowledge-center">
      <div className="knowledge-container">
        <div className="knowledge-header" ref={headerRef}>
          <span className={`knowledge-tag anim-slide-right${headerInView ? ' in-view' : ''}`}>KNOWLEDGE CENTER</span>
          <h2 className={`knowledge-title anim-slide-right${headerInView ? ' in-view' : ''} delay-1`}>Research & Insights</h2>
          <p className={`knowledge-subtitle anim-slide-right${headerInView ? ' in-view' : ''} delay-2`}>
            Empowering stakeholders with data-driven insights and market intelligence
            across African commodity markets.
          </p>
        </div>
        <div className="knowledge-grid" ref={gridRef}>
          {resources.map((resource, index) => (
            <div key={index} className={`knowledge-card anim-fade-up${gridInView ? ' in-view' : ''} delay-${index + 1}`} id={resource.id}>
              <div className="knowledge-icon">{resource.icon}</div>
              <h3 className="knowledge-card-title">{resource.title}</h3>
              <p className="knowledge-card-desc">{resource.description}</p>
              <ul className="knowledge-list">
                {resource.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <a href="#" className="knowledge-link">View All &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KnowledgeCenter
