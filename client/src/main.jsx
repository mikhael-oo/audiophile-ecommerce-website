import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserProvider } from './contexts/UserContext'
import { CartContextProvider } from './contexts/CartContext'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <UserProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserProvider>
  </CartContextProvider>
  ,
)
