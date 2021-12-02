import * as React from 'react';
import img from '../images/1.png';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { InputBase } from '@mui/material';

const useStyles = makeStyles (theme => ({
    toolbar: {
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      backgroundColor: '#fdfdfd',
      border: 0,
      color: '#58585b',
      height: 48,
      padding: '0 30px',
    },
    logo:{
      color:'#d32f2f',
    },
    search:{
      display:'flex',
      alignItems:'center',
      backgroundColor: '#fbfbfb',
      '&:hover': {
      backgroundColor: '#eee'},
      boxShadow:'0px 0px 3px 1px #a199991f',
      height:'35px',
      borderRadius:'5px',
      width:'40%',
    },
    icons:{
        display:'flex',
        alignItems:'center',
    
    },
    badge:{
        marginRight:'20px'
    }

}));
  

export default function Navbar() {
    const classes=useStyles()
    return (
        
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logo}> EcoShop </Typography>
                <div className={classes.search}>
                    <Search />
                    <InputBase placeholder='Search .... ' />
                </div>
                <div className={classes.icons} > 
                  <Badge badgeContent={4} color="error" className={classes.badge}>
                    <MailIcon  />
                  </Badge>

                  <Badge badgeContent={7} color="error" className={classes.badge}>
                    <NotificationsIcon />
                  </Badge>

                  <Stack direction="row" spacing={3}>
                    <Avatar alt="Cindy Baker" src={img} />
                  </Stack>

                </div>
            </Toolbar>
        </AppBar>
    )
}
