import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const ResetPassword = () => {
  const { setAuth } = useAuth();
  const {token} = useParams();
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
  const loginUrl = `${import.meta.env.VITE_API}reset-password/${token}`;
  
  try {
      const response = await axios.post(`${loginUrl}`,
          {
            password:pwd
          }
      );
      console.log("berhasil");
      setMsg("Verfikasi Reset Password sudah dikirim ke Email");
      navigate('/login')
  } catch (err) {
      if (!err?.response) {
          setErrMsg('No Server Response');
      }
  }
}
  return (
    <div className='container'>
    <div className="header">
        <div className="text">Reset Password</div>
        <div className="underline"></div>
    </div>

    <form onSubmit={handleSubmit} action="">
    <div className="inputs">
        
        
        <div className="input">
                {/* <img src={password_icon} alt="" /> */}
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Password' onChange={(e) => setPwd(e.target.value)}/>
            </div>
           
        </div>
        <div className="submit-container">
            <button type='submit' className= "submit" >Reset Password</button>
            
        </div>
    </form>
   
</div>
  )
}

export default ResetPassword