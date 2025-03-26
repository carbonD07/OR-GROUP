import * as React from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import MemoryIcon from "@mui/icons-material/Memory"
import { alpha } from "@mui/material/styles"

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 8,
        px: 2,
        mt: "auto",
        backgroundColor: "black",
        color: "white",
        backgroundImage: "radial-gradient(circle at 25% 100%, rgba(3, 169, 244, 0.1) 0%, transparent 25%), radial-gradient(circle at 80% 20%, rgba(3, 169, 244, 0.08) 0%, transparent 25%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ 
              display: 'flex', 
              alignItems: 'center',
              mb: 3 
            }}>
              <MemoryIcon sx={{ mr: 1.5, fontSize: 28, color: "#03a9f4" }} />
              <span style={{ background: "linear-gradient(90deg, #03a9f4, #67daff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                OR GROUP
              </span>
            </Typography>
            <Typography variant="body1" color="rgba(255,255,255,0.7)" paragraph sx={{ lineHeight: 1.8 }}>
              Efficient AI Solutions for Smarter Businesses. We build advanced AI solutions that enhance productivity,
              streamline business operations, and improve customer interactions.
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ mt: 4 }}>
              <IconButton 
                aria-label="LinkedIn" 
                size="medium" 
                sx={{ 
                  color: "#03a9f4",
                  backgroundColor: alpha("#03a9f4", 0.1),
                  "&:hover": {
                    backgroundColor: alpha("#03a9f4", 0.2),
                  } 
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                aria-label="Twitter" 
                size="medium" 
                sx={{ 
                  color: "#03a9f4",
                  backgroundColor: alpha("#03a9f4", 0.1),
                  "&:hover": {
                    backgroundColor: alpha("#03a9f4", 0.2),
                  } 
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton 
                aria-label="Facebook" 
                size="medium" 
                sx={{ 
                  color: "#03a9f4",
                  backgroundColor: alpha("#03a9f4", 0.1),
                  "&:hover": {
                    backgroundColor: alpha("#03a9f4", 0.2),
                  } 
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                aria-label="Instagram" 
                size="medium" 
                sx={{ 
                  color: "#03a9f4",
                  backgroundColor: alpha("#03a9f4", 0.1),
                  "&:hover": {
                    backgroundColor: alpha("#03a9f4", 0.2),
                  } 
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {["Home", "About", "Contact", "Services", "FAQ"].map((item) => (
                <Box component="li" key={item} sx={{ mb: 2 }}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                    color="#03a9f4" 
                    underline="none"
                    sx={{ 
                      display: "inline-flex",
                      alignItems: "center",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        pl: 0.5,
                        color: "#67daff"
                      },
                      "&::before": {
                        content: '"›"',
                        marginRight: "8px",
                        fontSize: "18px",
                        opacity: 0.8
                      }
                    }}
                  >
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
              Contact Us
            </Typography>
            <Box sx={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: 2.5 
            }}>
              <Typography variant="body1" color="rgba(255,255,255,0.7)" sx={{
                display: "flex",
                alignItems: "center",
                lineHeight: 1.6
              }}>
                <Box component="span" sx={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  backgroundColor: alpha("#03a9f4", 0.1),
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  mr: 2
                }}>
                  📧
                </Box>
                <Box component="span">
                  <Box component="span" fontWeight="medium" sx={{ color: "white", display: "block" }}>Email</Box>
                  support@orgroup.com
                </Box>
              </Typography>
              
              <Typography variant="body1" color="rgba(255,255,255,0.7)" sx={{
                display: "flex",
                alignItems: "center",
                lineHeight: 1.6
              }}>
                <Box component="span" sx={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  backgroundColor: alpha("#03a9f4", 0.1),
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  mr: 2
                }}>
                  📞
                </Box>
                <Box component="span">
                  <Box component="span" fontWeight="medium" sx={{ color: "white", display: "block" }}>Phone</Box>
                  (+27) 123-456-7890
                </Box>
              </Typography>
              
              <Typography variant="body1" color="rgba(255,255,255,0.7)" sx={{
                display: "flex",
                alignItems: "center",
                lineHeight: 1.6
              }}>
                <Box component="span" sx={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  backgroundColor: alpha("#03a9f4", 0.1),
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  mr: 2
                }}>
                  🏢
                </Box>
                <Box component="span">
                  <Box component="span" fontWeight="medium" sx={{ color: "white", display: "block" }}>Address</Box>
                  AI Innovation Center, Tech Park<br />
                  Johannesburg, South Africa
                </Box>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box mt={8} pt={4} borderTop={1} borderColor="rgba(255,255,255,0.1)">
          <Typography variant="body2" color="rgba(255,255,255,0.5)" align="center">
            © {new Date().getFullYear()} OR GROUP. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

