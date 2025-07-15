import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";

const openButtonSize = "5vw";
const buttonPadding = "1vw";

function Docker({ setDrawer }) {
  return (
    <IconButton
      onClick={() => setDrawer(true)}
      sx={{
        position: "sticky",
        width: openButtonSize,
        height: openButtonSize,
        padding: buttonPadding,
        top: 0,
        left: 0,
      }}
    >
      <MenuIcon sx={{ width: "100%", height: "100%" }}></MenuIcon>
    </IconButton>
  );
}
export default Docker;
