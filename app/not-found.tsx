import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NotFound() {
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
            <ErrorOutlineIcon color="secondary" sx={{ fontSize: 80, mb: 3 }} />

            <Typography component="h1" variant="h3" color="text.primary" gutterBottom fontWeight="bold">
              404 - Page Not Found
            </Typography>

            <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: "80%", mx: "auto" }}>
              The page you are looking for doesn't exist or has been moved.
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

