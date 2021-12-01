import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './Pages/Products_p'
import Dashboard from './Pages/Dashboard'
import Categories from './Pages/Categories'
import Item from './Pages/Cart'

const Routess = () => { 
    return(
        
        <Routes>
        <Route path="/"  element={<Products/>} />
        <Route path="/cart"  element={<Item/>} />
        <Route path="/categories"  element={<Categories/>} />
        <Route path="/dashboard"  element={<Dashboard/>} />
        </Routes>
        
    )


}
export default Routess