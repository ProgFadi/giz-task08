import React from "react"
import Product from './Product';
export default function ViewProduct({carts,searchProduct}){

    if(searchProduct.length > 0){
        carts = carts.filter((val)=>{
           
            return val.text.match(searchProduct)
        });
      }
      
    return(
    
        <div className="flex">
         
           {carts.map(cart=>(
               <Product  key={cart.id} name={cart.text} price={cart.price} />
           ))}
           
        </div>
        
    )
}