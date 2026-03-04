// Resume.jsx
// Shows your career timeline and education history,
// plus a 3-column aside for awards, certs, and activities.
// Data is pulled from src/data/resume.js

import { TIMELINE, ASIDE } from '../../data/resume'

export default function Resume() {
  return (
    <section className="panel active" id="panel-resume">

      {/* Panel heading row — title on left, download button on right */}
      <div className="resume-header-row p-anim">
        <div>
          <div className="section-eyebrow">Background</div>
          <h2 className="sec-title">Resume</h2>
        </div>

        {/* TODO: Drop your resume PDF into the /public folder
            and name it resume.pdf — this link will work automatically */}
        
          href="/resume.pdf"
          download
          className="btn-outline"
          style={{ marginTop: 'auto' }}
        >
          Download PDF
        </a>
      </div>

      {/* Timeline entries — pulled from TIMELINE in resume.js
          Shows most recent first — reorder entries in resume.js to change */}
      <div className="tl-list p-anim">
        {TIMELINE.map((entry, i) => (
          <div key={i} className="tl-row">

            {/* Left column — period and type label */}
            <div className="tl-left">

              {/* Date range e.g. "May - Aug 2024" */}
              <div className="tl-period">{entry.period}</div>

              {/* Work shows a green dot, Education shows a blue dot
                  The dot colour is controlled by .work and .edu in CSS */}
              <div className={`tl-type-dot ${entry.type}`}>
                {entry.type === 'work' ? 'Work' : 'Education'}
              </div>

            </div>

            {/* Right column — role, org, bullet points */}
            <div className="tl-right">

              {/* Job title or degree name */}
              <div className="tl-role">{entry.role}</div>

              {/* Company or university — displayed in green */}
              <div className="tl-org">{entry.org}</div>

              {/* Bullet points describing what you did */}
              <div className="tl-pts">
                {entry.pts.map((pt, j) => (
                  <div key={j} className="tl-pt">{pt}</div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Three column aside — Awards, Certifications, Activities
          Pulled from ASIDE array in resume.js */}
      <div className="resume-aside-row p-anim">
        {ASIDE.map((block, i) => (
          <div key={i} className="aside-card">

            {/* Column label e.g. "AWARDS" */}
            <div className="aside-card-label">{block.label}</div>

            {/* List of items inside this column */}
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