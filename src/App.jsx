import { useState } from "react";
import {
  Box,
  CssBaseline,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import { RestorePage } from "@mui/icons-material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Katalog from "./pages/Katalog";
import DetailKamera from "./pages/DetailKamera";
import Profile from "./pages/Profile";
import "./app.css";
import Navbar from "./components/Navbar";
import DaysTransaksi from "./pages/DaysTransaksi";
import Dashboard from "./pages/Dashboard";
import ListKamera from "./pages/ListKamera";
import AddKamera from "./pages/kamera/AddKamera";
import EditKamera from "./pages/kamera/EditKamera";
import SearchList from "./pages/SearchList";
import HoursTransaksi from "./pages/HoursTransaksi";
import UserRental from "./pages/UserRental";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassoword";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequiredAuth";
import ListMerk from "./pages/ListMerk";
import AddMerk from "./pages/merk/AddMerk";
import EditMerk from "./pages/merk/EditMerk";

function App() {
  const ROLES = {
    Admin: "admin",
    SuperAdmin: "superadmin",
    User: "user",
  };

  return (

      <Routes>

      <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route element={<Layout />}>
          <Route
            element={
              <RequireAuth allowedRoles={[ROLES.SuperAdmin, ROLES.Admin,ROLES.User]} />
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/katalog" element={<Katalog />} />
            <Route path="/:id" element={<DetailKamera />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/ListKamera" element={<ListKamera />} />
            <Route path="/dashboard/UserRental" element={<UserRental />} />
            <Route path="/dashboard/merk" element={<ListMerk />} />
            <Route path="/dashboard/addkamera" element={<AddKamera />} />
            <Route path="/dashboard/editkamera/:id" element={<EditKamera />} />
            <Route path="/dashboard/addmerk" element={<AddMerk />} />
            <Route path="/dashboard/editmerk/:id" element={<EditMerk />} />
            <Route path="/transaksi/:id" element={<DaysTransaksi />} />
            <Route path="/day/:id" element={<HoursTransaksi />} />
            <Route path="/search/:search" element={<SearchList />} />
          </Route>
        </Route>

       
      </Routes>
 
  );
}

export default App;
