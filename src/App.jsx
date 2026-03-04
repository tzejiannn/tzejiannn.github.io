// App.jsx
// The root component. Controls which panel is visible
// and connects the sidebar navigation to the panel display.

import { useState } from 'react'

// Layout components
import Sidebar from './components/Sidebar'

// All six panel components
import Home     from './components/panels/Home'
import Projects from './components/panels/Projects'
import Skills   from './components/panels/Skills'
import Resume   from './components/panels/Resume'
import Blog     from './components/panels/Blog'
import Contact  from './components/panels/Contact'

// Maps each nav ID to its panel component.
// When active changes, React renders the matching component.
const PANELS = {
  home:     Home,
  projects: Projects,
  skills:   Skills,
  resume:   Resume,
  blog:     Blog,
  contact:  Contact,
}

export default function App() {

  // Tracks which panel is currently showing.
  // Starts on 'home' when the page first loads.
  const [active, setActive] = useState('home')

  // Look up the component for the current active panel
  const Panel = PANELS[active]

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>

      {/* Sidebar gets the active panel name and a function to change it */}
      <Sidebar active={active} onChange={setActive} />

      {/* Main area renders whichever panel is currently active */}
      <main id="main">
        <Panel onNavigate={setActive} />
      </main>

    </div>
  )
}