import styled from '@emotion/styled';
import { Search ,SearchOff} from '@mui/icons-material'
import { Box ,AppBar,Toolbar,Stack, ListItem, TextField,IconButton, Typography, Container, InputBase, Button} from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';




const Header = () => {

  const [search,setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = ()=>{
    if(search){
      navigate(`/search/${search}`)
      setSearch('')
    }
  }

  return (
    <Box sx={{ display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 20px'}}>
      <Container sx={{display:'flex',position:'relative',borderRadius:'20px' ,width:'100%',background:"#F2F2F2"}}>
        {/* <form onSubmit={handleSearch}> */}
      <InputBase
          id="filled-search"
          placeholder='Cari'
          onChange={(e)=>setSearch(e.target.value)}
          sx={{
            width:'200px',
            padding:'12px 0px',
            alignItems:'center',
            gap:'8px',
            borderRadius:'20px',
            outline:'none',
            marginLeft:'20px',
            flex:'1'
          }}
        />
        <Button onClick={handleSearch}  sx={{position:'absolute',top:'10px',left:'-10px'}}>

        <Search />
        </Button>
        
      </Container>
      <Container sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'25%'}}>
        <img src='data:image/png;base64,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' width='48px' height='48px'/>
      </Container>
    </Box>
  )
}

export default Header