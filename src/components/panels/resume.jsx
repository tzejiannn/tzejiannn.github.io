import { EXPERIENCE, EDUCATION, LEADERSHIP } from '../../data/resume'

function EntryList({ entries }) {
  return (
    <div className="resume-entries">
      {entries.map((entry, i) => (
        <div key={i} className="resume-entry">
          <div className="entry-role">{entry.role}</div>
          <div className="entry-meta">{entry.org} · {entry.period}</div>
          {entry.pts.length > 0 && (
            <ul className="entry-pts">
              {entry.pts.map((pt, j) => (
                <li key={j} className="entry-pt">{pt}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default function Resume() {
  return (
    <section className="panel active" id="panel-resume">

      <div className="resume-header-row p-anim">
        <h2 className="sec-title">Resume</h2>
        <a href="/resume.pdf" className="btn-outline">Download PDF</a>
      </div>

      <div className="resume-doc p-anim">

        <div className="resume-sections">

          <div className="resume-section">
            <h3 className="resume-sec-label">Experience</h3>
            <EntryList entries={EXPERIENCE} />
          </div>

          <div className="resume-section">
            <h3 className="resume-sec-label">Education</h3>
            <EntryList entries={EDUCATION} />
          </div>

          <div className="resume-section">
            <h3 className="resume-sec-label">Leadership</h3>
            <EntryList entries={LEADERSHIP} />
          </div>

        </div>

        {/* Avatar column — placeholder */}
        <div className="resume-avatar-col" />

      </div>

    </section>
  )
}
