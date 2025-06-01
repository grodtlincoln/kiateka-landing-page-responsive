import './index.css'
import App from './App.tsx'
import React from 'react'
import ReactDom from 'react-dom/client'

ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
