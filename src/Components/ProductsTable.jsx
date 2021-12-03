import { useState } from "react";
// import Product from "./Product";
import BasicTextField from "./TextField";
import BasicButton from "./Button";
import SideBar from "./SideBar";
import ImageAvatar from "./ImageAvatar";
import shoose from "../images/shoose.jpg";

// class ProductsPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       type: "",
//       caption: "",
//       price: "",
//       queryParam: "",
//       queryResult: [],
//       products: [
//         {
//           type: "a 1",
//           caption: "caption 1",
//           price: "$100",
//         },
//         {
//           type: "b 2",
//           caption: "caption 2",
//           price: "$200",
//         },
//         {
//           type: "c 3",
//           caption: "caption 3",
//           price: "$300",
//         },
//         {
//           type: "cd 4",
//           caption: "caption 4",
//           price: "$400",
//         },
//         {
//           type: "d 5",
//           caption: "caption 5",
//           price: "$500",
//         },
//       ],
//     };

//     //binding for any function
//     this.search = this.search.bind(this);
//     this.addProduct = this.addProduct.bind(this);
//     this.handleInput = this.handleInput.bind(this);
//   }

//   addProduct(e) {
//     e.preventDefault();
//     const tempProducts = this.state.products;
//     console.log(tempProducts);
//     tempProducts.push({
//       type: this.state.type,
//       caption: this.state.caption,
//       price: this.state.price,
//     });
//     this.setState({
//       products: tempProducts,
//     });
//   }

//   handleInput(e) {
//     if (e.target.name === "type") this.setState({ type: e.target.value });
//     else if (e.target.name === "caption")
//       this.setState({ caption: e.target.value });
//     else if (e.target.name === "price")
//       this.setState({ price: e.target.value });
//   }

//   search(e) {
//     var param = e.target.value;
//     if (param !== "") {
//       var results = this.state.products.filter((product) => {
//         return product.type.toLowerCase().startsWith(param.toLowerCase());
//       });
//       this.setState({
//         queryResult: results,
//       });
//     } else {
//       this.setState({
//         queryResult: this.state.products,
//       });
//     }

//     this.setState({ queryParam: param });
//   }

//   render() {
//     return (
//       <SideBar>
//         <div>
//           <form onSubmit={this.addProduct}>
//             <BasicTextField
//               type="text"
//               name="type"
//               placeholder="type"
//               onChange={this.handleInput}
//             />
//             <BasicTextField
//               type="text"
//               name="caption"
//               placeholder="caption"
//               onChange={this.handleInput}
//             />
//             <BasicTextField
//               type="text"
//               name="price"
//               placeholder="price"
//               onChange={this.handleInput}
//             />
//             <BasicButton
//               className="submit-button"
//               type="submit"
//               label="Add New"
//             />
//           </form>
//           <BasicTextField
//             name="search"
//             type="search"
//             value={this.state.queryParam}
//             placeholder="search here.."
//             onChange={this.search}
//           />
//           <div className="products">
//             {this.state.queryResult && this.state.queryResult.length > 0
//               ? this.state.queryResult.map((product, key) => (
//                   <Product product={product} key={key}></Product>
//                 ))
//               : this.state.products.map((product, key) => (
//                   <Product product={product} key={key}></Product>
//                 ))}
//           </div>
//         </div>
//       </SideBar>
//     );
//   }
// }
// export default ProductsPage;

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "type", label: "Type", minWidth: 100, align: "center" },
  {
    id: "caption",
    label: "Caption",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "price",
    label: "Price",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "thumb", label: "Thumb", minWidth: 100 },
];

function createData(type, caption, price, thumb) {
  // const density = population / size;
  return { type, caption, price, thumb };
}

const rows = [
  createData("Sneakers", "caption1", 3287263, <ImageAvatar src={shoose} />),
  createData("Sneakers", "caption2", 9596961, <ImageAvatar src={shoose} />),
  createData("Sneakers", "caption3", 301340, <ImageAvatar src={shoose} />),
  createData("Sneakers", "caption4", 9833520, <ImageAvatar src={shoose} />),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [product, setProduct] = React.useState({
    type: "",
    caption: "",
    price: "",
  });
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const addProduct = (e) => {
    e.preventDefault();
    const tempRows = [];
    console.log(tempRows);
    tempRows.push(
      createData(
        product.type,
        product.caption,
        product.price,
        <ImageAvatar src={shoose} />
      )
    );
    console.log(tempRows);
    // setProducts({
    //   rows: tempRows,
    //   // filteredProduct: tempProducts,
    // });
  };

  const handleInput = (e) => {
    if (e.target.name === "type") setProduct({ type: e.target.value });
    else if (e.target.name === "caption")
      setProduct({ caption: e.target.value });
    else if (e.target.name === "price") setProduct({ price: e.target.value });
  };

  // const search = (e) => {
  //   var param = e.target.value;
  //   if (param !== "") {
  //     var results = this.state.products.filter((product) => {
  //       return product.type.toLowerCase().startsWith(param.toLowerCase());
  //     });
  //     this.useState({
  //       queryResult: results,
  //     });
  //   } else {
  //     this.useState({
  //       queryResult: React.useState(rows),
  //     });
  //   }

  //   this.setState({ queryParam: param });
  // };

  return (
    <SideBar>
      <form>
        <BasicTextField
          type="text"
          name="type"
          placeholder="type"
          onChange={handleInput}
        />
        <BasicTextField
          type="text"
          name="caption"
          placeholder="caption"
          onChange={handleInput}
        />
        <BasicTextField
          type="text"
          name="price"
          placeholder="price"
          onChange={handleInput}
        />
        <BasicButton className="submit-button" type="submit" label="Add New" />
      </form>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </SideBar>
  );
}
