import { useState } from 'react'
import {
  FaUser, FaEnvelope, FaLock, FaPhone, FaBuilding, FaGlobe,
  FaEye, FaEyeSlash, FaCircleCheck, FaXTwitter, FaArrowRightToBracket,
  FaUserPlus, FaShield, FaFileContract, FaChartBar,
} from 'react-icons/fa6'
import { FaWhatsapp, FaShareAlt } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'
import './MembersRegistration.css'

const AFRICAN_COUNTRIES = [
  'Nigeria', 'Ghana', 'Kenya', 'Rwanda', 'Zambia', 'South Africa',
  'Senegal', 'Cameroon', 'Ethiopia', 'Tanzania', 'Uganda', 'Côte d\'Ivoire',
  'Egypt', 'Morocco', 'Other African Country',
]
const OTHER_COUNTRIES = ['United Kingdom', 'Germany', 'France', 'Netherlands', 'USA', 'China', 'India', 'Other International']

const MEMBER_TYPES = [
  { value: 'supplier', label: 'Commodity Supplier', desc: 'I supply agricultural/natural resource commodities' },
  { value: 'buyer', label: 'International Buyer', desc: 'I source and purchase commodities internationally' },
  { value: 'partner', label: 'Trade Partner / Agent', desc: 'I facilitate trade between suppliers and buyers' },
  { value: 'logistics', label: 'Logistics / Freight Provider', desc: 'I provide shipping, freight, or logistics services' },
  { value: 'analyst', label: 'Researcher / Analyst', desc: 'I conduct research or advisory in agribusiness' },
]

const BENEFITS = [
  { icon: <FaFileContract />, title: 'Verified Contracts', desc: 'Access standardised trade contracts and documentation templates.' },
  { icon: <FaChartBar />, title: 'Market Intelligence', desc: 'Exclusive commodity price reports and trade corridor data.' },
  { icon: <FaShield />, title: 'Verified Network', desc: 'Connect with screened suppliers and buyers across 7 African nations.' },
  { icon: <FaGlobe />, title: 'AfCFTA Advisory', desc: 'Guidance on intra-African trade routes and preferential tariff schedules.' },
]

