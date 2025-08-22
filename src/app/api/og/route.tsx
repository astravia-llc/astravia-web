import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom right, #0a0a0a, #1a1a1a)",
          color: "white",
          fontSize: 48,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <img
          src={`${
            process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
          }/astravia-logo.png`}
          alt="Astravia Logo"
          style={{ width: 200, height: 200, marginBottom: 40 }}
        />

        {/* Nombre */}
        <div
          style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.03em" }}
        >
          Astravia LLC
        </div>

        {/* Tagline */}
        <div
          style={{ fontSize: 32, fontWeight: 400, marginTop: 20, opacity: 0.8 }}
        >
          Innovating with Caloric Hat & Beyond
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
