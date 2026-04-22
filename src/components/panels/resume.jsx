import { EXPERIENCE, EDUCATION, LEADERSHIP } from '../../data/resume'

function EntryList({ entries }) {
  return (
    <div className="resume-entries">
      {entries.map((entry, i) => (
        <div key={i} className="resume-entry">
          <div className="entry-period">{entry.period}</div>
          <div className="entry-role">{entry.role}</div>
          <div className="entry-org">{entry.org}</div>
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

      {/* Panel layout: bento left + avatar col right */}
      <div className="resume-panel-layout p-anim">

        <div className="resume-bento">

          {/* Experience — spans both rows, left column */}
          <div className="resume-cell resume-exp">
            <h3 className="resume-cell-title">Experience</h3>
            <EntryList entries={EXPERIENCE} />
          </div>

          {/* Education — top right */}
          <div className="resume-cell resume-edu">
            <h3 className="resume-cell-title">Education</h3>
            <EntryList entries={EDUCATION} />
          </div>

          {/* Leadership — bottom right */}
          <div className="resume-cell resume-lead">
            <h3 className="resume-cell-title">Leadership</h3>
            <EntryList entries={LEADERSHIP} />
          </div>

        </div>

        {/* Avatar column */}
        <div className="resume-avatar-col">
          <img src="/avatar/resume.png" alt="Joel" className="resume-avatar" draggable="false" />
        </div>
      </div>

    </section>
  )
}
