import React from 'react'
import { makeStyles } from '@mui/styles';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Dashboard from './Pages/Dashboard';
import Products from './Pages/Products';
const useStyles = makeStyles (theme => ({
    container:{
        paddingTop:'100px',
        paddingLeft:'30px',
    }
}));
export default function Container() {
    const classes=useStyles()
    return (
        <div className={classes.container}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/categories" element={<Categories />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/Products" element={<Products />} />
          </Routes>
        </div>
    )
}
