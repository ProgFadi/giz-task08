import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/ProductPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Category" element={<Category />} />
      <Route path="/Product" element={<Product />} />
    </Routes>
  );
};

export default App;
