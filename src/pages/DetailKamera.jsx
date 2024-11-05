import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { ArrowBack,Favorite,Star,CalendarMonth,AccessTimeOutlined} from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import '../app.css'
import kamera from "../assets/img/image 7.jpg"
import timeSquare from "../assets/img/Time Square.jpg"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const DetailKamera = () => {
  const [transaksi,setTransaksi] = useState(true);
  const {id} = useParams();
  const [data,setData] = useState({})

  const getData = async () =>{
    const response = await axios.get(`${import.meta.env.VITE_API}kamera/${id}`)
    setData(response.data)
  }

  const [favorite,setFavorite] = useState(false)

  useEffect(()=>{
    getData(id)
  },[])

  

  return (
    <Container  sx={{
      width:{md:'50%',sm:"100%"},
      minHeight:"100vh",
      padding:'0'
    }}  >
    <Container
    maxWidth="sm"
      sx={{
        display:'flex',
        width:'100%',
        flexDirection:'column',
        height:'370px',
        background:'#F2F2F2',
        borderRadius:'0px 0px 30px 30px'
        
      }}
    >
        <Container 
          sx={{
            display:'flex',
            justifyContent:'space-between',
            paddingY:'20px'
          }}
        >
          
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              sx={{
                padding:'12px 13px 12px 11',
                background:'#FFF',
                borderRadius:'20px',
                width:'48px',
                height:'48px'
              }}
            >
              <Link to="/" style={{cursor:'pointer',textDecoration:'none'}}>           
                  <ArrowBack />
              </Link>

            </Box>
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              sx={{
                padding:'12px 13px 12px 11',
                background:'#FFF',
                borderRadius:'20px',
                width:'48px',
                height:'48px'
              }}
            >
            <Box component='div' onClick={()=>setFavorite(!favorite)} sx={{cursor:'pointer'}}>

            <Favorite color={favorite?'error':''} />
            </Box>
            </Box>
          
         
        </Container>
        <Container
          sx={{
            display:'flex',
            justifyContent:'flex-start',
            flexDirection:'column',
          }}
        >
          <Typography variant='h6' fontSize="24px" fontWeight="600">
            {data.name}
          </Typography>
          <Box
            display='flex'
            alignItems='center'
            gap="7px"
          >
            <Star sx={{color:'#F2CF63'}} />
            <Typography
              sx={{
                color:'#0D0D0D',
                fontSize:'14px',
                fontWeight:'400'
              }}
            >
              4.9
            </Typography>
            <Typography
              sx={{
                color:'#ABABAB',
                fontSize:'12px',
                fontWeight:'400'
              }}
            >
             (230 Tanggapan)
            </Typography>
          </Box>
        </Container>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          padding={3}
        >
          <img src={data.url} alt="" width='232px' height='145px'/>
        </Box>
    </Container>
    <Container
    >
      <Typography padding="20px 0px" fontSize='18px' fontWeight='700'>Spesifikasi</Typography>
      <Box 
      component='div'
        display="flex"
        gap='20px'
        sx={{
          overflowX:'scroll',
        }}

       
      >
        <Box
          display='flex'
          flexDirection="column"
          alignItems="flex-start"
          gap="4px"
          width='124px'
          borderRadius='10px'
          border='1px solid #E6E6E6'
          padding={1}
          sx={{
            flexShrink:'0',
          }}
        >
            <Typography
              fontSize='12px'
              fontWeight='700'
            >Cinemacam</Typography>
            <Typography
            fontSize='12px'
            fontWeight='300'
            >{data.cinemacam}p</Typography>
        </Box>
        <Box
          display='flex'
          flexDirection="column"
          alignItems="flex-start"
          gap="4px"
          width='124px'
          borderRadius='10px'
          border='1px solid #E6E6E6'
          padding={1}
          sx={{
            flexShrink:'0',
          }}
        >
            <Typography
              fontSize='12px'
              fontWeight='700'
            >Battery</Typography>
            <Typography
            fontSize='12px'
            fontWeight='300'
            >{data.battery}</Typography>
        </Box>
        <Box
          display='flex'
          flexDirection="column"
          alignItems="flex-start"
          gap="4px"
          width='124px'
          borderRadius='10px'
          border='1px solid #E6E6E6'
          padding={1}
          sx={{
            flexShrink:'0',
          }}
        >
            <Typography
              fontSize='12px'
              fontWeight='700'
            >Lens</Typography>
            <Typography
            fontSize='12px'
            fontWeight='300'
            >{data.lens}</Typography>
        </Box>
       
      </Box>
    </Container>
    <Container
      sx={{
        height:'58%'
      }}
    >
    <Typography padding="20px 0px" fontSize='18px' fontWeight='700'>Pilih Jenis Rental</Typography>
    <Stack
      flexDirection='column'
      alignItems="center"
      justifyContent="center"
     
    >
      <Box
        component='div'
        onClick={()=>setTransaksi(true)}
        display='flex'
        height='80px'
        alignSelf='stretch'
        border={transaksi?'2px solid #007BFF':'2px solid #AEAEAE'}
        sx={{
          background:'#FFF',
          borderRadius:'20px',
          cursor:'pointer'
        }}
      >
        <Box
        style={{}}
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          sx={{
            width:'44px',
            height:'100%',
            background: transaksi? '#CCE4FF':'#F7F7F7',
            borderRadius:'18px 0px 0px 18px'
          }}
          
        >
         <AccessTimeOutlined color={transaksi ? 'primary' :'disabled'}/>
          <Typography fontSize='12px' fontWeight='700' color={transaksi ? "#007BFF" :'#CCC'}>{data.daysPrice}</Typography>
        </Box>
        <Box
          display='flex'
          alignItems='flex-start'
          justifyContent='center'
        marginLeft='10px'
          flexDirection='column'
        >
          <Typography fontWeight='700' fontSize='14px' color={transaksi? '#0D0D0D' : '#ABABAB'}>Rental Harian</Typography>
          <Typography fontWeight='400' fontSize='12px' color='#ABABAB'>Terbaik Untuk Traveling</Typography>
        </Box>

      </Box>

      <Box
        component='div'
        onClick={()=>setTransaksi(false)}
        display='flex'
        height='80px'
        alignSelf='stretch'
        border={!transaksi?'2px solid #007BFF':'2px solid #AEAEAE'}
        marginY={3}
        sx={{
          background:'#FFF',
          borderRadius:'20px',
          cursor:'pointer'
        }}
      >
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          sx={{
            width:'44px',
            height:'100%',
            background: !transaksi? '#CCE4FF':'#F7F7F7',
            borderRadius:'18px 0px 0px 18px'
          }}
        >
    <CalendarMonth
      color={!transaksi ? 'primary' :'disabled'}
    sx={{
      width:'24px',
      height:'24px',
      
      }} />
          <Typography fontSize='12px' fontWeight='700'  color={!transaksi ? "#007BFF" :'#CCC'}>600K</Typography>
        </Box>
        <Box
          display='flex'
          alignItems='flex-start'
          justifyContent='center'
        marginLeft='10px'
          flexDirection='column'
        >
          <Typography fontWeight='700' fontSize='14px' color={!transaksi? '#0D0D0D' : '#ABABAB'}>Rental</Typography>
          <Typography fontWeight='400' fontSize='12px' color='#ABABAB'>Terbaik Untuk Traveling</Typography>
        </Box>

      </Box>

      <Box sx={{
      width:'100%',
      marginBottom:{md:'100px',sm:'0'},
      height:'200px'
    }}>
      <Link to={transaksi? `/transaksi/${id}`:`/day/${id}`}>
      <Button variant='contained' sx={{width:'100%',borderRadius:'16px'}}>Pesan Sekarang</Button>
      </Link>
    </Box>
    </Stack>
    
    </Container>
    </Container>
  )
}

export default DetailKamera