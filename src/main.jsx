// This is the entry point of your React app.
// React mounts your entire app into the <div id="root"> in index.html.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Your global CSS styles
import './index.css'

// Your root App component
import App from './App.jsx'

// Mount the app into the #root div in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)