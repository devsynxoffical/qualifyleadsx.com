import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "QualifiedLeadsX™ — High-Ticket Client Acquisition System";

function Check() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12.5 9 17l11-11"
        stroke="#C9F26B"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0c0f",
          padding: 72,
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(90% 90% at 80% 10%, rgba(201,242,107,0.22), transparent 60%), radial-gradient(70% 70% at 10% 90%, rgba(155,139,255,0.18), transparent 60%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#f2f4f5",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: -0.5,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#c9f26b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12.5 9 7l4 5 3.5-3.5L20 12.5 M4 17h16"
                stroke="#0a0c0f"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span>
            Qualified<span style={{ color: "#c9f26b" }}>Leads</span>X
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              color: "#f2f4f5",
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            High-ticket clients.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              color: "#c9f26b",
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            Booked on demand.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#a2a8b0",
              marginTop: 6,
              maxWidth: 860,
            }}
          >
            The done-for-you client acquisition system generating $100K+ months for coaches,
            consultants &amp; service providers.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            fontSize: 22,
            color: "#a2a8b0",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Check /> 90-day written guarantee
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Check /> You own everything
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Check /> 128+ clients
          </span>
        </div>
      </div>
    ),
    size
  );
}
