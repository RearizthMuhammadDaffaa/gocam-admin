import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HeaderBrand from "../components/HeaderBrand";
import List from '../components/List'
import axios from "axios";
import { Container } from "@mui/material";

const Katalog = () => {
  const [data,setData] = useState([]);
  const [selectedMerk ,setSelectedMerk] = useState('all')
  // const [merk,setMerk] = useState([])

  // const getDataMerk = async ()=>{
  //   const response = await axios.get('http://localhost:5000/merk')
  //   setMerk(response.data)
  // }
  const getData = async ()=>{
    if(selectedMerk == 'all') {
      const response = await axios.get(`${import.meta.env.VITE_API}kamera`)
      setData(response.data)
    } else{
      const response = await axios.get(`${import.meta.env.VITE_API}kamera/sort?merk=${selectedMerk}`)
    setData(response.data)
    }
    
    
  }
  useEffect(()=>{  
    getData()
    
  },[selectedMerk])
  return (
    <Container 
    sx={{
      width:{md:'100%',sm:"100%"},
     
    }}
    >
      <HeaderBrand type="katalog" selectedMerk ={selectedMerk} setSelectedMerk={setSelectedMerk}/>
      {data.map((item)=>(
          <List kamera={item} key={item.id}  />
      ))}
      
    </Container>
  );
};

export default Katalog;
