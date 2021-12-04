import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {Link} from "react-router-dom";
// import Categories from "./Categories/Categories";

const drawerWidth = 240;

export default function PermanentDrawerLeft(props) {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar  color="transparent"
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    {/*<Typography variant="h6" noWrap component="div">*/}
                    {/*    Permanent drawer*/}
                    {/*</Typography>*/}

                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List >
                 <div style={{padding:'7px'}}>
                     <Link to='/Dashboard' style={{textDecoration:'none', color:'black', marginLeft:'65px'}}>
                         Dashboard
                     </Link>
                 </div>
                    <div style={{padding:'7px'}}>

                        <Link to='/Categories' style={{textDecoration:'none', color:'black', marginLeft:'65px'}}>
                            Categories </Link>
                 </div>
                    <div style={{padding:'7px'}}>
                        <Link to='/Products' style={{textDecoration:'none', color:'black', marginLeft:'65px'}}>
                            Products
                        </Link>
                 </div>


                </List>

            </Drawer>
            <Typography paragraph>
                {props.children}
            </Typography>
            <Box
                component="main"
                sx={{ flexGrow: 1,
                    bgcolor: 'background.default',
                    p: 3 }}
            >

            </Box>

        </Box>
    );
}
