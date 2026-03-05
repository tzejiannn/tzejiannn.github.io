import { useState, useEffect } from 'react'

const CYCLING_WORDS = [
  'Data Scientist.',
  'Quantitative Finance.',
  'ML Engineer.',
  'Problem Solver.',
  'Computer Vision Dev.',
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

        {/* Main heading with cycling word */}
        <h1 className="page-title">
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
          Final-year <strong>Data Science & Analytics</strong> undergraduate
          at NUS with a Minor in Quantitative Finance, graduating Dec 2026.
          Currently interning at <strong>FreeWheel Comcast</strong> building
          APAC data pipelines and dashboards. Passionate about ML, computer vision, and
          applying data science to financial markets.
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
      

    </section>
  )
}