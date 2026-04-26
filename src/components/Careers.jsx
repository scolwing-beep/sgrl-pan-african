import { useState } from 'react'
import { FaBriefcase, FaLocationDot, FaClock, FaXmark, FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaFileLines } from 'react-icons/fa6'
import { useInView } from '../hooks/useInView'
import './Careers.css'

const openings = [
  {
    title: 'Business Development Manager',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'Spearhead market expansion across Africa, building strategic partnerships with commodity suppliers and international buyers.',
    requirements: ['5+ years in B2B sales or trade facilitation', 'Strong network in agribusiness or commodities', 'Excellent negotiation and communication skills', 'Willingness to travel across Africa'],
  },
  {
    title: 'Operations & Documentation Coordinator',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'Manage end-to-end trade documentation, supplier onboarding, and logistics coordination.',
    requirements: ['3+ years in export/import operations', 'Proficiency in trade documentation (SGD, BOL, COO)', 'Attention to detail and strong organisational skills', 'Experience with freight forwarding a plus'],
  },
  {
    title: 'Marketing & Social Media Officer',
    location: 'Remote',
    type: 'Full-time',
    description: "Build SGRL's brand presence across African markets through digital marketing and social media strategy.",
    requirements: ['Proven social media management experience', 'Content creation and copywriting skills', 'Experience with Canva, Meta Ads, or LinkedIn Ads', 'Knowledge of agribusiness or trade a strong plus'],
  },
  {
    title: 'Country Market Liaison',
    location: 'Ghana / Cameroon',
    type: 'Part-time',
    description: "Serve as the in-country representative, connecting local commodity suppliers with SGRL's facilitation chain.",
    requirements: ['Based in Ghana or Cameroon', 'Established supplier or farmer group contacts', 'Fluency in English (French a plus for Cameroon)', 'Self-driven with minimal supervision'],
  },
  {
    title: 'Trade Research Analyst',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'Conduct market research on African commodity prices, trade corridors, and supply-demand dynamics.',
    requirements: ['Degree in Economics, Agriculture, or related field', 'Proficiency with ITC Trade Map, FAOSTAT, or similar tools', 'Strong data analysis and report-writing skills', 'Familiarity with AfCFTA and African trade policy'],
  },
  {
    title: 'NYSC / Intern Attachment',
    location: 'Lagos, Nigeria',
    type: 'Internship',
    description: 'Gain hands-on experience in international trade facilitation, commodity sourcing, and business operations.',
    requirements: ['OND/HND/BSc in any relevant field', 'Eager to learn and highly motivated', 'Good written and verbal communication', 'NYSC corps members welcome'],
  },
]

const RECIPIENT = 'info@scolwingglobal.com'

