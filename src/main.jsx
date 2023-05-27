import React from 'react'
import ReactDOM from 'react-dom/client'
import DataProvider from './components/Context/DataContext'
import Home from './components/Home/home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </DataProvider>
)
