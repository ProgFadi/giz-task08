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
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import {formatPrice, isNumber, isEmpty} from "./validation";
import {ButtonStyle, DialogStyle, InputFieldPlaceholderStyle, InputFieldTextStyle, InputsBoxStyle, SearchBarStyle, TableStyle,} from "./styles/ProductsTableStyles";


function createData(productName, price, description) {
    return { productName, price, description };
}

const data = [
    createData('Frozen yoghurt', formatPrice.format(159), 'Frozen dessert made with yogurt.'),
    createData('Ice cream sandwich', formatPrice.format(237), 'Frozen dessert consisting of ice cream between two biscuits.'),
    createData('Eclair', formatPrice.format(262), 'Pastry made with choux dough filled with a cream and topped with chocolate icing.'),
    createData('Cupcake', formatPrice.format(305), 'Small cake designed to serve one person'),
    createData('Gingerbread', formatPrice.format(356), 'Baked goods, typically flavored with ginger, cloves and nutmeg'),
];

export default function ProductsTable() {
    /* for search and adding products */
    const [rows, setRows] = useState(data);
    const [searchRows, setSearchRows] = useState(data);
    const [prodName, setProductName] = useState("");
    const [prodPrice, setProductPrice] = useState("");

    /* for validation */
    const [nameHelperText, setNameHelperText] = useState('');
    const [priceHelperText, setPriceHelperText] = useState('');
    const [nameError, setNameError] = useState(false);
    const [priceError, setPriceError] = useState(false);

    /* for popup alert when attempt to add product without name or price */
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    /* search for product by name */
    const requestSearch = (searchedVal) => {
        const filteredRows = rows.filter((row) => {
            if(!searchedVal){
                return row
            } else if (row.productName.toLowerCase().includes(searchedVal.toLowerCase()))
            return row;
        });
        setSearchRows(filteredRows);
    };

    /* add product */
    const addProduct = () => {
        let nameValue = prodName
        let priceValue = prodPrice

        const newProducts = searchRows.concat({
            productName: nameValue,
            price: formatPrice.format(priceValue),
            description:"Cake" });
        setRows(newProducts);
        setSearchRows(newProducts);
    }


    return (
        <>
            {/* this dialog opens when the user tries to add product with empty name or price */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={DialogStyle}>
                    {"Enter product details"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} sx={DialogStyle}>Ok</Button>
                </DialogActions>
            </Dialog>

            <Box sx={InputsBoxStyle} >
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': { m:1},
                    }}
                >
                    <TextField
                        error={nameError}
                        id="outlined-error-helper-text"
                        label="Name"
                        size="small"
                        type="text"
                        InputProps={{style: InputFieldTextStyle}}
                        InputLabelProps={{style: InputFieldPlaceholderStyle}}
                        helperText={nameHelperText}
                        onChange={(event) => {
                            setProductName(event.target.value)
                            if (isNumber(event.target.value)){
                                setNameHelperText('Please enter a name');
                                setNameError(true);
                            } else {
                                setNameHelperText('');
                                setNameError(false);
                            }
                        }}
                    />
                    <TextField
                        error={priceError}
                        id="outlined-error-helper-text"
                        label="Price"
                        size="small"
                        InputProps={{style: InputFieldTextStyle}}
                        InputLabelProps={{style: InputFieldPlaceholderStyle}}
                        helperText={priceHelperText}
                        onChange={(event) => {
                            setProductPrice(event.target.value)
                            console.log(event.target.value.length)
                            if (isNumber(event.target.value) || isEmpty(event.target.value.trim())) {
                                setPriceHelperText('');
                                setPriceError(false);
                            } else {
                                setPriceHelperText('Please enter a number');
                                setPriceError(true);
                            }
                        }}
                    />
                    <Button variant="contained"  size={"small"} sx={ButtonStyle}
                        onClick={() => {
                            if(isEmpty(prodName.trim()) || isEmpty(prodPrice.trim())) {
                                handleClickOpen()
                            }else {
                                addProduct()
                            }
                        }}
                    >Add product</Button>
                </Box>

                <Paper
                    component="form"
                    sx={{ p: '.4em', display: 'flex',  width: 350 }}
                >
                    <InputBase
                        sx={SearchBarStyle}
                        placeholder="Search for Product"
                        type='text'
                        inputProps={{style: SearchBarStyle}}
                        onChange={(event) => requestSearch(event.target.value)}
                    />
                </Paper>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell sx={TableStyle} >Product Name</TableCell>
                            <TableCell sx={TableStyle} >Price</TableCell>
                            <TableCell sx={TableStyle} >Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {searchRows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={TableStyle} component="th" scope="row">
                                    {row.productName}
                                </TableCell>
                                <TableCell sx={TableStyle} >{row.price}</TableCell>
                                <TableCell sx={TableStyle} >{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
