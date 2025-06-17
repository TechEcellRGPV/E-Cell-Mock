
"use client"

export default function HeroSection() {
  return (
    <>
      {/* Embedded Styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .hero-button {
          background-color: #66BB6A;
          color: white;
          border: none;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .hero-button:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(102, 187, 106, 0.3);
        }

        .backdrop-blur {
          backdrop-filter: blur(4px);
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#F1F8F4" }}
      >
        {/* Animated Background Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Outer Circle */}
          <div
            className="absolute rounded-full border-2 border-dashed opacity-20 animate-spin-slow"
            style={{
              width: "800px",
              height: "800px",
              borderColor: "#2E7D32",
            }}
          >
            <div
              className="absolute top-0 left-1/2 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#66BB6A",
              }}
            ></div>
            <div
              className="absolute bottom-0 left-1/2 rounded-full transform -translate-x-1/2 translate-y-1/2"
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#AED581",
              }}
            ></div>
            <div
              className="absolute left-0 top-1/2 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#00897B",
              }}
            ></div>
            <div
              className="absolute right-0 top-1/2 rounded-full transform translate-x-1/2 -translate-y-1/2"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#43A047",
              }}
            ></div>
          </div>

          {/* Middle Circle */}
          <div
            className="absolute rounded-full border border-dashed opacity-30 animate-spin-reverse"
            style={{
              width: "600px",
              height: "600px",
              borderColor: "#66BB6A",
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                top: "25%",
                right: "25%",
                width: "8px",
                height: "8px",
                backgroundColor: "#AED581",
              }}
            ></div>
            <div
              className="absolute rounded-full"
              style={{
                bottom: "25%",
                left: "25%",
                width: "8px",
                height: "8px",
                backgroundColor: "#2E7D32",
              }}
            ></div>
          </div>

          {/* Inner Circle */}
          <div
            className="absolute rounded-full border-2 opacity-40 animate-pulse"
            style={{
              width: "400px",
              height: "400px",
              borderColor: "#AED581",
            }}
          >
            <div
              className="absolute rounded-full border border-dashed"
              style={{
                top: "16px",
                left: "16px",
                right: "16px",
                bottom: "16px",
                borderColor: "#66BB6A",
              }}
            ></div>
          </div>

          {/* Tech Lines */}
          <div style={{ width: "700px", height: "700px", position: "absolute" }}>
            <div
              className="absolute animate-pulse"
              style={{
                top: "50%",
                left: "0",
                width: "80px",
                height: "1px",
                opacity: "0.6",
                backgroundColor: "#2E7D32",
              }}
            ></div>
            <div
              className="absolute animate-pulse"
              style={{
                top: "50%",
                right: "0",
                width: "64px",
                height: "1px",
                opacity: "0.6",
                backgroundColor: "#66BB6A",
                animationDelay: "1s",
              }}
            ></div>
            <div
              className="absolute animate-pulse"
              style={{
                top: "0",
                left: "50%",
                width: "1px",
                height: "80px",
                opacity: "0.6",
                backgroundColor: "#AED581",
                animationDelay: "0.5s",
              }}
            ></div>
            <div
              className="absolute animate-pulse"
              style={{
                bottom: "0",
                left: "50%",
                width: "1px",
                height: "64px",
                opacity: "0.6",
                backgroundColor: "#00897B",
                animationDelay: "1.5s",
              }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo Section */}
            <div className="relative">
              <div
                className="rounded-full flex items-center justify-center border-2 backdrop-blur"
                style={{
                  width: "128px",
                  height: "128px",
                  backgroundColor: "rgba(46, 125, 50, 0.1)",
                  borderColor: "#2E7D32",
                }}
              >
                <div className="text-center">
                  <div className="font-bold" style={{ fontSize: "1.875rem", color: "#2E7D32" }}>
                    e
                  </div>
                  <div
                    className="font-semibold"
                    style={{
                      fontSize: "0.875rem",
                      letterSpacing: "0.1em",
                      color: "#212121",
                    }}
                  >
                    E-CELL
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div
                className="absolute rounded-full animate-bounce"
                style={{
                  top: "-8px",
                  right: "-8px",
                  width: "16px",
                  height: "16px",
                  backgroundColor: "#66BB6A",
                }}
              ></div>
              <div
                className="absolute rounded-full animate-bounce"
                style={{
                  bottom: "-8px",
                  left: "-8px",
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#AED581",
                  animationDelay: "0.3s",
                }}
              ></div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1
                className="font-bold tracking-tight"
                style={{
                  fontSize: "clamp(3rem, 8vw, 4.5rem)",
                  color: "#212121",
                }}
              >
                An RGPV Initiative
              </h1>
              <p
                className="font-medium"
                style={{
                  fontSize: "clamp(1.25rem, 4vw, 1.5rem)",
                  color: "#2E7D32",
                }}
              >
                working to{" "}
                <span className="font-bold" style={{ color: "#66BB6A" }}>
                  bring Innovation
                </span>
              </p>
            </div>

            {/* CTA Button */}
            <div style={{ paddingTop: "2rem" }}>
              <button className="hero-button">E-VOLVE : E-CELL ANNUAL MAGAZINE</button>
            </div>

            {/* Subtitle */}
            <p
              className="opacity-80 max-w-2xl"
              style={{
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                color: "#212121",
              }}
            >
              Fostering entrepreneurship and innovation through technology, mentorship, and community building
            </p>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute rounded-full animate-float"
            style={{
              top: "25%",
              left: "25%",
              width: "8px",
              height: "8px",
              backgroundColor: "#AED581",
            }}
          ></div>
          <div
            className="absolute rounded-full animate-float"
            style={{
              top: "75%",
              right: "25%",
              width: "4px",
              height: "4px",
              backgroundColor: "#66BB6A",
              animationDelay: "1s",
            }}
          ></div>
          <div
            className="absolute rounded-full animate-float"
            style={{
              top: "50%",
              left: "16.666667%",
              width: "6px",
              height: "6px",
              backgroundColor: "#2E7D32",
              animationDelay: "2s",
            }}
          ></div>
          <div
            className="absolute rounded-full animate-float"
            style={{
              bottom: "25%",
              right: "16.666667%",
              width: "8px",
              height: "8px",
              backgroundColor: "#00897B",
              animationDelay: "3s",
            }}
          ></div>
        </div>
      </section>
    </>
  )
}