function RegisterForm({ onSuccess }) {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    company: '', memberType: '', country: '', password: '', confirmPassword: '',
    agreeTerms: false, agreeNewsletter: false,
  })
  const [errors, setErrors] = useState({})
  const [showPass, setShowPass] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required.'
    if (!form.lastName.trim()) e.lastName = 'Last name is required.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.phone.trim()) e.phone = 'Phone number is required.'
    if (!form.memberType) e.memberType = 'Please select your member type.'
    if (!form.country) e.country = 'Please select your country.'
    if (form.password.length < 8) e.password = 'Password must be at least 8 characters.'
    if (form.password !== form.confirmPassword) e.confirmPassword = 'Passwords do not match.'
    if (!form.agreeTerms) e.agreeTerms = 'You must accept the Terms & Conditions.'
    return e
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); onSuccess(form.email, form.firstName) }, 1400)
  }

  const strengthLevel = (pwd) => {
    if (!pwd) return 0
    let s = 0
    if (pwd.length >= 8) s++
    if (/[A-Z]/.test(pwd)) s++
    if (/[0-9]/.test(pwd)) s++
    if (/[^A-Za-z0-9]/.test(pwd)) s++
    return s
  }
  const strength = strengthLevel(form.password)
  const strengthLabel = ['', 'Weak', 'Fair', 'Good', 'Strong'][strength]
  const strengthClass = ['', 'weak', 'fair', 'good', 'strong'][strength]

  return (
    <form className="mem-form" onSubmit={handleSubmit} noValidate>
      <div className="mem-form-row">
        <div className="mem-field">
          <label>First Name <span className="req">*</span></label>
          <div className={`mem-input-wrap ${errors.firstName ? 'error' : ''}`}>
            <FaUser className="mem-field-icon" />
            <input type="text" name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} />
          </div>
          {errors.firstName && <span className="mem-error">{errors.firstName}</span>}
        </div>
        <div className="mem-field">
          <label>Last Name <span className="req">*</span></label>
          <div className={`mem-input-wrap ${errors.lastName ? 'error' : ''}`}>
            <FaUser className="mem-field-icon" />
            <input type="text" name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} />
          </div>
          {errors.lastName && <span className="mem-error">{errors.lastName}</span>}
        </div>
      </div>

      <div className="mem-form-row">
        <div className="mem-field">
          <label>Email Address <span className="req">*</span></label>
          <div className={`mem-input-wrap ${errors.email ? 'error' : ''}`}>
            <FaEnvelope className="mem-field-icon" />
            <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
          </div>
          {errors.email && <span className="mem-error">{errors.email}</span>}
        </div>
        <div className="mem-field">
          <label>Phone Number <span className="req">*</span></label>
          <div className={`mem-input-wrap ${errors.phone ? 'error' : ''}`}>
            <FaPhone className="mem-field-icon" />
            <input type="tel" name="phone" placeholder="+234 800 000 0000" value={form.phone} onChange={handleChange} />
          </div>
          {errors.phone && <span className="mem-error">{errors.phone}</span>}
        </div>
      </div>

      <div className="mem-form-row">
        <div className="mem-field">
          <label>Company / Organisation</label>
          <div className="mem-input-wrap">
            <FaBuilding className="mem-field-icon" />
            <input type="text" name="company" placeholder="Your company name (optional)" value={form.company} onChange={handleChange} />
          </div>
        </div>
        <div className="mem-field">
          <label>Country <span className="req">*</span></label>
          <select name="country" value={form.country} onChange={handleChange} className={errors.country ? 'error' : ''}>
            <option value="">Select your country</option>
            <optgroup label="Africa">
              {AFRICAN_COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </optgroup>
            <optgroup label="International">
              {OTHER_COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </optgroup>
          </select>
          {errors.country && <span className="mem-error">{errors.country}</span>}
        </div>
      </div>

      <div className="mem-field">
        <label>Member Type <span className="req">*</span></label>
        <div className={`mem-type-grid ${errors.memberType ? 'error-border' : ''}`}>
          {MEMBER_TYPES.map((t) => (
            <label key={t.value} className={`mem-type-card ${form.memberType === t.value ? 'selected' : ''}`}>
              <input type="radio" name="memberType" value={t.value} checked={form.memberType === t.value} onChange={handleChange} />
              <span className="mem-type-label">{t.label}</span>
              <span className="mem-type-desc">{t.desc}</span>
            </label>
          ))}
        </div>
        {errors.memberType && <span className="mem-error">{errors.memberType}</span>}
      </div>

      <div className="mem-form-row">
        <div className="mem-field">
          <label>Password <span className="req">*</span></label>
          <div className={`mem-input-wrap ${errors.password ? 'error' : ''}`}>
            <FaLock className="mem-field-icon" />
            <input type={showPass ? 'text' : 'password'} name="password" placeholder="Min. 8 characters" value={form.password} onChange={handleChange} />
            <button type="button" className="mem-eye" onClick={() => setShowPass(!showPass)} aria-label="Toggle password">
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {form.password && (
            <div className="mem-strength">
              <div className={`mem-strength-bar ${strengthClass}`}>
                {[1, 2, 3, 4].map((n) => <span key={n} className={strength >= n ? 'filled' : ''} />)}
              </div>
              <span className={`mem-strength-label ${strengthClass}`}>{strengthLabel}</span>
            </div>
          )}
          {errors.password && <span className="mem-error">{errors.password}</span>}
        </div>
        <div className="mem-field">
          <label>Confirm Password <span className="req">*</span></label>
          <div className={`mem-input-wrap ${errors.confirmPassword ? 'error' : ''}`}>
            <FaLock className="mem-field-icon" />
            <input type={showConfirm ? 'text' : 'password'} name="confirmPassword" placeholder="Repeat password" value={form.confirmPassword} onChange={handleChange} />
            <button type="button" className="mem-eye" onClick={() => setShowConfirm(!showConfirm)} aria-label="Toggle confirm password">
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.confirmPassword && <span className="mem-error">{errors.confirmPassword}</span>}
        </div>
      </div>

      <div className="mem-checks">
        <label className={`mem-check-label ${errors.agreeTerms ? 'check-error' : ''}`}>
          <input type="checkbox" name="agreeTerms" checked={form.agreeTerms} onChange={handleChange} />
          <span>I agree to the <a href="#" onClick={(e) => e.preventDefault()}>Terms &amp; Conditions</a> and <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a> <span className="req">*</span></span>
        </label>
        {errors.agreeTerms && <span className="mem-error">{errors.agreeTerms}</span>}

        <label className="mem-check-label">
          <input type="checkbox" name="agreeNewsletter" checked={form.agreeNewsletter} onChange={handleChange} />
          <span>Send me commodity market updates and SGRL newsletter</span>
        </label>
      </div>

      <button type="submit" className="mem-submit-btn" disabled={loading}>
        {loading ? <span className="mem-spinner" /> : <><FaUserPlus /> Create Account</>}
      </button>
    </form>
  )
}

