import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2TbcnecKik9_1XO3kd2lvcWs5f_IMF7yFqvM9-ziTl1MoyaDkwksKdWWlmuzNZmq123o&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {props.info.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.info.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}