import PersistentDrawerLeft from './components/PersistentDrawerLeft';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<PersistentDrawerLeft />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
