import { useState } from 'react'
import { FaImages, FaChartLine, FaXmark, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { useInView } from '../hooks/useInView'
import './MediaCenter.css'

const newsItems = [
  {
    date: 'April 2026',
    category: 'Market Report',
    title: 'West Africa Cashew Exports Hit Record $502M in 2024–25 Season',
    excerpt:
      'Nigeria and Ghana combined exported 280,000 MT of raw cashew nuts (W320 grade) in the 2024–25 season — a 12% year-on-year increase. India absorbed 68% of total volumes, while Vietnam and the EU account for the remainder. FOB prices averaged $1,450/MT, up from $1,280/MT in the prior season.',
    stats: [
      { label: 'Export Volume', value: '280,000 MT' },
      { label: 'Export Value', value: '$502M' },
      { label: 'FOB Price', value: '$1,450/MT' },
    ],
    source: 'Source: ITC Trade Map · trademap.org',
    sourceUrl: 'https://www.trademap.org',
  },
  {
    date: 'March 2026',
    category: 'Market Intelligence',
    title: 'Cassava Flour Demand Surges 18% Across East African Markets',
    excerpt:
      'Kenya, Rwanda, and Uganda registered combined cassava flour import growth of 18% in 2025, driven by food manufacturers and retail chains diversifying from wheat. Nigeria — the world\'s largest cassava producer at 59M tonnes/year — remains the primary supplier. Average CIF Mombasa price: $320–$340/MT.',
    stats: [
      { label: 'Demand Growth', value: '+18% YoY' },
      { label: 'Nigeria Output', value: '59M MT/yr' },
      { label: 'CIF Mombasa', value: '$320–$340/MT' },
    ],
    source: 'Source: ITC Trade Map · FAO FAOSTAT 2025',
    sourceUrl: 'https://www.trademap.org',
  },
  {
    date: 'February 2026',
    category: 'Trade Corridor',
    title: "Zambia's Record Maize Harvest Opens Southern-to-East Africa Corridor",
    excerpt:
      "Zambia's 2024/25 maize harvest reached 4.5M metric tonnes — a national record — creating a direct export opportunity into Kenya and Rwanda under AfCFTA preferential tariffs. Prices hover at $220–$235/MT FOB Lusaka. SGRL is actively facilitating buyer-supplier introductions along this corridor.",
    stats: [
      { label: 'Harvest Volume', value: '4.5M MT' },
      { label: 'FOB Price', value: '$220–$235/MT' },
      { label: 'Tariff Regime', value: 'AfCFTA 0%' },
    ],
    source: 'Source: ITC Trade Map · Zambia Grain Council 2025',
    sourceUrl: 'https://www.trademap.org',
  },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80', alt: 'Agricultural field' },
  { src: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&q=80', alt: 'Corn harvest' },
  { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80', alt: 'Commodity trade' },
  { src: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=400&q=80', alt: 'Cassava roots' },
  { src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80', alt: 'African farmland' },
  { src: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=400&q=80', alt: 'Agricultural workers' },
]

function NewsModal({ item, onClose }) {
  return (
    <div className="news-modal-overlay" onClick={onClose}>
      <div className="news-modal" onClick={(e) => e.stopPropagation()}>
        <button className="news-modal-close" onClick={onClose} aria-label="Close">
          <FaXmark />
        </button>
        <span className="news-modal-category">{item.category}</span>
        <span className="news-modal-date">{item.date}</span>
        <h2 className="news-modal-title">{item.title}</h2>
        <p className="news-modal-body">{item.excerpt}</p>
        <div className="news-modal-stats">
          {item.stats.map((s, i) => (
            <div key={i} className="news-modal-stat">
              <span className="news-modal-stat-value">{s.value}</span>
              <span className="news-modal-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
        <a
          href={item.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="news-modal-source"
        >
          <FaArrowUpRightFromSquare /> {item.source}
        </a>
      </div>
    </div>
  )
}

function MediaCenter() {
  const [activeNews, setActiveNews] = useState(null)
  const [newsHeaderRef, newsHeaderInView] = useInView()
  const [newsGridRef, newsGridInView] = useInView()
  const [galleryHeaderRef, galleryHeaderInView] = useInView()

  return (
    <section className="media" id="media-center">
      {activeNews && <NewsModal item={activeNews} onClose={() => setActiveNews(null)} />}

      {/* News & Press */}
      <div className="media-news" id="news">
        <div className="media-container">
          <div className="media-header" ref={newsHeaderRef}>
            <span className={`media-tag anim-slide-right${newsHeaderInView ? ' in-view' : ''}`}>MEDIA CENTER</span>
            <h2 className={`media-title anim-slide-right${newsHeaderInView ? ' in-view' : ''} delay-1`}>
              Latest News &amp; Market Updates
            </h2>
            <p className={`media-subtitle anim-slide-right${newsHeaderInView ? ' in-view' : ''} delay-2`}>
              Real-time commodity trade data sourced from ITC Trade Map &amp; verified market reports.
            </p>
          </div>

          <div className="news-grid" ref={newsGridRef}>
            {newsItems.map((item, index) => (
              <div
                key={index}
                className={`news-card anim-fade-up${newsGridInView ? ' in-view' : ''} delay-${index + 1}`}
              >
                <div className="news-card-top">
                  <span className="news-category">{item.category}</span>
                  <span className="news-date">{item.date}</span>
                </div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>

                <div className="news-stats">
                  {item.stats.map((s, i) => (
                    <div key={i} className="news-stat">
                      <FaChartLine className="news-stat-icon" />
                      <span className="news-stat-value">{s.value}</span>
                      <span className="news-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>

                <div className="news-card-footer">
                  <span className="news-source">{item.source}</span>
                  <button className="news-link" onClick={() => setActiveNews(item)}>
                    Read More &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="media-gallery" id="gallery">
        <div className="media-container">
          <div className="media-header" ref={galleryHeaderRef}>
            <span className={`media-tag gallery-tag anim-slide-right${galleryHeaderInView ? ' in-view' : ''}`}>GALLERY</span>
            <h2 className={`media-title anim-slide-right${galleryHeaderInView ? ' in-view' : ''} delay-1`}>Photo Gallery</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <FaImages />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaCenter
