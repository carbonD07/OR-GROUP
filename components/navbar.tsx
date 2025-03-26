"use client"

import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MemoryIcon from "@mui/icons-material/Memory" // AI chip icon
import PsychologyIcon from "@mui/icons-material/Psychology" // AI brain icon
import { alpha } from "@mui/material/styles"

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const pathname = usePathname()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar 
      position="sticky" 
      color="default" 
      elevation={0}
      sx={{ 
        bgcolor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid",
        borderColor: "rgba(0, 0, 0, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          {/* Desktop Logo */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 3,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "#03a9f4",
              textDecoration: "none",
              alignItems: "center",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-2px)",
              }
            }}
          >
            <MemoryIcon sx={{ mr: 1.5, fontSize: 30 }} />
            <span style={{ background: "linear-gradient(90deg, #03a9f4, #007ac1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              OR GROUP
            </span>
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: "black",
                "&:hover": {
                  backgroundColor: alpha("#03a9f4", 0.08),
                }
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  borderRadius: 2,
                  mt: 1.5,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  href={page.path}
                  selected={pathname === page.path}
                  sx={{
                    mx: 1,
                    my: 0.5,
                    borderRadius: 1,
                    "&.Mui-selected": {
                      backgroundColor: alpha("#03a9f4", 0.08),
                      color: "#03a9f4",
                    },
                    "&:hover": {
                      backgroundColor: alpha("#03a9f4", 0.08),
                    }
                  }}
                >
                  <Typography textAlign="center" fontWeight={pathname === page.path ? 600 : 400}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Typography
            variant="h5"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "#03a9f4",
              textDecoration: "none",
              alignItems: "center",
            }}
          >
            <MemoryIcon sx={{ mr: 1, fontSize: 24 }} />
            <span style={{ background: "linear-gradient(90deg, #03a9f4, #007ac1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              OR GROUP
            </span>
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                href={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 2,
                  color: pathname === page.path ? "#03a9f4" : "black",
                  display: "block",
                  fontWeight: pathname === page.path ? 600 : 500,
                  fontSize: "1rem",
                  px: 2,
                  position: "relative",
                  "&::after": pathname === page.path ? {
                    content: '""',
                    position: "absolute",
                    width: "70%",
                    height: "3px",
                    bottom: "10px",
                    left: "15%",
                    backgroundColor: "#03a9f4",
                    borderRadius: "10px",
                  } : {},
                  "&:hover": {
                    color: "#03a9f4",
                    backgroundColor: "transparent",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "30%",
                      height: "2px",
                      bottom: "10px",
                      left: "35%",
                      backgroundColor: "#03a9f4",
                      borderRadius: "10px",
                      transition: "width 0.3s ease",
                    },
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* CTA Button */}
          <Box sx={{ flexGrow: 0 }}>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: "black", 
                color: "white",
                borderRadius: "50px",
                px: 3,
                py: 1,
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.35)",
                  transform: "translateY(-3px)",
                }
              }}
              component={Link} 
              href="/contact"
              startIcon={<PsychologyIcon />}
            >
              Get Started
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

