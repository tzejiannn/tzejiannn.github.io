import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import POSTS from '../../data/blog'

function formatNum(i) {
  return String(i + 1).padStart(2, '0')
}

export default function Blog() {
  const [selected, setSelected] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(null)
  const navigate = useNavigate()

  const active = POSTS[selected]

  function handleMobileToggle(i) {
    setMobileOpen(prev => prev === i ? null : i)
  }

  return (
    <section className="panel active" id="panel-blog">
      <h2 className="sec-title p-anim" style={{ marginBottom: '1.25rem' }}>Blog</h2>

      {/* ── Desktop: File Explorer ── */}
      <div className="proj-panel-layout p-anim">
        <div className="proj-explorer">

          {/* Left: Post list */}
          <div className="proj-folders">
            <div className="proj-folder-list">
              {POSTS.map((post, i) => (
                <button
                  key={i}
                  className={`proj-folder${selected === i ? ' active' : ''}`}
                  onClick={() => setSelected(i)}
                >
                  <div className="folder-body">
                    <span className="folder-num">{formatNum(i)}</span>
                    <div className="folder-info">
                      <span className="folder-name">{post.title}</span>
                      <span className="folder-type">{post.tagLabel}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Preview pane */}
          <div className="proj-preview">
            {active && (
              <div className="proj-preview-inner" key={selected}>
                <div className="preview-top">
                  <span className={`proj-type-badge ${active.tag}`}>{active.tagLabel}</span>
                  <span className="preview-year">{active.date} · {active.read} read</span>
                </div>
                <h3 className="preview-title">{active.title}</h3>
                <p className="preview-tagline">{active.excerpt}</p>
                <div className="preview-actions">
                  <button
                    className="p-link primary"
                    onClick={() => navigate(`/blog/${active.slug}`)}
                  >
                    Read post
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Avatar column — reserved */}
        <div className="proj-avatar-col" />
      </div>

      {/* ── Mobile: Folder accordion ── */}
      <div className="proj-mobile-list p-anim">
        {POSTS.map((post, i) => (
          <div
            key={i}
            className={`proj-mob-folder${mobileOpen === i ? ' open' : ''}`}
          >
            <button className="proj-mob-header" onClick={() => handleMobileToggle(i)}>
              <div className="folder-header-row">
                <span className="folder-num">{formatNum(i)}</span>
                <div className="folder-info">
                  <span className="folder-name">{post.title}</span>
                  <span className="folder-type">{post.tagLabel}</span>
                </div>
                <span className="proj-mob-toggle">{mobileOpen === i ? '−' : '+'}</span>
              </div>
            </button>
            <div className="proj-mob-body">
              <div className="proj-mob-inner">
                <div className="preview-top">
                  <span className={`proj-type-badge ${post.tag}`}>{post.tagLabel}</span>
                  <span className="preview-year">{post.date} · {post.read} read</span>
                </div>
                <p className="preview-desc" style={{ marginBottom: 0 }}>{post.excerpt}</p>
                <div className="preview-actions">
                  <button
                    className="p-link primary"
                    onClick={() => navigate(`/blog/${post.slug}`)}
                  >
                    Read post
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
