// Projects.jsx
// Shows all your projects as expandable rows.
// Clicking a row reveals the full description, metrics, stack, and links.
// Data is pulled from src/data/projects.js

import { useState } from 'react'
import PROJECTS from '../../data/projects'

export default function Projects() {

  // Tracks which project row is currently expanded.
  // Stores the project num e.g. '01', or null if all are closed.
  const [open, setOpen] = useState(null)

  // Toggle a row open or closed.
  // If the clicked row is already open, close it.
  // If it is closed, open it.
  function toggle(num) {
    setOpen(open === num ? null : num)
  }

  return (
    <section className="panel active" id="panel-projects">

      {/* Panel heading */}
      <div className="section-eyebrow p-anim">Work</div>
      <h2 className="sec-title p-anim">Projects</h2>

      {/* TODO: update this sentence to reflect your focus areas */}
      <p className="lead p-anim" style={{ marginBottom: '2rem' }}>
        ML, NLP, and visualisation projects — mostly using real
        Singapore datasets. Click any project to read more.
      </p>

      {/* Project rows — one per entry in projects.js */}
      <div className="projects-list p-anim">
        {PROJECTS.map(p => (
          <div
            key={p.num}
            className={`proj-row ${open === p.num ? 'open' : ''}`}
          >

            {/* Clickable header — toggles the drawer open and closed */}
            <div
              className="proj-header"
              onClick={() => toggle(p.num)}
            >

              {/* Project number e.g. 01 */}
              <span className="proj-num">{p.num}</span>

              {/* Project name and one line summary */}
              <div className="proj-info">
                <div className="proj-name">{p.name}</div>
                <div className="proj-tagline">{p.tagline}</div>
              </div>

              {/* Right side — badge, year, toggle button */}
              <div className="proj-right">
                <span className={`proj-type-badge ${p.badge}`}>
                  {p.badgeLabel}
                </span>
                <span className="proj-year">{p.year}</span>

                {/* + rotates to x when open via CSS transform */}
                <div className="proj-toggle">+</div>
              </div>

            </div>

            {/* Expandable drawer
                CSS handles the smooth height animation using
                max-height transition on .proj-row.open .proj-body */}
            <div className="proj-body">
              <div className="proj-body-inner">

                {/* Left column — full project description */}
                <p className="proj-desc">{p.desc}</p>

                {/* Right column — results, stack, links */}
                <div className="proj-details">

                  {/* Key results as green metric chips */}
                  <div>
                    <div style={{
                      fontSize: '.65rem',
                      fontWeight: 600,
                      letterSpacing: '.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-3)',
                      marginBottom: '.5rem'
                    }}>
                      Results
                    </div>
                    <div className="proj-metrics">
                      {p.metrics.map(m => (
                        <span key={m} className="p-metric">{m}</span>
                      ))}
                    </div>
                  </div>

                  {/* Technology stack tags */}
                  <div>
                    <div style={{
                      fontSize: '.65rem',
                      fontWeight: 600,
                      letterSpacing: '.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-3)',
                      marginBottom: '.5rem'
                    }}>
                      Stack
                    </div>
                    <div className="proj-stack">
                      {p.stack.map(t => (
                        <span key={t} className="p-tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub and live demo links
                      Only renders if the URL is not null in projects.js */}
                  <div className="proj-links">
                    {p.gh && (
                      <a
                        href={p.gh}
                        target="_blank"
                        rel="noreferrer"
                        className="p-link primary"
                      >
                        View on GitHub
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-link"
                      >
                        Live demo
                      </a>
                    )}
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