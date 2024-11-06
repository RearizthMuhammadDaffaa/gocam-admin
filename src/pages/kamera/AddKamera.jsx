import { Box, Button, Container, FormControl, InputBase, MenuItem, NativeSelect, Select, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddKamera = () => {

  const [data,setData] = useState([]);
  const navigate = useNavigate();
  const [name,setName] = useState('');
  const [sewaJam,setSewaJam] = useState(0);
  const [sewaHari,setSewaHari] = useState(0);
  const [cinemacam,setCinemaca] = useState('');
  const [lens,setLens] = useState('');
  const [battery,setBattery] = useState('');
  const [merk,setMerk] = useState('');
  const [img,setImg] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImg(file);
  }

  const getDataMerk = async ()=>{
    const response = await axios.get(`${import.meta.env.VITE_API}merk`)
    setData(response.data)
  }

  const saveKamera = async(e)=>{
    e.preventDefault()
    const formData = new FormData();
    formData.append('name',name)
    formData.append('merk',merk)
    formData.append('lens',lens)
    formData.append('cinemacam',cinemacam)
    formData.append('hPrice',sewaJam)
    formData.append('dPrice',sewaHari)
    formData.append('file',img)
    formData.append('battery',battery)

    try {
      await axios.post(`${import.meta.env.VITE_API}kamera`,formData,{
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
    getDataMerk()
  },[])

  return (
    <Container
    sx={{
      
    }}
    >
      <Typography variant='h6' align='center'>Tambah Data Kamera</Typography>
      <form onSubmit={saveKamera}>
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
         
        <InputBase value={name} onChange={(e)=>setName(e.target.value)} placeholder="Masukan Nama Anda"
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
          Sewa/jam
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
         
        <InputBase type='number' value={sewaJam} onChange={(e)=>setSewaJam(e.target.value)} placeholder="Masukan Nama Anda"
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
          SEWA/HARI
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
         
        <InputBase type='number' value={sewaHari} onChange={(e)=>setSewaHari(e.target.value)} placeholder="Masukan Nama Anda"
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
          CINEMACAM
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
         
        <InputBase value={cinemacam} onChange={(e)=>setCinemaca(e.target.value)} placeholder="Masukan Nama Anda"
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
          LENS
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
         
        <InputBase value={lens} onChange={(e)=>setLens(e.target.value)} placeholder="Masukan Nama Anda"
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
          BATTERY
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
         
        <InputBase value={battery} onChange={(e)=>setBattery(e.target.value)} placeholder="Masukan Nama Anda"
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
          MERK
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
            value={merk}
             onChange={(e)=>setMerk(e.target.value)}
              sx={{
                width:'170px',
                height:'50px'
              }}
            >
              <option>Merk</option>
             {data.map((item)=>(

              <option key={item.id} value={item.name}>{item.name}</option>
             ))}
            </NativeSelect>
          </FormControl>
       
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
         
        <InputBase  onChange={handleFileChange} type='file' placeholder="Masukan Nama Anda"
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

export default AddKamera