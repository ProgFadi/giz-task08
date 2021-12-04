import {Routes, Route} from 'react-router-dom'
import Products from './pages/Products.js';
import Dashboard from './pages/Dashboard.js';
import Categories from './pages/Categories.js';

function App() {
  return (
    <Routes>
      <Route path="/Products" element={<Products />}/>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/Categories" element={<Categories />}/>
    </Routes>
    
  );
}

export default App;
