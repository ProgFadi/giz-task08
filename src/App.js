import "./App.css";
import PersistentDrawerLeft from "./PagesComponents/PersistentDrawerLeft";
import Products from "./PagesComponents/ProductsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PersistentDrawerLeft />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
