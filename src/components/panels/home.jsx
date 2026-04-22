import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import PROJECTS from '../../data/projects'

const carouselProjects = PROJECTS

export default function Home({ onNavigate }) {
  const navigate = useNavigate()

  /* ── Avatar Animation State ── */
  const avatarFrames = [
    { src: '/avatar/type1.png', duration: 150 },
    { src: '/avatar/type2.png', duration: 150 },
    { src: '/avatar/type1.png', duration: 150 },
    { src: '/avatar/type2.png', duration: 150 },
    { src: '/avatar/type1.png', duration: 150 },
    { src: '/avatar/type2.png', duration: 150 },
    { src: '/avatar/type1.png', duration: 150 },
    { src: '/avatar/type2.png', duration: 150 },
    { src: '/avatar/type1.png', duration: 150 },
    { src: '/avatar/type2.png', duration: 150 },
    { src: '/avatar/type1.png', duration: 150 },
    { src: '/avatar/type2.png', duration: 150 },
    { src: '/avatar/type1.png', duration: 150 },
    { src: '/avatar/type2.png', duration: 150 },
    { src: '/avatar/type1.png', duration: 150 },
    { src: '/avatar/type2.png', duration: 150 },
    { src: '/avatar/type1.png', duration: 150 },
    { src: '/avatar/type2.png', duration: 150 },
    { src: '/avatar/type3.png', duration: 1800 },
  ]
  const [frameIndex, setFrameIndex] = useState(0)

  useEffect(() => {
    const { duration } = avatarFrames[frameIndex]
    const t = setTimeout(() => {
      setFrameIndex(prev => (prev + 1) % avatarFrames.length)
    }, duration)
    return () => clearTimeout(t)
  }, [frameIndex])

  /* ── Carousel state ── */
  const [activeSlide, setActiveSlide] = useState(0)
  const autoplayRef  = useRef(null)
  const trackRef     = useRef(null)

  const goToSlide = useCallback((idx) => {
    setActiveSlide(idx)
  }, [])

  const nextSlide = useCallback(() => {
    setActiveSlide(prev => (prev + 1) % carouselProjects.length)
  }, [])

  const prevSlide = useCallback(() => {
    setActiveSlide(prev => (prev - 1 + carouselProjects.length) % carouselProjects.length)
  }, [])

  // Autoplay logic
  useEffect(() => {
    autoplayRef.current = setInterval(nextSlide, 4500)
    return () => clearInterval(autoplayRef.current)
  }, [nextSlide])

  const pauseAutoplay = () => clearInterval(autoplayRef.current)
  const resumeAutoplay = () => {
    clearInterval(autoplayRef.current)
    autoplayRef.current = setInterval(nextSlide, 4500)
  }

  return (
    <section className="panel active" id="panel-home">

      {/* ── Hero ── */}
      <div className="home-hero">

        {/* Left — name, bio, CTAs */}
        <div className="hero-left p-anim">
          <p className="hero-eyebrow">
            NUS · Data Science &amp; Analytics · Singapore
          </p>

          <h1 className="hero-name">
            Hi, I'm Joel.
          </h1>

          <p className="hero-desc">
            Final-year Data Science undergrad at NUS, minor in Quantitative Finance, graduating Dec 2026. <br />
            My interests lie in building ML pipelines that replace manual workflows, predictive modelling, anomaly detection, and applied AI for real-world operations.
          </p>

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

        {/* Right — Animated avatar illustration */}
        <div className="hero-right p-anim">
          <img
            src={avatarFrames[frameIndex].src}
            alt="Joel working at his desk"
            className="hero-avatar"
            draggable="false"
          />
        </div>

      </div>

      {/* ── Selected Work — Carousel ── */}
      <div className="carousel-section p-anim">
        <div className="carousel-header">
          <p className="hero-recent-label">some of my work</p>
          <div className="carousel-nav">
            <button className="carousel-arrow" onClick={prevSlide} aria-label="Previous project">←</button>
            <span className="carousel-counter">
              {String(activeSlide + 1).padStart(2, '0')} / {String(carouselProjects.length).padStart(2, '0')}
            </span>
            <button className="carousel-arrow" onClick={nextSlide} aria-label="Next project">→</button>
          </div>
          <button
            className="hero-see-all"
            onClick={() => onNavigate('projects')}
          >
            All projects →
          </button>
        </div>

        <div
          className="carousel-track-wrapper"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          <div
            className="carousel-track"
            ref={trackRef}
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {carouselProjects.map((p, i) => (
              <button
                key={p.num}
                className={`carousel-slide ${i === activeSlide ? 'active' : ''}`}
                onClick={() => p.slug ? navigate(`/projects/${p.slug}`) : onNavigate('projects')}
              >
                <div
                  className="carousel-slide-bg"
                  style={p.cover ? { backgroundImage: `url(${p.cover})` } : undefined}
                />
                <div className="carousel-slide-overlay" />
                <div className="carousel-slide-content">
                  <span className="carousel-slide-num">{p.num}</span>
                  <div className="carousel-slide-info">
                    <span className="carousel-slide-badge">{p.badgeLabel}</span>
                    <h3 className="carousel-slide-name">{p.name}</h3>
                    <p className="carousel-slide-tagline">{p.tagline}</p>
                  </div>
                  <span className="carousel-slide-year">{p.year}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="carousel-dots">
          {carouselProjects.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === activeSlide ? 'active' : ''}`}
              onClick={() => goToSlide(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}