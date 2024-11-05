import React from 'react'

const ModalInfo = () => {

  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>ModalInfo</div>
  )
}

export default ModalInfo