import { useState, useCallback, useEffect, useRef } from 'react'
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/images/sgrl-logo.png'
import './Navbar.css'

const menuItems = [
  {
    label: 'Who We Are',
    submenu: [
      { label: 'About SGRL', target: 'about-sgrl' },
      { label: 'Our Team', target: 'our-team' },
      { label: 'Our History', target: 'our-history' },
      { label: 'Partners', target: 'partners' },
    ],
  },
  {
    label: 'What We Do',
    submenu: [
      { label: 'Trade Facilitation', target: 'services' },
      { label: 'Commodity Supply', target: 'commodity-supply' },
      { label: 'Market Access', target: 'market-access' },
      { label: 'Advisory Services', target: 'services' },
    ],
  },
  {
    label: 'Knowledge Center',
    submenu: [
      { label: 'Research', target: 'research' },
      { label: 'Publications', target: 'publications' },
      { label: 'Market Reports', target: 'market-reports' },
    ],
  },
  {
    label: 'Media Center',
    submenu: [
      { label: 'News', target: 'news' },
      { label: 'Press Releases', target: 'news' },
      { label: 'Gallery', target: 'gallery' },
    ],
  },
  { label: 'Careers', target: 'careers' },
  { label: 'Members Only', target: 'members-only' },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 980)
  const navRef = useRef(null)

  // Track viewport width to separate desktop/mobile behaviour
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 980px)')
    const onChange = (e) => {
      setIsMobile(e.matches)
      if (!e.matches) {
        setMobileOpen(false)
        setActiveDropdown(null)
      }
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Close everything when clicking outside the navbar
  useEffect(() => {
    const onOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false)
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', onOutsideClick)
    document.addEventListener('touchstart', onOutsideClick)
    return () => {
      document.removeEventListener('mousedown', onOutsideClick)
      document.removeEventListener('touchstart', onOutsideClick)
    }
  }, [])

  const scrollTo = useCallback((targetId) => {
    const el = document.getElementById(targetId)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [])

  const handleParentClick = (e, item, index) => {
    e.preventDefault()
    if (item.submenu) {
      if (isMobile) {
        setActiveDropdown(activeDropdown === index ? null : index)
      }
      // Desktop: hover handles open/close — click does nothing
    } else if (item.target) {
      scrollTo(item.target)
    }
  }

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-container">
        <a
          href="#"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <img src={logo} alt="SGRL - Scolwing Global Resources Limited" />
        </a>

        <button
          className="navbar-toggle"
          onClick={() => {
            setMobileOpen((prev) => !prev)
            setActiveDropdown(null)
          }}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`navbar-menu${mobileOpen ? ' active' : ''}`}>
          {menuItems.map((item, index) => {
            const isOpen = activeDropdown === index
            return (
              <li
                key={index}
                className={`navbar-item${item.submenu ? ' has-dropdown' : ''}`}
                onMouseEnter={() => {
                  if (!isMobile && item.submenu) setActiveDropdown(index)
                }}
                onMouseLeave={() => {
                  if (!isMobile && item.submenu) setActiveDropdown(null)
                }}
              >
                <a
                  href="#"
                  className={`navbar-link${isOpen ? ' open' : ''}`}
                  onClick={(e) => handleParentClick(e, item, index)}
                >
                  {item.label}
                  {item.submenu && (
                    <FaChevronDown className={`dropdown-arrow${isOpen ? ' rotated' : ''}`} />
                  )}
                </a>

                {item.submenu && (
                  <ul className={`dropdown-menu${isOpen ? ' show' : ''}`}>
                    {item.submenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            scrollTo(sub.target)
                          }}
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
