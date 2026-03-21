import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PROJECTS from '../../data/projects'

export default function Projects() {
  const [open, setOpen] = useState(null)
  const navigate = useNavigate()

  function toggle(num) {
    setOpen(open === num ? null : num)
  }

  return (
    <section className="panel active" id="panel-projects">

      <h2 className="sec-title p-anim">Projects</h2>

      <p className="lead p-anim" style={{ marginBottom: '2rem' }}>
        Projects I've had the pleasure of working on. 
        Click any project to read more.
      </p>

      <div className="projects-list p-anim">
        {PROJECTS.map(p => (
          <div
            key={p.num}
            className={`proj-row ${open === p.num ? 'open' : ''}`}
          >

            <div className="proj-header" onClick={() => toggle(p.num)}>
              <span className="proj-num">{p.num}</span>
              <div className="proj-info">
                <div className="proj-name">{p.name}</div>
                <div className="proj-tagline">{p.tagline}</div>
              </div>
              <div className="proj-right">
                <span className={`proj-type-badge ${p.badge}`}>
                  {p.badgeLabel}
                </span>
                <span className="proj-year">{p.year}</span>
                <div className="proj-toggle">+</div>
              </div>
            </div>

            <div className="proj-body">
              <div className="proj-body-inner">

                <p className="proj-desc">{p.desc}</p>

                <div className="proj-details">

                  <div>
                    <div style={{ fontSize: '.65rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '.5rem' }}>
                      Results
                    </div>
                    <div className="proj-metrics">
                      {p.metrics.map(m => (
                        <span key={m} className="p-metric">{m}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '.65rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '.5rem' }}>
                      Stack
                    </div>
                    <div className="proj-stack">
                      {p.stack.map(t => (
                        <span key={t} className="p-tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="proj-links">
                    <button
                      className="p-link primary"
                      onClick={(e) => {
                        e.stopPropagation()
                        navigate(`/projects/${p.slug}`)
                      }}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}