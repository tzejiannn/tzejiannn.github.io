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
  const navItems = ['home', 'projects', 'resume', 'blog', 'contact'];

  return (
    <div className="layout-shell">
      {/* Sidebar remains for mobile only */}
      <Sidebar
        active={active}
        onChange={setActive}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {sidebarOpen && (
        <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="layout-body">
        <header className="top-bar">
          {/* Brand - Left */}
          <div className="top-bar-left">
            <button
              className="hamburger-btn"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open navigation"
            >
              <span /><span /><span />
            </button>
            <span className="top-bar-brand" onClick={() => setActive('home')}>
              Joel's Workspace
            </span>
          </div>

          {/* Inline Nav - Center (Hidden on Mobile) */}
          <nav className="top-bar-nav">
            {navItems.map((item) => (
              <button
                key={item}
                className={`top-nav-link ${active === item ? 'active' : ''}`}
                onClick={() => setActive(item)}
              >
                {item}
                {active === item && <span className="nav-dot" />}
              </button>
            ))}
          </nav>

          {/* Status - Right */}
          <div className="top-bar-status">
            <span className="status-indicator" />
            Open to Opportunities!
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
      {/* ... keeping your other routes (ProjectPage/BlogPost) the same ... */}
      <Route path="/projects/:slug" element={
          <Layout active={active} setActive={handleNav} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
            <ProjectPage />
          </Layout>
      } />
    </Routes>
  )
}