// Home.jsx
// The first panel users see when they land on your portfolio.
// Contains your intro tags, heading with cycling words, bio, CTA buttons,
// and stats strip.

import { useState, useEffect } from 'react'

// TODO: update this list with words relevant to your own career
const CYCLING_WORDS = [
  'Data Scientist.',
  'ML Engineer.',
  'Problem Solver.',
  'Computer Vision Enthusiast.',
  'Student Athlete',
  'Data Storyteller.',
]

export default function Home({ onNavigate }) {

  // wordIndex tracks which word we are currently showing
  const [wordIndex, setWordIndex] = useState(0)

  // visible controls whether the word is faded in or faded out
  // We set it to false briefly to trigger the fade-out,
  // swap the word, then set it back to true to fade back in
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Every 2.5 seconds, cycle to the next word
    const interval = setInterval(() => {

      // Step 1 — fade the current word out
      setVisible(false)

      // Step 2 — after 400ms (long enough for fade-out to finish),
      // swap to the next word and fade back in
      setTimeout(() => {
        setWordIndex(prev => (prev + 1) % CYCLING_WORDS.length)
        setVisible(true)
      }, 400)

    }, 2500)

    // Cleanup — stop the interval if the component unmounts
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="panel active" id="panel-home">

      {/* Hero area */}
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

        {/* Main heading with cycling word */}
        <h1 className="page-title">
          {/* TODO: replace Joel with your real name */}
          Hi, I'm Joel.<br />
          <em>
            {/* Static prefix */}
            {' '}

            {/* The cycling word — className swaps between visible and hidden
                which triggers the CSS fade transition */}
            <span className={`cycle-word ${visible ? 'visible' : 'hidden'}`}>
              {CYCLING_WORDS[wordIndex]}
            </span>
          </em>
        </h1>

        {/* Bio paragraph
            TODO: update with your real bio */}
        <p className="hero-desc">
          Final-year Data Science undergraduate at{' '}
          <strong>NUS</strong>, graduating May 2026.
          I build ML systems that go beyond the notebook — from messy raw
          data to deployed, explainable models. Most interested in NLP,
          model interpretability, and closing the gap between research
          and production.
        </p>

        {/* CTA buttons */}
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

      {/* Stats strip
          TODO: replace with your real numbers */}
      <div className="hero-stats p-anim">
        <div className="stat-block">
          <div className="stat-val">8+</div>
          <div className="stat-lbl">Projects</div>
        </div>
        <div className="stat-block">
          <div className="stat-val">4.3</div>
          <div className="stat-lbl">GPA / 5.0</div>
        </div>
        <div className="stat-block">
          <div className="stat-val">3 yr</div>
          <div className="stat-lbl">Experience</div>
        </div>
        <div className="stat-block">
          <div className="stat-val">SG</div>
          <div className="stat-lbl">Based in</div>
        </div>
      </div>

    </section>
  )
}