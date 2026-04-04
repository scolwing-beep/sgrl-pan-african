import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6'
import './Footer.css'

function Footer() {
  const scrollTo = (targetId) => {
    const el = document.getElementById(targetId)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const Link = ({ to, children }) => (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        scrollTo(to)
      }}
    >
      {children}
    </a>
  )

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-col footer-about">
            <h3 className="footer-heading">About SGRL</h3>
            <p>
              Scolwing Global Resources Limited (SGRL) is a Pan-African agribusiness
              facilitator connecting commodity suppliers with international buyers,
              driving sustainable trade across the continent.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaXTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li><Link to="about-sgrl">About Us</Link></li>
              <li><Link to="services">Our Services</Link></li>
              <li><Link to="services">Trade Facilitation</Link></li>
              <li><Link to="commodity-supply">Commodity Sourcing</Link></li>
              <li><Link to="market-access">Our Markets</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Resources</h3>
            <ul>
              <li><Link to="market-reports">Market Reports</Link></li>
              <li><Link to="publications">Publications</Link></li>
              <li><Link to="members-only">Member Portal</Link></li>
              <li><Link to="newsletter">Newsletter</Link></li>
              <li><Link to="careers">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Contact Info</h3>
            <div className="footer-contact-item">
              <FaLocationDot />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="footer-contact-item">
              <FaPhone />
              <span>+234 7076 178 711</span>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope />
              <span>info@scolwingglobal.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} Scolwing Global Resources Limited. All Rights Reserved. RC 1743970</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
