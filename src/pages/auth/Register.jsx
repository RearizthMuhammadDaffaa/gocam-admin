import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const Register = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setErrMsg('');
}, [user, pwd])

const handleSubmit = async (e) => {
  e.preventDefault();
  const RegisterUrl = `${import.meta.env.VITE_API}signup`;
  console.log("Register URL:", RegisterUrl);  // Debugging URL
  try {
      const response = await axios.post(`${RegisterUrl}`,
          {
            name:name,
            email:user,
            password:pwd
          },
        
      );
    
    navigate('/login');
  } catch (err) {
      if (!err?.response) {
          setErrMsg(err.message);
      
      // errRef.current.focus();
  }
}
}
  return (
    <div className='container'>
    <div className="header">
        <div className="text">Register</div>
        <div className="underline"></div>
    </div>
    <form onSubmit={handleSubmit} action="">
    <div className="inputs">
        <div className="input">
            {/* <img src={user_icon} alt="" /> */}
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Name' onChange={(e)=> setName(e.target.value)} />
        </div>
        
        <div className="input">
            {/* <img src={email_icon} alt="" /> */}
            <label htmlFor="">E-mail</label>
            <input type="email" placeholder='Email Id' onChange={(e)=> setUser(e.target.value)}/>
        </div>
        <div className="input">
            {/* <img src={password_icon} alt="" /> */}
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password' onChange={(e)=> setPwd(e.target.value)}/>
        </div>
    </div>
    <Link to="/login" className="forgot-password">Sudah Punya Akun? <span>Login!</span></Link>
    <div className="submit-container">
        <button type='submit' className= "submit" >Sign Up</button>
        
    </div>
    </form>

</div>
  )
}

export default Register