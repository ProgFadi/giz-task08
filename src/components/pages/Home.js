import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import CategoryIcon from '@mui/icons-material/Category';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function PermanentDrawerLeft(props) {
    const navigate = useNavigate();


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Permanent drawer
                    </Typography>
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
                anchor="left">

                <Toolbar />
                <Divider />


                <List>
                    {['Dashboard', 'Categories', 'Products'].map((text, index) => (
                            <ListItem button key={text} onClick={() => {navigate('/'+text.toLowerCase())}} >
                                <ListItemIcon style={{fontSize: '19.5px'}}>
                                    {(() => {
                                        switch (index) {
                                            case 0:
                                                return <FontAwesomeIcon icon={faChartLine} />;
                                            case 1:
                                                return  <CategoryIcon />;
                                            case 2:
                                                return  <FontAwesomeIcon icon={faShoppingCart} />;
                                            default:
                                                return null;
                                        }
                                    })()}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                    ))}
                </List>

                <Divider />
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                <Toolbar />
                {props.children}
            </Box>

        </Box>
    );
}
