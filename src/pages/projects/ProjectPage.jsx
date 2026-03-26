import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import PROJECTS from '../../data/projects'

const MD_FILES = import.meta.glob('../../data/projects/*.md', { query: '?raw', import: 'default' })

export default function ProjectPage() {
  const { slug } = useParams()
  const project = PROJECTS.find(p => p.slug === slug)
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const path = `../../data/projects/${slug}.md`
    const loader = MD_FILES[path]
    if (loader) {
      loader().then(text => {
        setContent(text)
        setLoading(false)
      })
    } else {
      setLoading(false)
    }
  }, [slug])

  if (!project) {
    return (
      <div className="page-enter" style={{ padding: '4rem', color: 'var(--text-2)', fontFamily: 'var(--body)' }}>
        <p style={{ marginBottom: '1rem' }}>Page still under construction.</p>
        <Link to="/" style={{ color: 'var(--green)' }}>Go back home</Link>
      </div>
    )
  }

  return (
    <div
      className="page-enter"
      style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 4rem 5rem', fontFamily: 'var(--body)', color: 'var(--text)' }}
    >

      {/* Back link */}
      <Link to="/" style={{ fontSize: '.78rem', color: 'var(--text-2)', display: 'inline-flex', alignItems: 'center', gap: '.35rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1px', textDecoration: 'none' }}>
        Back to Projects
      </Link>

      {/* Badge and title */}
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

      {/* Metrics */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ fontSize: '.65rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '.75rem' }}>
          Results
        </div>
        <div className="proj-metrics">
          {project.metrics.map(m => (
            <span key={m} className="p-metric">{m}</span>
          ))}
        </div>
      </div>

      {/* Stack */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '.65rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '.75rem' }}>
          Stack
        </div>
        <div className="proj-stack">
          {project.stack.map(t => (
            <span key={t} className="p-tag">{t}</span>
          ))}
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '2rem 0' }} />

      {/* Markdown content */}
      {loading ? (
        <p style={{ color: 'var(--text-3)', fontSize: '.85rem' }}>Loading...</p>
      ) : content ? (
        <div className="md-body">
          <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex]}
          >
            {content}
          </ReactMarkdown>
        </div>
      ) : (
        <p style={{ color: 'var(--text-2)', fontSize: '.88rem', lineHeight: 1.8 }}>
          {project.desc}
        </p>
      )}

      <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '2.5rem 0' }} />

      {/* Links */}
      <div style={{ display: 'flex', gap: '.75rem' }}>
        {project.gh && (
          <a href={project.gh} target="_blank" rel="noreferrer" className="p-link primary">
            View on GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="p-link">
            Live demo
          </a>
        )}
        {project.report && (
          <a href={project.report} target="_blank" rel="noreferrer" className="p-link">
            View Report
          </a>
        )}
      </div>

    </div>
  )
}