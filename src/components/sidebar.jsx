// Sidebar.jsx
// Popout overlay sidebar — slides in from the left when opened.
// Props:
//   active   — current panel id
//   onChange — called with panel id when a nav button is clicked
//   isOpen   — whether the sidebar is visible
//   onClose  — called when user clicks the close button

import { useRef, useEffect } from 'react'

const NAV_ITEMS = [
  { id: 'home',     label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume',   label: 'Resume' },
  { id: 'blog',     label: 'Blog' },
  { id: 'contact',  label: 'Contact' },
]

export default function Sidebar({ active, onChange, isOpen, onClose }) {

  const pillRef = useRef(null)
  const btnRefs = useRef({})

  // Move the sliding pill to sit behind the active nav button
  useEffect(() => {
    const btn  = btnRefs.current[active]
    const wrap = btn?.closest('.sb-nav-wrap')
    if (!btn || !wrap || !pillRef.current) return
    const top = btn.getBoundingClientRect().top
               - wrap.getBoundingClientRect().top
    pillRef.current.style.top = top + 'px'
  }, [active, isOpen])

  return (
    <aside id="sidebar" className={isOpen ? 'open' : ''}>

      {/* ── Top: name, role, close button ── */}
      <div className="sb-top-row">
        <div className="sb-identity">
          <div className="sb-name">Joel Ang Tze Jian</div>
          <div className="sb-role">Data Scientist · Singapore</div>
        </div>
        <button className="sb-close" onClick={onClose} aria-label="Close navigation">
          ✕
        </button>
      </div>

      {/* ── Middle: navigation ── */}
      <div className="sb-nav-wrap">
        <div className="nav-pill" ref={pillRef} />
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            ref={el => btnRefs.current[item.id] = el}
            className={`nav-btn ${active === item.id ? 'active' : ''}`}
            onClick={() => onChange(item.id)}
          >
            {item.label}
            <span className="nb-dot" />
          </button>
        ))}
      </div>

      {/* ── Bottom: availability ── */}
      <div className="sb-footer">
        <div className="sb-avail">
          <div className="avail-dot" />
          Open to Opportunities!
        </div>
      </div>

    </aside>
  )
}
