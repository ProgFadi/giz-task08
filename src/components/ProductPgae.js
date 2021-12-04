import React , {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { makeStyles } from '@mui/styles';

import Container from '@mui/material/Container';
import ProductsTable from './ProductTable';


const useStyle = makeStyles({
    btn: {
        widt: '33%',
        height: 50,
        fontSize: 20,
        "&:hover" : {opacity:.8}
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 50
    }
})



const ProductsPage = () => {
    const classes = useStyle();
    const [alert, setAlert] = useState(false)
    const [msg, setMsg] = useState({})
    const [searchVal, setSearchVal] = useState("")
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    
    const onSearchChange = (e) => {
        let Products = Array.from(products);
        let value = e.target.value
        if(!value) {
          setSearchVal(value)
          setFilteredProducts([...products])
          return
        }
    
        let filteredProducts = Products.filter((product)=>{return product.name.toLowerCase().includes(value.toLowerCase())})
        setSearchVal(value)
        setFilteredProducts([...filteredProducts])
    }

    const validate = ()=> {
        let Msg = Object.create(msg)
        if(!productName) {
          Msg.name = "Name can not be Empty"
        }
        else if(!productName.match(/^[a-zA-Z0-9@\. ]+$/)) { 
          Msg.name = 'Name Must be string'
        } 
        else {
          delete Msg.name
        }
        if(!productPrice) {
          Msg.price = "Price can not be Empty"
        }
        else if(!productPrice.match(/^[0-9]+$/)) {
          Msg.price = 'Price Must be integer'
        }
        else {
          delete Msg.price
        }
    
       setMsg({...Msg})
       return Object.keys(Msg).length === 0
    }


    const onAdd = (e)=> {
        if(!validate()) {
          setAlert(true)
          return
        }
        
        let Products = Array.from(products)
        let Product = new Object()
        Product.name = productName
        Product.price = productPrice
        Products.push(Product)
        setProducts([...Products])
        setFilteredProducts([...Products])
        setAlert(false)
        setProductName("")
        setProductPrice("")
    }


    return (
        <Container fixed>
            <div className={classes.header}>
                <TextField label="Search Products" color="primary" value={searchVal} onChange={onSearchChange} />
                <div className="head">
                    <TextField label="Name"  color="primary" value={productName} onChange={(e)=>{ setProductName(e.target.value) }} />
                    <TextField label="Price"  color="primary" value={productPrice} onChange={(e)=>{ setProductPrice(e.target.value) }} />
                    <Button variant="contained" color="primary" className={classes.btn} onClick={onAdd} >Add New</Button>
                </div>
            </div>
           
            {alert && <Alert severity="error" sx={{marginBottom:5}}>{Object.values(msg).map((message,index)=>{return <li key={index}>{message}</li>})}</Alert> }
            {!(filteredProducts.length === 0) && <ProductsTable rows={filteredProducts} />} 

        </Container>
    )
}


export default ProductsPage;