import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import profile from "../assets/img/image 1.png";
import userImg from "../assets/img/user-edit.jpg";
import logoutImg from "../assets/img/tabler-icon-logout.jpg";
import settingsImg from "../assets/img/settings.jpg";
import aboutUs from "../assets/img/tabler-icon-info-circle-filled.jpg";
import helpImg from "../assets/img/id.jpg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Profile = () => {
  return (
    <Container direction="column" 
    justifyContent='center'
    sx={{
      width:{md:'100%',sm:"100%"},
     
    }}
    >
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <h4>Profile</h4>
      </Container>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding={5}
        gap="12px"

      >
        <img
          src="data:image/png;base64,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"
          alt=""
          width="102px"
          height="102px"
          style={{ borderRadius: "59px" }}
        />
        <Typography
          variant="h6"
          fontSize="16px"
          lineHeight="28px"
          fontWeight="600"
          align="left"
        >
          NAMA SAYA ADALAH
        </Typography>
      </Box>

      <Box 
      display="flex" 
      flexDirection="column" 
      gap="24px"
        sx={{height:'80vh',padding:'20px'}}
      >
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          gap='14px'
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="44" height="44" rx="22" fill="#E3ECF5" />
            <path
              d="M16 31V29C16 27.9391 16.4214 26.9217 17.1716 26.1716C17.9217 25.4214 18.9391 25 20 25H23.5M18 17C18 18.0609 18.4214 19.0783 19.1716 19.8284C19.9217 20.5786 20.9391 21 22 21C23.0609 21 24.0783 20.5786 24.8284 19.8284C25.5786 19.0783 26 18.0609 26 17C26 15.9391 25.5786 14.9217 24.8284 14.1716C24.0783 13.4214 23.0609 13 22 13C20.9391 13 19.9217 13.4214 19.1716 14.1716C18.4214 14.9217 18 15.9391 18 17ZM28.42 25.61C28.615 25.415 28.8465 25.2603 29.1013 25.1547C29.3561 25.0492 29.6292 24.9949 29.905 24.9949C30.1808 24.9949 30.4539 25.0492 30.7087 25.1547C30.9635 25.2603 31.195 25.415 31.39 25.61C31.585 25.805 31.7397 26.0365 31.8452 26.2913C31.9508 26.5461 32.0051 26.8192 32.0051 27.095C32.0051 27.3708 31.9508 27.6439 31.8452 27.8987C31.7397 28.1535 31.585 28.385 31.39 28.58L28 32H25V29L28.42 25.61Z"
              stroke="#007BFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <Typography 
            fontSize='14px'
            fontWeight='500'
            lineHeight='16px'
            flexGrow={1}
          
          >
            Update Profil
          </Typography>
          <ArrowForwardIosIcon sx={{fontSize:'15px'}} />
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          gap='14px'
        >
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#E3ECF5"/>
<path d="M25 18H27M25 22H27M17 26H27M13 17C13 16.2044 13.3161 15.4413 13.8787 14.8787C14.4413 14.3161 15.2044 14 16 14H28C28.7956 14 29.5587 14.3161 30.1213 14.8787C30.6839 15.4413 31 16.2044 31 17V27C31 27.7956 30.6839 28.5587 30.1213 29.1213C29.5587 29.6839 28.7956 30 28 30H16C15.2044 30 14.4413 29.6839 13.8787 29.1213C13.3161 28.5587 13 27.7956 13 27V17ZM17 20C17 20.5304 17.2107 21.0391 17.5858 21.4142C17.9609 21.7893 18.4696 22 19 22C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20C21 19.4696 20.7893 18.9609 20.4142 18.5858C20.0391 18.2107 19.5304 18 19 18C18.4696 18 17.9609 18.2107 17.5858 18.5858C17.2107 18.9609 17 19.4696 17 20Z" stroke="#007BFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          <Typography 
            fontSize='14px'
            fontWeight='500'
            lineHeight='16px'
            flexGrow={1}
          
          >
            Help Center
          </Typography>
          <ArrowForwardIosIcon sx={{fontSize:'15px'}} />
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          gap='14px'
        >
 <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#E3ECF5"/>
<path d="M20.325 14.317C20.751 12.561 23.249 12.561 23.675 14.317C23.7389 14.5808 23.8642 14.8258 24.0407 15.032C24.2172 15.2382 24.4399 15.3999 24.6907 15.5037C24.9414 15.6076 25.2132 15.6509 25.4838 15.6299C25.7544 15.6089 26.0162 15.5243 26.248 15.383C27.791 14.443 29.558 16.209 28.618 17.753C28.4769 17.9847 28.3924 18.2463 28.3715 18.5168C28.3506 18.7872 28.3938 19.0588 28.4975 19.3094C28.6013 19.56 28.7627 19.7826 28.9687 19.9591C29.1747 20.1355 29.4194 20.2609 29.683 20.325C31.439 20.751 31.439 23.249 29.683 23.675C29.4192 23.7389 29.1742 23.8642 28.968 24.0407C28.7618 24.2172 28.6001 24.4399 28.4963 24.6907C28.3924 24.9414 28.3491 25.2132 28.3701 25.4838C28.3911 25.7544 28.4757 26.0162 28.617 26.248C29.557 27.791 27.791 29.558 26.247 28.618C26.0153 28.4769 25.7537 28.3924 25.4832 28.3715C25.2128 28.3506 24.9412 28.3938 24.6906 28.4975C24.44 28.6013 24.2174 28.7627 24.0409 28.9687C23.8645 29.1747 23.7391 29.4194 23.675 29.683C23.249 31.439 20.751 31.439 20.325 29.683C20.2611 29.4192 20.1358 29.1742 19.9593 28.968C19.7828 28.7618 19.5601 28.6001 19.3093 28.4963C19.0586 28.3924 18.7868 28.3491 18.5162 28.3701C18.2456 28.3911 17.9838 28.4757 17.752 28.617C16.209 29.557 14.442 27.791 15.382 26.247C15.5231 26.0153 15.6076 25.7537 15.6285 25.4832C15.6494 25.2128 15.6062 24.9412 15.5025 24.6906C15.3987 24.44 15.2373 24.2174 15.0313 24.0409C14.8253 23.8645 14.5806 23.7391 14.317 23.675C12.561 23.249 12.561 20.751 14.317 20.325C14.5808 20.2611 14.8258 20.1358 15.032 19.9593C15.2382 19.7828 15.3999 19.5601 15.5037 19.3093C15.6076 19.0586 15.6509 18.7868 15.6299 18.5162C15.6089 18.2456 15.5243 17.9838 15.383 17.752C14.443 16.209 16.209 14.442 17.753 15.382C18.753 15.99 20.049 15.452 20.325 14.317Z" stroke="#007BFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 22C19 22.7956 19.3161 23.5587 19.8787 24.1213C20.4413 24.6839 21.2044 25 22 25C22.7956 25 23.5587 24.6839 24.1213 24.1213C24.6839 23.5587 25 22.7956 25 22C25 21.2044 24.6839 20.4413 24.1213 19.8787C23.5587 19.3161 22.7956 19 22 19C21.2044 19 20.4413 19.3161 19.8787 19.8787C19.3161 20.4413 19 21.2044 19 22Z" stroke="#007BFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          <Typography 
            fontSize='14px'
            fontWeight='500'
            lineHeight='16px'
            flexGrow={1}
          
          >
            Settings
          </Typography>
          <ArrowForwardIosIcon sx={{fontSize:'15px'}} />
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          gap='14px'
        >
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#E3ECF5"/>
<path d="M22 12C27.523 12 32 16.477 32 22C32.0021 24.6255 30.9715 27.1464 29.1309 29.0186C27.2902 30.8908 24.7872 31.9641 22.162 32.0066C19.5369 32.0491 17.0003 31.0576 15.1 29.246C13.1997 27.4344 12.088 24.9482 12.005 22.324L12 22L12.004 21.72C12.152 16.327 16.57 12 22 12ZM22 21H21L20.883 21.007C20.64 21.0359 20.4159 21.153 20.2534 21.336C20.0909 21.519 20.0011 21.7552 20.0011 22C20.0011 22.2448 20.0909 22.481 20.2534 22.664C20.4159 22.847 20.64 22.9641 20.883 22.993L21 23V26L21.007 26.117C21.0333 26.3402 21.1341 26.5481 21.293 26.707C21.4519 26.8659 21.6598 26.9667 21.883 26.993L22 27H23L23.117 26.993C23.3402 26.9667 23.5481 26.8659 23.707 26.707C23.8659 26.5481 23.9667 26.3402 23.993 26.117L24 26L23.993 25.883C23.9691 25.679 23.8829 25.4873 23.7462 25.3339C23.6095 25.1806 23.4289 25.0731 23.229 25.026L23.117 25.006L23 25V22L22.993 21.883C22.9667 21.6598 22.8659 21.4519 22.707 21.293C22.5481 21.1341 22.3402 21.0333 22.117 21.007L22 21ZM22.01 18L21.883 18.007C21.64 18.0359 21.4159 18.153 21.2534 18.336C21.0909 18.519 21.0011 18.7552 21.0011 19C21.0011 19.2448 21.0909 19.481 21.2534 19.664C21.4159 19.847 21.64 19.9641 21.883 19.993L22 20L22.127 19.993C22.37 19.9641 22.5941 19.847 22.7566 19.664C22.9191 19.481 23.0089 19.2448 23.0089 19C23.0089 18.7552 22.9191 18.519 22.7566 18.336C22.5941 18.153 22.37 18.0359 22.127 18.007L22.01 18Z" fill="#007BFF"/>
</svg>
          <Typography 
            fontSize='14px'
            fontWeight='500'
            lineHeight='16px'
            flexGrow={1}
          
          >
            About Our Team
          </Typography>
          <ArrowForwardIosIcon sx={{fontSize:'15px'}} />
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          gap='14px'
        >
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#E3ECF5"/>
<path d="M24 18V16C24 15.4696 23.7893 14.9609 23.4142 14.5858C23.0391 14.2107 22.5304 14 22 14H15C14.4696 14 13.9609 14.2107 13.5858 14.5858C13.2107 14.9609 13 15.4696 13 16V28C13 28.5304 13.2107 29.0391 13.5858 29.4142C13.9609 29.7893 14.4696 30 15 30H22C22.5304 30 23.0391 29.7893 23.4142 29.4142C23.7893 29.0391 24 28.5304 24 28V26M19 22H31M31 22L28 19M31 22L28 25" stroke="#007BFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          <Typography 
            fontSize='14px'
            fontWeight='500'
            lineHeight='16px'
            flexGrow={1}
          
          >
           Keluar
          </Typography>
          
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
