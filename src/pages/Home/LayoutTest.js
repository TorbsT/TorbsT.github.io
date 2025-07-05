import { Box, Button, Typography } from "@mui/material";

export default function Layout() {
  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Right Panel: The ONLY scrollable area */}
      <Box
        sx={{
          flex: 1,
          height: "100vh",
          overflowY: "auto",
          display: "flex",
        }}
      >
        {/* Left Panel inside scroll area, but fixed via sticky */}
        <Box
          sx={{
            width: 300,
            flexShrink: 0,
            position: "sticky",
            top: 0,
            alignSelf: "flex-start",
            height: "100vh",
            backgroundColor: "#f0f0f0",
            padding: 2,
            zIndex: 1,
          }}
        >
          <Typography variant="h6">Left Panel</Typography>
          <Typography variant="body2">Fully interactive.</Typography>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => alert("Clicked!")}
          >
            Click Me
          </Button>
        </Box>

        {/* Main Scrollable Content */}
        <Box
          sx={{
            flex: 1,
            padding: 2,
            minHeight: "200vh", // So we can scroll
          }}
        >
          <Typography variant="h6">Right Panel (Scrollable)</Typography>
          {[...Array(100)].map((_, i) => (
            <Typography key={i}>Content line {i + 1}</Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
