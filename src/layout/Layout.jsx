import React from "react";
import Header from "./header/Header";
import { Footer } from "./Footer/Footer";

export default function Layout(props) {
  return (
    <div className="App">
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
