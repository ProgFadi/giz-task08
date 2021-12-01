import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import ProductsTable from './components/ProductsTable';
function App() {
    const [products, setProducts] = useState([
      {
        name:'Shoes',
        price:30,
        category:'Clothes',
        id:1
      },  
      {
        name:'Labtop',
        price:890,
        category:'Electronics',
        id:2
      },
      {
        name:'T-Shirt',
        price:17,
        category:'Clothes',
        id:3
      },
      {
        name:'Watch',
        price:74,
        category:'Electronics',
        id:4
      },
    ])

    const addProduct = (product) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newProduct = { id, ...product }
      setProducts([...products, newProduct])

    }


    const deleteProdcut=(id)=>{
      setProducts(products.filter((product)=>
      product.id !== id 
      ))
    }
  return (
    <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/dashboard' element={<Dashboard />}/>
     <Route path='/categories' element={<Categories />}/>
      <Route path='/products' element={<ProductsTable onDelete={deleteProdcut}
       onAdd={addProduct} products={products}/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