function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    availability: '',
    coverLetter: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'A valid email is required.'
    if (!form.phone.trim()) e.phone = 'Phone number is required.'
    if (!form.experience) e.experience = 'Please select your experience level.'
    if (!form.availability) e.availability = 'Please select your availability.'
    if (!form.coverLetter.trim() || form.coverLetter.trim().length < 50)
      e.coverLetter = 'Please write at least 50 characters.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    const subject = encodeURIComponent(`Job Application: ${job.title}`)
    const body = encodeURIComponent(
      `Position Applied For: ${job.title}\nLocation: ${job.location}\n\n` +
      `Full Name: ${form.fullName}\nEmail: ${form.email}\nPhone: ${form.phone}\n` +
      `Experience Level: ${form.experience}\nAvailability: ${form.availability}\n\n` +
      `Cover Letter:\n${form.coverLetter}\n\n` +
      `---\nApplication submitted via SGRL Website`
    )
    window.open(`mailto:${RECIPIENT}?subject=${subject}&body=${body}`)
    setSubmitted(true)
  }

  return (
    <div className="apply-overlay" onClick={onClose}>
      <div className="apply-modal" onClick={(e) => e.stopPropagation()}>
        <button className="apply-modal-close" onClick={onClose} aria-label="Close"><FaXmark /></button>

        {submitted ? (
          <div className="apply-success">
            <FaPaperPlane className="apply-success-icon" />
            <h3>Application Sent!</h3>
            <p>Your email client has opened with your application for <strong>{job.title}</strong>. Please send the email and attach your CV.</p>
            <p className="apply-success-note">Send your CV directly to <a href={`mailto:${RECIPIENT}`}>{RECIPIENT}</a></p>
            <button className="apply-done-btn" onClick={onClose}>Done</button>
          </div>
        ) : (
          <>
            <div className="apply-modal-header">
              <span className="apply-modal-tag">Apply Now</span>
              <h2 className="apply-modal-title">{job.title}</h2>
              <div className="apply-modal-meta">
                <span><FaLocationDot /> {job.location}</span>
                <span><FaClock /> {job.type}</span>
              </div>
            </div>

            <form className="apply-form" onSubmit={handleSubmit} noValidate>
              <div className="apply-form-row">
                <div className="apply-field">
                  <label>Full Name <span className="req">*</span></label>
                  <div className={`apply-input-wrap ${errors.fullName ? 'error' : ''}`}>
                    <FaUser className="apply-field-icon" />
                    <input type="text" name="fullName" placeholder="Your full name" value={form.fullName} onChange={handleChange} />
                  </div>
                  {errors.fullName && <span className="apply-error">{errors.fullName}</span>}
                </div>

                <div className="apply-field">
                  <label>Email Address <span className="req">*</span></label>
                  <div className={`apply-input-wrap ${errors.email ? 'error' : ''}`}>
                    <FaEnvelope className="apply-field-icon" />
                    <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
                  </div>
                  {errors.email && <span className="apply-error">{errors.email}</span>}
                </div>
              </div>

              <div className="apply-form-row">
                <div className="apply-field">
                  <label>Phone Number <span className="req">*</span></label>
                  <div className={`apply-input-wrap ${errors.phone ? 'error' : ''}`}>
                    <FaPhone className="apply-field-icon" />
                    <input type="tel" name="phone" placeholder="+234 800 000 0000" value={form.phone} onChange={handleChange} />
                  </div>
                  {errors.phone && <span className="apply-error">{errors.phone}</span>}
                </div>

                <div className="apply-field">
                  <label>Years of Experience <span className="req">*</span></label>
                  <select name="experience" value={form.experience} onChange={handleChange} className={errors.experience ? 'error' : ''}>
                    <option value="">Select level</option>
                    <option value="0–1 years (Entry level)">0–1 years (Entry level)</option>
                    <option value="2–4 years (Mid level)">2–4 years (Mid level)</option>
                    <option value="5–9 years (Senior level)">5–9 years (Senior level)</option>
                    <option value="10+ years (Executive level)">10+ years (Executive level)</option>
                  </select>
                  {errors.experience && <span className="apply-error">{errors.experience}</span>}
                </div>
              </div>

              <div className="apply-field">
                <label>Availability <span className="req">*</span></label>
                <select name="availability" value={form.availability} onChange={handleChange} className={errors.availability ? 'error' : ''}>
                  <option value="">When can you start?</option>
                  <option value="Immediately">Immediately</option>
                  <option value="Within 2 weeks">Within 2 weeks</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="Within 3 months">Within 3 months</option>
                </select>
                {errors.availability && <span className="apply-error">{errors.availability}</span>}
              </div>

              <div className="apply-field">
                <label><FaFileLines /> Cover Letter <span className="req">*</span></label>
                <textarea
                  name="coverLetter"
                  rows={5}
                  placeholder="Tell us why you're a great fit for this role, your relevant experience, and what excites you about SGRL's mission..."
                  value={form.coverLetter}
                  onChange={handleChange}
                  className={errors.coverLetter ? 'error' : ''}
                />
                {errors.coverLetter && <span className="apply-error">{errors.coverLetter}</span>}
              </div>

              <p className="apply-cv-note">
                After submitting, please also attach your CV to the email that will open automatically.
              </p>

              <button type="submit" className="apply-submit-btn">
                <FaPaperPlane /> Submit Application
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function Careers() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section className="careers" id="careers">
      {selectedJob && <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />}

      <div className="careers-container">
        <div className="careers-header" ref={headerRef}>
          <span className={`careers-tag anim-slide-right${headerInView ? ' in-view' : ''}`}>CAREERS</span>
          <h2 className={`careers-title anim-slide-right${headerInView ? ' in-view' : ''} delay-1`}>Join Our Team</h2>
          <p className={`careers-subtitle anim-slide-right${headerInView ? ' in-view' : ''} delay-2`}>
            Be part of the team building Africa's commodity trade infrastructure.
            We're looking for passionate professionals to drive our mission forward.
          </p>
        </div>

        <div className="careers-grid" ref={gridRef}>
          {openings.map((job, index) => (
            <div key={index} className={`career-card anim-fade-up${gridInView ? ' in-view' : ''} delay-${index + 1}`}>
              <div className="career-card-header">
                <FaBriefcase className="career-icon" />
                <h3 className="career-title">{job.title}</h3>
              </div>
              <div className="career-meta">
                <span className="career-meta-item"><FaLocationDot /> {job.location}</span>
                <span className="career-meta-item"><FaClock /> {job.type}</span>
              </div>
              <p className="career-desc">{job.description}</p>
              <ul className="career-requirements">
                {job.requirements.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
              <button className="career-apply" onClick={() => setSelectedJob(job)}>
                Apply Now &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Careers
