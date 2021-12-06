
import React from 'react'
import Card from './Card'
import styles from './mystyle.module.css'
function Products() {
    return (
        <div className={styles.Flex}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>
    )
}

export default Products
