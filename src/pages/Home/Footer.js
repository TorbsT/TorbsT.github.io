import { Box, Typography } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";

function Footer() {
  const isMobile = useIsMobile();

  return (
    <Box
      sx={{
        paddingBottom: "200px",
      }}
    >
      <Typography mt={20} variant="body1" align={isMobile ? "center" : "left"}>
        There is no more content. go home
      </Typography>
    </Box>
  );
}

export default Footer;
