import React from "react";

function YouTubeEmbed({ videoId, autoplay = false, muted = false }) {
  // Build the embed URL with parameters
  const src = `https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1&rel=0&autoplay=${
    autoplay ? 1 : 0
  }&mute=${muted ? 1 : 0}&loop=1&playlist=${videoId}`;

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src={src}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

export default YouTubeEmbed;
