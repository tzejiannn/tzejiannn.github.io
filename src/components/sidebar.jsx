// Sidebar.jsx
// The fixed left column showing your name, nav links, and social links.
// It receives two props:
//   - active: the current panel name e.g. 'home'
//   - onChange: function to call when user clicks a nav button

import { useRef, useEffect } from 'react'

// The list of navigation items.
// 'id' must match the keys in PANELS inside App.jsx
const NAV_ITEMS = [
  { id: 'home',     label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume',   label: 'Resume' },
  { id: 'blog',     label: 'Blog' },
  { id: 'contact',  label: 'Contact' },
]

export default function Sidebar({ active, onChange }) {

  // pillRef points to the green sliding pill element
  const pillRef = useRef(null)

  // btnRefs stores a reference to each nav button element
  // so we can measure their position on screen
  const btnRefs = useRef({})

  // Every time 'active' changes, move the pill to sit
  // behind the newly active button
  useEffect(() => {
    const btn  = btnRefs.current[active]
    const wrap = btn?.closest('.sb-nav-wrap')
    if (!btn || !wrap || !pillRef.current) return

    // Calculate how far down the button is inside the nav wrap
    const top = btn.getBoundingClientRect().top
               - wrap.getBoundingClientRect().top

    // Move the pill to that position
    // The CSS transition on .nav-pill makes it animate smoothly
    pillRef.current.style.top = top + 'px'
  }, [active])

  return (
    <aside id="sidebar">

      {/* ── Top: avatar, name, role ── */}
      <div className="sb-identity">

        {/* TODO: Replace with your real name */}
        <div className="sb-name">Joel Ang Tze Jian</div>

        {/* TODO: Replace with your real role and location */}
        <div className="sb-role">Data Scientist · Singapore</div>

      </div>

      {/* ── Middle: navigation buttons ── */}
      <div className="sb-nav-wrap">

        {/* The sliding pill — its top position is set by useEffect above */}
        <div className="nav-pill" ref={pillRef} />

        {/* Render one button per nav item */}
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}

            // Store a ref to this button so we can measure its position
            ref={el => btnRefs.current[item.id] = el}

            // Add 'active' class when this item is the current panel
            className={`nav-btn ${active === item.id ? 'active' : ''}`}

            // Tell App.jsx to switch to this panel
            onClick={() => onChange(item.id)}
          >
            {item.label}

            {/* Green dot — only visible on the active item via CSS */}
            <span className="nb-dot" />
          </button>
        ))}

      </div>

      {/* ── Bottom: availability + social links ── */}
      <div className="sb-footer">

        {/* Pulsing green dot with "open to work" text */}
        <div className="sb-avail">
          <div className="avail-dot" />
          Open to Opportunities!
        </div>
      </div>

    </aside>
  )
}