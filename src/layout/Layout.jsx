import React from "react";
import Header from "./Header/Header";
import { Footer } from "./Footer/Footer";

export default function Layout(props) {
  console.log(props);
  return (
    <div className="App">
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
