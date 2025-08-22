import { Box, Typography, Container, Paper, useTheme } from "@mui/material";
import PlaneImg from "./plane.png";

const mexFlag = "Countdown/mex.png";
const norFlag =
  "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg";

const Plane = ({ progress, width = 100 }) => {
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
      <img width={width} src={PlaneImg}></img>
    </Box>
  );
};

export default Plane;
