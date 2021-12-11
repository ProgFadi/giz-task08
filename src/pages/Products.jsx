import React from 'react';
import Drawer  from '/components';
const Products = () => {
    class Products extends React.Component{
    
        constructor(props)
        {
            super();
            this.state = {
            productName:'',
            productPrice:'',
            searchVal:'',
            filteredProducts:[
                {name:"Air Max 95 U",price:"99"}
            ],
            products:[
                {name:"Air Max 95 U",price:"99"}
            ]
            }
            this.addProduct = this.addProduct.bind(this)
            this.search = this.search.bind(this)
            this.Name = this.Name.bind(this)
            this.Price = this.Price.bind(this)
        }
        search(e)
        {
            let newValue = e.target.value;
            let searchProduct = this.state.products;
            if(!newValue){
                this.setState({
                    searchVal:newValue,
                    filteredProduct:this.state.products
                })
                return
            }
        let filtered = searchProduct.filter((item)=>{
            return item.name === newValue
            })
            this.setState({
            searchVal:newValue,
            filteredProducts:filtered,
            })
        }
        Product(props) {
            return( 
            <div style={{backgroundColor:"white",}}>
            <img src="/shoes" alt="image"></img>
            <h3 >{props.product.name}</h3>
            <span className="price">{props.product.price}</span>
            </div>
            )
        }
        render()
        {
            return (<div className="container">
            <div className="addContainer">
            <input className="nameAddProduct" type="text" onChange={this.Name} placeholder="Name"></input>
            <input className="priceAddProduct" type="number" onChange={this.Price} placeholder="Price"></input>
            <button onClick={this.addProduct} >Add New</button>
            </div>
            <div className="card">{this.state.filteredProducts.map((product) =>{
                return <Product product={product}></Product>
            })}
            </div>
            </div>)
        }
        
    }
    
    export default Products
    return (
        <Drawer>
        <Products/>
        </Drawer>
    );
}

export default Products;
