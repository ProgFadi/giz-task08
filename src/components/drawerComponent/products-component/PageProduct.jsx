import React from "react";
import Input from "./Input";
import Button from "./Button";
import "D:/GIZ - Bootcamp/front-task/giz-task08/src/static/style/pageproduct.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

class PageProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      searchResult: "",
      products: [
        {
          name: "1 Sneakers",
          description: "Air Max 95 U",
          prics: "$ 99",
        },
        {
          name: "2 Sneakers",
          description: "Air Max 95 U",
          prics: "$ 99",
        },
        {
          name: "3 Sneakers",
          description: "Air Max 95 U",
          prics: "$ 99",
        },
      ],
    };
    this.addProduct = this.addProduct.bind(this);
    this.searchFun = this.searchFun.bind(this);
  }

  addProduct() {
    const tempProducts = this.state.products;
    //console.log(tempProducts);
    tempProducts.push({
      name: "++ Sneakers",
      description: "Air Max 95 U",
      prics: "$ 99",
    });
    this.setState({
      products: tempProducts,
    });
  }

  searchFun = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = this.state.products.filter((product) => {
        return product.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      this.setState({
        searchResult: results,
      });
    } else {
      this.setState({
        searchResult: this.state.products,
      });
    }
    this.setState({
      searchValue: keyword,
    });
  };

  render() {
    return (
      <div className="product-page">
        <div className="nav-bar">
          <div className="search-section">
            <Input
              className="input-search"
              name="Search Products"
              placeholder="Search Products"
              value={this.state.searchValue}
              onChange={this.searchFun}
            />
          </div>
          <div className="addProduct-section">
            <Input className="input-addProduct" placeholder="Name" />
            <Input className="input-addProduct" placeholder="Price" />
            <Button
              title="Add new product"
              className="btn-addProduct"
              size="small"
              onClick={this.addProduct}
            >
              Add a row
            </Button>
          </div>
        </div>

        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name </TableCell>
                  <TableCell align="center">Description</TableCell>
                  <TableCell align="center">Prics</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.searchResult && this.state.searchResult.length > 0
                ? this.state.searchResult.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">{row.prics}</TableCell>
                  </TableRow>
                ))
              :this.state.products.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.description}</TableCell>
                  <TableCell align="center">{row.prics}</TableCell>
                </TableRow>
              ))
              }
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/* <BasicTable />
        <div className="products-area">
          {this.state.searchResult && this.state.searchResult.length > 0
            ? this.state.searchResult.map((product) => (
                <Product product={product}></Product>
              ))
            : this.state.products.map((product) => (
                <Product product={product}></Product>
              ))}
        </div> */}
      </div>
    );
  }
}

export default PageProduct;
