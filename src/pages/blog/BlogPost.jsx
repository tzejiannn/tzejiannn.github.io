// BlogPost.jsx
// Renders an individual blog post page.
// Reads the slug from the URL, finds the matching post in blog.js,
// and loads the matching .md file from src/data/blog/

import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import POSTS from '../../data/blog'

// Tell Vite to find all .md files in src/data/blog/ at build time
const MD_FILES = import.meta.glob('../../data/blog/*.md', { query: '?raw', import: 'default' })

export default function BlogPost() {
  const { slug } = useParams()

  // Find the matching post from blog.js
  const post = POSTS.find(p => p.slug === slug)

  // Holds the raw markdown text once loaded
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const path = `../../data/blog/${slug}.md`
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

  // If post not found in blog.js show a not found message
  if (!post) {
    return (
      <div style={{ padding: '4rem', color: 'var(--text-2)', fontFamily: 'var(--body)' }}>
        <p style={{ marginBottom: '1rem' }}>Post not found.</p>
        <Link to="/" style={{ color: 'var(--green)' }}>Go back home</Link>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '3rem 2rem 5rem', fontFamily: 'var(--body)', color: 'var(--text)' }}>

      {/* Back link */}
      <Link to="/" style={{ fontSize: '.78rem', color: 'var(--text-2)', display: 'inline-flex', alignItems: 'center', gap: '.35rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1px', textDecoration: 'none' }}>
        Back to portfolio
      </Link>

      {/* Post header */}
      <div style={{ marginBottom: '2rem' }}>

        {/* Tag and read time on one row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1rem' }}>
          <span className={`proj-type-badge ${post.tag}`}>{post.tagLabel}</span>
          <span style={{ fontSize: '.7rem', color: 'var(--text-3)' }}>{post.date}</span>
          <span style={{ fontSize: '.7rem', color: 'var(--text-3)' }}>{post.read} read</span>
        </div>

        {/* Post title */}
        <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, letterSpacing: '-.02em', lineHeight: 1.2, marginBottom: '.75rem' }}>
          {post.title}
        </h1>

        {/* Excerpt as subtitle */}
        <p style={{ fontSize: '.92rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
          {post.excerpt}
        </p>

      </div>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '2rem 0' }} />

      {/* Markdown content */}
      {loading ? (
        <p style={{ color: 'var(--text-3)', fontSize: '.85rem' }}>Loading...</p>
      ) : content ? (
        <div className="md-body">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      ) : (
        <p style={{ color: 'var(--text-2)', fontSize: '.88rem', lineHeight: 1.8 }}>
          No content yet — check back soon.
        </p>
      )}

    </div>
  )
}