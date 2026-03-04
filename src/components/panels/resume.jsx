import { TIMELINE, ASIDE } from '../../data/resume'

export default function Resume() {
  return (
    <section className="panel active" id="panel-resume">

      <div className="resume-header-row p-anim">
        <div>
          <div className="section-eyebrow">Background</div>
          <h2 className="sec-title">Resume</h2>
        </div>
        <a href="/resume.pdf" className="btn-outline">Download PDF</a>
      </div>

      <div className="tl-list p-anim">
        {TIMELINE.map((entry, i) => (
          <div key={i} className="tl-row">
            <div className="tl-left">
              <div className="tl-period">{entry.period}</div>
              <div className={`tl-type-dot ${entry.type}`}>
                {entry.type === 'work' ? 'Work' : 'Education'}
              </div>
            </div>
            <div className="tl-right">
              <div className="tl-role">{entry.role}</div>
              <div className="tl-org">{entry.org}</div>
              <div className="tl-pts">
                {entry.pts.map((pt, j) => (
                  <div key={j} className="tl-pt">{pt}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

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