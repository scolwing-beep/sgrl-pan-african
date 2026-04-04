import { useState } from 'react'
import { FaUser, FaEnvelope, FaArrowRightToBracket, FaCircleInfo, FaXTwitter } from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa'
import { FaShareAlt } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'
import './MembersRegistration.css'

function MembersRegistration() {
  const [form, setForm] = useState({ username: '', email: '', agree: false })
  const [submitted, setSubmitted] = useState(false)
  const [ref, isInView] = useInView()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.username && form.email && form.agree) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section className="members" id="members-only">
      <div className="members-container" ref={ref}>
        <h2 className={`members-page-title anim-slide-right${isInView ? ' in-view' : ''}`}>Forum &ndash; Registration</h2>
        <div className="members-divider"></div>

        <div className={`members-form-wrapper anim-fade-up${isInView ? ' in-view' : ''} delay-1`}>
          <h3 className="members-form-title">Join us today!</h3>

          {submitted ? (
            <div className="members-success">
              <p>Registration submitted! Check your email for a confirmation link.</p>
            </div>
          ) : (
            <form className="members-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-label-col">
                  <label className="form-label">
                    Username <span className="form-required">*</span>
                  </label>
                  <span className="form-hint">Length must be between 3 characters and 15 characters.</span>
                </div>
                <div className="form-input-col">
                  <div className="form-input-wrapper">
                    <FaUser className="form-input-icon" />
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={form.username}
                      onChange={handleChange}
                      minLength={3}
                      maxLength={15}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-label-col">
                  <label className="form-label">
                    Email <span className="form-required">*</span>
                  </label>
                </div>
                <div className="form-input-col">
                  <div className="form-input-wrapper">
                    <FaEnvelope className="form-input-icon" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-checkbox-row">
                <label className="form-checkbox-label">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={handleChange}
                    required
                  />
                  <span>I agree to receive an email confirmation with a link to set a password.</span>
                </label>
              </div>

              <div className="form-info-row">
                <FaCircleInfo className="form-info-icon" />
                <span>After registration you will receive an email confirmation with a link to set a new password</span>
              </div>

              <button type="submit" className="form-register-btn">Register</button>

              <div className="form-login-row">
                <a href="#" className="form-login-link">
                  <FaArrowRightToBracket /> Login
                </a>
              </div>
            </form>
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
