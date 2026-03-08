import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "House of Melo | Where Tomorrows Are Promised";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "white",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          House of Melo
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#cc0000",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          Where Tomorrows Are Promised
        </div>
        <div
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            marginTop: "16px",
          }}
        >
          Enoch Pratt Free Library — Baltimore, MD
        </div>
      </div>
    ),
    { ...size }
  );
}
