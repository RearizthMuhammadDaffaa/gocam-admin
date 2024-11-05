import { AccountBalanceOutlined, ArrowBack, CreditCardOutlined, PersonOutline } from '@mui/icons-material'
import { Box, Button, Container, InputBase, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const HoursTransaksi = () => {
  const {id} = useParams();
  const [data,setData] = useState({})
  const [hargaTotal,setHargaTotal] = useState(data.daysPrice)
  const [name,setName] = useState('')
  const [noNik,setNoNik] = useState('')
  const [hoursRent,setHoursRent] = useState('')
  const navigate = useNavigate();

  const getData = async () =>{
    const response = await axios.get(`${import.meta.env.VITE_API}kamera/${id}`)
    setData(response.data)
  }

  const handleHarga = (e)=>{
    setHargaTotal(data.daysPrice * e.target.value)
    setHoursRent(e.target.value)
  }

  const saveTransaksi = async(e)=>{
    e.preventDefault()
    const formData = new FormData();
    formData.append('name',name)
    formData.append('noNik',noNik)
    formData.append('hoursRent',hoursRent)
    

    try {
      await axios.post(`${import.meta.env.VITE_API}transaksi`,formData,{
        headers:{
          "Content-type": "multipart/form-data",
        }
      })
      navigate('/dashboard/listkamera')
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    
    
    getData(id)
  },[hargaTotal])

  return (
    <Container sx={{
      height:'100vh',
      width:{md:'50%',sm:"100%"},
    }}>
      <Box display="flex" alignItems="center" gap="40px" padding="25px 0px" width='100%'>
        <Box
          display="flex"
          padding="12px 13px 12px 11px"
          alignItems="center"
          border="1px solid #007bff"
          sx={{
            borderRadius: "20px",
          }}
        >
          <ArrowBack />
        </Box>

        <Typography align="center" fontSize="16px" fontWeight="500">
          Waktu & Tanggal
        </Typography>
      </Box>
      <Container
       sx={{
        width:"100%"
       }}
      >

      </Container>
    <Container
      sx={{
        display:'flex',
        flexDirection:'column',
        alignitems:'center',
        gap:'24px',
        minHeight:'100vh'
      }}
    >
      <form onSubmit={saveTransaksi}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems='flex-start'
        gap="12px"
        alignSelf='stretch'
      >
        <Typography
          fontSize='18px'
          fontWeight='500'
        >
          SEWA PERJAM
        </Typography>
        <Box 
          display='flex'
          alignItems='center'
          gap="24px"
          alignSelf='stretch'
          padding="0px 10px"
          border="1px solid #9b9b9b"
          borderRadius='16px'
        >
         
        <InputBase onChange={(e)=>handleHarga(e)} type='number' placeholder="Berapa jam"/>
        </Box>
        
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems='flex-start'
        gap="12px"
        alignSelf='stretch'
      >
        <Typography
          fontSize='18px'
          fontWeight='500'
        >
          NAMA
        </Typography>
        <Box 
          display='flex'
          alignItems='center'
          gap="24px"
          alignSelf='stretch'
          padding="0px 10px"
          border="1px solid #9b9b9b"
          borderRadius='16px'
        >
          <PersonOutline />
        <InputBase onChange={(e)=>setName(e.target.value)} placeholder="Masukan Nama Anda"/>
        </Box>
        
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems='flex-start'
        gap="12px"
        alignSelf='stretch'
      >
        <Typography
          fontSize='18px'
          fontWeight='500'
        >
          NO NIK
        </Typography>
        <Box 
          display='flex'
          alignItems='center'
          gap="24px"
          alignSelf='stretch'
          padding="0px 10px"
          border="1px solid #9b9b9b"
          borderRadius='16px'
        >
          <CreditCardOutlined />
        <InputBase onChange={(e)=>setNoNik(e.target.value)} placeholder="Masukan NIK Anda"/>
        </Box>
        
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems='flex-start'
        gap="12px"
        alignSelf='stretch'
      >
        <Typography
          fontSize='18px'
          fontWeight='500'
        >
          PEMBAYARAN
        </Typography>
        <Box 
          display='flex'
          alignItems='center'
          gap="24px"
          alignSelf='stretch'
          padding="0px 10px"
          border="1px solid #9b9b9b"
          borderRadius='16px'
        >
          <AccountBalanceOutlined />
        <InputBase placeholder="Masukan Nama Anda"/>
        </Box>
       
      </Box>
      <Button type='submit' variant="contained" sx={{
        display:'flex',
        padding:'12px 8px',
        borderRadius:'16px',
      }}> {hargaTotal} |PESAN SEKARANG</Button>
      </form>
    </Container>
      
    </Container>
  )
}

export default HoursTransaksi