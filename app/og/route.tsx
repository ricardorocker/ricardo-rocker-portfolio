/**
 * OG Image generation endpoint
 * Route: /og
 */
import { ImageResponse } from "@vercel/og";
import { ricardo } from "@/lib/ricardo";

export const runtime = "nodejs";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          backgroundColor: "#111111",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #FF4F00, #FFD400)",
          }}
        />

        {/* Name */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "60px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ fontSize: "24px", color: "#FF4F00" }}>▸</span>
          <span style={{ fontSize: "20px", fontWeight: 600, color: "#ffffff" }}>
            {ricardo.name}
          </span>
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: "48px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          {ricardo.role}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "24px",
            color: "#888888",
            marginBottom: "32px",
          }}
        >
          {ricardo.tagline}
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["Next.js", "TypeScript", "React", "Tailwind CSS"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "6px 16px",
                borderRadius: "100px",
                border: "1px solid #2a2a2a",
                fontSize: "16px",
                color: "#888888",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#FF4F00",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
