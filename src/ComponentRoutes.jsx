import React from "react";
import { Route, Routes } from "react-router-dom";
import SignInUp from "./Pages/SignInUp";
import AddGame from "./Pages/AddGame";
import Home from "./Pages/Home";
import Store from "./Pages/Store/Store";

export default function ComponentRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignInUp" element={<SignInUp />} />
      <Route path="/AddGame" element={<AddGame />} />
      <Route path="/Store" element={<Store />} />
    </Routes>
  );
}
