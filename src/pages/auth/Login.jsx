import React, {useEffect, useRef, useState} from "react";

import "./logiform.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginUrl = `${import.meta.env.VITE_API}login`;

    try {
      const response = await axios.post(loginUrl, {
        email: user,
        password: pwd
      }, {
        withCredentials: true
      });
      
      const roles = [response?.data?.user?.role];
      const name = response?.data?.user?.name;

      setAuth({ user, roles, name });
     
      Cookies.set('authuser', JSON.stringify({ user, roles, name }), { expires: 7 }); // Simpan data auth di cookie
      setUser('');
      setPwd('');
      
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
    }
  };


  const [action,setAction]=useState("Sign Up");
    return (
      <div className='container'>
      <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit} action="">
      <div className="inputs">
          
          
          <div className="input">
              {/* <img src={email_icon} alt="" /> */}
              <label htmlFor="">E-mail</label>
              <input type="email" placeholder='Email Id' onChange={(e)=> setUser(e.target.value)}/>
          </div>
          <div className="input">
              {/* <img src={password_icon} alt="" /> */}
              <label htmlFor="">Password</label>
              <input type="password" placeholder='Password' onChange={(e)=> setPwd(e.target.value)} />
          </div>
      </div>
      <Link to="/forgot-password" className="forgot-password">Lost Password? <span>Click Here!</span></Link>
      <div className="submit-container">
          
          <button type="submit" className= "submit">Login</button>
          <Link to="/register" className= "submit" >Register</Link>
      </div>

      </form>
     
  </div>
    )
}

export default Login