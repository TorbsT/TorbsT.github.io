import Tooltip from "@mui/material/Tooltip";
import { useTheme } from "@mui/material/styles";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as ReactLogo } from "./logos/react.svg";
import { ReactComponent as UnityLogo } from "./logos/unity.svg";
import { ReactComponent as FirebaseLogo } from "./logos/firebase.svg";
// import dotnet, java, rust logos
import { ReactComponent as DotnetLogo } from "./logos/dotnet.svg";
import { ReactComponent as JavaLogo } from "./logos/java.svg";
import { ReactComponent as RustLogo } from "./logos/rust.svg";
// MUI, html, css, js logos
import { ReactComponent as MuiLogo } from "./logos/mui.svg";
import { ReactComponent as HtmlLogo } from "./logos/html.svg";
import { ReactComponent as CssLogo } from "./logos/css.svg";
import { ReactComponent as JsLogo } from "./logos/javascript.svg";
// Node
import { ReactComponent as NodeLogo } from "./logos/node.svg";
import { ReactComponent as SpringLogo } from "./logos/spring.svg";
// ...other logos

const tags = [
  { name: "React", IconComponent: ReactLogo },
  { name: "Unity", IconComponent: UnityLogo },
  { name: "Firebase", IconComponent: FirebaseLogo },
  // add dotnet, java, rust
  { name: ".NET", IconComponent: DotnetLogo },
  { name: "Java", IconComponent: JavaLogo },
  { name: "Rust", IconComponent: RustLogo },
  { name: "MUI", IconComponent: MuiLogo },
  { name: "HTML", IconComponent: HtmlLogo },
  { name: "CSS", IconComponent: CssLogo },
  { name: "JavaScript", IconComponent: JsLogo },
  { name: "Node.js", IconComponent: NodeLogo },
  { name: "Spring", IconComponent: SpringLogo },
];

function TechTag({ name }) {
  const theme = useTheme();
  const tag = tags.find((tag) => tag.name.toLowerCase() === name.toLowerCase());
  if (!tag) return null;

  return (
    <Tooltip title={tag.name} arrow>
      <div
        style={{
          height: "100%", // Fill parent's height
          aspectRatio: "1 / 1", // Keep square
          display: "inline-flex",
        }}
      >
        <SvgIcon
          component={tag.IconComponent}
          sx={{
            width: "100%",
            height: "100%",
            color: theme.palette.text.primary,
            pointerEvents: "none", // prevent double tooltip
          }}
          inheritViewBox
        />
      </div>
    </Tooltip>
  );
}

export default TechTag;
