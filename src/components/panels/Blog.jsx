import POSTS from '../../data/blog'
import { useNavigate } from 'react-router-dom'

export default function Blog() {
  const navigate = useNavigate()

  return (
    <section className="panel active" id="panel-blog">

      <h2 className="sec-title p-anim">Blog</h2>

      <p className="lead p-anim" style={{ marginBottom: '2rem' }}>
        Writing to clarify thinking. Occasionally useful to others.
      </p>

      <div className="blog-list p-anim">
        {POSTS.map((post, i) => {
          return (
            <div
              key={i}
              className="blog-card"
              onClick={() => navigate(`/blog/${post.slug}`)}
              style={{ cursor: 'pointer' }}
            >
              <span className={`blog-card-tag proj-type-badge ${post.tag}`}>
                {post.tagLabel}
              </span>
              <div className="blog-card-body">
                <div className="blog-card-title">{post.title}</div>
                <div className="blog-card-excerpt">{post.excerpt}</div>
              </div>
              <div>
                <div className="blog-card-date">{post.date}</div>
                <div className="blog-card-read">{post.read} read</div>
                <span className="blog-arrow">→</span>
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}