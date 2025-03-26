'use client';

import { useEffect, useState } from "react";
import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"

export default function Loading() {
  const [show, setShow] = useState(true);
  
  useEffect(() => {
    // Show the loading spinner for at least 1 second
    const timer = setTimeout(() => {
      setShow(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!show) return null;
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        zIndex: 9999,
      }}
    >
      <CircularProgress color="primary" size={60} thickness={4} />
      <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
        Loading...
      </Typography>
    </Box>
  )
}

