import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "House of Melo — The Carmelo Anthony Archive";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0C0C0C",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "#C4742F",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
          }}
        >
          The Carmelo Anthony Archive
        </div>
        <div
          style={{
            fontSize: 72,
            fontStyle: "italic",
            color: "#EDEDED",
            letterSpacing: "0.02em",
          }}
        >
          House of Melo
        </div>
        <div
          style={{
            width: 60,
            height: 1,
            background: "#C4742F",
            marginTop: 8,
            marginBottom: 8,
          }}
        />
        <div
          style={{
            fontSize: 16,
            color: "#999999",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Where Tomorrows Are Promised
        </div>
      </div>
    ),
    { ...size }
  );
}
