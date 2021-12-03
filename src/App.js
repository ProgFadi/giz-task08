import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Catigories from './Pages/Categories'
import Products from './Pages/Products';
import Dashboard from './Pages/Dashboard';
import Drawer from './Pages/Drawer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Drawer/>}/>
          <Route path="/categories" element={<Catigories/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
