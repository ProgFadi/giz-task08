import React, { Fragment } from "react";
import styles from './fildes.module.css'
import pair from './pair.jpg';
import Conponat1 from './Conponat1'
import Search from './Search';
import Drawer from './Drawer'
import { useState } from "react";
const Fildes = (props) => {
  const [filter, setfilter] = useState("")
  const [state, setState] = useState([
    {
      name: "shoes",
      price: "5$"

    },
    {
      name: "kkk",
      price: "10$"

    },
    {
      name: "jjj",
      price: "15$"

    }
  ]);
  const update = () => {
    let templlist = state;
    templlist.push({
      name: "hhhhh",
      price: "10$"
    })
    setState(templlist)
  }
  const searchPrice = (name) => {
    setfilter(name);
  }
  const priceHandeler = () => {
    if (filter.length !== 0) {
      return state.filter((el) => el.name.includes(filter))
    }
    return state;
  }

  return (
    <Drawer>
      <Fragment >
        <div className={styles.cardmap}>
          <div>
            <Search searchPrice={searchPrice} />
          </div>
          <div className={styles.one}>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="price" />
            <button onClick={update}>add</button>
          </div>
        </div>
        <div>
          <Conponat1 nameslist={priceHandeler()} />
        </div>
      </Fragment>
    </Drawer>
  )
}
export default Fildes;