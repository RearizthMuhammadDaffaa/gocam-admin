import {
  Search,
  HomeOutlined,
  ShoppingBagOutlined,
  PersonOutlined,
  Home,
  Dashboard, 
} from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import { BottomNavigation, BottomNavigationAction, Container, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Tambahkan useNavigate
import useAuth from "../hooks/useAuth"; // Pastikan jalur ini benar
import Cookies from "js-cookie";

const Navbar = () => {
  const {auth, setAuth } = useAuth(); // Ambil setAuth dari context
  const navigate = useNavigate(); // Inisialisasi useNavigate
  const [value, setValue] = useState("Home");
  const location = useLocation();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname.startsWith('/katalog')) {
      handleChange('Katalog');
    } else if (pathname.startsWith('/profile')) {
      handleChange('Profile');
    } else if (pathname.startsWith('/dashboard')) {
      handleChange('Dashboard');
    } else {
      handleChange('Home');
    }
  }, [location.pathname]);

  // Fungsi logout
  const handleLogout = () => {
    setAuth({ roles: [], user: null }); // Set auth menjadi kosong
    Cookies.remove("authuser"); // Hapus cookie
    navigate("/login"); // Arahkan ke halaman login
  };



  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "12px 24px",
      }}
      elevation={3}
    >
      <BottomNavigation sx={{ gap: "10px" }} value={value}>
        {/* <Link to="/">
          <BottomNavigationAction
            value="Home"
            label="Home"
            icon={value === "Home" ? <Home color="primary" /> : <HomeOutlined />}
          />
        </Link> */}
        {/* <Link to="/katalog">
          <BottomNavigationAction
            value="Katalog"
            label="Katalog"
            sx={{ color: value === "Katalog" ? "#007BFF" : "" }}
            icon={<ShoppingBagOutlined />}
          />
        </Link> */}
        {/* <Link to="/profile">
          <BottomNavigationAction
            value="Profile"
            label="Profile"
            sx={{ color: value === "Profile" ? "#007BFF" : "" }}
            icon={<PersonOutlined />}
          />
        </Link> */}
        {auth.roles[0] === 'admin' || auth.roles[0] === 'superadmin' && (
             <Link to="/">
             <BottomNavigationAction
               value="Dashboard"
               label="Dashboard"
               sx={{ color: value === "Dashboard" ? "#007BFF" : "" }}
               icon={<Dashboard />}
             />
           </Link>
        )}
       
        {/* Tambahkan tombol Logout */}
       
            <div  onClick={handleLogout}>
            <BottomNavigationAction
              value="Logout"
              label="Logout"
              sx={{color :'red'}}
              onClick={handleLogout}
              icon={<LogoutIcon />} // Anda bisa menggunakan ikon yang berbeda
            />
            </div>
        
        
      </BottomNavigation>
    </Paper>
  );
};

export default Navbar;
