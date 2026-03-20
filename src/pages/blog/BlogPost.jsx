import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import POSTS from '../../data/blog'

const MD_FILES = import.meta.glob('../../data/blog/*.md', { query: '?raw', import: 'default' })

export default function BlogPost() {
  const { slug } = useParams()
  const post = POSTS.find(p => p.slug === slug)
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

  if (!post) {
    return (
      <div className="page-enter" style={{ padding: '4rem', color: 'var(--text-2)', fontFamily: 'var(--body)' }}>
        <p style={{ marginBottom: '1rem' }}>Post not found.</p>
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
        Back to Blog
      </Link>

      {/* Post header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1rem' }}>
          <span className={`proj-type-badge ${post.tag}`}>{post.tagLabel}</span>
          <span style={{ fontSize: '.7rem', color: 'var(--text-3)' }}>{post.date}</span>
          <span style={{ fontSize: '.7rem', color: 'var(--text-3)' }}>{post.read} read</span>
        </div>
        <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, letterSpacing: '-.02em', lineHeight: 1.2, marginBottom: '.75rem' }}>
          {post.title}
        </h1>
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
          <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex]}
          >
            {content}
          </ReactMarkdown>
        </div>
      ) : (
        <p style={{ color: 'var(--text-2)', fontSize: '.88rem', lineHeight: 1.8 }}>
          No content yet — check back soon.
        </p>
      )}

    </div>
  )
}