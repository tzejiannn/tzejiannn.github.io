// Skills.jsx
// Shows your technical skills as a 2x2 grid of cards with animated
// progress bars, plus a badge cloud of extra technologies below.
// Data is pulled from src/data/skills.js

import { useEffect, useRef } from 'react'
import { SKILL_GROUPS, BADGES } from '../../data/skills'

export default function Skills() {

  // barsAnimated tracks whether we've already triggered the bar
  // animation so it doesn't restart every time you revisit the panel
  const barsAnimated = useRef(false)

  useEffect(() => {
    // If bars have already animated, do nothing
    if (barsAnimated.current) return

    // Small delay so the panel has fully rendered before animating
    const timer = setTimeout(() => {
      // Find every skill bar fill element and set its width
      // to the data-v value — CSS transition does the animation
      document.querySelectorAll('.sk-fill').forEach((el, i) => {
        setTimeout(() => {
          el.style.width = el.dataset.v + '%'
        }, i * 60) // each bar starts 60ms after the previous one
      })
      barsAnimated.current = true
    }, 150)

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="panel active" id="panel-skills">

      {/* Panel heading */}
      <div className="section-eyebrow p-anim">Technical</div>
      <h2 className="sec-title p-anim">Skills</h2>

      {/* 2x2 grid of skill category cards
          Each card shows a category name, icon, and proficiency bars */}
      <div className="skills-grid p-anim">
        {SKILL_GROUPS.map((group, groupIndex) => (
          <div
            key={group.name}
            className="skill-card"
            // Stagger each card's entrance animation
            style={{ animationDelay: `${groupIndex * 0.07}s` }}
          >

            {/* Card header — category name and emoji */}
            <div className="skill-card-header">
              <span className="skill-cat-name">{group.name}</span>
              <span className="skill-cat-icon">{group.icon}</span>
            </div>

            {/* Skill bars — one per skill in this category */}
            <div className="skill-rows">
              {group.skills.map(skill => (
                <div key={skill.n} className="sk-row">

                  {/* Skill name on left, percentage on right */}
                  <div className="sk-top">
                    <span className="sk-name">{skill.n}</span>
                    <span className="sk-pct">{skill.v}%</span>
                  </div>

                  {/* The grey track with the animated green fill inside
                      data-v stores the target width so useEffect can read it */}
                  <div className="sk-track">
                    <div
                      className="sk-fill"
                      data-v={skill.v}
                    />
                  </div>

                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Badge cloud — technologies you've worked with
          but aren't listed as main skills */}
      <div className="badge-cloud p-anim">
        <div className="badge-cloud-label">Also worked with</div>
        <div className="badge-cloud-chips">
          {BADGES.map(badge => (
            <span key={badge} className="b-chip">{badge}</span>
          ))}
        </div>
      </div>

    </section>
  )
}