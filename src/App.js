import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Categories from './components/pages/Categories';
import Dashboard from './components/pages/Dashboard';
import ProductsPage from './components/ProductsPage';
import Drawer from './components/mui/Drawer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsPage/>}/>
          <Route path="/drawer" element={<Drawer/>}/>
          <Route path="/Categories" element={<Categories/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
