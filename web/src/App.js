import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Products from './pages/Products';
import Drawer from './pages/Drawer'
import React from 'react'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="Drawer" element={<Drawer/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="Categories" element={<Categories/>}/>
        <Route path="Products" element={<Products/>}/>
       </Routes>
    </BrowserRouter>
    
  )
}

export default App
