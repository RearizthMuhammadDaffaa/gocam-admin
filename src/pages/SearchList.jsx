import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import List from '../components/List'

const SearchList = () => {
  const [data,setData] = useState([])
  const {search} = useParams();

  const getData = async()=>{
    const response = await axios.get(`${import.meta.env.VITE_API}kamera/search?name=${search}`)
    setData(response.data)
  }

  useEffect(()=>{
    getData()
   
  },[search])

  


  return (
   <Container
    sx={{
      width:{md:'50%',sm:'100%'}
    }}
   >
    <Header />
   
    {data.map((item)=>(
      <List kamera={item}/>
    ))}


   </Container>
  )
}

export default SearchList