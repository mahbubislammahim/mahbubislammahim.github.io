"use client";

import React, { useEffect, useRef, useState } from "react";
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
import { primaryAlpha, siteTheme } from "@/src/theme/siteTheme";

const navItems = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Patent", id: "patent" },
  { name: "Research", id: "research" },
  { name: "Awards", id: "awards" },
  { name: "Activities", id: "activities" },
  { name: "Contact", id: "contact" },
];

const APP_BAR_OFFSET = 58;

function getSectionTop(section: HTMLElement): number {
  return section.getBoundingClientRect().top + window.scrollY;
}

export default function Appbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navItems[0].id);
  const pendingSectionRef = useRef<string | null>(null);

  useEffect(() => {
    let scrollEndTimer: number | undefined;

    const updateActiveSection = () => {
      const referenceLine = window.scrollY + APP_BAR_OFFSET;
      let current = navItems[0].id;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        if (getSectionTop(section) <= referenceLine + 1) {
          current = item.id;
        }
      }

      setActiveSection(current);
    };

    const onScroll = () => {
      if (pendingSectionRef.current) {
        setActiveSection(pendingSectionRef.current);
      } else {
        updateActiveSection();
      }

      if (scrollEndTimer !== undefined) {
        window.clearTimeout(scrollEndTimer);
      }
      scrollEndTimer = window.setTimeout(() => {
        pendingSectionRef.current = null;
        updateActiveSection();
      }, 120);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      if (scrollEndTimer !== undefined) {
        window.clearTimeout(scrollEndTimer);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const scrollToSection = (sectionId: string) => {
    pendingSectionRef.current = sectionId;
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition = getSectionTop(element) - APP_BAR_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

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
              selected={activeSection === item.id}
              sx={{
                textAlign: "center",
                fontWeight: 600,
                letterSpacing: "0.3px",
                fontSize: "1rem",
                "&.Mui-selected": {
                  backgroundColor: primaryAlpha(0.12),
                  color: siteTheme.primary,
                },
                "&.Mui-selected:hover": {
                  backgroundColor: primaryAlpha(0.18),
                },
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
        <Toolbar className={styles.appbar} disableGutters>
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
                  className={`${styles.listItem} ${
                    activeSection === item.id ? styles.listItemActive : ""
                  }`}
                  disableRipple
                  aria-current={activeSection === item.id ? "page" : undefined}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
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
