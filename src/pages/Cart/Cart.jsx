import React from "react";
import "./cart.css";

export default function Cart() {
    

  return (
    <div className="content-Cart">
      <h1 className="title">Cart</h1>
      <button>Add</button>
      <button>Mas</button>

      <table className="table">
      <thead>
        <tr className="tableHeader">
          <th>Game</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Sub Total</th>
        </tr>
      </thead>
      <tbody>      
      </tbody>
      <tfoot>
        <tr className="tableFooter">
            <th>Total</th>
            <th>$</th>
        </tr>
      </tfoot>
      </table>
    </div>
  );
}
