import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Chaitanya Galla — Full-Stack Developer and AI Agent Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#131211",
          color: "#E9E6E0",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 26, fontWeight: 700 }}>Chaitanya Galla</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#A49F96",
              fontSize: 20,
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#8CC97F",
              }}
            />
            Available now
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              maxWidth: 980,
              display: "flex",
              flexWrap: "wrap",
              fontSize: 68,
              lineHeight: 1.06,
              fontWeight: 700,
            }}
          >
            Full-stack products and reliable{" "}
            <span style={{ color: "#E8A33D" }}>AI agent systems.</span>
          </div>
          <div style={{ color: "#A49F96", fontSize: 27 }}>
            React · Node.js · Python · PostgreSQL · Google ADK
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {[
            ["1+ year", "production experience"],
            ["70%", "faster CRM search"],
            ["500+", "CRM records supported"],
          ].map(([value, label]) => (
            <div
              key={label}
              style={{
                width: 330,
                display: "flex",
                flexDirection: "column",
                gap: 5,
                border: "1px solid #292621",
                borderRadius: 8,
                padding: "18px 20px",
              }}
            >
              <span style={{ color: "#E9E6E0", fontSize: 27, fontWeight: 700 }}>{value}</span>
              <span style={{ color: "#A49F96", fontSize: 17 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
