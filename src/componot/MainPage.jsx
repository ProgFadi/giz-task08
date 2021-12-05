import React, { useEffect, useState } from "react";
import {Link, link} from "react-router-dom"
import MiniDrawer from "./Drawer";

function MainPage(props){

    return(
        <div>
            <MiniDrawer>
                <h1>Home</h1>
            </MiniDrawer>
            <br />
        </div>
    );
};

// {/* <Link to="/drawer" >Got to Drawer</Link> */}
// {/* <br />
// <Link to="/app-bar" >Got to AppBar</Link> */}

export default MainPage;
