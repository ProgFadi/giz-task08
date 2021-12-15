import React, { Fragment } from "react";
import styles from './componat1.module.css'
import pair from './pair.jpg';
import { useState } from "react";

const Conponat1 = ({ nameslist }) => {
  const cards = nameslist.map(({ name, price }, idx) => (
    <Fragment>
    <div    key={idx}>
      <div className={styles.prodect}>
        <img src={pair} alt="pair"
          width={"80px"}
          height={"80px"} />
        {name}
        {price}
        <button className={styles.add_prodect}>add prodect</button>
      </div>
      
    </div>
    </Fragment>
  ))
  return (
    <div>{cards}</div>
  )
}
export default Conponat1;