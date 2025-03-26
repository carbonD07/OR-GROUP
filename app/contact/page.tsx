"use client"

import dynamic from 'next/dynamic'
const React = require('react');
const { useState } = React;
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import Divider from "@mui/material/Divider"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

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
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import SendIcon from "@mui/icons-material/Send"
import PsychologyIcon from "@mui/icons-material/Psychology" // AI brain icon

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: typeof formData) => ({
      ...prevData,
      [name]: value
    }));

    // Clear error when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prevErrors: typeof formErrors) => ({
        ...prevErrors,
        [name]: false
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validation
    const errors = {
      name: formData.name.trim() === "",
      email: !/^\S+@\S+\.\S+$/.test(formData.email),
      message: formData.message.trim() === "",
    };

    setFormErrors(errors);

    if (!errors.name && !errors.email && !errors.message) {
      // In a real app, you would send the form data to your backend
      console.log("Form submitted:", formData);
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  const faqs = [
    {
      question: "What types of businesses can benefit from OR GROUP?",
      answer:
        "OR GROUP serves businesses of all sizes across various industries. Our AI solutions are particularly valuable for companies in e-commerce, healthcare, finance, manufacturing, customer service, and any business looking to automate processes or gain insights from their data.",
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer:
        "Implementation timelines vary based on the complexity of the solution and your specific requirements. Simple chatbots or automation tools can be deployed in a few weeks, while more complex, custom AI solutions might take 2-3 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do I need technical expertise to use OR GROUP solutions?",
      answer:
        "No, our solutions are designed with user-friendliness in mind. While having technical staff can be helpful, we provide comprehensive training and ongoing support to ensure your team can effectively use our AI tools regardless of their technical background.",
    },
    {
      question: "How do you ensure data security and privacy?",
      answer:
        "Data security is our top priority. We implement enterprise-grade security measures, including encryption, secure authentication, and regular security audits. All our solutions comply with relevant data protection regulations, and we can provide custom security implementations based on your industry requirements.",
    },
    {
      question: "What is the pricing structure for OR GROUP services?",
      answer:
        "We offer flexible pricing models based on your specific needs and the scale of implementation. This includes subscription-based pricing for our standard solutions and custom pricing for enterprise-level implementations. Contact our sales team for a personalized quote.",
    },
  ]

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "white" }}>
      <Navbar />

      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "#f5f9ff",
            pt: { xs: 8, sm: 12 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Container maxWidth="lg">
            <Typography component="h1" variant="h2" color="black" gutterBottom fontWeight="bold" align="center">
              Get in Touch
            </Typography>
            <Typography
              variant="h5"
              color="black"
              paragraph
              align="center"
              sx={{ maxWidth: 700, mx: "auto", mb: 6 }}
            >
              Have questions about our AI solutions? Ready to start your automation journey? We're here to help.
            </Typography>

            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    bgcolor: "white",
                    border: "1px solid",
                    borderColor: "#e0e0e0",
                  }}
                >
                  {formSubmitted ? (
                    <Box sx={{ textAlign: "center", py: 4 }}>
                      <Typography variant="h4" color="#03a9f4" gutterBottom>
                        Thank You!
                      </Typography>
                      <Typography variant="body1" color="black" paragraph>
                        Your message has been sent successfully. We'll get back to you shortly.
                      </Typography>
                      <Button variant="contained" sx={{ bgcolor: "#03a9f4", color: "white" }} onClick={() => setFormSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </Box>
                  ) : (
                    <Box component="form" onSubmit={handleSubmit} noValidate>
                      <Typography variant="h5" gutterBottom fontWeight="medium" color="black">
                        Contact Form
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="name"
                            label="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            error={formErrors.name}
                            helperText={formErrors.name ? "Name is required" : ""}
                            sx={{ "& .MuiOutlinedInput-root": { "&.Mui-focused fieldset": { borderColor: "#03a9f4" } } }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={formErrors.email}
                            helperText={formErrors.email ? "Valid email is required" : ""}
                            sx={{ "& .MuiOutlinedInput-root": { "&.Mui-focused fieldset": { borderColor: "#03a9f4" } } }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            id="phone"
                            label="Phone Number (Optional)"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            sx={{ "& .MuiOutlinedInput-root": { "&.Mui-focused fieldset": { borderColor: "#03a9f4" } } }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="message"
                            label="Message"
                            name="message"
                            multiline
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            error={formErrors.message}
                            helperText={formErrors.message ? "Message is required" : ""}
                            sx={{ "& .MuiOutlinedInput-root": { "&.Mui-focused fieldset": { borderColor: "#03a9f4" } } }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            sx={{ bgcolor: "black", color: "white" }}
                            size="large"
                            fullWidth
                            endIcon={<SendIcon />}
                            startIcon={<PsychologyIcon />}
                          >
                            Send Message
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  )}
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    bgcolor: "white",
                    border: "1px solid",
                    borderColor: "#e0e0e0",
                  }}
                >
                  <Typography variant="h5" gutterBottom fontWeight="medium" color="black">
                    Contact Information
                  </Typography>

                  <Box sx={{ mt: 4 }}>
                    <Box sx={{ display: "flex", mb: 3 }}>
                      <EmailIcon sx={{ mr: 2, color: "#03a9f4" }} />
                      <Box>
                        <Typography variant="subtitle1" fontWeight="medium" color="black">
                          Email
                        </Typography>
                        <Typography variant="body1" color="black">
                          support@orgroup.com
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", mb: 3 }}>
                      <PhoneIcon sx={{ mr: 2, color: "#03a9f4" }} />
                      <Box>
                        <Typography variant="subtitle1" fontWeight="medium" color="black">
                          Phone
                        </Typography>
                        <Typography variant="body1" color="black">
                          (+27) 123-456-7890
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", mb: 3 }}>
                      <LocationOnIcon sx={{ mr: 2, color: "#03a9f4" }} />
                      <Box>
                        <Typography variant="subtitle1" fontWeight="medium" color="black">
                          Address
                        </Typography>
                        <Typography variant="body1" color="black">
                          AI Innovation Center, Tech Park
                          <br />
                          Johannesburg, South Africa
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Divider sx={{ my: 4 }} />

                  <Typography variant="h6" gutterBottom fontWeight="medium" color="black">
                    Business Hours
                  </Typography>
                  <Typography variant="body1" paragraph color="black">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </Typography>
                  <Typography variant="body1" color="black">Saturday - Sunday: Closed</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
          <Container maxWidth="lg">
            <Typography
              component="h2"
              variant="h3"
              color="black"
              gutterBottom
              fontWeight="bold"
              align="center"
              sx={{ mb: 6 }}
            >
              Frequently Asked Questions
            </Typography>

            <Box sx={{ maxWidth: 800, mx: "auto" }}>
              {faqs.map((faq, index) => (
                <Paper key={index} sx={{ mb: 3, overflow: "hidden", borderRadius: 2 }}>
                  <Box 
                    sx={{ 
                      p: 3, 
                      bgcolor: "#f5f9ff", 
                      display: "flex", 
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <Typography variant="h6" fontWeight="medium" color="black">
                      {faq.question}
                    </Typography>
                    <ExpandMoreIcon sx={{ color: "#03a9f4" }} />
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="body1" color="black">
                      {faq.answer}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>

      <Footer />
    </Box>
  )
}

