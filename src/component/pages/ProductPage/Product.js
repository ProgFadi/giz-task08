import Header from './Header';
import './styles.css'
import { useEffect, useState } from 'react';
import Products from './Products';
import Content from './Content';

function Product() {
  const [products,setProducts] = useState(Content)
  const [itemFound,setItemFound] = useState(products)

  useEffect(() => {
    setItemFound(products)

  },[products])

    const deleteProduct = (id) => {
      setProducts(products.filter((product) => product.id !== id ))
      document.getElementById('searchId').value=''
    }
    
    const addProduct = (product) => {
      const id = Math.floor(Math.random()*10000)+1
      const newProduct = {id, ...product}
      setProducts([...products,newProduct])
      document.getElementById('searchId').value=''
  }

  const searchHandler = (e) => {
     let filteredProduct= products.filter((item) => {
         return  item.productName.toLowerCase().includes(e.target.value.toLowerCase())
       })
       setItemFound(filteredProduct)
  }

  return (
    <div>
      <Header onAdd={addProduct} onChange={searchHandler} />
      {itemFound.length>0 ? <Products products={itemFound} onDelete={deleteProduct}  /> : 'No products to show' }
    </div>
  );
}

export default Product;
