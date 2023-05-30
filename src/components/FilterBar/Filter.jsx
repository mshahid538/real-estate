import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Button, Checkbox, Drawer, TextField } from "@mui/material";

const drawerWidth = 540;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function FilterBar({ filter }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CssBaseline />
      <Drawer
        anchor="right"
        open={open}
        variant="permanent"
        sx={{ display: filter ? "none" : "block" }}
      >
        <DrawerHeader></DrawerHeader>
        <Divider />
        <List>
          <ListItem
            disablePadding
            sx={{ display: "block", overflowX: "hidden", marginTop: "70px" }}
            onMouseLeave={() => {
              setOpen(false);
            }}
            onMouseEnter={() => {
              setOpen(true);
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 60,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 50 : "auto",
                  justifyContent: "space-between",
                  display: "flex",
                }}
              >
                <Box>
                  <Typography variant="h5" my={1} sx={{ color: "black" }}>
                    {" "}
                    Filters
                  </Typography>
                </Box>
              </ListItemIcon>
              <ListItemText
                primary="Clear All"
                sx={{ opacity: open ? 1 : 0, color: "#E18194" }}
              />
            </ListItemButton>
          </ListItem>
        </List>

        <Box margin={4}>
          <Typography variant="h5" my={1}>
            Price Range
          </Typography>
          <Typography sx={{ color: "gray" }}>
            The average nightly price is $133
          </Typography>
        </Box>

        <Box margin={4} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography mx={2} sx={{ color: "gray" }}>
            Min Price
            <Box my={1}>
              <TextField placeholder="$0" />
            </Box>
          </Typography>
          <Typography sx={{ color: "gray" }}>
            Max Price
            <Box my={1}>
              <TextField placeholder="$500+" />
            </Box>
          </Typography>
        </Box>
        <Box marginX={4}>
          <Typography variant="h5" marginX={2} my={1}>
            Type of Place
          </Typography>
          <Typography mr={3} sx={{ width: "400px" }}>
            <Box sx={{ display: "flex" }}>
              <Checkbox />
              <Typography mt={3} variant="h5">
                Entire Place
                <Typography sx={{ color: "gray" }}>
                  A place all to yourself
                </Typography>
              </Typography>
            </Box>

            <Box sx={{ display: "flex" }}>
              <Typography variant="h5" my={1}>
                <Checkbox />
                Private room
                <Typography ml={5} sx={{ color: "gray" }}>
                  Your own room in a home or a hotel, plus some shared common
                  spaces.
                </Typography>
              </Typography>
            </Box>

            <Box sx={{ display: "flex" }}>
              <Typography variant="h5" mb={1}>
                <Checkbox />
                Shared room
                <Typography ml={5} sx={{ color: "gray" }}>
                  A sleeping space and common areas that may be shared with
                  others.
                </Typography>
              </Typography>
            </Box>
          </Typography>
        </Box>

        <Box marginX={4}>
          <Typography variant="h5" marginX={2} my={1}>
            Rooms, beds, and baths
            <Typography mt={3} variant="h5">
              Entire Place
            </Typography>
            <Box>
              <Typography my={1} mt={2}>
                Bedrooms
              </Typography>
              <Box>
                <Button
                  sx={{
                    borderRadius: 10,
                    border: "2px solid gray",
                    marginRight: 1,
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Any
                </Button>
                <Button
                  sx={{
                    borderRadius: 10,
                    border: "2px solid gray",
                    marginRight: 1,
                    color: "black",
                  }}
                >
                  1
                </Button>
                <Button
                  sx={{
                    borderRadius: 10,
                    border: "2px solid gray",
                    marginRight: 1,
                    color: "black",
                  }}
                >
                  2
                </Button>
                <Button
                  sx={{
                    borderRadius: 10,
                    border: "2px solid gray",
                    marginRight: 1,
                    color: "black",
                  }}
                >
                  3
                </Button>
                <Button
                  sx={{
                    borderRadius: 10,
                    border: "2px solid gray",
                    marginRight: 1,
                    color: "black",
                  }}
                >
                  4
                </Button>
                <Button
                  sx={{
                    borderRadius: 10,
                    border: "2px solid gray",
                    marginRight: 1,
                    color: "black",
                  }}
                >
                  5+
                </Button>
              </Box>
            </Box>
            <Box>
              <Typography my={1} mt={2}>
                Beds
              </Typography>
              <Box>
                <Button
                  sx={{
                    borderRadius: 10,
                    border: "2px solid gray",
                    marginRight: 1,
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Any
                </Button>
                <Button
                  sx={{
                    borderRadius: 10,
                    border: "2px solid gray",
                    marginRight: 1,
                    color: "black",
                  }}
                >
                  1
                </Button>
                <Button
                  sx={{
                    borderRadius: 10,
                    border: "2px solid gray",
                    marginRight: 1,
                    color: "black",
                  }}
                >
                  2
                </Button>
                <Button
                  sx={{
                    borderRadius: 10,
                    border: "2px solid gray",
                    marginRight: 1,
                    color: "black",
                  }}
                >
                  3
                </Button>
                <Button
                  sx={{
                    borderRadius: 10,
                    border: "2px solid gray",
                    marginRight: 1,
                    color: "black",
                  }}
                >
                  4
                </Button>
                <Button
                  sx={{
                    borderRadius: 10,
                    border: "2px solid gray",
                    marginRight: 1,
                    color: "black",
                  }}
                >
                  5+
                </Button>
              </Box>
            </Box>
            <Box>
              <Typography my={1} mt={2}>
                Bathrooms
              </Typography>
              <Box>
                <Button
                  sx={{
                    borderRadius: 10,
                    border: "2px solid gray",
                    marginRight: 1,
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Any
                </Button>
                <Button
                  sx={{
                    borderRadius: 10,
                    border: "2px solid gray",
                    marginRight: 1,
                    color: "black",
                  }}
                >
                  1
                </Button>
                <Button
                  sx={{
                    borderRadius: 10,
                    border: "2px solid gray",
                    marginRight: 1,
                    color: "black",
                  }}
                >
                  2
                </Button>
                <Button
                  sx={{
                    borderRadius: 10,
                    border: "2px solid gray",
                    marginRight: 1,
                    color: "black",
                  }}
                >
                  3
                </Button>
                <Button
                  sx={{
                    borderRadius: 10,
                    border: "2px solid gray",
                    marginRight: 1,
                    color: "black",
                  }}
                >
                  4
                </Button>
                <Button
                  sx={{
                    borderRadius: 10,
                    border: "2px solid gray",
                    marginRight: 1,
                    color: "black",
                  }}
                >
                  5+
                </Button>
              </Box>
            </Box>
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }} my={4}>
            <Button
              variant="contained"
              sx={{
                width: "400px",
                height: "60px",
                borderRadius: "12px",
                background: "#E2ADB6",
              }}
            >
              Show 836 Homes
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
