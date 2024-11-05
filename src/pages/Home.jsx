import { Search } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Box, Container } from '@mui/material'
import List from '../components/List'
import "./../app.css"
import HeaderBrand from '../components/HeaderBrand'
import axios from 'axios';
import Navbar from '../components/Navbar'

const Home = () => {
  const [data,setData] = useState([]);
  const getData = async ()=>{
    const response = await axios.get(`${import.meta.env.VITE_API}kamera`)
    setData(response.data)
    
  }
  useEffect(()=>{  
    getData()
  },[])
  return (
   <Container 
    sx={{
      width:{md:'100%',sm:"100%"},
     
    }}
   >
      <Header />
      <HeaderBrand />
      {data.map((item)=>(
        <List kamera={item} key={item.id} />
      ))}
   
   </Container>
  )
}

export default Home