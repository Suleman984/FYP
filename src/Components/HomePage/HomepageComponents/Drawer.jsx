import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Homepage from "./Homepage";
import React, { useEffect, useState } from "react";
import DataComponent from "../../ExploreBusiness/Datacomponent";
import EcommerceToolsPage from "../../ToolsandTech/ToolsandTechnology";
import UrlInputForm from "../../WebsiteAnalytics/InputDomain";
import { auth, db } from '../../Authentication/firebase';
import LoginScreen from "../../Authentication/Login/LoginScreen";

const drawerWidth = 240;

export default function SideDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(<Homepage />);
  const [userDetails, setUserDetails] = useState(null);

  const fetchCredentials = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserDetails(user.email);
      } else {
        setUserDetails(null);
      }
    });
  };

  useEffect(() => {
    fetchCredentials();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (text, component) => {
    if (text === "Logout") {
      handleLogout();
    } else {
      setSelectedComponent(component);
      setMobileOpen(false); // Close the drawer after selecting a component
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = '/login';
    } catch (error) {
      console.log(error);
    }
  };

  const drawer = (
    <div style={{ backgroundColor: "#757575", color: "#fff", height: "100%", position: "relative" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "64px",
        }}
      >
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
          ECOMHUB
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {[
          { text: "Website Analytics", component: <UrlInputForm /> },
          { text: "Notifications", component: <EcommerceToolsPage /> },
          { text: "Explore Business", component: <DataComponent /> },
          { text: "Tools and Technologies", component: <EcommerceToolsPage /> },
          { text: "Logout", component: null },
        ].map(({ text, component }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleListItemClick(text, component)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ position: "absolute", bottom: 0, width: "100%", padding: 2, backgroundColor: "#757575", color: "#fff", textAlign: "center" }}>
        User: {userDetails}
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#757575",
              color: "#fff",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#E0E0E0",
        }}
      >
        {React.cloneElement(selectedComponent, { sx: { width: "100%" } })}
      </Box>
    </Box>
  );
}
