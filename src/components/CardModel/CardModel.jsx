import React, { useState } from "react";
import { Box, Typography, IconButton, Modal, Slide, Grid } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import pic1 from "../../assets/images/1.png";
import pic2 from "../../assets/images/2.png";
import pic3 from "../../assets/images/3.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const ModelBox = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="model-box-title"
        aria-describedby="model-box-description"
        closeAfterTransition
        transitionComponent={Transition}
        sx={{ width: "1000px" }}
      >
        <Slide direction="left" in={open} mountOnEnter unmountOnExit>
          <Box
            sx={{
              position: "absolute",
              top: "0px",
              left: "10%",
              bottom: "0px",
              transform: "translate(-50%, -50%)",
              width: "200%",
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 2,
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: 6,
                left: -50,
                color: "white",
                background: "black",
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <Typography id="model-box-description">
              <Box>
                <Grid container>
                  <Grid
                    mx={2}
                    item
                    lg={4}
                    sx={{ height: "550px", borderRadius: "15px" }}
                  >
                    <Box m={1}>
                      <img
                        src={pic1}
                        style={{
                          height: "500px",
                          marginTop: "10px",
                          width: "730px",
                          borderRadius: "30px",
                        }}
                      ></img>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    mx={1}
                    mr={10}
                    lg={5}
                    sx={{ height: "550px", borderRadius: "15px" }}
                  >
                    <Grid container>
                      <Grid
                        item
                        lg={12}
                        sx={{ height: "250px", borderRadius: "15px" }}
                      >
                        <Box m={1}>
                          <img
                            src={pic2}
                            style={{
                              height: "240px",
                              marginTop: "10px",
                              width: "430px",
                              borderRadius: "30px",
                              marginLeft: "80px",
                            }}
                          ></img>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        lg={12}
                        sx={{ height: "250px", borderRadius: "15px" }}
                      >
                        <img
                          src={pic3}
                          style={{
                            height: "220px",
                            marginTop: "40px",
                            width: "430px",
                            borderRadius: "30px",
                            marginLeft: "80px",
                          }}
                        ></img>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Typography>
          </Box>
        </Slide>
      </Modal>
    </div>
  );
};

export default ModelBox;
