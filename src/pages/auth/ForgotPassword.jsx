import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const ForgotPassword = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [msg,setMsg] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setErrMsg('');
}, [user, pwd])

const handleSubmit = async (e) => {
  e.preventDefault();
  const loginUrl = `${import.meta.env.VITE_API}forgot-password`;
  console.log("Login URL:", loginUrl);  // Debugging URL
  try {
      const response = await axios.post(`${loginUrl}`,
          {
            email:user
          }
      );
      console.log("berhasil");
      setMsg("Verfikasi Reset Password sudah dikirim ke Email");
  } catch (err) {
      if (!err?.response) {
          setErrMsg('No Server Response');
      }
  }
}
  return (
    <div className='container'>
    <div className="header">
        <div className="text">Forgot Password</div>
        <div className="underline"></div>
    </div>
    <form onSubmit={handleSubmit} action="">
    <div className="inputs">
        
        
        <div className="input">
            {/* <img src={email_icon} alt="" /> */}
            <label htmlFor="">E-mail</label>
            <input type="email" placeholder='Email Id' onChange={(e)=> setUser(e.target.value)} />
        </div>
       
    </div>
    <Link to="/login" className="forgot-password">Sudah Punya Akun? <span>Login!</span></Link>
    <div className="submit-container">
        <button type='submit' className= "submit" >Send</button>
        
    </div>
    </form>
    
</div>
  )
}

export default ForgotPassword