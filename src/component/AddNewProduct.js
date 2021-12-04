import React from 'react'
import Button from './Button'

const AddNewProduct = (props) => {
    return (
        <>
            <Button value ='Add New' handelClick={props.handelClick} />
        </>

    )
}

export default AddNewProduct
