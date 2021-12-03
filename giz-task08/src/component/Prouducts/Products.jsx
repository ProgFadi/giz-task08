import React, {Component} from 'react';
import Typography from "../drawer";
import Home from "./card_product";

class Products extends Component {
    render() {
        return (
            <Typography>
              <div style={{padding:'50px'}}>
                   <Home/>
              </div>
            </Typography>
        );
    }
}

export default Products;