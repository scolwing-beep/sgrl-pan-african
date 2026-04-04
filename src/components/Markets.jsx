import { useInView } from '../hooks/useInView'
import './Markets.css'

const coverage = [
  { region: 'West Africa', countries: 'Nigeria \u00b7 Ghana \u00b7 Senegal' },
  { region: 'East Africa', countries: 'Kenya \u00b7 Rwanda' },
  { region: 'Southern Africa', countries: 'Zambia \u00b7 South Africa' },
  { region: 'Framework', countries: 'AfCFTA Compliant' },
  { region: 'Facilitation Fee', countries: '2\u20134% on closed deals', highlight: true },
]

const countryCards = [
  {
    flag: '\ud83c\uddf3\ud83c\uddec',
    name: 'Nigeria',
    role: 'ANCHOR MARKET',
    description: "World\u2019s largest cassava producer (59M tonnes). 200,000 tonnes cashew exports annually. SGRL\u2019s home base and primary supply anchor for the entire network.",
    tags: ['Cassava', 'Cashew', 'Rice'],
  },
  {
    flag: '\ud83c\uddec\ud83c\udded',
    name: 'Ghana',
    role: 'WEST AFRICA HUB',
    description: '60% of world\u2019s cocoa production. Strong shea butter and dried fruit export base. Growing food processing sector with EU trade relationships.',
    tags: ['Cocoa', 'Shea Butter', 'Dried Fruit'],
  },
  {
    flag: '\ud83c\uddf8\ud83c\uddf3',
    name: 'Senegal',
    role: 'WEST AFRICA SOURCE',
    description: 'Major groundnut and fish meal producer. Strong trade links with francophone markets. Growing processed food export capacity under ECOWAS framework.',
    tags: ['Groundnuts', 'Fish Meal'],
  },
  {
    flag: '\ud83c\uddff\ud83c\uddf2',
    name: 'Zambia',
    role: 'SOUTHERN AFRICA SUPPLY',
    description: "Record maize harvest in 2024\u201325. Strong soybean and tobacco export capacity. Underserved direct\u2011to\u2011East\u2011Africa corridor \u2014 SGRL\u2019s highest\u2011potential emerging route.",
    tags: ['Maize', 'Soybeans', 'Tobacco'],
  },
  {
    flag: '\ud83c\uddf0\ud83c\uddea',
    name: 'Kenya (Nairobi)',
    role: 'EAST AFRICA HUB',
    description: "Regional food processing and distribution hub. Growing demand for imported cassava flour, maize, and protein sources. Home of Mhogo Foods \u2014 SGRL\u2019s first target buyer.",
    tags: ['Food Processing', 'Distribution'],
  },
  {
    flag: '\ud83c\uddf7\ud83c\uddfc',
    name: 'Rwanda (Kigali)',
    role: 'EAC GATEWAY',
    description: "Africa\u2019s most business\u2011friendly environment. Fast\u2011growing urban food demand. RDB offers world\u2019s fastest company registration. SGRL\u2019s second hub for East Africa operations.",
    tags: ['Maize', 'Beans', 'EAC Access'],
  },
  {
    flag: '\ud83c\uddff\ud83c\udde6',
    name: 'South Africa',
    role: 'PREMIUM CONSUMER MARKET',
    description: "Africa\u2019s largest and most sophisticated consumer market. Growing demand for health food, premium cashews, and dried fruits. Strong retail chain and food manufacturer buyer network.",
    tags: ['Health Food', 'Retail', 'Processing'],
  },
]

function Markets() {
  const [introRef, introInView] = useInView()
  const [coverageRef, coverageInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section className="markets" id="market-access">
      <div className="markets-container">
        <div className="markets-top">
          <div className="markets-intro" ref={introRef}>
            <span className={`markets-tag anim-slide-right${introInView ? ' in-view' : ''}`}>OUR MARKETS</span>
            <h2 className={`markets-title anim-slide-right${introInView ? ' in-view' : ''} delay-1`}>7 Countries. One Verified Network.</h2>
            <div className={`markets-line anim-slide-right${introInView ? ' in-view' : ''} delay-2`}></div>
            <p className={`markets-desc anim-slide-right${introInView ? ' in-view' : ''} delay-3`}>
              SGRL operates across West, East, and Southern Africa &mdash; the three
              most commercially active agri-trade corridors on the continent. Each
              market is anchored by verified local contacts.
            </p>
          </div>
          <div className={`markets-coverage anim-fade-up${coverageInView ? ' in-view' : ''}`} ref={coverageRef}>
            <h3 className="coverage-heading">MARKET COVERAGE</h3>
            <div className="coverage-table">
              {coverage.map((row, i) => (
                <div key={i} className="coverage-row">
                  <span className="coverage-region">{row.region}</span>
                  <span className={`coverage-countries${row.highlight ? ' coverage-highlight' : ''}`}>
                    {row.countries}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="country-grid" ref={gridRef}>
          {countryCards.map((country, index) => (
            <div key={index} className={`country-card anim-fade-up${gridInView ? ' in-view' : ''} delay-${index + 1}`}>
              <div className="country-header">
                <span className="country-flag">{country.flag}</span>
                <div>
                  <h3 className="country-name">{country.name}</h3>
                  <span className="country-role">{country.role}</span>
                </div>
              </div>
              <p className="country-desc">{country.description}</p>
              <div className="country-tags">
                {country.tags.map((tag, i) => (
                  <span key={i} className="country-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Markets
