"use client";

export function AnimatedBackground() {
  return (
    <div>
      {/* Gradient Background */}
      <div className="fixed inset-0 gradient-bg -z-20" />

      {/* Animated Blobs */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
        style={{ background: "transparent" }}
      >
        <div
          className="absolute w-96 h-96 rounded-full opacity-100 blur-3xl animate-blob"
          style={{ background: "rgba(59, 130, 246, 0.8)", top: "15%", left: "10%" }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-100 blur-3xl animate-blob"
          style={{
            background: "rgba(168, 85, 247, 0.8)",
            animationDelay: "3s",
            top: "20%",
            right: "15%",
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full opacity-100 blur-3xl animate-blob"
          style={{
            background: "rgba(74, 222, 128, 0.7)",
            animationDelay: "6s",
            bottom: "15%",
            left: "20%",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-100 blur-3xl animate-blob"
          style={{
            background: "rgba(59, 130, 246, 0.7)",
            animationDelay: "9s",
            top: "50%",
            right: "10%",
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-100 blur-3xl animate-blob"
          style={{
            background: "rgba(168, 85, 247, 0.7)",
            animationDelay: "12s",
            bottom: "10%",
            right: "5%",
          }}
        />
      </div>
    </div>
  );
}
