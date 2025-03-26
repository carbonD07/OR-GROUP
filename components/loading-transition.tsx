"use client"

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"

export default function LoadingTransition() {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)
  const [prevPath, setPrevPath] = useState('')

  useEffect(() => {
    if (prevPath && prevPath !== pathname) {
      setLoading(true)
      
      // Force loading state to show for 1 second
      const timer = setTimeout(() => {
        setLoading(false)
      }, 1000)
      
      return () => clearTimeout(timer)
    }
    
    // Update previous path
    setPrevPath(pathname)
  }, [pathname, prevPath])

  if (!loading) return null

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

