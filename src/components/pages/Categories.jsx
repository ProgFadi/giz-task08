import React from 'react'
import {Link} from 'react-router-dom';
import Drawer from '../mui/Drawer';

export default function Categories() {
    return (
        <Drawer>
            <h1>
                This is Categories
            </h1>
            <Link to="/"> Back to Products Page</Link>
        </Drawer>
    )
}
