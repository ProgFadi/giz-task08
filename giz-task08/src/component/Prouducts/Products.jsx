import React, {Component} from 'react';
import Typography from "../drawer";
import Home from "./card_product";
import styled from "styled-components";

const product=styled.div`

padding-top: 100px`;

class Products extends Component {
    render() {
        return (
            <Typography>
              <product>
                   <Home/>
              </product>
            </Typography>
        );
    }
}

export default Products;