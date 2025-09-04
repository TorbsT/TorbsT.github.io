import { Box, Typography, Container, Paper, useTheme } from "@mui/material";
import PlaneImg from "./plane.png";

const Floater = ({ src = PlaneImg, progress, width = 100 }) => {
  return (
    <Box
      sx={{
        width,
        height: width,
        position: "absolute",
        left: `calc(${progress * 100}% - ${progress * width}px)`,
        top: 20,
      }}
    >
      <img width={width} src={src}></img>
    </Box>
  );
};

export default Floater;
