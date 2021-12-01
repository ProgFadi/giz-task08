import React from 'react'
import {Link} from 'react-router-dom'
import Menu from './Menu'

export default function Home(props) {
    return (
        <Menu>
            <Link to="/menu">To menu</Link>
            home 
        </Menu>
    )
}
