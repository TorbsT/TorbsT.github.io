import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";

const openButtonSize = "100px";
const buttonPadding = "20px";
const color = "white";

function Docker({ setDrawer }) {
  return (
    <IconButton
      onClick={() => setDrawer(true)}
      sx={{
        position: "absolute",
        width: openButtonSize,
        height: openButtonSize,
        padding: buttonPadding,
        color: color,
        top: 0,
        left: 0,
        zIndex: 5000,
        backgroundColor: "background.paper",
        borderRadius: "10%",
        border: "2px solid " + color,
      }}
    >
      <MenuIcon sx={{ width: "100%", height: "100%" }}></MenuIcon>
    </IconButton>
  );
}
export default Docker;
