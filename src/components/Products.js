import React from 'react'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
//table
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





class Products extends React.Component{
    constructor(props)
    {
        super();
        this.state = {
            searchQ:'',
            pName:'',
            pPrice:'',
            filteredProduct:[
                  {name:"Wacht-v1",price:220},
                  {name:"Wacht-v1",price:333},
                  {name:"Wacht-v1",price:100},
           
                
                ],
                  
            products:[
                {name:"Wacht-v1",price:220},
                {name:"Wacht-v1",price:220},
                {name:"Wacht-v1",price:220},
                
                ]
        }
        this.addProduct = this.addProduct.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handlePrice = this.handlePrice.bind(this)


        this.search = this.search.bind(this)

    }

    handleName (e)  {
    this.setState({pName:e.target.value})
      }
    handlePrice (e)  {
    this.setState({pPrice:e.target.value})


     }
    addProduct()
    {
        let currProducts = this.state.products;
        currProducts.push({
            name:this.state.pName,
            price:this.state.pPrice
        })
            this.setState({
                products:currProducts,
                filteredProduct:currProducts
            })

    }
    search(e)
    {
        let newValue = e.target.value;
        let currProducts = this.state.products;
        if(!newValue)
        {
            this.setState({
                searchQ:newValue,
                filteredProduct:this.state.products
            })
            return
        }
       let filtered = currProducts.filter((item)=>{
           return item.name == newValue
        })
        this.setState({
            searchQ:newValue,
            filteredProduct:filtered,
       
        })
    }
    render()
    {
    return <div>
    <div style={{display:"flex",justifyContent:'space-around' , paddingTop:'90px',paddingRight:'10px'}}>
        <Link to='cart'></Link>
       <TextField onChange={this.search} value={this.state.searchQ}   label="Search For Products"
          defaultValue="Default Value"
          helperText="Type Full Name ^--^"
          variant="standard" />
     
       <div style={{display:"flex",justifyContent:'center' ,padding:'10px'}}>
         <TextField   type='text' label="Name" onChange={this.handleName}/>
         <TextField   label="Price"
          type="number" onChange={this.handlePrice}/>
         <button onClick={this.addProduct} >Add New Product</button>
       </div> 

    </div>

     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
          
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Qyn</StyledTableCell>
           
          
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.filteredProduct.map((p) => (
            <StyledTableRow key={p.pName}>
              <StyledTableCell component="th" scope="row">
                {p.name}
              </StyledTableCell>
              <StyledTableCell align="right">{p.price}$</StyledTableCell>
              <StyledTableCell align="right">2</StyledTableCell>
          
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

        
    }
}

export default Products


  