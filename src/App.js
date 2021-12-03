import "./App.css";
import Main from "./components/Main";
import Dashboard from "./components/drawerComponent/Dashboard";
import Categories from "./components/drawerComponent/Categories";
import Products from "./components/drawerComponent/Products";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
