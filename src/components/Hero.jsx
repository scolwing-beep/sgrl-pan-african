import { useState, useEffect, useCallback } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import './Hero.css'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80',
    subtitle: 'Scolwing Global Resources Limited',
    title: 'Welcome To',
    highlight: 'SGRL',
    description: 'Connecting Africa. Creating Value. Building Wealth.',
  },
  {
    image: '/images/cassava-roots.jpg',
    subtitle: 'Pan-African Trade Facilitation',
    title: 'Driving Sustainable',
    highlight: 'Growth',
    description: 'Bridging African commodity suppliers with global markets.',
  },
  {
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1920&q=80',
    subtitle: 'Commodity Supply Chain',
    title: 'Building Africa\'s',
    highlight: 'Future',
    description: 'From farm gate to international ports, powering trade across the continent.',
  },
]

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState('down')

  const goToSlide = useCallback((newIndex, dir) => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(dir)
    setCurrentSlide(newIndex)
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating])

  const goUp = useCallback(() => {
    const prev = currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    goToSlide(prev, 'up')
  }, [currentSlide, goToSlide])

  const goDown = useCallback(() => {
    const next = currentSlide === slides.length - 1 ? 0 : currentSlide + 1
    goToSlide(next, 'down')
  }, [currentSlide, goToSlide])

  useEffect(() => {
    const timer = setInterval(goDown, 6000)
    return () => clearInterval(timer)
  }, [goDown])

  return (
    <section className="hero-slider">
      <div className="hero-slides-track">
        {slides.map((slide, index) => {
          let className = 'hero-slide'
          const isActive = index === currentSlide
          if (isActive) {
            className += ' hero-slide--active'
            className += direction === 'down' ? ' hero-slide--enter-down' : ' hero-slide--enter-up'
          }
          return (
            <div key={index} className={className} style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <div className="hero-subtitle-row">
                  <span className="hero-subtitle">{slide.subtitle}</span>
                  <span className="hero-line"></span>
                </div>
                <h1 className="hero-title">
                  {slide.title} <span className="hero-highlight">{slide.highlight}</span>
                </h1>
                <p className="hero-description">{slide.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      <button className="hero-nav hero-nav-up" onClick={goUp} aria-label="Previous slide">
        <FaChevronUp />
      </button>
      <button className="hero-nav hero-nav-down" onClick={goDown} aria-label="Next slide">
        <FaChevronDown />
      </button>
    </section>
  )
}

export default Hero
