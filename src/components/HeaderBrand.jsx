import { Box, Container, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import sony from "../assets/img/image 1.png"
import axios from 'axios';
import { Link } from 'react-router-dom';

const HeaderBrand = ({type,setSelectedMerk}) => {
  const [data,setData] = useState([]);

  // const getData = async ()=>{
  //   const response = await axios.get('http://localhost:5000/merk')
  //   setData(response.data)
  // }

  const getData = async () => {
    try {
      const response1 = await axios.get(`${import.meta.env.VITE_API}merk`);
      const merkData = response1.data;
  
      const promises = merkData.map(async (item) => {
        const response = await axios.get(`${import.meta.env.VITE_API}kamera/count?merk=${item.name}`);
        return { merk: item, kameraCount: response.data }; // Objek yang berisi nama merek dan jumlah kamera
      });
  
      const combinedData = await Promise.all(promises);
  
      setData(combinedData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  useEffect(()=>{
    getData()
    
  },[])

  

  return (
    <Box 
   
    sx={{display:'flex',marginTop:'15px',flexDirection:'column',paddingX:'7px'}}>
      <Container sx={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'30px'}}>
        <Typography variant='h4' >
          {type === "katalog"? "Katalog" : "Merk"}
        </Typography>

        {type != "katalog"&& <Typography variant='subtitle2'>
        <Link to='/katalog'>
          Lihat Semua
          <ArrowForwardIosIcon sx={{fontSize:'15px'}} />
          </Link> 
        </Typography>}
       
      </Container>
      
      <Container component='div' sx={{display:'flex',overflowX:'scroll',width:'100%',gap:'10px'}}>
    { type == "katalog" && 
     <Box 
           
            component='div'
            onClick={()=>setSelectedMerk('all')}
          sx={{
            display:'flex',
            padding:'21px 0px 21px 0px',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            gap:'12px',
            borderRadius:'20px',
            boxShadow:'0px 4px 5.6px 0px rgba(0, 0, 0, 0.08)',
            minWidth: '150px',
            flexShrink:'0',
            cursor:'pointer'
          }}>
            {/* <img src={item.merk.url} alt="" width="60px" height="11"/> */}
            <Typography variant='subtitle2'>
             Semua Brand
            </Typography>
           
      </Box>}
       {data.map((item)=>(
          <Box 
            key={item.merk.id}
            component='div'
            onClick={()=>setSelectedMerk(item.merk.name)}
          sx={{
            display:'flex',
            padding:'21px 0px 21px 0px',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            gap:'12px',
            borderRadius:'20px',
            boxShadow:'0px 4px 5.6px 0px rgba(0, 0, 0, 0.08)',
            minWidth: '150px',
            flexShrink:'0',
            cursor:'pointer'
          }}>
            <img src={item.merk.url} alt="" width="60px" height="11"/>
            <Typography variant='subtitle2'>
              {item.merk.name}
            </Typography>
            <Typography variant="caption" sx={{color:'#007BFF',fontWeight:'700'}}>
              {item.kameraCount}
            </Typography>
          </Box>
       ))}
        
       
        
      </Container>
      

    </Box>
  )
}

export default HeaderBrand