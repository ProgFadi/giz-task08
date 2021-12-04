import { Link } from 'react-router-dom'
import React from 'react'
import NavBar from './NavBar'

export default function DashBoard(props) {
    return (
     
<NavBar> 
        <h1>Welcome to Dashboard!</h1>
       <Link to="/">  <button variant="contained">Go Back</button></Link>
        </NavBar>
       
    )
}
