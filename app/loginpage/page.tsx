"use client";

export default function LoginPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background:
          "linear-gradient(180deg, #dbeeea 0%, #cbe7f2 60%, #eaf7c1 100%)",
        position: "relative",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Browser window bar */}
      <div
        style={{
          position: "absolute",
          top: 32,
          left: "50%",
          transform: "translateX(-50%)",
          width: 960,
          height: 48,
          background: "#fff",
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          zIndex: 2,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
        }}
      >
        {/* Traffic light buttons */}
        <div style={{ display: "flex", gap: 8, marginLeft: 20 }}>
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#ff5f56",
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#ffbd2e",
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#27c93f",
              display: "inline-block",
            }}
          />
        </div>
        {/* URL bar */}
        <div
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            color: "#888",
            fontWeight: 500,
            letterSpacing: 1,
          }}
        >
          mynaul.com
        </div>
      </div>

      {/* Abstract landscape background */}
      <svg
        viewBox="0 0 1440 800"
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          left: 0,
          top: 0,
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hill1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dbeeea" />
            <stop offset="100%" stopColor="#b6e3c6" />
          </linearGradient>
          <linearGradient id="hill2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#cbe7f2" />
            <stop offset="100%" stopColor="#7ec7e6" />
          </linearGradient>
          <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#eaf7c1" />
            <stop offset="100%" stopColor="#b6e3c6" />
          </linearGradient>
        </defs>
        {/* Rolling hills */}
        <path
          d="M0,400 Q400,300 800,400 T1440,400 V800 H0 Z"
          fill="url(#hill1)"
          opacity="0.7"
        />
        <path
          d="M0,500 Q600,350 1200,500 T1440,500 V800 H0 Z"
          fill="url(#hill2)"
          opacity="0.6"
        />
        {/* Reflective water */}
        <ellipse
          cx="720"
          cy="700"
          rx="700"
          ry="80"
          fill="url(#water)"
          opacity="0.7"
        />
      </svg>

      {/* Logo above card */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          marginBottom: 24,
          marginTop: 80,
          fontWeight: 700,
          fontSize: 28,
          color: "#2a3d2e",
          letterSpacing: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
          <path
            d="M7 14C7 9.58172 10.5817 6 15 6V8C11.6863 8 9 10.6863 9 14H7Z"
            fill="#2a3d2e"
          />
          <path
            d="M21 14C21 18.4183 17.4183 22 13 22V20C16.3137 20 19 17.3137 19 14H21Z"
            fill="#2a3d2e"
          />
        </svg>
        MynaUI
      </div>

      {/* Centered login card */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 400,
          background: "rgba(255,255,255,0.85)",
          borderRadius: 16,
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          padding: "36px 32px 32px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Title & subtitle */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 22, color: "#2a3d2e" }}>
            Login
          </div>
          <div style={{ fontSize: 15, color: "#6b7c6c", marginTop: 4 }}>
            Nice to see you again!
          </div>
        </div>
        {/* Social login buttons */}
        <button
          style={{
            width: "100%",
            background: "#fff",
            border: "none",
            borderRadius: 999,
            padding: "10px 0",
            marginBottom: 12,
            fontWeight: 500,
            fontSize: 15,
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 10,
            cursor: "pointer",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google"
            style={{ width: 20, height: 20, marginLeft: 16 }}
          />
          <span style={{ marginLeft: 8 }}>Login with Google</span>
        </button>
        <button
          style={{
            width: "100%",
            background: "#fff",
            border: "none",
            borderRadius: 999,
            padding: "10px 0",
            marginBottom: 12,
            fontWeight: 500,
            fontSize: 15,
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 10,
            cursor: "pointer",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple"
            style={{ width: 20, height: 20, marginLeft: 16 }}
          />
          <span style={{ marginLeft: 8 }}>Login with Apple</span>
        </button>
        {/* Divider */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            margin: "18px 0 18px 0",
          }}
        >
          <div style={{ flex: 1, height: 1, background: "#e0e6e3" }} />
          <span
            style={{
              margin: "0 12px",
              color: "#a0b3a2",
              fontWeight: 500,
              fontSize: 14,
              background: "rgba(255,255,255,0.85)",
              padding: "0 8px",
            }}
          >
            OR
          </span>
          <div style={{ flex: 1, height: 1, background: "#e0e6e3" }} />
        </div>
        {/* Email/password form */}
        <form style={{ width: "100%" }}>
          <div
            style={{
              fontSize: 14,
              color: "#2a3d2e",
              fontWeight: 500,
              marginBottom: 4,
            }}
          >
            Email
          </div>
          <input
            type="email"
            placeholder="team@mynaul.com"
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: 999,
              border: "1px solid #e0e6e3",
              marginBottom: 16,
              fontSize: 15,
              background: "#f7faf8",
              outline: "none",
            }}
          />
          <div
            style={{
              fontSize: 14,
              color: "#2a3d2e",
              fontWeight: 500,
              marginBottom: 4,
            }}
          >
            Password
          </div>
          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: 999,
              border: "1px solid #e0e6e3",
              marginBottom: 20,
              fontSize: 15,
              background: "#f7faf8",
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              background: "#6fcf97",
              color: "#fff",
              border: "none",
              borderRadius: 999,
              padding: "12px 0",
              fontWeight: 600,
              fontSize: 16,
              boxShadow: "0 2px 8px rgba(111,207,151,0.10)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              cursor: "pointer",
              marginBottom: 8,
              transition: "background 0.2s",
            }}
          >
            Sign In
            <svg width="18" height="18" fill="none" style={{ marginLeft: 4 }}>
              <path
                d="M7 4l5 5-5 5"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
        {/* Links */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 14,
            marginTop: 8,
            gap: 2,
          }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#6fcf97",
              marginBottom: 2,
            }}
          >
            Forgot Password?
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#222",
              fontWeight: 500,
              marginTop: 2,
            }}
          >
            New to MynaUI?{" "}
            <span
              style={{
                color: "#6fcf97",
                textDecoration: "underline",
              }}
            >
              Sign Up
            </span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          width: 960,
          textAlign: "center",
          color: "#7c8f7d",
          fontSize: 14,
          zIndex: 2,
        }}
      >
        <div style={{ marginBottom: 4 }}>
          <a
            href="#"
            style={{
              margin: "0 12px",
              color: "#7c8f7d",
              textDecoration: "none",
            }}
          >
            Help
          </a>
          <a
            href="#"
            style={{
              margin: "0 12px",
              color: "#7c8f7d",
              textDecoration: "none",
            }}
          >
            Contact Us
          </a>
          <a
            href="#"
            style={{
              margin: "0 12px",
              color: "#7c8f7d",
              textDecoration: "none",
            }}
          >
            Status
          </a>
        </div>
        <div style={{ fontSize: 13, color: "#a0b3a2" }}>
          © 2025 MynaUI All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
