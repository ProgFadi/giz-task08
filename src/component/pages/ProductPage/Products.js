import OneProduct from "./OneProduct"

const Products = ({products, onDelete}) => {
    return (
        <div className={'productsDiv'}>
          {products.map((product)=>(
           <OneProduct key={product.id} product={product} onDelete={onDelete} />
          )
          )}  
        </div>
    )
}

export default Products
