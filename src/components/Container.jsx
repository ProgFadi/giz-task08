import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {Link} from 'react-router-dom'

const drawerWidth = 240;



const Container = Component => {
    const layout = () => {
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
                    {['Home', 'Dashboard', 'Categories', 'Products'].map((text, index) => (
                        <Link to={text === 'Home' ? '/' : '/'+text.toLowerCase()} key={index}>
                            <ListItem button >
                                <ListItemIcon>
                                  {text === 'Home' ? <HomeIcon /> : (text === 'Dashboard' ? <DashboardIcon /> : (text === 'Categories' ? <CategoryIcon /> : <ShoppingBagIcon />) ) }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                  </List>
                </Box>
              </Drawer>
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Component />
              </Box>
            </Box>
          );
    }
    
  return layout;
}

export default Container;
