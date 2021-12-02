import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function BasicTextFields({ addProductHandler }) {
  const initialState = {
    name: '',
    brand: 'new brand',
    price: '',
  };
  const [productData, setProductData] = useState(initialState);

  const submitHandler = (e) => {
    e.preventDefault();
    addProductHandler(productData);
    setProductData(initialState);
  };

  const onChangeHandler = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        onChange={onChangeHandler}
        value={productData.name}
        name="name"
      />
      <TextField
        id="standard-basic"
        label="Price"
        variant="standard"
        onChange={onChangeHandler}
        value={productData.price}
        name="price"
      />
      <Button variant="contained" onClick={submitHandler}>
        Add Product
      </Button>
    </Box>
  );
}
