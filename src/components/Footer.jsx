import { Link } from 'react-router-dom'
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa6'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">

      {/* Pre-footer CTA banner */}
      <div className="footer-cta">
        <div className="footer-cta-inner">
          <div className="footer-cta-text">
            <h2>Ready to Trade Across Africa?</h2>
            <p>Join SGRL's verified network of suppliers, buyers, and trade partners across 7 African nations.</p>
          </div>
          <div className="footer-cta-actions">
            <Link to="/contact" className="footer-cta-btn primary">
              Get In Touch <FaArrowRight />
            </Link>
            <a href="mailto:info@scolwingglobal.com" className="footer-cta-btn secondary">
              <FaEnvelope /> Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
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
              <a href="https://linkedin.com/company/scolwingglobal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/services">Commodity Sourcing</Link></li>
              <li><Link to="/services">Our Markets</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Resources</h3>
            <ul>
              <li><Link to="/knowledge">Market Reports</Link></li>
              <li><Link to="/knowledge">Publications</Link></li>
              <li><Link to="/contact">Member Portal</Link></li>
              <li><Link to="/knowledge">Latest News</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Contact Info</h3>
            <div className="footer-contact-item">
              <FaLocationDot /><span>Lagos, Nigeria</span>
            </div>
            <div className="footer-contact-item">
              <FaPhone /><a href="tel:+2347076178711">+234 7076 178 711</a>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope /><a href="mailto:info@scolwingglobal.com">info@scolwingglobal.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Scolwing Global Resources Limited. All Rights Reserved. RC 1743970</p>
          <p className="footer-tagline">Connecting Africa. Creating Value. Building Wealth.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
