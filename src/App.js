import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from "./components/Home"
import Products from './components/Products';
import Categories from './components/Categories';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
