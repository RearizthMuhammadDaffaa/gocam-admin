import { Box, Button, Container, FormControl, InputBase, MenuItem, NativeSelect, Select, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const EditUserRental = () => {

  const [data,setData] = useState([]);
  const navigate = useNavigate();
  const [name,setName] = useState('');
  const [img,setImg] = useState(null);
  const [noNik,setNoNik] = useState("");
  const [startDate,setStartDate] = useState("");
  const [endDate,setEndDate] = useState("");
  const [hours,setHours] = useState("");
  const [status,setStatus] = useState("");
  const { id } = useParams();


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImg(file);
  }



  const getKameraById = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API}transaksi/${id}`);
    setName(response.data.name);
    setNoNik(response.data.noNik); 
    setEndDate(response.data.endDate); 
    setStartDate(response.data.startDate); 
    setHours(response.data.hoursRent); 
    setStatus(response.data.statusPengambilan); 
    // setPreview(response.data.url);
  };

 

  const updatetKamera = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name',name)
   
    formData.append('noNik',noNik)
    formData.append('endDate',endDate)
    formData.append('startDate',startDate)
    formData.append('hoursRent',hours)
    formData.append('statusPengambilan',status)

    // if (img !== originalImg) {
    //   formData.append('img', img);
    // } else {
    //   formData.append('img', originalImg);
    // }
    try {
      await axios.patch(`${import.meta.env.VITE_API}transaksi/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/dashboard/UserRental");
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(()=>{

    getKameraById()
   
  },[])

  return (
    <Container
    sx={{
      
    }}
    >
      <Typography variant='h6' align='center'>Update Data Rental</Typography>
      <form onSubmit={updatetKamera}>
      <Container
      sx={{
        display:'flex',
        flexDirection:'column',
        alignitems:'center',
        gap:'24px',
        minHeight:'100vh',
        width:'50%',
        paddingBottom:'100px'
      }}
    >
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
          NAME
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
         
        <InputBase defaultValue={name} value={name} onChange={(e)=>setName(e.target.value)} placeholder="Masukan Nama Anda"
         sx={{
          width:'200px'
        }}/>
        </Box>
        
      </Box>

       <Box
              display="flex"
              alignItems='center'
              justifyContent='flex-start'
              gap="12px"
              alignSelf='stretch'
            >
              <Typography
                fontSize='18px'
                fontWeight='500'
              >
                Status
              </Typography>
              <Box 
                display='flex'
                alignItems='center'
                justifyContent='center'
                gap="24px"
              
               
               
                borderRadius='16px'
              >
                
                <FormControl>
                  <NativeSelect
                  value={status}
                   onChange={(e)=>setStatus(e.target.value)}
                    sx={{
                      width:'170px',
                      height:'50px'
                    }}
                  >
                    <option>Status Pengamibilan</option>
                   
      
                    <option  value="Belum Diambil">Belum Diambil</option>
                    <option  value="Sudah Diambil">Sudah Diambil</option>
                   
                  </NativeSelect>
                </FormControl>
             
              </Box>
              
            </Box>
    


      
    
      <Button type='submit' variant="contained" sx={{
        display:'flex',
        padding:'12px 8px',
        borderRadius:'16px',
      }}> Tambah</Button>
      {/* <button type='submit'>Tambah</button> */}
    </Container>
      </form>
    </Container>
  )
}

export default EditUserRental