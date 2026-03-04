// Contact.jsx
// Two column layout — your social links on the left,
// a message form on the right.
// TODO: Wire up EmailJS for the form to actually send emails.

import { useState } from 'react'

export default function Contact() {

  // Track form field values
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [message, setMessage] = useState('')

  // Track the submit button state
  // 'idle' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState('idle')

  function handleSend() {
    // Validate — make sure all fields are filled
    if (!name || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 2000)
      return
    }

    setStatus('sending')

    // TODO: Replace this timeout with a real EmailJS call.
    // See https://www.emailjs.com/docs/sdk/send/ for setup instructions.
    // Example:
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    //   from_name: name,
    //   from_email: email,
    //   message: message,
    // }, 'YOUR_PUBLIC_KEY')
    // .then(() => setStatus('sent'))
    // .catch(() => setStatus('error'))

    setTimeout(() => setStatus('sent'), 1200)
  }

  // Button label and colour changes based on status
  function getButtonStyle() {
    if (status === 'sent')    return { background: '#22c55e' }
    if (status === 'error')   return { background: '#ef4444' }
    if (status === 'sending') return { opacity: 0.7 }
    return {}
  }

  function getButtonLabel() {
    if (status === 'sending') return 'Sending...'
    if (status === 'sent')    return '✓ Message sent!'
    if (status === 'error')   return 'Please fill all fields'
    return 'Send message →'
  }

  return (
    <section className="panel active" id="panel-contact">

      {/* Panel heading */}
      <div className="section-eyebrow p-anim">Say hello</div>
      <h2 className="sec-title p-anim">Contact</h2>

      <div className="contact-grid p-anim">

        {/* ── Left column — availability blurb and social links ── */}
        <div>

          {/* TODO: Update this paragraph with your real availability */}
          <p className="contact-blurb">
            Open to internships, full-time DS/ML roles, research
            collaborations, and interesting conversations about data.
            Based in Singapore, available for remote.
            Usually respond within 24 hours.
          </p>

          <div className="contact-links-list">


            <a href="mailto:tzejiannn@gmail.com" className="contact-link-item">
              <div className="cli-icon">✉</div>
              <div>
                <div className="cli-label">Email</div>
                {/* TODO: Replace with your real email */}
                <div className="cli-val">tzejiannn@gmail.com</div>
              </div>
              <span className="cli-arrow">{'→'}</span>
            </a>

            <a
              href="github.com/tzejiannn"
              target="_blank"
              rel="noreferrer"
              className="contact-link-item"
            >
              <div className="cli-icon">GH</div>
              <div>
                <div className="cli-label">GitHub</div>
        
                <div className="cli-val">github.com/tzejiannn</div>
              </div>
              <span className="cli-arrow">{'→'}</span>
            </a>

            <a
              href="linkedin.com/in/tzejian"
              target="_blank"
              rel="noreferrer"
              className="contact-link-item"
            >
              <div className="cli-icon">in</div>
              <div>
                <div className="cli-label">LinkedIn</div>
                <div className="cli-val">linkedin.com/in/tzejian</div>
              </div>
              <span className="cli-arrow">{'→'}</span>
            </a>

            <a
              href="kaggle.com/joelangtzejian"
              target="_blank"
              rel="noreferrer"
              className="contact-link-item"
            >
              <div className="cli-icon">K</div>
              <div>
                <div className="cli-label">Kaggle</div>
                <div className="cli-val">kaggle.com/joelangtzejian</div>
              </div>
              <span className="cli-arrow">{'→'}</span>
            </a>

          </div>
        </div>

        {/* ── Right column — contact form ── */}
        <div className="contact-form">
          <div className="form-title">Send a message</div>

          {/* Name field */}
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              className="form-input"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          {/* Email field */}
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          {/* Message field */}
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              placeholder="What would you like to discuss?"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>

          {/* Submit button — label and colour changes based on status */}
          <button
            className="form-submit"
            onClick={handleSend}
            disabled={status === 'sending' || status === 'sent'}
            style={getButtonStyle()}
          >
            {getButtonLabel()}
          </button>

        </div>
      </div>

    </section>
  )
}