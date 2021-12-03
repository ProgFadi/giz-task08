import React from 'react'
import ProductsPage from '../components/Products-Page/ProductsPage'
import Drawer from './Drawer'

function Products() {
    return (
        <div>
            <Drawer>
                <ProductsPage /> 
            </Drawer>
        </div>
    )
}

export default Products
