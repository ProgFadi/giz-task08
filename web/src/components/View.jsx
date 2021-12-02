import React from "react";
import img from "../shoes.png";


function ViewCards(props) {
  return (

    <table class="card">
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
        </tr>
        <tr>
            <td><img src={img} alt="#"/></td>
            <td>{props.product.name}</td>
            <td>{props.product.type}</td>
            <td>{props.product.price}</td>
        </tr>
    </table>

  );
}


export default ViewCards;