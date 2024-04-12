import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../Styles/TripPage.css";
import InputField from '../Components/InputField'
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function FillingField() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Typography
        style={{
          padding: "1rem 4rem",
          fontSize:"1.5rem",
          border: "1px solid white",
          borderRadius: "40px",
          marginTop:"1rem"
        }}
      >
        Day 1 - 1/6/2024 <Button onClick={handleOpen} >+</Button>
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 800,height:500 }}>
            <InputField/>
          {/* <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button> */}

        </Box>
      </Modal>
    </React.Fragment>
  );
}

function DialogBox() {
  return (
    <div>
      
    </div>
  )
}

export default function NestedModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        style={{}}
      >
        <Box
          sx={{
            ...style,
            width: 1400,
            height: 600,
            boxShadow: "0 0 10px 0 white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          classname="modalparent"
        >
          <h2 id="parent-modal-title" style={{fontSize:"3rem"}}>Plan for X days</h2>
          <Box style={{width:"80%",height:"40rem", overflowY:"scroll"}}>
            <FillingField />
            <FillingField />

            
          </Box>
          <div className='btngroup'>
            <Button className='tablebtn' variant="contained" size="medium" sx={{backgroundColor:props.darkmode?"white":"black", color:props.darkmode?"black":"white", borderRadius:"30px  " , ml:2}}>
            Submit
            </Button>
            <Button className='tablebtn' variant="contained" size="medium" sx={{backgroundColor:props.darkmode?"white":"black", color:props.darkmode?"black":"white", borderRadius:"30px  " , ml:2}}>
            Clear
            </Button>
        </div>
        </Box>
      </Modal>
    </div>
  );
}
