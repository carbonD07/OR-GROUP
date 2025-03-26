import { createTheme } from "@mui/material/styles"

// Create a base theme to get default shadows
const baseTheme = createTheme();

// Create our custom theme with all proper shadow definitions
const theme = createTheme({
  palette: {
    primary: {
      main: "#03a9f4", // light blue
      light: "#67daff",
      dark: "#007ac1",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#000000", // black
      light: "#2c2c2c",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff", // white
      paper: "#f5f9ff", // very light blue
    },
    text: {
      primary: "#000000", // black
      secondary: "#546e7a", // more refined dark blue-gray for secondary text
    },
    grey: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0", 
      800: "#1e293b",
      900: "#0f172a",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: 1.3,
      letterSpacing: "-0.005em",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.75rem",
      lineHeight: 1.4,
      letterSpacing: "0",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.375rem",
      lineHeight: 1.4,
      letterSpacing: "0.015em",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.5,
      letterSpacing: "0.01em", 
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.01em",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      letterSpacing: "0.005em",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      letterSpacing: "0.005em",
    },
    button: {
      fontWeight: 500,
      fontSize: "0.9375rem",
      lineHeight: 1.75,
      letterSpacing: "0.02em",
      textTransform: "none",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: "0.005em",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: "0.005em",
    },
  },
  shape: {
    borderRadius: 10,
  },
  // Use the complete shadows array from the base theme
  shadows: baseTheme.shadows,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 24px",
          fontWeight: 600,
          transition: "all 0.25s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
          }
        },
        containedPrimary: {
          boxShadow: "0 4px 14px rgba(3, 169, 244, 0.3)",
          "&:hover": {
            boxShadow: "0 6px 20px rgba(3, 169, 244, 0.4)",
          }
        },
        containedSecondary: {
          boxShadow: "0 4px 14px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
          }
        },
        outlined: {
          borderWidth: "1.5px",
          "&:hover": {
            borderWidth: "1.5px",
          }
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
          overflow: "hidden",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            boxShadow: "0 12px 28px rgba(0, 0, 0, 0.12)",
          }
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
        elevation0: {
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.04)",
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#03a9f4",
              borderWidth: "1.5px"
            },
          }
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
          "@media (min-width: 600px)": {
            paddingLeft: 32,
            paddingRight: 32,
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: "0.75em"
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.1)",
          }
        }
      }
    }
  },
})

export default theme

