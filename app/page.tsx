import dynamic from 'next/dynamic'
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import Link from "next/link"

// Dynamically import heavy components
const Navbar = dynamic(() => import("@/components/navbar"), {
  loading: () => <Box sx={{ height: '64px' }}></Box>,
  ssr: true
})

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <Box sx={{ height: '100px' }}></Box>,
  ssr: true
})

// Icons
import SmartToyIcon from "@mui/icons-material/SmartToy"
import AutomationIcon from "@mui/icons-material/Settings"
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver"
import BarChartIcon from "@mui/icons-material/BarChart"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import SpeedIcon from "@mui/icons-material/Speed"
import ScaleIcon from "@mui/icons-material/Scale"
import TouchAppIcon from "@mui/icons-material/TouchApp"
import SecurityIcon from "@mui/icons-material/Security"
import PsychologyIcon from "@mui/icons-material/Psychology"
import MemoryIcon from "@mui/icons-material/Memory"
import BiotechIcon from "@mui/icons-material/Biotech"
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions"

// Dynamically import card components
const ServiceCard = dynamic(() => import("@/components/service-card"), { 
  loading: () => <Box sx={{ height: '250px', bgcolor: 'background.paper', borderRadius: 2 }}></Box>,
  ssr: true
})

const BenefitCard = dynamic(() => import("@/components/benefit-card"), {
  loading: () => <Box sx={{ height: '200px', bgcolor: 'background.paper', borderRadius: 2 }}></Box>,
  ssr: true
})

