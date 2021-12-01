import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContainer from './components/MainContainer'
import Dashboard from './components/Dashboard';
import Categories from './components/categories';
import Homepage from './components/homepage';
import Products from './components/products';
function App() {
  return (
    <div className="App">
      <MainContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
 