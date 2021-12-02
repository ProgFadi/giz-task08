import React, { Component } from 'react'
import Drawer from "./Drawer"
import ProductsPage from './Products Components/components/Products page'
export default class Products extends Component {
    render() {
        return (
            <Drawer>
                <ProductsPage/>
            </Drawer>
                
            
        )
    }
}
