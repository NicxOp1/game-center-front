import React from "react";
import "./cart.css";

export default function Cart() {
    

  return (
    <div>
      <h1>Cart</h1>
      <table>
        <tr className="tableHeader">
          <th>Game</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Sub Total</th>
        </tr>
        <tr className="tableFooter">
            <th>Total</th>
            <th>$</th>
        </tr>
      </table>
    </div>
  );
}
