import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './src/Routes'
import './src/global.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser')
    .then(({ worker }) => {
      worker.start()
    })
    .then(() => {
      root.render(<App />)
    })
} else {
  root.render(<App />)
}
