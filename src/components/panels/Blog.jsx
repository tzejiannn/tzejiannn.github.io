// Blog.jsx
// Shows your blog posts as clickable horizontal cards.
// Each card shows a category tag, title, excerpt, date, and read time.
// Data is pulled from src/data/blog.js

import POSTS from '../../data/blog'

export default function Blog() {
  return (
    <section className="panel active" id="panel-blog">

      {/* Panel heading */}
      <div className="section-eyebrow p-anim">Writing</div>
      <h2 className="sec-title p-anim">Blog</h2>

      {/* TODO: Update this sentence to describe your writing */}
      <p className="lead p-anim" style={{ marginBottom: '2rem' }}>
        Writing to clarify thinking. Occasionally useful to others.
      </p>

      {/* Blog post cards — one per entry in blog.js */}
      <div className="blog-list p-anim">
        {POSTS.map((post, i) => (

          {/* Clicking the card opens the post URL in a new tab */}
          <a
            key={i}
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className="blog-card"
          >

            {/* Left — category tag pill
                Reuses the same badge colour classes as the projects panel
                e.g. badge-ml, badge-nlp, badge-viz, badge-eng */}
            <span className={`blog-card-tag proj-type-badge ${post.tag}`}>
              {post.tagLabel}
            </span>

            {/* Middle — title and excerpt */}
            <div className="blog-card-body">
              <div className="blog-card-title">{post.title}</div>
              <div className="blog-card-excerpt">{post.excerpt}</div>
            </div>

            {/* Right — date, read time, arrow */}
            <div>
              <div className="blog-card-date">{post.date}</div>
              <div className="blog-card-read">{post.read} read</div>
              {/* Arrow shifts right on hover via CSS */}
              <span className="blog-arrow">{'→'}</span>
            </div>

          </a>
        ))}
      </div>

    </section>
  )
}