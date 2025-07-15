import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NtnuImage from "./ntnu.png";
import ChibaImage from "./chibadai.png";
import SngImage from "./sng.png";
import useIsMobile from "../../hooks/useIsMobile";

function EduItem({ edu, img, desc }) {
  const imgSize = 120;
  return (
    <Grid item xs={2} sm={1}>
      <Card
        sx={{
          width: 350,
          display: "grid",
          gridTemplateColumns: `1fr ${imgSize}px`,
          height: `${imgSize}px`,
          overflow: "auto",
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {edu}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
        <CardMedia component="img" height="100%" image={img} alt={edu} />
      </Card>
    </Grid>
  );
}

function Edu() {
  const isMobile = useIsMobile();
  return (
    <Box mt={10}>
      <Typography
        variant="h4"
        gutterBottom
        component="h2"
        align={isMobile ? "center" : "left"}
        sx={{
          fontWeight: 500,
          color: "secondary.main", // or 'primary.main' for consistency
        }}
      >
        Education
      </Typography>
      <Grid
        container
        spacing={6}
        columns={2}
        justifyContent={isMobile ? "center" : "left"}
      >
        <EduItem
          edu="Chiba University"
          img={ChibaImage}
          desc="1-year exchange with focus on language and culture"
        />
        <EduItem
          edu="NTNU"
          img={NtnuImage}
          desc="Master of Informatics (in progress)"
        />
        <EduItem
          edu="SNG"
          img={SngImage}
          desc="3-month Japanese language course"
        />
        <EduItem edu="NTNU" img={NtnuImage} desc="Bachelor of Informatics" />
      </Grid>
    </Box>
  );
}

export default Edu;
