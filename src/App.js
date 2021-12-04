import React from 'react';
import {BrowserRouter, Route, Routes as Router} from "react-router-dom";
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard'
import Categories from './components/pages/Categories';
import Products from './components/pages/Products';
function App() {
    return (
        <BrowserRouter>
            <Router>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/categories" element={<Categories/>}/>
                <Route path="/products" element={<Products/>}/>
            </Router>
        </BrowserRouter>
    );
}

export default App;