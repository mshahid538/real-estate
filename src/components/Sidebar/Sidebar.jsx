import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import TableChartIcon from "@mui/icons-material/TableChart";
import DeckIcon from "@mui/icons-material/Deck";
import {
  GiCampCookingPot,
  GiGraveyard,
  MdOutlinePool,
  TbTower,
  GiIsland,
  MdKitesurfing,
  BsFillClipboardDataFill,
  MdHouseSiding,
  GiSpookyHouse,
  TbBeachOff,
  GiCampingTent,
  CiFilter,
} from "react-icons/all";
import logo from "../../assets/images/logo.jpg";
import profile from "../../assets/images/profile.jpg";
import Home from "../Home";
import { Avatar, Menu, MenuItem, Tooltip } from "@mui/material";
import ViewCozyIcon from "@mui/icons-material/ViewCozy";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Dropdown from "../Dropdown";
import Date from "../DatePicker";
import AddSubBtn from "../addSubBtn/AddSubBtn";
import FilterBar from "../FilterBar";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [menudata] = useState("Home");
  const [anchorElUser, setAnchorElUser] = useState(null);
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [filter, setFilter] = useState(true);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background: `var(--main-bg-color)`,
          color: `$var(--main-text-color)`,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h6" noWrap component="span">
              <img src={logo} alt="" className="logo" />
            </Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Typography
              noWrap
              component="span"
              paddingX={2}
              paddingBottom={2}
              borderBottom={{ borderBottom: "4px solid #9F1428" }}
            >
              Stays
            </Typography>
            <Typography noWrap component="span" paddingX={2}>
              Experiences
            </Typography>
            <Typography noWrap component="span" paddingX={2}>
              Online Experiences
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={profile} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        <Divider />
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton aria-label="Grid" sx={{ borderRadius: 2 }}>
              <ViewCozyIcon />
            </IconButton>
            <IconButton aria-label="List" sx={{ borderRadius: 2 }}>
              <MenuBookIcon fontSize="inherit" />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Box>
              <Dropdown />
            </Box>
            <Box mt={1}>
              <Date />
            </Box>
            <Box mt={2} mx={1}>
              <AddSubBtn />
            </Box>
          </Box>

          <Box>
            <IconButton
              aria-label="filter"
              sx={{ borderRadius: 2 }}
              onClick={() => setFilter(!filter)}
            >
              <CiFilter fontSize="inherit" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader></DrawerHeader>
        <Divider />
        <List sx={{ background: `var(--main-bg-color)` }}>
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
                borderRight: "4px solid #9F1428",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <AddToDriveIcon />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText
                primary="Amazing Views"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DeckIcon />
              </ListItemIcon>
              <ListItemText
                primary="Tiny Homes"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <GiCampCookingPot />
              </ListItemIcon>
              <ListItemText
                primary="Chef's Kitchen"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <MdKitesurfing />
              </ListItemIcon>
              <ListItemText primary="Surfing" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <BsFillClipboardDataFill />
              </ListItemIcon>
              <ListItemText primary="Mansions" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="Luxe" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <GiSpookyHouse />
              </ListItemIcon>
              <ListItemText
                primary="Treehouses"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <GiCampingTent />
              </ListItemIcon>
              <ListItemText primary="Camping" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <TbBeachOff />
              </ListItemIcon>
              <ListItemText
                primary="Beachfront"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <MdHouseSiding />
              </ListItemIcon>
              <ListItemText primary="Farms" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <TbTower />
              </ListItemIcon>
              <ListItemText primary="Castels" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <GiIsland />
              </ListItemIcon>
              <ListItemText primary="Islands" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <GiGraveyard />
              </ListItemIcon>
              <ListItemText
                primary="Vineyards"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <MdOutlinePool />
              </ListItemIcon>
              <ListItemText
                primary="Amazing Pools"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {menudata == "Home" && <Home setFilter={setFilter} />}
        <FilterBar filter={filter} />
      </Box>
    </Box>
  );
}
