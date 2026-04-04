import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import './Newsletter.css'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [ref, isInView] = useInView()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter-overlay"></div>
      <div className="newsletter-content" ref={ref}>
        <h2 className={`newsletter-title anim-slide-right${isInView ? ' in-view' : ''}`}>Sign Up for SGRL Newsletter</h2>
        <p className={`newsletter-desc anim-slide-right${isInView ? ' in-view' : ''} delay-1`}>Get the latest news and updates from us!</p>
        <form className={`newsletter-form anim-slide-right${isInView ? ' in-view' : ''} delay-2`} onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="newsletter-btn">Subscribe</button>
        </form>
        {submitted && (
          <p className="newsletter-success">Thank you for subscribing!</p>
        )}
      </div>
    </section>
  )
}

export default Newsletter
