import Drawer from './components/Drawer';
import Categories from './components/Categories';
import Dashboard from './components/Dashboard'
import Home from './components/Home';
import ProductsPage from './components/products/ProductsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Drawer ><Home title="Home" /></Drawer>} />
        <Route path="/dashboard" element={<Drawer><Dashboard /></Drawer>} />
        <Route path="/categories" element={<Drawer><Categories /></Drawer>} />
        <Route path="/products" element={<Drawer><ProductsPage /></Drawer>} />
        <Route path="*" element={<Drawer><Home /></Drawer>} />

{/* <Route path="/products" element={<ProductsPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
