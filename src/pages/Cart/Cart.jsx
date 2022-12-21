import React from "react";
import "./cart.css";
import {  useSelector } from "react-redux";
import BodyTable from "../../Components/BodyTable/BodyTable";

export default function Cart() {

  let {  products } = useSelector((store) => store.cartReducer);
  let total = 0;
  if (products.length !== 0) {
    products.map((e) => (total = total + e.price * e.unity));
  }

  return (
    <div className="content-Cart">
      <h1 className="title">Cart</h1>

      {products.length === 0 ? (
        <h1>No products</h1>
      ) : (
        <table className="table">
          <thead className="tableHeader">
            <tr >
              <th>Game</th>
              <th>Price</th>
              {/* <th>Amount</th> */}
              <th className="subTotal">Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((e, i) => (
              <BodyTable game={e} key={i} />
            ))}
          </tbody>
          <tfoot>
            <tr className="tableFooter">
              <th></th>
              <th>Total</th>
              <th>${total}</th>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}
