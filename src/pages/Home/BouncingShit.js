import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

const colors = ["yellow", "green", "blue", "#e4007c", "#FF8624", "purple"];

const Bouncer = React.memo(({ id }) => {
  const boxRef = useRef(null);
  const startTimeRef = useRef(performance.now());

  const boxSize = 70;
  const bounceTime = 0.98;
  const bounceOffset = useRef(Math.random() * bounceTime).current;
  const edgeTime = useRef(Math.random() * 1.5 + 3).current;
  const edgeOffset = useRef(Math.random() * edgeTime).current;

  useEffect(() => {
    let frameId;

    const animate = () => {
      const now = performance.now();
      const elapsed = (now - startTimeRef.current) / 1000;

      const wWidth = window.innerWidth - boxSize;
      const wHeight = window.innerHeight - boxSize;

      const xSecs = elapsed / edgeTime + edgeOffset;
      const x = wWidth * (xSecs % 2 < 1 ? xSecs % 1 : 1 - (xSecs % 1));
      const y =
        wHeight *
        Math.abs(Math.sin(((elapsed + bounceOffset) * Math.PI) / bounceTime));

      if (boxRef.current) {
        boxRef.current.style.left = `${x.toFixed(1)}px`;
        boxRef.current.style.bottom = `${y.toFixed(1)}px`;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [bounceOffset, edgeOffset, edgeTime]);

  const c = colors[id % colors.length];
  return (
    <Box
      ref={boxRef}
      sx={{
        width: boxSize,
        height: boxSize,
        position: "absolute",
        backgroundColor: c,
        color: "red",
        fontSize: "30px",
        zIndex: 1000,
        transition: "none",
      }}
    />
  );
});

export default Bouncer;
