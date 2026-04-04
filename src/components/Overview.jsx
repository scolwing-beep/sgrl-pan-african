import { useInView } from '../hooks/useInView'
import './Overview.css'

function Overview() {
  const [imgRef, imgInView] = useInView()
  const [textRef, textInView] = useInView()

  return (
    <section className="overview" id="about-sgrl">
      <div className="overview-container">
        <div className="overview-images" ref={imgRef}>
          <div className="overview-img-wrapper">
            <div className={`overview-img-main anim-zoom${imgInView ? ' in-view' : ''}`}>
              <img
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80"
                alt="African agriculture - corn field"
              />
            </div>
            <div className={`overview-img-secondary anim-zoom${imgInView ? ' in-view' : ''} delay-2`}>
              <img
                src="/images/cassava-roots.jpg"
                alt="Cassava roots harvested from field"
              />
            </div>
            <div className="overview-stat-badge">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years of<br />Pan-African Trade</span>
            </div>
          </div>
        </div>

        <div className="overview-content" ref={textRef}>
          <span className={`overview-tag anim-slide-right${textInView ? ' in-view' : ''}`}>SGRL OVERVIEW</span>
          <h2 className={`overview-title anim-slide-right${textInView ? ' in-view' : ''} delay-1`}>
            Scolwing Global <span className="text-gold">Resources</span> Limited
          </h2>
          <p className={`anim-slide-right${textInView ? ' in-view' : ''} delay-2`}>
            SGRL is a private sector platform and Pan-African agribusiness facilitator
            based in Lagos, Nigeria, working to connect commodity suppliers across
            Africa with verified international buyers, creating value and building
            sustainable wealth.
          </p>
          <p className={`anim-slide-right${textInView ? ' in-view' : ''} delay-3`}>
            Our facilitation chain cuts across the entire trade value chain, from
            supplier onboarding, commodity sourcing, quality verification, to export
            logistics and buyer matching across multiple African markets.
          </p>
          <p className={`anim-slide-right${textInView ? ' in-view' : ''} delay-4`}>
            The company strives to bridge the gap between African agricultural
            producers and global markets, enabling sustainable trade relationships
            that drive economic growth across the continent.
          </p>
          <p className={`anim-slide-right${textInView ? ' in-view' : ''} delay-5`}>
            SGRL is working to diversify Africa's commodity trade infrastructure,
            connecting suppliers in Nigeria, Ghana, Cameroon, and other African
            nations with buyers worldwide, driving agricultural industrialization
            and inclusive economic development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Overview
