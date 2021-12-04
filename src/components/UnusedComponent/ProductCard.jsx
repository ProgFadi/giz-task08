import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import shoe_image from "../img.png";
import Box from "@mui/material/Box";

export default function ImgMediaCard(props) {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardMedia component="img" alt="green iguana" height="140" image={shoe_image} objectFit="cover" />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",

            justifyContent: "space-between",
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            {props.product.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {props.product.price}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {props.product.type}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          position: "relative",
          p: 2,
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{
            width: "100%",
            position: "absolute",
          }}
        >
          Send to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
