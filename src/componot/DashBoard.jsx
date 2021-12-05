import React, { useEffect, useState } from "react";
import MiniDrawer from "./Drawer";

function DashboardPage(props){

    return(
        <div>
            <MiniDrawer>
                <h1>Dashboard</h1>
            </MiniDrawer>
            <br />
        </div>
    );
};

// {/* <Link to="/drawer" >Got to Drawer</Link> */}
// {/* <br />
// <Link to="/app-bar" >Got to AppBar</Link> */}

export default DashboardPage;
