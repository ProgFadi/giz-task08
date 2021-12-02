import React, {useState} from 'react';
import Form from '../ProductsPage/Form';
import '../ProductsPage/product.css';
import ViewProduct from '../ProductsPage/ViewProduct';
export default function Products() {
    const [inputText,setInputText]=useState("");
    const [inputPrice,setInputPrice]=useState("");
    const [carts,setCarts]=useState([]);
    const[searchProduct,setSearchProduct]=useState("");
  
    return (
     <div className="container">
       <Form 
         inputText={inputText}
         setInputText={setInputText}
         inputPrice={inputPrice}
         setInputPrice={setInputPrice}
         carts={carts}
         setCarts={setCarts}
         searchProduct={searchProduct}
         setSearchProduct={setSearchProduct}
         
       />
  
       <ViewProduct
        carts={carts}
        searchProduct={searchProduct}
        />
    </div>
    );
}
