import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import BodyTable from "../../Components/BodyTable/BodyTable";
import axios from "axios";

export default function Cart() {
  let { products } = useSelector((store) => store.cartReducer);
  let user = useSelector((store) => store.userReducer);
  console.log(user);
  let total = 0;
  if (products.length !== 0) {
    products.map((e) => (total = total + e.price * e.unity));
  }
  const finish = (e) => {
    e.preventDefault();

    let order = {
      products: products,
      user: user.id,
      date: new Date()
    };
    axios
      .post("http://localhost:8080/payment/", order)
      .then((res) => {
        window.location.replace(res.data.init_point);
      })
      .catch((err) => err);
  };
  return (
    <div className="content-Cart">
      {products.length === 0 ? (
        <div className="cont-cart-img">
          <h1 className="title">
            ¡Oops! you don’t have games loaded to the cart...
          </h1>
        </div>
      ) : (
        <h1 className="title">Cart</h1>
      )}

      {products.length === 0 ? (
        <div className="cont-cart-img">
          <img
            className="img-cart"
            src="https://i.postimg.cc/XNpxgJGy/Sinm-removebg-preview.png"
            alt="no product"
          />
        </div>
      ) : (
        <div className="table">
          <div className="tableHeader">
            <div className="carry-title">
              <div className="subTotal">Game</div>
              <div className="subTotal">Sub Total</div>
            </div>
          </div>
          <tbody className="tableBody">
            {products.map((e, i) => (
              <BodyTable game={e} key={i} />
            ))}
          </tbody>
          <tfoot>
            <div className="tableFooter">
              <div className="footer-but">Total</div>
              <div className="footer-but">${total}</div>
              <div className="footer-but">
                <button onClick={finish} className="button">
                  Finish purchase
                </button>
              </div>
            </div>
          </tfoot>
        </div>
      )}
    </div>
  );
}
