import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6'
import './Footer.css'

function scrollTo(targetId) {
  const el = document.getElementById(targetId)
  if (el) {
    const offset = 80
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function FooterLink({ to, children }) {
  return (
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
}

function Footer() {
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
              <li><FooterLink to="about-sgrl">About Us</FooterLink></li>
              <li><FooterLink to="services">Our Services</FooterLink></li>
              <li><FooterLink to="services">Trade Facilitation</FooterLink></li>
              <li><FooterLink to="commodity-supply">Commodity Sourcing</FooterLink></li>
              <li><FooterLink to="market-access">Our Markets</FooterLink></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Resources</h3>
            <ul>
              <li><FooterLink to="market-reports">Market Reports</FooterLink></li>
              <li><FooterLink to="publications">Publications</FooterLink></li>
              <li><FooterLink to="members-only">Member Portal</FooterLink></li>
              <li><FooterLink to="newsletter">Newsletter</FooterLink></li>
              <li><FooterLink to="careers">Careers</FooterLink></li>
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