function LoginForm({ onSwitchToRegister }) {
  const [form, setForm] = useState({ email: '', password: '', remember: false })
  const [errors, setErrors] = useState({})
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [forgotSent, setForgotSent] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email address.'
    if (!form.password) errs.password = 'Password is required.'
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setLoggedIn(true) }, 1400)
  }

  const handleForgot = (e) => {
    e.preventDefault()
    if (!form.email.trim()) { setErrors({ email: 'Enter your email to reset your password.' }); return }
    setForgotSent(true)
  }

  if (loggedIn) {
    return (
      <div className="mem-logged-in">
        <FaCircleCheck className="mem-login-check" />
        <h3>Welcome Back!</h3>
        <p>You are signed in as <strong>{form.email}</strong>.</p>
        <div className="mem-dashboard-links">
          <a href="#" onClick={(e) => e.preventDefault()} className="mem-dash-link"><FaChartBar /> Market Reports</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="mem-dash-link"><FaFileContract /> My Contracts</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="mem-dash-link"><FaGlobe /> Supplier Network</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="mem-dash-link"><FaShield /> AfCFTA Advisory</a>
        </div>
        <p className="mem-portal-note">Full member portal is currently in development. Contact <a href="mailto:info@scolwingglobal.com">info@scolwingglobal.com</a> for direct access.</p>
        <button className="mem-submit-btn" style={{ marginTop: '20px' }} onClick={() => setLoggedIn(false)}>Sign Out</button>
      </div>
    )
  }

  return (
    <form className="mem-form" onSubmit={handleSubmit} noValidate>
      <div className="mem-field">
        <label>Email Address <span className="req">*</span></label>
        <div className={`mem-input-wrap ${errors.email ? 'error' : ''}`}>
          <FaEnvelope className="mem-field-icon" />
          <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
        </div>
        {errors.email && <span className="mem-error">{errors.email}</span>}
      </div>

      <div className="mem-field">
        <label>Password <span className="req">*</span></label>
        <div className={`mem-input-wrap ${errors.password ? 'error' : ''}`}>
          <FaLock className="mem-field-icon" />
          <input type={showPass ? 'text' : 'password'} name="password" placeholder="Your password" value={form.password} onChange={handleChange} />
          <button type="button" className="mem-eye" onClick={() => setShowPass(!showPass)} aria-label="Toggle password">
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errors.password && <span className="mem-error">{errors.password}</span>}
      </div>

      <div className="mem-login-row">
        <label className="mem-check-label">
          <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange} />
          <span>Remember me</span>
        </label>
        <button type="button" className="mem-forgot" onClick={handleForgot}>Forgot password?</button>
      </div>

      {forgotSent && (
        <div className="mem-forgot-sent">
          <FaCircleCheck /> Password reset link sent to <strong>{form.email}</strong>
        </div>
      )}

      <button type="submit" className="mem-submit-btn" disabled={loading}>
        {loading ? <span className="mem-spinner" /> : <><FaArrowRightToBracket /> Sign In</>}
      </button>

      <p className="mem-switch-text">
        Not a member yet?{' '}
        <button type="button" className="mem-switch-link" onClick={onSwitchToRegister}>Create a free account</button>
      </p>
    </form>
  )
}

function MembersRegistration() {
  const [tab, setTab] = useState('register')
  const [regSuccess, setRegSuccess] = useState(null)
  const [ref, isInView] = useInView()

  const handleRegSuccess = (email, firstName) => {
    setRegSuccess({ email, firstName })
  }

  return (
    <section className="members" id="members-only">
      <div className="members-container" ref={ref}>

        {/* Benefits strip */}
        <div className={`mem-benefits anim-fade-up${isInView ? ' in-view' : ''}`}>
          {BENEFITS.map((b, i) => (
            <div key={i} className="mem-benefit">
              <span className="mem-benefit-icon">{b.icon}</span>
              <div>
                <strong>{b.title}</strong>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className={`members-page-title anim-slide-right${isInView ? ' in-view' : ''}`}>
          SGRL Members Portal
        </h2>
        <div className="members-divider"></div>

        <div className={`members-form-wrapper anim-fade-up${isInView ? ' in-view' : ''} delay-1`}>

          {regSuccess ? (
            <div className="mem-success-state">
              <FaCircleCheck className="mem-success-icon" />
              <h3>Welcome to SGRL, {regSuccess.firstName}!</h3>
              <p>Your account has been created. A verification email has been sent to <strong>{regSuccess.email}</strong>. Click the link in that email to activate your account and access the Members Portal.</p>
              <p className="mem-success-note">Didn't receive it? Check your spam folder or contact <a href="mailto:info@scolwingglobal.com">info@scolwingglobal.com</a></p>
              <button className="mem-submit-btn" style={{ marginTop: '24px', maxWidth: '260px', margin: '24px auto 0' }} onClick={() => { setRegSuccess(null); setTab('login') }}>
                <FaArrowRightToBracket /> Go to Login
              </button>
            </div>
          ) : (
            <>
              <div className="mem-tabs">
                <button className={`mem-tab ${tab === 'register' ? 'active' : ''}`} onClick={() => setTab('register')}>
                  <FaUserPlus /> Register
                </button>
                <button className={`mem-tab ${tab === 'login' ? 'active' : ''}`} onClick={() => setTab('login')}>
                  <FaArrowRightToBracket /> Login
                </button>
              </div>

              <div className="mem-tab-body">
                {tab === 'register'
                  ? <RegisterForm onSuccess={handleRegSuccess} />
                  : <LoginForm onSwitchToRegister={() => setTab('register')} />
                }
              </div>
            </>
          )}
        </div>

        <div className="members-share">
          <FaShareAlt className="share-icon" />
          <span className="share-label">Share:</span>
          <a href="#" className="share-btn" aria-label="Share on X"><FaXTwitter /></a>
          <a href="https://wa.me/2347076178711" target="_blank" rel="noopener noreferrer" className="share-btn" aria-label="Share on WhatsApp"><FaWhatsapp /></a>
        </div>
      </div>
    </section>
  )
}

export default MembersRegistration
