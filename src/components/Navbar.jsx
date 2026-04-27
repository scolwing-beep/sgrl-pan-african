import { useState, useCallback, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaChevronDown, FaBars, FaXmark } from 'react-icons/fa6'
import logo from '../assets/images/sgrl-logo.png'
import './Navbar.css'

const menuItems = [
  {
    label: 'Who We Are',
    submenu: [
      { label: 'About SGRL', page: '/about' },
      { label: 'Our Team', page: '/about' },
      { label: 'Our History', page: '/about' },
      { label: 'Partners', page: '/' },
    ],
  },
  {
    label: 'What We Do',
    page: '/services',
    submenu: [
      { label: 'Trade Facilitation', page: '/services' },
      { label: 'Commodity Supply', page: '/services' },
      { label: 'Market Access', page: '/services' },
      { label: 'Advisory Services', page: '/services' },
    ],
  },
  {
    label: 'Knowledge Center',
    page: '/knowledge',
    submenu: [
      { label: 'Research', page: '/knowledge' },
      { label: 'Publications', page: '/knowledge' },
      { label: 'Market Reports', page: '/knowledge' },
      { label: 'Latest News', page: '/knowledge' },
    ],
  },
  {
    label: 'Media Center',
    page: '/knowledge',
    submenu: [
      { label: 'News & Updates', page: '/knowledge' },
      { label: 'Press Releases', page: '/knowledge' },
    ],
  },
  { label: 'Careers', page: '/careers' },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 980)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 980px)')
    const onChange = (e) => {
      setIsMobile(e.matches)
      if (!e.matches) { setMobileOpen(false); setActiveDropdown(null) }
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false); setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', onOutside)
    document.addEventListener('touchstart', onOutside)
    return () => {
      document.removeEventListener('mousedown', onOutside)
      document.removeEventListener('touchstart', onOutside)
    }
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  const goTo = useCallback((page) => {
    navigate(page)
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [navigate])

  const handleParentClick = (e, item, index) => {
    e.preventDefault()
    if (item.submenu) {
      if (isMobile) setActiveDropdown(activeDropdown === index ? null : index)
      else if (item.page) goTo(item.page)
    } else if (item.page) {
      goTo(item.page)
    }
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} ref={navRef}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo" onClick={(e) => { e.preventDefault(); goTo('/') }}>
          <img src={logo} alt="SGRL – Scolwing Global Resources Limited" />
        </a>

        <button
          className="navbar-toggle"
          onClick={() => { setMobileOpen(p => !p); setActiveDropdown(null) }}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FaXmark /> : <FaBars />}
        </button>

        <ul className={`navbar-menu${mobileOpen ? ' active' : ''}`}>
          {menuItems.map((item, index) => {
            const isOpen = activeDropdown === index
            const isActive = item.page === location.pathname || item.submenu?.some(s => s.page === location.pathname)
            return (
              <li
                key={index}
                className={`navbar-item${item.submenu ? ' has-dropdown' : ''}`}
                onMouseEnter={() => { if (!isMobile && item.submenu) setActiveDropdown(index) }}
                onMouseLeave={() => { if (!isMobile && item.submenu) setActiveDropdown(null) }}
              >
                <a
                  href={item.page || '#'}
                  className={`navbar-link${isOpen ? ' open' : ''}${isActive ? ' active-page' : ''}`}
                  onClick={(e) => handleParentClick(e, item, index)}
                >
                  {item.label}
                  {item.submenu && <FaChevronDown className={`dropdown-arrow${isOpen ? ' rotated' : ''}`} />}
                </a>
                {item.submenu && (
                  <ul className={`dropdown-menu${isOpen ? ' show' : ''}`}>
                    {item.submenu.map((sub, si) => (
                      <li key={si}>
                        <a href={sub.page} onClick={(e) => { e.preventDefault(); goTo(sub.page) }}>{sub.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
          <li className="navbar-item navbar-cta">
            <a href="/contact" className="navbar-cta-btn" onClick={(e) => { e.preventDefault(); goTo('/contact') }}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
