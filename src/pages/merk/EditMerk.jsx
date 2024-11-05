import { Box, Button, Container, FormControl, InputBase, MenuItem, NativeSelect, Select, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const EditMerk = () => {

  const [data,setData] = useState([]);
  const navigate = useNavigate();
  const [name,setName] = useState('');
  const [img,setImg] = useState(null);
  const { id } = useParams();


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImg(file);
  }



  const getKameraById = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API}merk/${id}`);
    setName(response.data.name);
    setImg(response.data.images); 
    // setPreview(response.data.url);
  };

 

  const updatetKamera = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name',name)
   
    formData.append('file',img)

    // if (img !== originalImg) {
    //   formData.append('img', img);
    // } else {
    //   formData.append('img', originalImg);
    // }
    try {
      await axios.patch(`${import.meta.env.VITE_API}merk/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/dashboard/merk");
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
      <Typography variant='h6' align='center'>Tambah Data Kamera</Typography>
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
        flexDirection="column"
        alignItems='flex-start'
        gap="12px"
        alignSelf='stretch'
       
      >
        <Typography
          fontSize='18px'
          fontWeight='500'
        >
          Images
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
         
        <InputBase  defaultValue={img} onChange={handleFileChange} type='file' placeholder="Masukan Nama Anda"
         sx={{
          width:'200px'
        }}/>
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

export default EditMerk