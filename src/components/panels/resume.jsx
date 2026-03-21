import { EXPERIENCE, EDUCATION, LEADERSHIP } from '../../data/resume'

function TimelineList({ entries }) {
  return (
    <div className="tl-list">
      {entries.map((entry, i) => (
        <div key={i} className="tl-row">
          <div className="tl-left">
            <div className="tl-period">{entry.period}</div>
            <div className={`tl-type-dot ${entry.type}`}>
              {entry.type === 'work' ? 'Work' :
               entry.type === 'edu' ? 'Education' : 'Leadership'}
            </div>
          </div>
          <div className="tl-right">
            <div className="tl-role">{entry.role}</div>
            <div className="tl-org" style={{
              color: entry.type === 'work' ? 'var(--green)' :
                     entry.type === 'edu' ? '#60a5fa' : '#fb923c'
            }}>
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

      <div className="resume-header-row p-anim">
        <div>
          <h2 className="sec-title">Resume</h2>
        </div>
        <a href="/resume.pdf" className="btn-outline">Download PDF</a>
      </div>

      {/* Experience */}
      <div className="resume-section p-anim">
        <div className="resume-section-label">
          <span className="resume-section-dot work" />
          Experience
        </div>
        <TimelineList entries={EXPERIENCE} />
      </div>

      {/* Education */}
      <div className="resume-section p-anim">
        <div className="resume-section-label">
          <span className="resume-section-dot edu" />
          Education
        </div>
        <TimelineList entries={EDUCATION} />
      </div>

      {/* Leadership & Activities */}
      <div className="resume-section p-anim">
        <div className="resume-section-label">
          <span className="resume-section-dot leadership" />
          Leadership & Activities
        </div>
        <TimelineList entries={LEADERSHIP} />
      </div>

    </section>
  )
}