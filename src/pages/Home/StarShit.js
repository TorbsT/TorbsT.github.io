import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import StarIcon from "@mui/icons-material/Star";

const STAR_COLORS = ["#00FF00", "#0000FF"];
const STAR_COUNT = 17;
const MAX_RADIUS = 70;

const randomPosition = () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
});

const Starr = React.memo(({ id }) => {
  const [pos, setPos] = useState(randomPosition);
  const [cycle, setCycle] = useState(0);
  const [visible, setVisible] = useState(false);

  const durationRef = useRef(900); // + Math.random() * 750);
  const spawnDelayRef = useRef(Math.random() * 350);
  const rotationRef = useRef(Math.random() * 360);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, spawnDelayRef.current);

    const hideTimer = setTimeout(() => {
      setVisible(false);
      setPos(randomPosition());
      setCycle((c) => c + 1);
    }, spawnDelayRef.current + durationRef.current);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [cycle]);

  return (
    <Box
      key={cycle}
      sx={{
        position: "absolute",
        left: pos.x,
        top: pos.y,
        width: 0,
        height: 0,
        pointerEvents: "none",
        animation: `
          starrFade ${durationRef.current}ms ease-in
          0ms forwards
        `,
      }}
    >
      {Array.from({ length: STAR_COUNT }).map((_, i) => {
        const angle = (i / STAR_COUNT) * 360 + rotationRef.current;

        return (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: 14,
              height: 14,
              //backgroundImage: `url("${STAR_IMAGE}")`,
              //backgroundRepeat: "no-repeat",
              //backgroundColor: "#000000",
              //backgroundSize: "contain",
              transformOrigin: "center",
              animation: `
                starrOrbit ${durationRef.current}ms ease-out
                0ms forwards
              `,
              "--angle": `${angle}deg`,
              "--spin": `${rotationRef.current}deg`,
            }}
          >
            <StarIcon
              htmlColor={STAR_COLORS[i % STAR_COLORS.length]}
            ></StarIcon>
          </Box>
        );
      })}
    </Box>
  );
});

export default Starr;
