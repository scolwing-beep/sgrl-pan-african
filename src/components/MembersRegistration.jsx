import { useState, useRef } from 'react'
import { FaArrowRight, FaEnvelope, FaLocationDot, FaGlobe, FaLinkedinIn, FaPhone } from 'react-icons/fa6'
import { useInView } from '../hooks/useInView'
import './MembersRegistration.css'

const SUPPLIER_BENEFITS = [
  'Direct introductions to verified buyers across Kenya, South Africa, Rwanda, Ghana, and EU markets',
  'SGRL facilitates every introduction — you never spend time finding or vetting buyers yourself',
  'Your company profile and commodity specifications promoted to SGRL\'s entire verified buyer network',
  'Access to weekly commodity price intelligence across all 10 SGRL commodity lines',
  'Deal support — SGRL advises on Incoterms, documentation, and payment structure for every deal',
  'Featured in SGRL\'s Supplier Spotlight — monthly feature reaching 5,000+ LinkedIn followers',
]

const BUYER_BENEFITS = [
  'Access to SGRL\'s complete verified supplier network across Nigeria, Ghana, Zambia, Senegal, and all 7 markets — at zero cost',
  'Tailored supplier matching based on your commodity, volume, quality grade, and delivery timeline requirements',
  'SGRL facilitates every Zoom introduction — you meet only verified, document-ready suppliers',
  'Weekly commodity availability and pricing intelligence — know what\'s available before you ask',
  'Deal documentation support — SGRL guides you through Proforma Invoice, Supply Contract, and payment terms',
  'Non-circumvention protection — SGRL\'s legal framework protects you from supplier bypass and fraud',
]

const CONTACT_ITEMS = [
  { label: 'PRIMARY EMAIL', value: 'info@scolwingglobal.com', sub: 'Enquiries — responses within 24 hours', href: 'mailto:info@scolwingglobal.com', Icon: FaEnvelope, color: '#f5f0e0' },
  { label: 'PHONE / WHATSAPP', value: '+234 7076 178 711', sub: 'Available Mon–Fri, 9am–6pm WAT', href: 'tel:+2347076178711', Icon: FaPhone, color: '#e8fdf0' },
  { label: 'WEBSITE', value: 'scolwingglobal.com', sub: 'Pan-African Agribusiness Trade Facilitation', href: '#', Icon: FaGlobe, color: '#f5f0e0' },
  { label: 'REGISTERED OFFICE', value: 'Lagos, Nigeria', sub: 'RC 1743970 · TIN: 23779921-0001 · Incorporated Dec 2020', href: null, Icon: FaLocationDot, color: '#fdecea' },
  { label: 'EAST AFRICA HUB', value: 'Kigali, Rwanda', sub: 'East & Southern Africa operations', href: null, Icon: FaGlobe, color: '#e8f0fe' },
  { label: 'LINKEDIN', value: 'linkedin.com/company/scolwingglobal', sub: 'Weekly commodity intelligence · Deal alerts · Market news', href: 'https://linkedin.com/company/scolwingglobal', Icon: FaLinkedinIn, color: '#e8eaf6' },
]

const ROLES = ['Commodity Supplier', 'International Buyer', 'Trade Partner / Agent', 'Logistics Provider', 'Researcher / Analyst', 'Media / Press', 'Other']
const COMMODITIES = ['Cashew Nuts', 'Sesame Seeds', 'Soybean', 'Maize / Corn', 'Cassava', 'Ginger', 'Cocoa', 'Palm Oil', 'Groundnuts', 'Cotton', 'Other / Multiple']
const ALL_COUNTRIES = [
  'Nigeria', 'Ghana', 'Kenya', 'Rwanda', 'Zambia', 'South Africa', 'Senegal', 'Cameroon',
  'Ethiopia', 'Tanzania', 'Uganda', "Côte d'Ivoire", 'Egypt', 'Morocco',
  'United Kingdom', 'Germany', 'France', 'Netherlands', 'Belgium', 'USA', 'Canada',
  'China', 'India', 'UAE', 'Saudi Arabia', 'Singapore', 'Other',
]

