import "./App.css";
import PersistentDrawerLeft from "./PagesComponents/PersistentDrawerLeft";
import Products from "./PagesComponents/Products";
import Dashboard from "./PagesComponents/Dashboard";
import Categories from "./PagesComponents/Categories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PersistentDrawerLeft />} />
        <Route path="products" element={<Products />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
