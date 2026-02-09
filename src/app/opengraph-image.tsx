import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Blomso | A Biospheric Operating System rooted in the soil";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0F1A0B",
          position: "relative",
        }}
      >
        {/* Subtle grain-like top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #3B7D28, #7ED957, #6DB344)",
            display: "flex",
          }}
        />

        {/* Three-leaf mark */}
        <svg
          viewBox="0 0 32 32"
          width="80"
          height="80"
          style={{ marginBottom: "32px" }}
        >
          <path
            d="M16 2C16 2 10 10 10 18c0 4 2.5 7 6 7s6-3 6-7C22 10 16 2 16 2z"
            fill="#3B7D28"
          />
          <path
            d="M6 10C6 10 3 18 5 23c1.5 3.5 5 5 8 3s4-6 2-10C13 12 6 10 6 10z"
            fill="#6DB344"
            opacity="0.9"
          />
          <path
            d="M26 10C26 10 29 18 27 23c-1.5 3.5-5 5-8 3s-4-6-2-10C19 12 26 10 26 10z"
            fill="#7ED957"
            opacity="0.9"
          />
        </svg>

        {/* Wordmark */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#F0F2EE",
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          Blomso
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "24px",
            color: "#8E968A",
            marginTop: "16px",
            display: "flex",
          }}
        >
          A Biospheric Operating System rooted in the soil
        </div>
      </div>
    ),
    { ...size },
  );
}
