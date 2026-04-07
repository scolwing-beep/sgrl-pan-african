import { useInView } from '../hooks/useInView'
import './Commodities.css'

const commodities = [
  {
    name: 'Cassava Flour',
    image: '/images/cassava-flour.jpg',
    origin: 'Nigeria',
    grade: 'Export Grade',
    description: 'High-quality cassava flour processed to international food safety standards. Used in food manufacturing and retail across East and Southern Africa.',
  },
  {
    name: 'Raw Cashew W320',
    image: '/images/raw-cashew.jpg',
    origin: 'Nigeria \u00b7 Ghana',
    grade: 'W320 Grade',
    description: 'Premium whole cashew nuts, W320 specification. Sourced from certified farms with traceability from farm gate to export port.',
  },
  {
    name: 'White Maize',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500&q=80',
    origin: 'Zambia \u00b7 Nigeria',
    grade: 'Grade 1',
    description: 'Non-GMO white maize suitable for human consumption and food processing. Consistent supply from verified smallholder aggregators.',
  },
  {
    name: 'Dried Mango',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=500&q=80',
    origin: 'Ghana \u00b7 Senegal',
    grade: 'Premium',
    description: 'Sun-dried and oven-dried mango slices for export. HACCP compliant processing facilities. Growing demand in European and South African markets.',
  },
  {
    name: 'Soybeans',
    image: '/images/soybeans.jpg',
    origin: 'Zambia \u00b7 Nigeria',
    grade: 'Export Grade',
    description: 'High-protein soybeans for animal feed and food processing industries. Consistent moisture content below 13%. Bulk supply available year-round.',
  },
]

function Commodities() {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section className="commodities" id="commodity-supply">
      <div className="commodities-container">
        <div className="commodities-header" ref={headerRef}>
          <span className={`commodities-tag anim-slide-right${headerInView ? ' in-view' : ''}`}>OUR COMMODITIES</span>
          <h2 className={`commodities-title anim-slide-right${headerInView ? ' in-view' : ''} delay-1`}>What We Trade</h2>
          <p className={`commodities-subtitle anim-slide-right${headerInView ? ' in-view' : ''} delay-2`}>
            Quality-verified agricultural commodities sourced from trusted suppliers
            across our Pan-African network.
          </p>
        </div>
        <div className="commodities-grid" ref={gridRef}>
          {commodities.map((item, index) => (
            <div key={index} className={`commodity-card anim-fade-up${gridInView ? ' in-view' : ''} delay-${index + 1}`}>
              <div className="commodity-img">
                <img src={item.image} alt={item.name} />
                <div className="commodity-badge">{item.grade}</div>
              </div>
              <div className="commodity-body">
                <h3 className="commodity-name">{item.name}</h3>
                <span className="commodity-origin">{item.origin}</span>
                <p className="commodity-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Commodities
