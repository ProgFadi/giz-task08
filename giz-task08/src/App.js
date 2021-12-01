import logo from './logo.svg';
import './App.css';
import PermanentDrawerLeft from "./component/drawer";
import React, { Component }  from 'react';
import {BrowserRouter,Route ,Routes} from 'react-router-dom'// import {} from "@mui/icons-material";
import Drawer from "@mui/material/Drawer/Drawer";
import Products from "./component/Prouducts/Products";
import Categories from "./component/Categories/Categories";
import Dashboard from "./component/Dashboard/Dashboard";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PermanentDrawerLeft/>}/>
          <Route exact path="/Dashboard" element={<Dashboard/>}/>
          <Route exact path="/Products" element={<Products/>}/>
          <Route exact path="/Categories" element={<Categories/>}/>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
