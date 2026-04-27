import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6'
import './TopBar.css'

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-social">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaXTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://linkedin.com/company/scolwingglobal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
        <div className="topbar-contact">
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
