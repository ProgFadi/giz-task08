import React from 'react'
import {Link} from 'react-router-dom';
import Drawer from '../mui/Drawer';

export default function Dashboard() {
    return (
        <Drawer>
            <h1>
                This is Dashboard
            </h1>
            <Link to="/"> Back to Products Page</Link>
        </Drawer>
    )
}
