import { useState, useCallback } from 'react'
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

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

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

  return (
    <nav className="navbar">
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
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`navbar-menu ${mobileOpen ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`navbar-item ${item.submenu ? 'has-dropdown' : ''}`}
              onMouseEnter={() => item.submenu && setActiveDropdown(index)}
              onMouseLeave={() => item.submenu && setActiveDropdown(null)}
            >
              <a
                href="#"
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault()
                  if (item.submenu) {
                    toggleDropdown(index)
                  } else if (item.target) {
                    scrollTo(item.target)
                  }
                }}
              >
                {item.label}
                {item.submenu && <FaChevronDown className="dropdown-arrow" />}
              </a>
              {item.submenu && (
                <ul className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}>
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
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
