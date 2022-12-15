import React from "react";
import { Route, Routes } from "react-router-dom";
import SignInUp from "./Pages/SignInUp";
import AddGame from "./Pages/AddGame";
import Home from "./Pages/Home";

export default function ComponentRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignInUp" element={<SignInUp />} />
      <Route path="/AddGame" element={<AddGame />} />
    </Routes>
  );
}
