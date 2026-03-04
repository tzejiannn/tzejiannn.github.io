import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Sidebar    from './components/Sidebar'
import Home       from './components/panels/Home'
import Projects   from './components/panels/Projects'
import Skills     from './components/panels/Skills'
import Resume     from './components/panels/Resume'
import Blog       from './components/panels/Blog'
import Contact    from './components/panels/Contact'

// Individual project page template
import ProjectPage from './pages/projects/ProjectPage'

const PANELS = {
  home:     Home,
  projects: Projects,
  skills:   Skills,
  resume:   Resume,
  blog:     Blog,
  contact:  Contact,
}

export default function App() {
  const [active, setActive] = useState('home')
  const Panel = PANELS[active]

  return (
    <Routes>

      {/* Main portfolio layout — sidebar + panels */}
      <Route
        path="/"
        element={
          <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
            <Sidebar active={active} onChange={setActive} />
            <main id="main">
              <Panel onNavigate={setActive} />
            </main>
          </div>
        }
      />

      {/* Individual project pages — no sidebar, full width */}
      <Route
        path="/projects/:slug"
        element={
          <div style={{
            minHeight: '100vh',
            background: 'var(--navy)',
            overflowY: 'auto'
          }}>
            <ProjectPage />
          </div>
        }
      />

    </Routes>
  )
}