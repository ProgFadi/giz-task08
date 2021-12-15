import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Drawer from './task/Drawer'
import Fildes from './task/Fildes'
import Home from './task/Home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Drawer/>} />
      <Route exact path="/Home" element={<Home/>} />
      <Route exact path="/Fildes" element={<Fildes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