function ContactForm({ defaultRole }) {
  const [form, setForm] = useState({
    firstName: '', lastName: '', company: '', email: '',
    country: '', role: defaultRole || '', commodity: '', message: '',
  })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Please enter a message'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    const subject = `SGRL Enquiry — ${form.role || 'General'} | ${form.firstName} ${form.lastName}`
    const body = `Name: ${form.firstName} ${form.lastName}\nCompany: ${form.company}\nEmail: ${form.email}\nCountry: ${form.country}\nRole: ${form.role}\nCommodity of Interest: ${form.commodity}\n\nMessage:\n${form.message}`
    window.location.href = `mailto:info@scolwingglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="cf-success">
        <div className="cf-success-check">✓</div>
        <h4>Message Prepared</h4>
        <p>Your email client has opened with the message ready to send. We respond to all enquiries within 24 hours.</p>
        <button className="cf-success-reset" onClick={() => setSent(false)}>Send Another Message</button>
      </div>
    )
  }

  return (
    <form className="cf-form" onSubmit={handleSubmit} noValidate>
      <div className="cf-row">
        <div className={`cf-field${errors.firstName ? ' cf-has-error' : ''}`}>
          <label>First Name</label>
          <input type="text" name="firstName" placeholder="Your first name" value={form.firstName} onChange={handleChange} />
          {errors.firstName && <span className="cf-error">{errors.firstName}</span>}
        </div>
        <div className="cf-field">
          <label>Last Name</label>
          <input type="text" name="lastName" placeholder="Your last name" value={form.lastName} onChange={handleChange} />
        </div>
      </div>
      <div className="cf-field">
        <label>Company Name</label>
        <input type="text" name="company" placeholder="Your registered company name" value={form.company} onChange={handleChange} />
      </div>
      <div className="cf-row">
        <div className={`cf-field${errors.email ? ' cf-has-error' : ''}`}>
          <label>Email Address</label>
          <input type="email" name="email" placeholder="your@company.com" value={form.email} onChange={handleChange} />
          {errors.email && <span className="cf-error">{errors.email}</span>}
        </div>
        <div className="cf-field">
          <label>Country</label>
          <select name="country" value={form.country} onChange={handleChange}>
            <option value="">Select your country</option>
            {ALL_COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <div className="cf-field">
        <label>I am enquiring as a...</label>
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="">Select your role</option>
          {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>
      <div className="cf-field">
        <label>Commodity of Interest</label>
        <select name="commodity" value={form.commodity} onChange={handleChange}>
          <option value="">Select commodity</option>
          {COMMODITIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div className={`cf-field${errors.message ? ' cf-has-error' : ''}`}>
        <label>Your Message</label>
        <textarea name="message" rows={5} placeholder="Tell us about your business, the commodity volumes you work with, your current markets, and what you're looking for from SGRL..." value={form.message} onChange={handleChange} />
        {errors.message && <span className="cf-error">{errors.message}</span>}
      </div>
      <button type="submit" className="cf-submit">Send Message to SGRL <FaArrowRight /></button>
      <p className="cf-note">We respond to all enquiries within 24 hours. Your information is never shared with third parties.</p>
    </form>
  )
}

function MembersRegistration() {
  const [ref, isInView] = useInView()
  const contactRef = useRef(null)
  const [applyRole, setApplyRole] = useState('')

  const handleApply = (role) => {
    setApplyRole(role)
    setTimeout(() => {
      if (contactRef.current) {
        const top = contactRef.current.getBoundingClientRect().top + window.pageYOffset - 90
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 50)
  }

  return (
    <section className="members-section" id="members-only" ref={ref}>

      {/* Membership Options */}
      <div className={`membership-options anim-fade-up${isInView ? ' in-view' : ''}`}>
        <div className="mem-section-label">MEMBERSHIP OPTIONS</div>
        <h2 className="mem-section-title">Supplier or Buyer — One Network. Two Paths.</h2>

        <div className="membership-cards">
          {/* Supplier Card */}
          <div className="mem-card">
            <div className="mem-card-icon">🌾</div>
            <h3 className="mem-card-title">Agri-Supplier Membership</h3>
            <div className="mem-card-subtitle">FOR EXPORTERS, PROCESSORS &amp; AGGREGATORS</div>
            <ul className="mem-card-benefits">
              {SUPPLIER_BENEFITS.map((b, i) => (
                <li key={i}><span className="mem-bullet">✦</span><span>{b}</span></li>
              ))}
            </ul>
            <div className="mem-card-pricing">
              <span className="pricing-main">2—4%</span>
              <span className="pricing-sub"> of deal value on completion · No upfront joining fee</span>
            </div>
            <button className="mem-apply-btn navy" onClick={() => handleApply('Commodity Supplier')}>
              Apply as Supplier <FaArrowRight />
            </button>
          </div>

          {/* Buyer Card */}
          <div className="mem-card featured">
            <div className="mem-card-badge">FREE TO JOIN</div>
            <div className="mem-card-icon">🛒</div>
            <h3 className="mem-card-title">Agri-Buyer Membership</h3>
            <div className="mem-card-subtitle">FOR IMPORTERS, PROCESSORS &amp; DISTRIBUTORS</div>
            <ul className="mem-card-benefits">
              {BUYER_BENEFITS.map((b, i) => (
                <li key={i}><span className="mem-bullet">✦</span><span>{b}</span></li>
              ))}
            </ul>
            <div className="mem-card-pricing">
              <span className="pricing-main free">Free</span>
              <span className="pricing-sub"> to join · SGRL never invoices buyers</span>
            </div>
            <button className="mem-apply-btn gold" onClick={() => handleApply('International Buyer')}>
              Apply as Buyer <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className={`contact-section anim-fade-up${isInView ? ' in-view' : ''} delay-1`} ref={contactRef}>
        <div className="contact-container">
          <div className="contact-info">
            <div className="mem-section-label">CONTACT INFORMATION</div>
            <h2 className="contact-title">Reach SGRL Directly</h2>
            <div className="contact-items">
              {CONTACT_ITEMS.map((item, i) => (
                <div key={i} className="contact-item">
                  <div className="contact-item-icon" style={{ background: item.color }}>
                    <item.Icon />
                  </div>
                  <div className="contact-item-body">
                    <div className="contact-item-label">{item.label}</div>
                    {item.href
                      ? <a className="contact-item-value" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{item.value}</a>
                      : <div className="contact-item-value">{item.value}</div>
                    }
                    <div className="contact-item-sub">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-card">
            <h3 className="cf-card-title">Send Us a Message</h3>
            <p className="cf-card-sub">Tell us who you are and what you're looking for. Our team reviews every enquiry personally.</p>
            <ContactForm defaultRole={applyRole} key={applyRole} />
          </div>
        </div>
      </div>

    </section>
  )
}

export default MembersRegistration
