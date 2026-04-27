import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaChevronUp, FaChevronDown, FaArrowRight, FaPhone } from 'react-icons/fa6'
import './Hero.css'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80',
    subtitle: 'Scolwing Global Resources Limited',
    title: 'Connecting Africa.',
    highlight: 'Creating Value.',
    description: 'Pan-African agribusiness facilitator bridging commodity suppliers with global markets.',
    cta1: { label: 'Explore Our Services', page: '/services' },
    cta2: { label: 'Get In Touch', page: '/contact' },
  },
  {
    image: '/images/cassava-roots.jpg',
    subtitle: 'Pan-African Trade Facilitation',
    title: 'Driving Sustainable',
    highlight: 'Growth Across Africa',
    description: 'From farm gate to international port — we power every step of the commodity supply chain.',
    cta1: { label: 'Our Commodities', page: '/services' },
    cta2: { label: 'Our Markets', page: '/services' },
  },
  {
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1920&q=80',
    subtitle: 'Commodity Supply Chain',
    title: "Building Africa's",
    highlight: 'Trade Future',
    description: 'Connecting suppliers in Nigeria, Ghana, Zambia & beyond with verified international buyers.',
    cta1: { label: 'Become a Member', page: '/contact' },
    cta2: { label: 'View Market Data', page: '/knowledge' },
  },
]

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState('down')
  const navigate = useNavigate()

  const goToSlide = useCallback((newIndex, dir) => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(dir)
    setCurrentSlide(newIndex)
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating])

  const goUp = useCallback(() => {
    goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1, 'up')
  }, [currentSlide, goToSlide])

  const goDown = useCallback(() => {
    goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1, 'down')
  }, [currentSlide, goToSlide])

  useEffect(() => {
    const timer = setInterval(goDown, 6000)
    return () => clearInterval(timer)
  }, [goDown])

  return (
    <section className="hero-slider">
      <div className="hero-slides-track">
        {slides.map((slide, index) => {
          let cls = 'hero-slide'
          const isActive = index === currentSlide
          if (isActive) {
            cls += ' hero-slide--active'
            cls += direction === 'down' ? ' hero-slide--enter-down' : ' hero-slide--enter-up'
          }
          return (
            <div key={index} className={cls} style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="hero-overlay" />
              <div className="hero-content">
                <div className="hero-eyebrow">
                  <span className="hero-line" />
                  <span className="hero-subtitle">{slide.subtitle}</span>
                </div>
                <h1 className="hero-title">
                  {slide.title}<br />
                  <span className="hero-highlight">{slide.highlight}</span>
                </h1>
                <p className="hero-description">{slide.description}</p>
                <div className="hero-actions">
                  <button className="hero-btn hero-btn-primary" onClick={() => navigate(slide.cta1.page)}>
                    {slide.cta1.label} <FaArrowRight />
                  </button>
                  <button className="hero-btn hero-btn-secondary" onClick={() => navigate(slide.cta2.page)}>
                    <FaPhone /> {slide.cta2.label}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Slide dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === currentSlide ? ' active' : ''}`}
            onClick={() => goToSlide(i, i > currentSlide ? 'down' : 'up')}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Vertical nav arrows */}
      <div className="hero-nav-wrap">
        <button className="hero-nav" onClick={goUp} aria-label="Previous slide"><FaChevronUp /></button>
        <button className="hero-nav" onClick={goDown} aria-label="Next slide"><FaChevronDown /></button>
      </div>
    </section>
  )
}

export default Hero
