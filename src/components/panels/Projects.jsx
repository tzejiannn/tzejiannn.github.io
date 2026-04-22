import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PROJECTS from '../../data/projects'

export default function Projects() {
  const [selected, setSelected] = useState(PROJECTS[0].num)
  const [mobileOpen, setMobileOpen] = useState(null)
  const navigate = useNavigate()

  const active = PROJECTS.find(p => p.num === selected)

  function handleMobileToggle(num) {
    setMobileOpen(prev => prev === num ? null : num)
  }

  function renderActions(p) {
    return (
      <div className="preview-actions">
        {p.report ? (
          <a href={p.report} target="_blank" rel="noreferrer" className="p-link primary">
            View Report
          </a>
        ) : (
          <button
            className="p-link primary"
            onClick={e => { e.stopPropagation(); navigate(`/projects/${p.slug}`) }}
          >
            Read more
          </button>
        )}
        {p.gh && p.gh !== '#' && (
          <a href={p.gh} target="_blank" rel="noreferrer" className="p-link">
            GitHub
          </a>
        )}
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noreferrer" className="p-link">
            Live Demo
          </a>
        )}
      </div>
    )
  }

  return (
    <section className="panel active" id="panel-projects">
      <h2 className="sec-title p-anim" style={{ marginBottom: '1.25rem' }}>Projects</h2>

      {/* ── Desktop: two-col panel (explorer + avatar space) ── */}
      <div className="proj-panel-layout p-anim">

        {/* File explorer */}
        <div className="proj-explorer">

          {/* Left: Folder list */}
          <div className="proj-folders">
            <div className="proj-folder-list">
              {PROJECTS.map(p => (
                <button
                  key={p.num}
                  className={`proj-folder${selected === p.num ? ' active' : ''}`}
                  onClick={() => setSelected(p.num)}
                >
                  <div className="folder-body">
                    <span className="folder-num">{p.num}</span>
                    <div className="folder-info">
                      <span className="folder-name">{p.name}</span>
                      <span className="folder-type">{p.badgeLabel}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Preview pane */}
          <div className="proj-preview">
            {active && (
              <div className="proj-preview-inner" key={active.num}>
                <div className="preview-top">
                  <span className={`proj-type-badge ${active.badge}`}>{active.badgeLabel}</span>
                  <span className="preview-year">{active.year}</span>
                </div>
                <h3 className="preview-title">{active.name}</h3>
                <p className="preview-tagline">{active.tagline}</p>
                <p className="preview-desc">{active.desc}</p>
                <div className="preview-meta">
                  <div>
                    <div className="preview-label">Results</div>
                    <div className="preview-chips">
                      {active.metrics.map(m => (
                        <span key={m} className="p-metric">{m}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="preview-label">Stack</div>
                    <div className="preview-chips">
                      {active.stack.map(t => (
                        <span key={t} className="p-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {renderActions(active)}
              </div>
            )}
          </div>
        </div>

        {/* Avatar column — whitespace reserved, avatar goes here */}
        <div className="proj-avatar-col" />
      </div>

      {/* ── Mobile: Folder accordion ── */}
      <div className="proj-mobile-list p-anim">
        {PROJECTS.map(p => (
          <div
            key={p.num}
            className={`proj-mob-folder${mobileOpen === p.num ? ' open' : ''}`}
          >
            <button className="proj-mob-header" onClick={() => handleMobileToggle(p.num)}>
              <div className="folder-header-row">
                <span className="folder-num">{p.num}</span>
                <div className="folder-info">
                  <span className="folder-name">{p.name}</span>
                  <span className="folder-type">{p.badgeLabel}</span>
                </div>
                <span className="proj-mob-toggle">{mobileOpen === p.num ? '−' : '+'}</span>
              </div>
            </button>
            <div className="proj-mob-body">
              <div className="proj-mob-inner">
                <p className="preview-desc" style={{ marginBottom: 0 }}>{p.desc}</p>
                <div className="preview-meta" style={{ marginBottom: 0 }}>
                  <div>
                    <div className="preview-label">Results</div>
                    <div className="preview-chips">
                      {p.metrics.map(m => <span key={m} className="p-metric">{m}</span>)}
                    </div>
                  </div>
                  <div>
                    <div className="preview-label">Stack</div>
                    <div className="preview-chips">
                      {p.stack.map(t => <span key={t} className="p-tag">{t}</span>)}
                    </div>
                  </div>
                </div>
                {renderActions(p)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
