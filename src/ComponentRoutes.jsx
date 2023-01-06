import React from "react";
import { Route, Routes } from "react-router-dom";
import SignInUp from "./Pages/SignInUp";
import AddGame from "./Pages/AddGame";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart/Cart";
import Profile from "./Components/Profile/Profile";
import Store from "./Pages/Store/Store";
import NotFoundPage from "./Pages/NotFound";
import ProfileEdit from "./Components/Profile/ProfileEdit";
import Library from "./Pages/LibraryPage/Library";
import GameDitails from "./Pages/Ditails/GameDitails";
import { useSelector } from "react-redux";
import ProtectedRoute from "./Components/ProtectedRoute";

export default function ComponentRoutes() {
  let user = useSelector((store) => store.userReducer);
  let admin = user.role === "admin";
  let logged = user.logged;

  return (
    <Routes>
      {/*  NoLogin-Login  */}
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route
        element={<ProtectedRoute isAllowed={!logged} reDirect={"/Profile"} />}
      >
        <Route path="/SignInUp" element={<SignInUp />} />
      </Route>
      
      <Route path="/Ditails/:id" element={<GameDitails />} />
      <Route path="/Store" element={<Store />} />
      {/* End NoLogin-Login  */}
      {/* {/* Users Login */}
      <Route
        element={<ProtectedRoute isAllowed={!!logged} reDirect={"/SignInUp"} />}
      >
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ProfileEdit" element={<ProfileEdit />} />
        <Route path="/Library" element={<Library />} />
      </Route>
      {/* End Users Login */}
      {/*  Admin */}
      <Route element={<ProtectedRoute isAllowed={!!admin} reDirect="/" />}>
        <Route path="/AddGame" element={<AddGame />} />
      </Route>
      {/*  End Admin */}
    </Routes>
  );
}
