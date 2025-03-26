'use client';

import dynamic from 'next/dynamic'
import React from 'react'
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ConstructionIcon from "@mui/icons-material/Construction"
import Link from "next/link"

// Dynamically import heavy components with 1 second minimum loading time
const Navbar = dynamic(() => import("@/components/navbar"), {
  loading: () => <Box sx={{ height: '64px' }}></Box>,
  ssr: true
})

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <Box sx={{ height: '100px' }}></Box>,
  ssr: true
})

export default function ComingSoon() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth="md" sx={{ py: { xs: 10, md: 16 } }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              textAlign: "center",
              border: "1px solid",
              borderColor: "grey.100",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
            }}
          >
            <ConstructionIcon color="secondary" sx={{ fontSize: 80, mb: 3 }} />

            <Typography component="h1" variant="h3" color="text.primary" gutterBottom fontWeight="bold">
              Coming Soon
            </Typography>

            <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: "80%", mx: "auto" }}>
              We are currently working to implement this feature.
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 5 }}>
              Our team is hard at work building this section of our platform. Please check back soon for updates or
              contact us for more information.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              href="/"
              startIcon={<ArrowBackIcon />}
              sx={{ px: 4, py: 1.5 }}
            >
              Return to Home
            </Button>
          </Paper>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}

