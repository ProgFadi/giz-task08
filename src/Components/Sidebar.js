import React from 'react'
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Link } from 'react-router-dom';
const useStyles = makeStyles (theme => ({
    container:{
        paddingTop:'100px',
        height:'200vh',
        boxShadow:'0px 0px 5px 1px #c7c7c7',
       
        
      
    },
    item:{
        display:'flex',
        paddingLeft:'20px',
        alignItems:'center',
        width:'100%',
        height:'50px',
        marginBottom:'10px',
        cursor:'pointer',
        '&:hover': {
         backgroundColor: '#d32f2f36',
         
        },
       
    },
    icon:{
      color:'#d32f2f',
      marginRight:'10px',
      
      
    },
    text:{
        fontSize:'15px',
        textDecoration:'none',
        color:'#000'
    }
}));

export default function Sidebar() {
    const classes=useStyles()
    return (
        < div className={classes.container}>
          <div className={classes.item}>
            <HomeIcon  className={classes.icon}/>
            <Typography >
              <Link to='/' className={classes.text}>Home</Link>
            </Typography>
          </div>

          <div className={classes.item}>
            <DashboardIcon  className={classes.icon}/>
            <Typography >
             <Link to='/dashboard' className={classes.text}>Dashboard</Link>
            </Typography>

          </div>

          <div className={classes.item}>
            <CategoryIcon  className={classes.icon}/>
            <Typography >
             <Link to='/categories' className={classes.text}>Categories</Link>
            </Typography>

          </div>

          <div className={classes.item}>
            <ProductionQuantityLimitsIcon  className={classes.icon}/>
            <Typography >
             <Link to='/products' className={classes.text}>Products</Link>
            </Typography>

          </div>
        </div>
    )
}
