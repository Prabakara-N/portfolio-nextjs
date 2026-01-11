import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Prabakaran - Full Stack Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a1625 50%, #0f172a 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "-10%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          {/* Name */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 800,
              background: "linear-gradient(90deg, #ffffff 0%, #a5b4fc 50%, #06b6d4 100%)",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
              letterSpacing: "-2px",
            }}
          >
            Prabakaran
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: "32px",
              color: "#94a3b8",
              margin: "16px 0 0 0",
              fontWeight: 500,
            }}
          >
            Full Stack Developer
          </p>

          {/* Tech Stack */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "40px",
            }}
          >
            {["Next.js", "React", "TypeScript", "Node.js", "Firebase"].map(
              (tech) => (
                <span
                  key={tech}
                  style={{
                    padding: "8px 20px",
                    background: "rgba(139, 92, 246, 0.2)",
                    border: "1px solid rgba(139, 92, 246, 0.4)",
                    borderRadius: "9999px",
                    color: "#c4b5fd",
                    fontSize: "18px",
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Call to Action */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "48px",
              padding: "12px 24px",
              background: "linear-gradient(90deg, rgba(139, 92, 246, 0.3) 0%, rgba(6, 182, 212, 0.3) 100%)",
              border: "1px solid rgba(139, 92, 246, 0.5)",
              borderRadius: "9999px",
            }}
          >
            <span
              style={{
                fontSize: "18px",
                color: "#e2e8f0",
                fontWeight: 600,
              }}
            >
              View Portfolio
            </span>
            <span
              style={{
                fontSize: "16px",
                color: "#94a3b8",
              }}
            >
              →
            </span>
            <span
              style={{
                fontSize: "16px",
                color: "#94a3b8",
              }}
            >
              prabakarandev.in
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
