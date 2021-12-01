import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CategoryIcon from '@material-ui/icons/Category';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import LocalMallSharpIcon from '@material-ui/icons/LocalMallSharp';


const drawerWidth = 240;

export default function MainContainer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            AppBar
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>

          <List>
              <ListItem >
              <ListItemIcon>
                    <HomeSharpIcon />
                </ListItemIcon  >
                <a href = "/" >Home</a>
              </ListItem>
              <ListItem >
                <ListItemIcon>
                    <DashboardIcon  /> 
                </ListItemIcon  >
                <a href = "/dashboard" >Dashboard</a>
              </ListItem>
              

              <ListItem >
                <ListItemIcon>
                    <CategoryIcon  /> 
                </ListItemIcon  >
                <a href = "/categories" >categories</a>
              </ListItem>

              <ListItem >
                <ListItemIcon>
                    <LocalMallSharpIcon  /> 
                </ListItemIcon  >
                <a href = "/products" >products page</a>
              </ListItem>
          </List>

        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
            <div>
            
            </div>
      </Box>
    </Box>
  );
}
