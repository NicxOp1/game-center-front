import React from "react";
import { Route, Routes } from "react-router-dom";
import SignInUp from "./Pages/SignInUp";
import AddGame from "./Pages/AddGame";
import Home from "./Pages/Home";
import Profile from "./Components/Profile/Profile";
import Store from "./Pages/Store/Store";
import NotFoundPage from "./Pages/NotFound";
import ProfileEdit from "./Components/Profile/ProfileEdit";
import Library from "./Pages/LibraryPage/Library";

export default function ComponentRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/SignInUp" element={<SignInUp />} />
      <Route path="/AddGame" element={<AddGame />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/ProfileEdit" element={<ProfileEdit />} />
      <Route path="/Store" element={<Store />} />
      <Route path="/Library" element={<Library />} />
    </Routes>
  );
}
