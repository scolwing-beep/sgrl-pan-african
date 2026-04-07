import { FaImages } from 'react-icons/fa6'
import { useInView } from '../hooks/useInView'
import './MediaCenter.css'

const newsItems = [
  {
    date: 'March 2026',
    title: 'SGRL Expands Facilitator Chain to East Africa',
    excerpt: 'Scolwing Global Resources Limited announces expansion of its trade facilitation services to Kenya and Tanzania.',
    category: 'News',
  },
  {
    date: 'February 2026',
    title: 'New Buyer Onboarding Portal Launched',
    excerpt: 'SGRL launches a streamlined digital onboarding system for international commodity buyers.',
    category: 'Press Release',
  },
  {
    date: 'January 2026',
    title: 'Q4 2025 Commodity Trade Report Released',
    excerpt: 'Latest market intelligence report highlights growth in cashew and sesame seed exports from West Africa.',
    category: 'News',
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

function MediaCenter() {
  const [newsHeaderRef, newsHeaderInView] = useInView()
  const [newsGridRef, newsGridInView] = useInView()
  const [galleryHeaderRef, galleryHeaderInView] = useInView()

  return (
    <section className="media" id="media-center">
      {/* News & Press */}
      <div className="media-news" id="news">
        <div className="media-container">
          <div className="media-header" ref={newsHeaderRef}>
            <span className={`media-tag anim-slide-right${newsHeaderInView ? ' in-view' : ''}`}>MEDIA CENTER</span>
            <h2 className={`media-title anim-slide-right${newsHeaderInView ? ' in-view' : ''} delay-1`}>Latest News & Updates</h2>
          </div>
          <div className="news-grid" ref={newsGridRef}>
            {newsItems.map((item, index) => (
              <div key={index} className={`news-card anim-fade-up${newsGridInView ? ' in-view' : ''} delay-${index + 1}`}>
                <span className="news-category">{item.category}</span>
                <span className="news-date">{item.date}</span>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <a href="#" className="news-link">Read More &rarr;</a>
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
                <img src={image.src} alt={image.alt} />
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
