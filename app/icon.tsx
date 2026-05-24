import { ImageResponse } from "next/og";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #751f8c, #b665f2)",
        borderRadius: "32px",
      }}
    >
      <span style={{ fontSize: 100, color: "white" }}>🌐</span>
    </div>,
    { ...size },
  );
}
