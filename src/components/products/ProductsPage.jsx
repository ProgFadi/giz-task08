import { useState } from "react";
import image from "./img.jpg";
import  AddProduct from "./AddProduct";
import { ProductList } from './ProductList';
import Search from './Search';
import './products.css';


function ProductsPage(){
  const state = [
    {
    name: "Camera",
    price: "15",
    image: {image},
    },
    {
    name: "Camera",
    price: "15",
    image: {image},
    },
    {
    name: "Camera",
    price: "15 $",
    image: {image},
    },

  ];
  const [products, setProducts] = useState(state);
  const [searchProducts, setSearchProducts] = useState('');
  const addProductHandler = (productData) => {
    setProducts([...products, productData]);
  };

  const handleSearch = (e) => {
    setSearchProducts(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchProducts.toLowerCase());
  });
  return (
    
    <div className="App">
      <div className="main">
        <div>
          <Search searchProducts={searchProducts} handleSearch={handleSearch} />
        </div>
        <div>
          <AddProduct addProductHandler={addProductHandler} />
        </div>
      </div>

      <div>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );

}
export default ProductsPage;