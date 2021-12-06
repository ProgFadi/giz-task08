import './App.css';
import {Routes, Route} from 'react-router-dom'
import Products from './Components/Products';
import Dashboard from './Components/Dashboard';
import Categories from './Components/Categories';
import Drawer from './Components/Drawer';
function App() {
  return (
    <div>
    <Routes>
       <Route path="/" element={<Drawer/>}/>
       <Route path="/Products" element={<Products/>}/>
       <Route path="/Dashboard" element={<Dashboard/>}/>
       <Route path="/Categories" element={<Categories/>}/>
    </Routes>
    </div>
  );
}

export default App;
