import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Sidebar     from './components/Sidebar'
import Home        from './components/panels/home'
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

function Layout({ active, setActive, sidebarOpen, setSidebarOpen, children }) {
  return (
    <div className="layout-shell">

      {/* Popout sidebar — slides in from left */}
      <Sidebar
        active={active}
        onChange={setActive}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Backdrop — click to close sidebar */}
      {sidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main layout body — fills full width */}
      <div className="layout-body">

        {/* Persistent top bar */}
        <header className="top-bar">
          <button
            className="hamburger-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation"
          >
            <span />
            <span />
            <span />
          </button>

          <span className="top-bar-brand">Joel's Workspace</span>

          <div className="top-bar-status">
            Open to Opportunities
          </div>
        </header>

        <main id="main">
          {children}
        </main>

      </div>
    </div>
  )
}

export default function App() {
  const [active, setActive]           = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  function handleNav(id) {
    setActive(id)
    setSidebarOpen(false)
    navigate('/')
  }

  const Panel = PANELS[active]

  return (
    <Routes>

      <Route
        path="/"
        element={
          <Layout
            active={active}
            setActive={handleNav}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          >
            <Panel onNavigate={handleNav} />
          </Layout>
        }
      />

      <Route
        path="/projects/:slug"
        element={
          <Layout
            active={active}
            setActive={handleNav}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          >
            <div style={{ height: '100%', overflowY: 'auto', background: 'var(--bg)' }}>
              <ProjectPage />
            </div>
          </Layout>
        }
      />

      <Route
        path="/blog/:slug"
        element={
          <Layout
            active={active}
            setActive={handleNav}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          >
            <div style={{ height: '100%', overflowY: 'auto', background: 'var(--bg)' }}>
              <BlogPost />
            </div>
          </Layout>
        }
      />

    </Routes>
  )
}
