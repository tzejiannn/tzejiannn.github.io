// App.jsx — temporarily commenting out panels we haven't built yet.
// We'll uncomment them one by one as we create each file.

import { useState } from 'react'

import Sidebar from './components/Sidebar'
import Home from './components/panels/Home'

// These will be uncommented as we create each file
// import Projects from './components/panels/Projects'
// import Skills from './components/panels/Skills'
// import Resume from './components/panels/Resume'
// import Blog from './components/panels/Blog'
// import Contact from './components/panels/Contact'

// Only Home is active for now — others will be added back shortly
const PANELS = {
  home:     Home,
  projects: Home,   // temporary placeholder
  skills:   Home,   // temporary placeholder
  resume:   Home,   // temporary placeholder
  blog:     Home,   // temporary placeholder
  contact:  Home,   // temporary placeholder
}

export default function App() {
  const [active, setActive] = useState('home')
  const Panel = PANELS[active]

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar active={active} onChange={setActive} />
      <main id="main">
        <Panel onNavigate={setActive} />
      </main>
    </div>
  )
}