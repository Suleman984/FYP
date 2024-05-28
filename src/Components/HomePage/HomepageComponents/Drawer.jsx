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
import React, { useState } from "react";
import DataComponent from "../../ExploreBusiness/Datacomponent";
import EcommerceToolsPage from "../../ToolsandTech/ToolsandTechnology";
import UrlInputForm from "../../WebsiteAnalytics/InputDomain";
const drawerWidth = 240;

export default function SideDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(<Homepage />);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (component) => {
    setSelectedComponent(component);
    setMobileOpen(false); // Close the drawer after selecting a component
  };

  const drawer = (
    <div style={{ backgroundColor: "#757575", color: "#fff", height: "100%" }}>
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
          { text: "Register", component: <EcommerceToolsPage /> },
          { text: "Explore Business", component: <DataComponent /> },
          { text: "Tools and Technologies", component: <EcommerceToolsPage /> },
        ].map(({ text, component }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleListItemClick(component)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
