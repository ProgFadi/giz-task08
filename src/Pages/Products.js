import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from './NavBar'

export default function Products(props) {
    return (
        <NavBar> 
            <h1>Welcome To Products </h1>
           <Link to="/">  <button>Go Back</button></Link>
            </NavBar>
        
    )
}
