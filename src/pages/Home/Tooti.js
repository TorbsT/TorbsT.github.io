import Tooltip from "@mui/material/Tooltip";
import { useTheme } from "@mui/material/styles";

function Tooti({ title, underline = false, children }) {
  const theme = useTheme();
  const bgColor = theme.palette.secondary.dark;

  return <>{children}</>;
  return (
    <Tooltip
      title={title}
      arrow={true}
      slotProps={{
        /*popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 8],
              },
            },
          ],
        },*/
        tooltip: {
          sx: {
            backgroundColor: bgColor,
            color: "#fff",
            fontSize: "14px",
            borderRadius: "4px",
            padding: "8px 10px",
          },
        },
        arrow: {
          sx: {
            color: bgColor, // This colors the arrow to match the tooltip
          },
        },
      }}
    >
      {/* Must be a single DOM element */}
      <span
        style={
          underline
            ? {
                cursor: "help",
                textDecoration: "underline dotted",
              }
            : {}
        }
      >
        {children}
      </span>
    </Tooltip>
  );
}

export default Tooti;
