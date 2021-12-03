
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from './pages/Categories';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import PersistentDrawerLeft from './components/drawer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        
        <Route path="/"  element={<PersistentDrawerLeft/>} />
        <Route path="/categories"  element={<Categories/>} />
        <Route path="/Products"  element={<Products/>} />
        <Route path="/dashboard"  element={<Dashboard/>} />
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
