import { ArrowBack } from '@mui/icons-material'
import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ListMerk = () => {

  const [data,setData] = useState([]);
  const getData = async ()=>{
    const response = await axios.get(`${import.meta.env.VITE_API}merk`)
    setData(response.data)
    
  }
  useEffect(()=>{  
    getData()
  },[])

  const deletekamera = async (productId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API}merk/${productId}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Container
      sx={{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        paddingY:'100px'
        
      }}
    >
      <Container>
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
         <Link to='/dashboard'>        
          <ArrowBack />
          </Link>
        </Box>

        <Typography align="center" fontSize="16px" fontWeight="500">
          Data Kamera
        </Typography>
      </Box>
      
       </Container>
         <Container
          sx={{
            display:'flex',
            justifyContent:'flex-end'
          }}
         >
          <Link to="/dashboard/addmerk">
          
          <Button>Add New</Button>
          </Link>
          </Container> 
        
        <Container
          sx={{
            height:'100%',
            paddingBottom:'30px'
          }}
        >
        <TableContainer component={Paper}
          
        >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>gambar</TableCell>
            <TableCell align='center'>Name</TableCell>
            <TableCell align="center">Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="center"><img src={row.url} alt="" width='50px'  height='50px'/></TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">
                <Link to={`/dashboard/editmerk/${row.id}`}>
                
                <Button  variant="contained" color='success'>Update</Button>
                </Link>
                <Button  variant="contained" color='error' onClick={()=>deletekamera(row.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Container>

    </Container>
  )
}

export default ListMerk