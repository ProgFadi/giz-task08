import PersistentDrawerLeft from './components/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Products from './pages/Products';
import { useState } from 'react';

function App() {
  const initialProducts = [
    {
      name: 'UltraBoost 21',
      brand: 'Adidas',
      price: 100,
    },
    {
      name: 'Capri Onyx',
      brand: 'OLIVER CABELL',
      price: 150,
    },
    {
      name: 'Air Force 1',
      brand: 'NIKE',
      price: 80,
    },
    {
      name: '	Adidas Originals',
      brand: 'Adidas',
      price: 200,
    },
  ];
  const [products, setProducts] = useState(initialProducts);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PersistentDrawerLeft />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route
            path="products"
            element={
              <Products
                products={filteredProducts}
                searchValue={searchValue}
                handleSearch={handleSearch}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
