import Master from './components/Master';
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard'
import Home from './pages/Home';
import Products from './pages/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master ><Home title="Home" /></Master>} />
        <Route path="/dashboard" element={<Master><Dashboard /></Master>} />
        <Route path="/categories" element={<Master><Categories /></Master>} />
        <Route path="/products" element={<Master><Products /></Master>} />
        <Route path="*" element={<Master><Home /></Master>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
