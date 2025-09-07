import { IconButton, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";

const openButtonSize = "70px";
const buttonPadding = "12px";

function Docker({ setDrawer }) {
  const theme = useTheme();
  const dropColor = theme.palette.background.paper;

  return (
    <IconButton
      onClick={() => setDrawer(true)}
      sx={{
        position: "absolute",
        width: openButtonSize,
        height: openButtonSize,
        padding: buttonPadding,
        color: "text.primary",
        top: 0,
        left: 0,
        zIndex: 5000,
        backgroundColor: "background.paper",
        borderRadius: "0 0 5% 0",
        border: "1px solid " + dropColor,
        boxShadow: "0px 0px 2px black",
      }}
    >
      <MenuIcon sx={{ width: "100%", height: "100%" }}></MenuIcon>
    </IconButton>
  );
}
export default Docker;
