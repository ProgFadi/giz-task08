import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Categories from './Components/Categories';
import Content from './Components/Content';
import Home from './Components/Home';
import Products from './Components/Products/products';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/content" element={<Content/>}/>
      <Route path="/products" element={<Products/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
