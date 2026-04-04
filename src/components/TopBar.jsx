import { FaFacebookF, FaXTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa6'
import './TopBar.css'

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-social">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaXTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </div>
        <div className="topbar-contact">
          <a href="tel:+2347076178711" className="topbar-contact-item">
            <FaPhone />
            <span>+234 7076 178 711</span>
          </a>
          <a href="mailto:info@scolwingglobal.com" className="topbar-contact-item">
            <FaEnvelope />
            <span>info@scolwingglobal.com</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
