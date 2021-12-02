import React from "react";
import shoe_image from "../img.png";
export default function Product(props) {
  return (
    <div className="single-product-parent" id={props.key}>
      <div>
        <img src={shoe_image} alt="image" />
      </div>
      <div className="parent-product-type">
        <span className="product-type">{props.product.type}</span>
      </div>
      <div className="parent-product-info">
        <p>{props.product.title}</p>
        <p className="price">$ {props.product.price}</p>
      </div>
      <button className="parent-product-button">Add to cart</button>
    </div>
  );
}
