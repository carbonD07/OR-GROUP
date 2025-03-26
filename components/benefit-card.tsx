'use client';

import React from 'react';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function BenefitCard({ title, description, icon }: BenefitCardProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: "100%",
        textAlign: "center",
        borderRadius: 3,
        background: "white",
        border: "1px solid",
        borderColor: "rgba(0, 0, 0, 0.06)",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.4s ease",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #03a9f4, #67daff)",
          opacity: 0.8,
          transition: "height 0.3s ease",
        },
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.1)",
          "& .benefit-icon": {
            transform: "scale(1.1)",
            backgroundColor: alpha("#03a9f4", 0.15),
          },
          "&::before": {
            height: "6px",
          }
        },
      }}
    >
      <Box 
        className="benefit-icon"
        sx={{ 
          mb: 3, 
          mx: "auto",
          width: 70,
          height: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: alpha("#000000", 0.08),
          borderRadius: "50%",
          transition: "all 0.3s ease",
          "& .MuiSvgIcon-root": {
            fontSize: "2rem",
            color: "#03a9f4",
          }
        }}
      >
        {icon}
      </Box>
      <Typography 
        gutterBottom 
        variant="h6" 
        component="h3" 
        fontWeight="bold"
        color="black"
        sx={{ mb: 1.5 }}
      >
        {title}
      </Typography>
      <Typography 
        color="text.secondary"
        sx={{ 
          lineHeight: 1.7,
          px: 1
        }}
      >
        {description}
      </Typography>
    </Paper>
  );
} 