export default function Home() {
  const services = [
    {
      title: "AI-Powered Virtual Assistants",
      description: "Automate customer interactions with smart chatbots.",
      icon: <SmartToyIcon fontSize="large" color="primary" />,
    },
    {
      title: "Business Process Automation",
      description: "AI tools that optimize workflows and reduce manual work.",
      icon: <AutomationIcon fontSize="large" color="primary" />,
    },
    {
      title: "Speech-to-Text & Voice AI",
      description: "Advanced AI-driven transcription and voice interaction.",
      icon: <RecordVoiceOverIcon fontSize="large" color="primary" />,
    },
    {
      title: "Data Analytics & AI Insights",
      description: "AI-driven data processing for business intelligence.",
      icon: <BarChartIcon fontSize="large" color="primary" />,
    },
    {
      title: "AI-Powered Customer Support",
      description: "Intelligent virtual agents for 24/7 support.",
      icon: <SupportAgentIcon fontSize="large" color="primary" />,
    },
    {
      title: "AI-Powered Search & Recommendations",
      description: "Enhance user experience with personalized suggestions.",
      icon: <SearchIcon fontSize="large" color="primary" />,
    },
    {
      title: "E-Commerce AI Automation",
      description: "Smart AI tools for sales, inventory, and customer engagement.",
      icon: <ShoppingCartIcon fontSize="large" color="primary" />,
    },
  ]

  const benefits = [
    {
      title: "Efficiency",
      description: "Automate repetitive tasks and free up your team for strategic work.",
      icon: <SpeedIcon fontSize="large" color="secondary" />,
    },
    {
      title: "Scalability",
      description: "AI solutions tailored to your business that grow with your needs.",
      icon: <ScaleIcon fontSize="large" color="secondary" />,
    },
    {
      title: "User-Friendly",
      description: "Intuitive AI-powered interfaces that require minimal training.",
      icon: <TouchAppIcon fontSize="large" color="secondary" />,
    },
    {
      title: "Security",
      description: "Enterprise-grade data privacy and protection for peace of mind.",
      icon: <SecurityIcon fontSize="large" color="secondary" />,
    },
  ]

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "white" }}>
      <Navbar />

      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "white",
            pt: { xs: 10, sm: 14, md: 18 },
            pb: { xs: 10, sm: 14, md: 18 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background Elements */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
              background: "linear-gradient(135deg, rgba(3,169,244,0.04) 0%, rgba(0,0,0,0.03) 100%)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              right: "5%",
              width: { xs: 150, md: 250 },
              height: { xs: 150, md: 250 },
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(3,169,244,0.08) 0%, transparent 70%)",
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "15%",
              left: "5%",
              width: { xs: 100, md: 200 },
              height: { xs: 100, md: 200 },
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(3,169,244,0.05) 0%, transparent 70%)",
              zIndex: 0,
            }}
          />
          
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ position: "relative" }}>
                  <Typography
                    component="span"
                    sx={{
                      display: "inline-block",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#03a9f4",
                      mb: 2,
                      px: 2,
                      py: 0.5,
                      borderRadius: "50px",
                      backgroundColor: "rgba(3,169,244,0.08)",
                      border: "1px solid rgba(3,169,244,0.2)",
                    }}
                  >
                    AI-Powered Solutions
                  </Typography>
                  
                  <Typography
                    component="h1"
                    variant="h2"
                    color="black"
                    gutterBottom
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: "2.75rem", md: "3.75rem" },
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                      mb: 3,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "80px",
                        height: "4px",
                        bottom: "-16px",
                        left: 0,
                        backgroundColor: "#03a9f4",
                        borderRadius: "10px",
                      }
                    }}
                  >
                    Efficient AI Solutions for{" "}
                    <Box component="span" sx={{ 
                      color: "#03a9f4",
                      background: "linear-gradient(90deg, #03a9f4, #007ac1)", 
                      WebkitBackgroundClip: "text", 
                      WebkitTextFillColor: "transparent",
                      display: "inline-block",
                    }}>
                      Smarter
                    </Box>{" "}
                    <Box component="span" sx={{ color: "black" }}>
                      Businesses
                    </Box>
                  </Typography>
                  
                  <Typography 
                    variant="h5" 
                    color="text.secondary" 
                    paragraph 
                    sx={{ 
                      mb: 4, 
                      maxWidth: "90%",
                      lineHeight: 1.6,
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                    }}
                  >
                    Leverage the power of artificial intelligence to automate processes, gain insights, and enhance
                    customer experiences.
                  </Typography>
                  
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5} sx={{ mb: { xs: 4, md: 0 } }}>
                    <Button
                      variant="contained"
                      sx={{ 
                        px: 4, 
                        py: 1.5, 
                        bgcolor: "black", 
                        color: "white",
                        borderRadius: "50px",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                      }}
                      size="large"
                      component={Link}
                      href="/coming-soon"
                      startIcon={<MemoryIcon />}
                    >
                      Get Started with OR GROUP
                    </Button>
                    <Button 
                      variant="outlined" 
                      sx={{ 
                        color: "#03a9f4", 
                        borderColor: "#03a9f4",
                        borderRadius: "50px",
                        borderWidth: "1.5px",
                        "&:hover": {
                          borderWidth: "1.5px",
                        }
                      }} 
                      size="large" 
                      component={Link} 
                      href="/coming-soon" 
                      startIcon={<PsychologyIcon />}
                    >
                      Learn More
                    </Button>
                  </Stack>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
                <Box sx={{ position: "relative", filter: "drop-shadow(0 12px 30px rgba(0, 0, 0, 0.15))" }}>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "-25px",
                      right: "-25px",
                      width: "70%",
                      height: "70%",
                      borderRadius: "18px",
                      backgroundColor: "rgba(3,169,244,0.1)",
                      transform: "rotate(-4deg)",
                      zIndex: 0,
                    }}
                  />
                  
                  {/* AI Visualization */}
                  <Box
                    component="svg"
                    viewBox="0 0 800 600"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    sx={{
                      width: "100%",
                      maxWidth: 600,
                      height: "auto",
                      borderRadius: "18px",
                      position: "relative",
                      zIndex: 1,
                      bgcolor: "white",
                    }}
                  >
                    {/* Background Grid */}
                    <pattern 
                      id="grid" 
                      width="40" 
                      height="40" 
                      patternUnits="userSpaceOnUse"
                    >
                      <rect width="40" height="40" fill="none" />
                      <circle cx="20" cy="20" r="1" fill="rgba(3,169,244,0.2)" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    {/* Network Connections */}
                    {/* Input to Hidden Layer Connections */}
                    <path d="M180,150 C280,150 280,200 380,200" stroke="rgba(3,169,244,0.4)" strokeWidth="1.5" />
                    <path d="M180,200 C280,200 280,250 380,250" stroke="rgba(3,169,244,0.4)" strokeWidth="1.5" />
                    <path d="M180,250 C280,250 280,300 380,300" stroke="rgba(3,169,244,0.4)" strokeWidth="1.5" />
                    <path d="M180,300 C280,300 280,350 380,350" stroke="rgba(3,169,244,0.4)" strokeWidth="1.5" />
                    <path d="M180,350 C280,350 280,400 380,400" stroke="rgba(3,169,244,0.4)" strokeWidth="1.5" />
                    
                    <path d="M180,150 C280,150 280,250 380,250" stroke="rgba(3,169,244,0.2)" strokeWidth="1" />
                    <path d="M180,150 C280,150 280,300 380,300" stroke="rgba(3,169,244,0.2)" strokeWidth="1" />
                    <path d="M180,150 C280,150 280,350 380,350" stroke="rgba(3,169,244,0.2)" strokeWidth="1" />
                    
                    {/* Hidden to Output Layer Connections */}
                    <path d="M380,200 C480,200 480,250 580,250" stroke="rgba(3,169,244,0.4)" strokeWidth="1.5" />
                    <path d="M380,250 C480,250 480,250 580,250" stroke="rgba(3,169,244,0.4)" strokeWidth="1.5" />
                    <path d="M380,300 C480,300 480,300 580,300" stroke="rgba(3,169,244,0.4)" strokeWidth="1.5" />
                    <path d="M380,350 C480,350 480,300 580,300" stroke="rgba(3,169,244,0.4)" strokeWidth="1.5" />
                    <path d="M380,400 C480,400 480,350 580,350" stroke="rgba(3,169,244,0.4)" strokeWidth="1.5" />
                    
                    {/* Animated Data Flow */}
                    <circle r="4" fill="#03a9f4">
                      <animateMotion 
                        path="M180,150 C280,150 280,200 380,200" 
                        dur="3s" 
                        repeatCount="indefinite"
                      />
                    </circle>
                    
                    <circle r="4" fill="#03a9f4">
                      <animateMotion 
                        path="M180,250 C280,250 280,300 380,300" 
                        dur="4s" 
                        repeatCount="indefinite"
                      />
                    </circle>
                    
                    <circle r="4" fill="#03a9f4">
                      <animateMotion 
                        path="M380,250 C480,250 480,250 580,250" 
                        dur="2.5s" 
                        repeatCount="indefinite"
                      />
                    </circle>
                    
                    <circle r="4" fill="#03a9f4">
                      <animateMotion 
                        path="M380,300 C480,300 480,300 580,300" 
                        dur="3.5s" 
                        repeatCount="indefinite"
                      />
                    </circle>
                    
                    {/* Input Layer Nodes */}
                    <circle cx="180" cy="150" r="20" fill="white" stroke="#03a9f4" strokeWidth="2" />
                    <circle cx="180" cy="200" r="20" fill="white" stroke="#03a9f4" strokeWidth="2" />
                    <circle cx="180" cy="250" r="20" fill="white" stroke="#03a9f4" strokeWidth="2" />
                    <circle cx="180" cy="300" r="20" fill="white" stroke="#03a9f4" strokeWidth="2" />
                    <circle cx="180" cy="350" r="20" fill="white" stroke="#03a9f4" strokeWidth="2" />
                    
                    {/* Hidden Layer Nodes */}
                    <circle cx="380" cy="200" r="20" fill="white" stroke="#03a9f4" strokeWidth="2" />
                    <circle cx="380" cy="250" r="20" fill="white" stroke="#03a9f4" strokeWidth="2" />
                    <circle cx="380" cy="300" r="20" fill="white" stroke="#03a9f4" strokeWidth="2" />
                    <circle cx="380" cy="350" r="20" fill="white" stroke="#03a9f4" strokeWidth="2" />
                    <circle cx="380" cy="400" r="20" fill="white" stroke="#03a9f4" strokeWidth="2" />
                    
                    {/* Output Layer Nodes */}
                    <circle cx="580" cy="250" r="20" fill="white" stroke="#03a9f4" strokeWidth="2" />
                    <circle cx="580" cy="300" r="20" fill="white" stroke="#03a9f4" strokeWidth="2" />
                    <circle cx="580" cy="350" r="20" fill="white" stroke="#03a9f4" strokeWidth="2" />
                    
                    {/* Layer Labels */}
                    <text x="180" y="80" textAnchor="middle" fill="#000" fontWeight="bold" fontSize="16">Input Layer</text>
                    <text x="380" y="120" textAnchor="middle" fill="#000" fontWeight="bold" fontSize="16">Hidden Layer</text>
                    <text x="580" y="180" textAnchor="middle" fill="#000" fontWeight="bold" fontSize="16">Output Layer</text>
                    
                    {/* Brain Outline */}
                    <path d="M600,450 C650,400 680,350 680,300 C680,250 650,200 600,150 C550,100 480,80 400,80 C320,80 250,100 200,150 C150,200 120,250 120,300 C120,350 150,400 200,450 C250,500 320,520 400,520 C480,520 550,500 600,450 Z" 
                      stroke="#03a9f4" 
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      fill="none"/>
                  </Box>
                  
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-15px",
                      left: "-15px",
                      width: "140px",
                      height: "140px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(3,169,244,0.06)",
                      transform: "rotate(10deg)",
                      zIndex: 0,
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Services Section */}
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f5f9ff" }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography component="h2" variant="h3" color="black" gutterBottom fontWeight="bold">
                What We Offer
              </Typography>
              <Typography variant="h6" color="black" sx={{ maxWidth: 700, mx: "auto" }}>
                Our comprehensive suite of AI-powered solutions designed to transform your business operations.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ServiceCard 
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Benefits Section */}
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography component="h2" variant="h3" color="black" gutterBottom fontWeight="bold">
                Features & Benefits
              </Typography>
              <Typography variant="h6" color="black" sx={{ maxWidth: 700, mx: "auto" }}>
                Why businesses choose OR GROUP for their AI transformation journey.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {benefits.map((benefit, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <BenefitCard
                    title={benefit.title}
                    description={benefit.description}
                    icon={benefit.icon}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            bgcolor: "#03a9f4",
            color: "white",
            textAlign: "center",
          }}
        >
          <Container maxWidth="md">
            <Typography component="h2" variant="h3" gutterBottom fontWeight="bold">
              Ready to Transform Your Business with AI?
            </Typography>
            <Typography variant="h6" paragraph sx={{ mb: 4, opacity: 0.9 }}>
              Join hundreds of businesses that have already enhanced their operations with OR GROUP's AI solutions.
            </Typography>
            <Button
              variant="contained"
              sx={{
                px: 5,
                py: 1.5,
                fontSize: "1.1rem",
                bgcolor: "black",
                color: "white",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              }}
              size="large"
              component={Link}
              href="/coming-soon"
              startIcon={<BiotechIcon />}
            >
              Start Automating Today!
            </Button>
          </Container>
        </Box>
      </Box>

      <Footer />
    </Box>
  )
}

