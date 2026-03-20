import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Sidebar     from './components/Sidebar'
import Home        from './components/panels/Home'
import Projects    from './components/panels/Projects'
import Resume      from './components/panels/resume'
import Blog        from './components/panels/Blog'
import Contact     from './components/panels/Contact'
import ProjectPage from './pages/projects/ProjectPage'
import BlogPost    from './pages/blog/BlogPost'

const PANELS = {
  home:     Home,
  projects: Projects,
  resume:   Resume,
  blog:     Blog,
  contact:  Contact,
}

// This is the persistent layout — sidebar always visible on the left,
// content area on the right. All routes render inside this shell.
function Layout({ active, setActive, children }) {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar active={active} onChange={setActive} />
      <main id="main">
        {children}
      </main>
    </div>
  )
}

export default function App() {
  const [active, setActive] = useState('home')
  const navigate = useNavigate()

  // When sidebar nav is clicked — switch panel and go back to home route
  function handleNav(id) {
    setActive(id)
    navigate('/')
  }

  const Panel = PANELS[active]

  return (
    <Routes>

      {/* Main portfolio — sidebar + active panel */}
      <Route
        path="/"
        element={
          <Layout active={active} setActive={handleNav}>
            <Panel onNavigate={handleNav} />
          </Layout>
        }
      />

      {/* Individual project pages — sidebar stays visible */}
      <Route
        path="/projects/:slug"
        element={
          <Layout active={active} setActive={handleNav}>
            <div style={{
              height: '100vh',
              overflowY: 'auto',
              background: 'var(--navy)'
            }}>
              <ProjectPage />
            </div>
          </Layout>
        }
      />

      {/* Individual blog post pages — sidebar stays visible */}
      <Route
        path="/blog/:slug"
        element={
          <Layout active={active} setActive={handleNav}>
            <div style={{
              height: '100vh',
              overflowY: 'auto',
              background: 'var(--navy)'
            }}>
              <BlogPost />
            </div>
          </Layout>
        }
      />

    </Routes>
  )
}