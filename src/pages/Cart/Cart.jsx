import React, { useState } from "react";
import "./cart.css";
import cartActions from "../../Redux/Actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import BodyTable from "../../Components/BodyTable/BodyTable";

export default function Cart() {
  const dispatch = useDispatch();
  let {newProducts,products} = useSelector((store) => store.cartReducer);
  let obj = {
    name: "Dark Souls",
    price: 40,
    unity: 1,
  };

  const agregar = () => {
    dispatch(cartActions.addGame(obj));
  };
  let total = 0;
  if (products.length !== 0) {
    products.map((e) => (total = total + e.price * e.unity));
  }
  
  console.log(newProducts);
  return (
    <div className="content-Cart">
      <h1 className="title">Cart</h1>


      {products.length === 0 ? (
        <h1>No products</h1>
      ) : (
        <table className="table">
          <thead>
            <tr className="tableHeader">
              <th>Game</th>
              <th>Price</th>
              <th>Amount</th>
              <th className="subTotal">Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((e, i) => <BodyTable game={e} key={i} />)}
          </tbody>
          <tfoot>
            <tr className="tableFooter">
              <th>Total</th>
              <th>${total}</th>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}
