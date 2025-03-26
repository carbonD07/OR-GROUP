'use client';

import dynamic from 'next/dynamic'
import React from 'react'
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"

// Dynamically import heavy components with 1 second minimum loading time
const Navbar = dynamic(() => import("@/components/navbar"), {
  loading: () => <Box sx={{ height: '64px' }}></Box>,
  ssr: true
})

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <Box sx={{ height: '100px' }}></Box>,
  ssr: true
})

// Icons
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"
import CustomizeIcon from "@mui/icons-material/Tune"
import ScaleIcon from "@mui/icons-material/Scale"
import MemoryIcon from "@mui/icons-material/Memory" // AI chip icon
import PsychologyIcon from "@mui/icons-material/Psychology" // AI brain icon
import BiotechIcon from "@mui/icons-material/Biotech" // Innovation icon

export default function About() {
  const reasons = [
    {
      title: "Innovative AI",
      description: "We leverage cutting-edge AI technology to create solutions that are ahead of the curve.",
      icon: <PsychologyIcon fontSize="large" color="primary" />,
    },
    {
      title: "Custom AI Solutions",
      description: "We build tailored automation tools that address your specific business challenges.",
      icon: <CustomizeIcon fontSize="large" color="primary" />,
    },
    {
      title: "Reliable & Scalable",
      description: "Our AI solutions grow with your business, ensuring long-term value and performance.",
      icon: <ScaleIcon fontSize="large" color="primary" />,
    },
  ]

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "white" }}>
      <Navbar />

      <Box component="main" sx={{ flexGrow: 1, color: "black" }}>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "white",
            pt: { xs: 8, sm: 12 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography component="h1" variant="h2" color="black" gutterBottom fontWeight="bold" sx={{ display: 'flex', alignItems: 'center' }}>
                  <MemoryIcon sx={{ mr: 2, fontSize: 40, color: "#03a9f4" }} />
                  About OR GROUP
                </Typography>
                <Typography variant="h5" color="black" paragraph>
                  We're on a mission to transform businesses through intelligent automation and AI-powered solutions.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="/placeholder.svg?height=400&width=500"
                  alt="OR GROUP team"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Mission Section */}
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f5f9ff" }}>
          <Container maxWidth="md">
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography component="h2" variant="h3" color="black" gutterBottom fontWeight="bold">
                Our Mission
              </Typography>
            </Box>
            <Typography
              variant="h5"
              component="p"
              color="black"
              align="center"
              paragraph
              sx={{
                fontStyle: "italic",
                mb: 4,
                px: { xs: 2, md: 8 },
                pb: 2,
                borderBottom: "2px solid",
                borderColor: "#03a9f4",
                display: "inline-block",
              }}
            >
              "OR GROUP is dedicated to building advanced AI solutions that enhance productivity, streamline business
              operations, and improve customer interactions."
            </Typography>
            <Typography variant="body1" color="black" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              We believe that artificial intelligence should be accessible to businesses of all sizes. Our team of AI
              experts, data scientists, and software engineers work together to create solutions that are not only
              powerful but also user-friendly and practical for everyday business use.
            </Typography>
            <Typography variant="body1" color="black" sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              By focusing on real-world applications of AI, we help our clients achieve tangible results: reduced
              operational costs, improved customer satisfaction, and data-driven insights that drive growth and
              innovation.
            </Typography>
          </Container>
        </Box>

        {/* Story Section */}
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="/placeholder.svg?height=400&width=500"
                  alt="OR GROUP journey"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography component="h2" variant="h3" color="black" gutterBottom fontWeight="bold">
                  Our Story
                </Typography>
                <Typography
                  variant="body1"
                  color="black"
                  paragraph
                  sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
                >
                  OR GROUP was founded in 2020 by a team of AI researchers and business consultants who saw the potential
                  for artificial intelligence to revolutionize how businesses operate. What began as a small startup
                  focused on chatbots has evolved into a comprehensive AI solutions provider.
                </Typography>
                <Typography
                  variant="body1"
                  color="black"
                  paragraph
                  sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
                >
                  Our journey has been defined by continuous innovation and a commitment to making AI practical and
                  accessible. We've helped businesses across industries—from e-commerce and healthcare to finance and
                  manufacturing—harness the power of AI to solve complex problems and create new opportunities.
                </Typography>
                <Typography variant="body1" color="black" sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
                  Today, OR GROUP stands at the forefront of the AI revolution, constantly exploring new technologies and
                  applications to help our clients stay ahead in an increasingly competitive landscape.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Why Choose Us Section */}
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f5f9ff" }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography component="h2" variant="h3" color="black" gutterBottom fontWeight="bold">
                Why Choose Us?
              </Typography>
              <Typography variant="h6" color="black" sx={{ maxWidth: 700, mx: "auto" }}>
                What sets OR GROUP apart in the world of AI solutions.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {reasons.map((reason, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      borderRadius: 4,
                      bgcolor: "white",
                      border: "1px solid",
                      borderColor: "#e0e0e0",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{reason.icon}</Box>
                    <Typography gutterBottom variant="h5" component="h3" fontWeight="medium" color="black">
                      {reason.title}
                    </Typography>
                    <Typography color="black">{reason.description}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>

      <Footer />
    </Box>
  )
}

