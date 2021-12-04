import React, { useState } from "react";
import Inputs from "../components/Inputs";
import Buttons from "../components/Buttons";
import MiniDrawer from "../components/Container";
// import Product from "../components/Product";
// import Product from "../components/ProductCard";
import Product from "../components/ProductTable";
import "../../App.css";
function ProductPage() {
  const [product_name, setName] = useState("");
  const [product_price, setPrice] = useState("");
  const [search_value, setSearch] = useState("");
  const [items, setItem] = useState([]);
  const [items_filter, setFilter] = useState([]);

  function ProductChange(e) {
    setName(e.target.value);
  }

  function PriceChange(e) {
    setPrice(e.target.value);
  }
  function AddProduct(e) {
    let product_val = product_name;
    let price_val = product_price;
    if (product_val && price_val) {
      if (!isNaN(price_val)) {
        let productArr = [...items];
        let productObj = new Object();
        productObj.title = product_val;
        productObj.price = price_val;
        productObj.type = "shoes";
        productArr.push(productObj);
        setItem(productArr);
        setFilter(productArr);
      }
    }
  }
  function onSearchChange(e) {
    let newValue = e.target.value;
    let name = items;
    if (!newValue) {
      setSearch(newValue);
      setFilter([...items]);
    }
    let filtered = name.filter((item) => {
      return item.title.toLowerCase().includes(newValue.toLowerCase());
    });
    setSearch(newValue);
    setFilter([...filtered]);
  }
  return (
    <div className="nav-bar">
      <div className="input-bar">
        <div className="input-left-bar">
          <Inputs
            name="search"
            ph="Search Products"
            value={search_value}
            onChange={onSearchChange}
            ClassName="single-input-left"
          />
        </div>
        <div className="input-right-bar">
          <div className="input-right-bar-adjustment">
            <Inputs
              name="product_title"
              ph="Name"
              value={product_name}
              onChange={ProductChange}
              ClassName="single-input-right"
            />
            <Inputs
              name="product_price"
              ph="Price"
              value={product_price}
              onChange={PriceChange}
              ClassName="single-input-right"
            />
            {/* </div> */}
            {/* </div> */}
            <div className="position-product-parent">
              <Buttons onClick={AddProduct} title="Add New" ClassName="add-btn" />
            </div>
          </div>
        </div>
      </div>
      <div className="product-parent">
        {items_filter.map((item, index) => {
          return <Product key={index} product={item} />;
        })}
      </div>
    </div>
  );
}

export default MiniDrawer(ProductPage);
