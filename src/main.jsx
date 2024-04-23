import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Afp_primaProvider } from './components/context/Afp_primaProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Afp_primaProvider>
    <App />
    </Afp_primaProvider>
  </React.StrictMode>,
)
