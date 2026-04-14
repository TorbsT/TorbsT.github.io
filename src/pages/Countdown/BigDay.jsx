import { Box, Typography } from "@mui/material";
import Feliz from "./feliz.png";

const options = {
  timeZone: "America/Mexico_City",
  day: "2-digit",
  month: "2-digit",
};

const dateToMatch = "15/04";

const formatter = new Intl.DateTimeFormat("en-GB", options);
const result = formatter.format(new Date()); // e.g. "14/02"

console.log(result);

export const BigDay = () => {
  return (
    <>
      {result === dateToMatch && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Happy birthday Fatim</Typography>
          <img
            alt="Cool thing"
            src={Feliz}
            style={{ width: "100%", height: "auto" }}
          ></img>
          <Box sx={{ mt: 2 }} />
        </Box>
      )}
    </>
  );
};
