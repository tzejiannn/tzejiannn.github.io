// ProjectPage.jsx
// Renders an individual project page.
// Reads the slug from the URL, finds the matching project in projects.js,
// and loads the matching .md file from src/data/projects/

import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import PROJECTS from '../../data/projects'

// This line tells Vite to find all .md files in src/data/projects/
// at build time so they can be loaded dynamically at runtime
const MD_FILES = import.meta.glob('../../data/projects/*.md', { query: '?raw', import: 'default' })

export default function ProjectPage() {

  // Read the slug from the URL e.g. /projects/hdb-resale-price-predictor
  const { slug } = useParams()

  // Find the matching project object from projects.js
  const project = PROJECTS.find(p => p.slug === slug)

  // content holds the raw markdown text once it loads
  const [content, setContent] = useState('')

  // loading tracks whether the markdown file is still being fetched
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Build the path to the markdown file for this slug
    const path = `../../data/projects/${slug}.md`
    const loader = MD_FILES[path]

    if (loader) {
      // Load the markdown file and store its text in content
      loader().then(text => {
        setContent(text)
        setLoading(false)
      })
    } else {
      // No markdown file found for this slug
      setLoading(false)
    }
  }, [slug])

  // Show not found if the project doesn't exist in projects.js
  if (!project) {
    return (
      <div style={{ padding: '4rem', color: 'var(--text-2)', fontFamily: 'var(--body)' }}>
        <p style={{ marginBottom: '1rem' }}>Project not found.</p>
        <Link to="/" style={{ color: 'var(--green)' }}>Go back home</Link>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '3rem 2rem 5rem', fontFamily: 'var(--body)', color: 'var(--text)' }}>

      {/* Back button */}
      <Link to="/" style={{ fontSize: '.78rem', color: 'var(--text-2)', display: 'inline-flex', alignItems: 'center', gap: '.35rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1px', textDecoration: 'none' }}>
        Back to portfolio
      </Link>

      {/* Badge and title pulled from projects.js */}
      <div style={{ marginBottom: '2rem' }}>
        <span className={`proj-type-badge ${project.badge}`} style={{ marginBottom: '1rem', display: 'inline-block' }}>
          {project.badgeLabel}
        </span>
        <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, letterSpacing: '-.02em', lineHeight: 1.15, marginBottom: '.75rem' }}>
          {project.name}
        </h1>
        <p style={{ fontSize: '.92rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
          {project.tagline}
        </p>
      </div>

      {/* Metrics and stack pulled from projects.js */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
        <div>
          <div style={{ fontSize: '.65rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '.75rem' }}>Results</div>
          <div className="proj-metrics">
            {project.metrics.map(m => (
              <span key={m} className="p-metric">{m}</span>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: '.65rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '.75rem' }}>Stack</div>
          <div className="proj-stack">
            {project.stack.map(t => (
              <span key={t} className="p-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '2rem 0' }} />

      {/* Markdown content loaded from the .md file */}
      {loading ? (
        <p style={{ color: 'var(--text-3)', fontSize: '.85rem' }}>Loading...</p>
      ) : content ? (
        <div className="md-body">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      ) : (
        // Fallback if no .md file exists yet for this project
        <p style={{ color: 'var(--text-2)', fontSize: '.88rem', lineHeight: 1.8 }}>
          {project.desc}
        </p>
      )}

      <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '2.5rem 0' }} />

      {/* GitHub and demo links */}
      <div style={{ display: 'flex', gap: '.75rem' }}>
        {project.gh && (
          <a href={project.gh} target="_blank" rel="noreferrer" className="p-link primary">View on GitHub</a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="p-link">Live demo</a>
        )}
      </div>

    </div>
  )
}