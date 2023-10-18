import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import { HigadoApp } from './HigadoApp'
import { ContextProvider } from './context/ContextProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
        <BrowserRouter>
            <HigadoApp />
        </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
)
