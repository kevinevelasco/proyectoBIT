import React from 'react'
import ReactDOM from 'react-dom/client'
import DataProvider from './components/Context/DataContext'
import Home from './components/Home/home'
import CartContent from './components/CartContent/CartContent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<CartContent />}/>
      </Routes>
    </BrowserRouter>
  </DataProvider>
)
