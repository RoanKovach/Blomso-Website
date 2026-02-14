import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0F1A0B",
          borderRadius: "40px",
        }}
      >
        <svg viewBox="0 0 32 32" width="120" height="120">
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
      </div>
    ),
    { ...size },
  );
}
