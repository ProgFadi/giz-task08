import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Dashboard from "./component/pages/Dashboard";
import About from "./component/pages/about";
import Product from "./component/pages/ProductPage/Product";
import Category from "./component/pages/Category";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </Router>
  );
}
export default App;
