import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Sidebar     from './components/sidebar'
import Home        from './components/panels/home'
import Projects    from './components/panels/Projects'
import Resume      from './components/panels/resume'
import Blog        from './components/panels/blog'
import Contact     from './components/panels/contact'
import ProjectPage from './pages/projects/ProjectPage'
import BlogPost    from './pages/blog/BlogPost'

const PANELS = {
  home:     Home,
  projects: Projects,
  resume:   Resume,
  blog:     Blog,
  contact:  Contact,
}

export default function App() {
  const [active, setActive] = useState('home')
  const Panel = PANELS[active]

  return (
    <Routes>

      {/* Main portfolio — sidebar + panels */}
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

      {/* Individual project pages */}
      <Route
        path="/projects/:slug"
        element={
          <div style={{ minHeight: '100vh', background: 'var(--navy)', overflowY: 'auto' }}>
            <ProjectPage />
          </div>
        }
      />

      {/* Individual blog post pages */}
      <Route
        path="/blog/:slug"
        element={
          <div style={{ minHeight: '100vh', background: 'var(--navy)', overflowY: 'auto' }}>
            <BlogPost />
          </div>
        }
      />

    </Routes>
  )
}