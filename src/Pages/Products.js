import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from './NavBar'
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { CardActionArea, CardActions } from '@mui/material';
import img from '../img.png'


const Products = (props) => {
    return (
        <NavBar>

        <Card sx={{ maxWidth: 260 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={img}
                    alt="product"
                />
                <CardContent x={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                    <Typography variant="subtitle2" color="text.secondary">Sneakers</Typography>
                    <Typography variant="h5">{props.name}</Typography>
                    </div>
                    <Typography variant="overline" display="block" color="text.secondary">$121{props.price}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button sx={{width: '100%'}} variant="contained" startIcon={<AddIcon />}>Add to Cart</Button>
            </CardActions>
        </Card>
        <Link to="/"> </Link>
        </NavBar>
    )
}


export default Products;