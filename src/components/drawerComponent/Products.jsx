import React from "react";
import PageProduct from "./products-component/PageProduct";
import DrawerLeft from "../Drawer";
function Products(props) {
  return (
    <DrawerLeft>
      <PageProduct />
    </DrawerLeft>
  );
}

export default Products;
