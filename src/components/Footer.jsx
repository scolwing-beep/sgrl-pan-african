import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa6'
import './Footer.css'

function scrollTo(targetId) {
  const el = document.getElementById(targetId)
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function FooterLink({ to, children }) {
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); scrollTo(to) }}>
      {children}
    </a>
  )
}

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
            <button className="footer-cta-btn primary" onClick={() => scrollTo('members-only')}>
              Become a Member <FaArrowRight />
            </button>
            <a href="mailto:info@scolwingglobal.com" className="footer-cta-btn secondary">
              <FaEnvelope /> Contact Us
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
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li><FooterLink to="about-sgrl">About Us</FooterLink></li>
              <li><FooterLink to="services">Our Services</FooterLink></li>
              <li><FooterLink to="commodity-supply">Commodity Sourcing</FooterLink></li>
              <li><FooterLink to="market-access">Our Markets</FooterLink></li>
              <li><FooterLink to="careers">Careers</FooterLink></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Resources</h3>
            <ul>
              <li><FooterLink to="market-reports">Market Reports</FooterLink></li>
              <li><FooterLink to="publications">Publications</FooterLink></li>
              <li><FooterLink to="members-only">Member Portal</FooterLink></li>
              <li><FooterLink to="newsletter">Newsletter</FooterLink></li>
              <li><FooterLink to="news">Latest News</FooterLink></li>
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
