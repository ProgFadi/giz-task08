import './App.css';
import Container from './components/Container';
import Home from './components/Home';
import Dashboard from './components/Dashboard'
import Categories from './components/Categories'
import ProductsPage from './components/ProductsPage'
import {Routes, Route} from 'react-router-dom'


function App() {
  let HomeCompo = Container(Home)
  let DashCompo = Container(Dashboard)
  let CatCompo = Container(Categories)
  let ProdCompo = Container(ProductsPage)
  return (
    <div>
       <Routes>
        <Route exact path='/' element={<HomeCompo />} />
        <Route path="dashboard" element={<DashCompo />} />
        <Route path="categories" element={<CatCompo />} />
        <Route path="products" element={<ProdCompo />} />
      </Routes>
    </div>
  );
}

export default App;
