"use client";

import React, { useState } from "react";
import {
  AppBar,
  Box,
  ButtonBase,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "./Appbar.module.css";

const navItems = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Patent", id: "patent" },
  { name: "Research", id: "research" },
  { name: "Awards", id: "awards" },
  { name: "Activities", id: "activities" }
];

export default function Appbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the AppBar height (typically 64px)
      const appBarHeight = 64;
      
      // Calculate the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;
      
      // Calculate the current scroll position
      const offsetPosition = elementPosition + window.pageYOffset - appBarHeight;
      
      // Scroll to the element with offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Close the mobile drawer
      setMobileOpen(false);
    }
  };

  const drawerContent = (
    <Box sx={{ textAlign: "center" }}>
      <Typography 
        variant="h6" 
        sx={{ 
          my: 2, 
          cursor: "pointer", 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          letterSpacing: "0.5px",
          fontSize: "1.4rem"
        }} 
        onClick={() => scrollToSection("about")}
      >
        Mahim
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              sx={{ 
                textAlign: "center",
                fontWeight: 600,
                letterSpacing: "0.3px",
                fontSize: "1rem"
              }}
              onClick={() => scrollToSection(item.id)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" position="fixed" sx={{ backgroundColor: 'transparent' }}>
        <Toolbar className={styles.appbar}>
          <div className={styles.appbarContent}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={styles.menuButton}
              sx={{ mr: 2, display: { sm: "none" }, color: "#2b2b2b" }}
            >
              <MenuIcon />
            </IconButton>
            <Box>
              <Typography
                variant="h5"
                component="div"
                className={styles.logo}
                sx={{ 
                  flexGrow: 1, 
                  display: { xs: "none", sm: "flex" }, 
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: { xs: "1.4rem", sm: "1.6rem" },
                  fontWeight: 700,
                  letterSpacing: "0.5px"
                }}
                onClick={() => scrollToSection("about")}
              >
                Mahim
              </Typography>
            </Box>

            <Box
              sx={{ 
                display: { xs: "none", sm: "block" },
                marginLeft: "auto"
              }}
              className={styles.list}
            >
              {navItems.map((item) => (
                <ButtonBase 
                  key={item.name} 
                  className={styles.listItem} 
                  disableRipple
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 600
                  }}
                >
                  {item.name}
                </ButtonBase>
              ))}
            </Box>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { 
            boxSizing: "border-box", 
            width: "80%",
            maxWidth: "300px"
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
