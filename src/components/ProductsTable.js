import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState} from "react";
import { InputBase } from '@mui/material';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


function createData(productName, price, description) {
    return { productName, price, description };
}

const data = [
    createData('Frozen yoghurt', 159, 'Frozen dessert made with yogurt.'),
    createData('Ice cream sandwich', 237, 'Frozen dessert consisting of ice cream between two biscuits.'),
    createData('Eclair', 262, 'Pastry made with choux dough filled with a cream and topped with chocolate icing.'),
    createData('Cupcake', 305, 'Small cake designed to serve one person'),
    createData('Gingerbread', 356, 'Baked goods, typically flavored with ginger, cloves and nutmeg'),
];

export default function ProductsTable() {
    const [rows, setRows] = useState(data);
    const [searchRows, setSearchRows] = useState(data);
    const [searched, setSearched] = useState("");
    const [prodName, setProductName] = useState("");
    const [prodPrice, setProductPrice] = useState("");


    const requestSearch = (searchedVal) => {
        const filteredRows = rows.filter((row) => {
            if(!searchedVal){
                return row
            } else if (row.productName.toLowerCase().includes(searchedVal.toLowerCase()))
            return row;
        });
        setSearchRows(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        setRows(data);
        requestSearch(searched);
    };

    const addProduct = () => {
        let tempProducts = rows
        let nameValue = prodName
        let priceValue = prodPrice
        tempProducts.push({
            productName: nameValue,
            price: '$'+ priceValue,
            description:"Cake"
        })
        setRows(tempProducts);
        setSearchRows(tempProducts);
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    justifyContent:'space-between',
                    alignItems: 'center',
                    '& > :not(style)': { m: 1, mb: 3 },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': { m:1},
                    }}
                >
                    <TextField
                        id="demo-helper-text-aligned"
                        label="Name"
                        size="small"
                        onChange={(event) => setProductName(event.target.value)}
                    />
                    <TextField
                        id="demo-helper-text-aligned-no-helper"
                        label="Price"
                        size="small"
                        onChange={(event) => setProductPrice(event.target.value)}
                    />
                    <Button variant="contained" size={"medium"} style={{
                        textTransform: 'capitalize',
                        fontSize: '14px',
                        padding: '.5em 1.1em'}}
                        onClick={addProduct}
                    >Add product</Button>
                </Box>

                <Paper
                    component="form"
                    sx={{ p: '.4em', display: 'flex',  width: 350 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search for Product"
                        type='text'
                        onChange={(event) => requestSearch(event.target.value)}
                        onCancelSearch={() => cancelSearch()}
                    />
                </Paper>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="left">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {searchRows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.productName}
                                </TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="left">{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>

    );
}
