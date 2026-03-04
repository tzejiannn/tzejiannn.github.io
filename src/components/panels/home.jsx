// Home.jsx
// The first panel users see when they land on your portfolio.
// Contains your intro tags, heading, bio, CTA buttons, and stats strip.
//
// Props:
//   onNavigate — function passed down from App.jsx
//                lets the CTA buttons switch to another panel

export default function Home({ onNavigate }) {
  return (
    <section className="panel active" id="panel-home">

      {/* ── Hero area ── */}
      <div className="home-hero p-anim">

        {/* Decorative green glow blob in the top right corner */}
        <div className="hero-glow" />

        {/* Keyword tags — TODO: update to reflect your actual focus areas */}
        <div className="hero-tags">
          <span className="hero-tag hi">Machine Learning</span>
          <span className="hero-tag hi">NLP</span>
          <span className="hero-tag">Data Engineering</span>
          <span className="hero-tag">MLOps</span>
          <span className="hero-tag">Python</span>
        </div>

        {/* Main heading — TODO: replace "Your Name" with your real name */}
        <h1 className="page-title">
          Hi, I'm Joel.<br />
          {/* The <em> tag uses the italic serif font */}
          <em>I build things with data.</em>
        </h1>

        {/* Bio paragraph
            TODO: Write 2-3 sentences about yourself.
            Keep it honest and specific — mention your university,
            graduation year, and what you're most interested in. */}
        <p className="hero-desc">
          Final Year Data Science and Analytics / Quantitative Finance Undergraduate at{' '}
          <strong>NUS</strong>.
          I build ML systems that go beyond the notebook — from messy raw
          data to deployed, explainable models. Most interested in NLP,
          model interpretability, and closing the gap between research
          and production.
        </p>

        {/* CTA buttons — clicking them switches panels via onNavigate */}
        <div className="hero-cta-row">
          <button
            className="btn-solid"
            onClick={() => onNavigate('projects')}
          >
            View my work →
          </button>
          <button
            className="btn-outline"
            onClick={() => onNavigate('contact')}
          >
            Get in touch
          </button>
        </div>

      </div>

      {/* ── Stats strip ──
          Four numbers shown in a row at the bottom of the hero.
          TODO: Replace these with your real stats. */}
      <div className="hero-stats p-anim">

        <div className="stat-block">
          {/* The large number */}
          <div className="stat-val">8+</div>
          {/* The label underneath */}
          <div className="stat-lbl">Projects</div>
        </div>

        <div className="stat-block">
          <div className="stat-val">4.3</div>
          <div className="stat-lbl">GPA / 5.0</div>
        </div>

        <div className="stat-block">
          <div className="stat-val">1 yr</div>
          <div className="stat-lbl">Experience</div>
        </div>

        <div className="stat-block">
          <div className="stat-val">Singapore</div>
          <div className="stat-lbl">Based in</div>
        </div>

      </div>

    </section>
  )
}