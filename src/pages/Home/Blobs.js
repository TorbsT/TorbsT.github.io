import "./Blobs.css";
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

const borderRadiusBase = 50;
const borderRadiusVariance = 25;
function RandBR() {
  return borderRadiusBase + borderRadiusVariance * Rand();
}
function Rand() {
  return Math.random() - 0.5;
}
export function RandomBlobs({ count, top, right }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <RandomBlob key={i} top={top} right={right} />
      ))}
    </>
  );
}
export function RandomBlob({ top, right, size = 100 }) {
  const color = "primary.dark";

  const posVariance = 0; //200;
  const sizeBase = size;
  const sizeVariance = 0;
  const animationCount = 2;
  const animationLengthBase = 10;
  const animationLengthVariance = 6;

  const animationInt = Math.floor(Math.random() * animationCount) + 1;
  const animationLength = Math.ceil(
    animationLengthBase + Rand() * animationLengthVariance
  );
  const animationR = `float${animationInt} ${animationLength}s linear infinite`;

  const borderRadiusR = `${RandBR()}% ${RandBR()}% ${RandBR()}% ${RandBR()}% / ${RandBR()}% ${RandBR()}% ${RandBR()}% ${RandBR()}%`;
  const sizeR = sizeBase + sizeVariance * Rand();
  const topR = top + posVariance * Rand();
  const rightR = right + posVariance * Rand();

  return (
    <Blob
      top={topR}
      right={rightR}
      w={sizeR}
      h={sizeR}
      color={color}
      borderRadius={borderRadiusR}
      animation={animationR}
    />
  );
}
export function CircleBlobs({ top, right, size, count, vertexSize }) {
  const blobs = Array.from({ length: count }, (_, i) => {
    const angle = (2 * Math.PI * i) / count;
    const xOffset = size * Math.cos(angle);
    const yOffset = size * Math.sin(angle);

    return (
      <RandomBlob
        key={i}
        top={top + yOffset}
        right={right + xOffset}
        size={vertexSize}
      />
    );
  });

  return <>{blobs}</>;
}
function Blob({ top, right, w, h, color, borderRadius, animation }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: `${top}px`,
        right: `${right}px`,
        width: w,
        height: h,
        backgroundColor: color,
        opacity: 1,
        zIndex: -1,
        borderRadius: borderRadius,
        filter: "blur(2px)",
        animation: animation,
      }}
    />
  );
}
function Blobs() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <CircleBlobs top={300} right={500} size={200} count={8} />
    </Box>
  );
}

export default Blobs;
