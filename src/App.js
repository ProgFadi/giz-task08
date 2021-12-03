import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Drawer from './pages/Drawer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Drawer/>}/>
      <Route path="/Products" element={<Products/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Categories" element={<Categories/>}/>
    </Routes>
    
  );
}

export default App;
