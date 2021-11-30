import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

export default function Category(props) {
    return (
     
           
            
            <NavBar> 
             <h1>Welcome to Category</h1>
             <Link to="/">  <button>Go Back</button></Link>
            </NavBar>
    )
}

