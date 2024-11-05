import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Stack, Typography } from '@mui/material'
import React from 'react'
import kamera from "../assets/img/image 6.png"
import { useParams,Link } from 'react-router-dom'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const List = ({kamera}) => {

  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (  

      <Stack direction='column' 
      spacing={3} sx={{padding:'40px 20px',gap:'30px',margin:'40px 0px'}}>
        <Box sx={{
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center',
          gap:'20px',
          padding:'13px 16px 5px 16px',
          borderRadius:'20px',
          boxSizing:'border-box',
          background:'#F2F2F2'}}>
          <Container sx={{display:'flex',justifyContent:'space-between',position:'relative'}}>
            <Typography variant='h5'>
              {kamera.name}
            </Typography>
            <img src={kamera.url} alt="" 
            width="150px" 
            height="150px" 
            style={{
              position:'absolute',
              right:'-20px',
              top:'-65px'
              }}/>
          </Container>

          <Container sx={{marginTop:'30px',boxSizing:'border-box'}}>
          <Typography sx={{color:'#ABABAB',fontSize:'14px'}}>
            {kamera.cinemacam} <span>|</span> {kamera.battery} <span>|</span> {kamera.lens} 
          </Typography>
          </Container>
          <Container sx={{display:'flex',justifyContent:'center',paddingBottom:'15px'}}>
            <Link to={`/${kamera.id}`} style={{width:'100%'}}>
              <Button sx={{width:'100%'}} variant='contained' >Rental</Button>
            </Link>
            <Link style={{width:'100%'}}>
            <Button variant='outlined' sx={{width:'100%',marginLeft:'10px'}} onClick={handleClickOpen}>Info</Button>
            </Link>
          </Container>

          <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        
      >
       
        <DialogContent >
          
        <Card sx={{ height: '530px',width:'400px'}}>
      <CardMedia
        sx={{ height: '50%',width:"100%"}}
        image={kamera.url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {kamera.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
              cinemacam:{kamera.cinemacam}
        </Typography>
        <Typography variant="h6" color="text.secondary">
              Merk:{kamera.merk}
        </Typography>
        <Typography variant="h6" color="text.secondary">
              lens:{kamera.lens}
        </Typography>
        <Typography variant="h6" color="text.secondary">
              battery:{kamera.battery}
        </Typography>
        <Typography variant="h6" color="text.secondary">
              harga/jam:{kamera.hoursPrice}
        </Typography>
        <Typography variant="h6" color="text.secondary">
              harga/hari:{kamera.daysPrice}
        </Typography>
      </CardContent>
      
    </Card>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
        </Box>
      
       
       
      </Stack>
 
  )
}

export default List