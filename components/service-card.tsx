'use client';

import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";
import { alpha } from "@mui/material/styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "rgba(0, 0, 0, 0.08)",
        backgroundColor: "white",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "&:hover": {
          transform: "translateY(-12px)",
          boxShadow: "0 16px 40px rgba(0, 0, 0, 0.12)",
          "& .MuiButton-root": {
            color: "#03a9f4",
            "& .MuiSvgIcon-root": {
              transform: "translateX(4px)",
            }
          },
          "& .card-icon-container": {
            backgroundColor: alpha("#03a9f4", 0.15),
            transform: "scale(1.05)",
          }
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 4, pb: 2 }}>
        <Box 
          className="card-icon-container"
          sx={{ 
            mb: 3, 
            width: 80,
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: alpha("#03a9f4", 0.1),
            borderRadius: "16px",
            mx: "auto",
            transition: "all 0.3s ease",
            "& .MuiSvgIcon-root": {
              fontSize: "2.5rem",
            }
          }}
        >
          {icon}
        </Box>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="h3" 
          fontWeight="bold"
          color="black"
          sx={{ mb: 2 }}
        >
          {title}
        </Typography>
        <Typography 
          color="text.secondary" 
          sx={{ 
            lineHeight: 1.7, 
            fontSize: "0.95rem",
            mb: 2,
            px: 1
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 3, pt: 0, justifyContent: "center" }}>
        <Button 
          component={Link} 
          href="/coming-soon"
          endIcon={<ArrowForwardIcon sx={{ transition: "transform 0.3s ease" }} />}
          sx={{ 
            fontWeight: 600,
            textTransform: "none",
            transition: "all 0.3s",
            "&:hover": {
              backgroundColor: "transparent",
            }
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
} 