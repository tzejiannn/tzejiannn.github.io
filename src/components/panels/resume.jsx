// Resume.jsx
// Shows experience and education as two clearly separated sections,
// plus a 3-column aside for awards, certs, and activities.

import { EXPERIENCE, EDUCATION, ASIDE } from '../../data/resume'

// Reusable component for rendering a timeline list
// Used for both Experience and Education sections
function TimelineList({ entries }) {
  return (
    <div className="tl-list">
      {entries.map((entry, i) => (
        <div key={i} className="tl-row">

          {/* Left column — period and type label */}
          <div className="tl-left">
            <div className="tl-period">{entry.period}</div>
            <div className={`tl-type-dot ${entry.type}`}>
              {entry.type === 'work' ? 'Work' : 'Education'}
            </div>
          </div>

          {/* Right column — role, org, bullet points */}
          <div className="tl-right">
            <div className="tl-role">{entry.role}</div>
            <div className="tl-org"style={{ color: entry.type === 'work' ? 'var(--green)' : '#60a5fa' }}>
              {entry.org}
            </div>
            <div className="tl-pts">
              {entry.pts.map((pt, j) => (
                <div key={j} className="tl-pt">{pt}</div>
              ))}
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default function Resume() {
  return (
    <section className="panel active" id="panel-resume">

      {/* ── Header row ── */}
      <div className="resume-header-row p-anim">
        <div>
          <div className="section-eyebrow">Background</div>
          <h2 className="sec-title">Resume</h2>
        </div>
        <a href="/resume.pdf" className="btn-outline">Download PDF</a>
      </div>

      {/* ── Experience section ── */}
      <div className="resume-section p-anim">

        {/* Section label */}
        <div className="resume-section-label">
          <span className="resume-section-dot work" />
          Experience
        </div>

        <TimelineList entries={EXPERIENCE} />

      </div>

      {/* ── Education section ── */}
      <div className="resume-section p-anim">

        {/* Section label */}
        <div className="resume-section-label">
          <span className="resume-section-dot edu" />
          Education
        </div>

        <TimelineList entries={EDUCATION} />

      </div>

      {/* ── Awards, Certifications, Activities ── */}
      <div className="resume-aside-row p-anim">
        {ASIDE.map((block, i) => (
          <div key={i} className="aside-card">
            <div className="aside-card-label">{block.label}</div>
            <ul>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  )
}