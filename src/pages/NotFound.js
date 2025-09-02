import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "8rem", sm: "12rem", md: "16rem" }, // responsive sizes
          fontWeight: "bold",
          mb: 2,
        }}
      >
        404
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // responsive sizes
          fontWeight: "bold",
          mb: 2,
        }}
      >
        Page Not Found :(
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, mb: 3 }}
      >
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button component={Link} to="/" variant="contained">
        Go Back Home
      </Button>
    </Box>
  );
}
