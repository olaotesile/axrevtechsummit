import React, { useState, useEffect } from "react";
import {
  FaDiscord,
  FaInstagram,
  FaEnvelope,
  FaCalendar,
  FaMapMarkerAlt,
  FaUsers,
  FaMicrophone,
  FaLightbulb,
} from "react-icons/fa";

const Logo = "./assets/Axrev(White).png";
const AttendeeImage = "/assets/axrev_home.jpg";

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-04-26T09:30:00");
    const now = new Date();
    return Math.max(0, Math.floor((targetDate - now) / 1000));
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const registerLink =
    "https://docs.google.com/forms/d/1pBaViC0xxw_Nz-Mvbaw3J5SO4hFVSl9_JzxSbILXd6k";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "highlights", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = formatTime(timeLeft);

  const partners = [
    "Amobern",
    "Grazac",
    "NUESA",
    "Nexr",
    "Unulax",
    "Chainroll",
    "Euretix",
  ];

  const features = [
    {
      icon: <FaUsers />,
      title: "Networking",
      description:
        "Connect with industry leaders, investors, and fellow innovators",
      image: "networking.jpg",
    },
    {
      icon: <FaMicrophone />,
      title: "Expert Speakers",
      description: "Learn from 65+ tech professionals and entrepreneurs",
      image: "speaker.jpg",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Discover cutting-edge technologies and future trends",
      image: "innovation.jpg",
    },
  ];

  const styles = {
    container: {
      backgroundColor: "#1a1a1a",
      color: "#ffffff",
      fontFamily:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      minHeight: "100vh",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: scrolled ? "1rem 5%" : "1.5rem 5%",
      backgroundColor: scrolled ? "rgba(26, 26, 26, 0.95)" : "transparent",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      zIndex: 100,
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid #4ade80" : "none",
      transition: "all 0.3s ease",
    },
    navLink: (isActive) => ({
      color: isActive ? "#4ade80" : "rgba(255, 255, 255, 0.7)",
      textDecoration: "none",
      fontWeight: isActive ? 600 : 400,
      fontSize: "0.95rem",
      transition: "all 0.3s ease",
      padding: "0.5rem 0",
    }),
    button: {
      backgroundColor: "#4ade80",
      color: "#1a1a1a",
      border: "none",
      padding: "0.75rem 2rem",
      borderRadius: "6px",
      fontWeight: 600,
      cursor: "pointer",
      fontSize: "0.95rem",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital@1&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .countdown-box {
          background: transparent;
          padding: 0;
          min-width: 70px;
          text-align: center;
        }
        
        .nav-link {
          position: relative;
        }
        
        .nav-link:hover {
          color: #4ade80 !important;
        }
        
        @media (max-width: 968px) {
          .hero-main {
            flex-direction: column !important;
            padding: 120px 5% 60px !important;
            gap: 3rem !important;
          }
          
          .hero-content {
            max-width: 100% !important;
          }
          
          .hero-image-box {
            width: 100% !important;
            max-width: 400px !important;
            height: 500px !important;
          }
          
          .nav-links {
            display: none !important;
          }
          
          h1 {
            font-size: 2.5rem !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <header style={styles.header}>
        <div>
          <img
            src={Logo}
            alt="Axrev Tech Summit"
            style={{
              height: scrolled ? "50px" : "70px",
              transition: "height 0.3s ease",
            }}
          />
        </div>
        <ul
          className="nav-links"
          style={{
            display: "flex",
            listStyle: "none",
            gap: "2.5rem",
            margin: 0,
            padding: 0,
          }}
        >
          {["home", "about", "highlights", "contact"].map((section) => {
            const isActive = activeSection === section;
            return (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="nav-link"
                  style={{
                    color: isActive ? "#4ade80" : "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    fontWeight: isActive ? 600 : 400,
                    fontSize: "0.95rem",
                    transition: "color 0.2s ease",
                    padding: "0.5rem 0",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.target.style.color = "rgba(255, 255, 255, 0.95)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.target.style.color = "rgba(255, 255, 255, 0.7)";
                    }
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            );
          })}
        </ul>
        <a href={registerLink} target="_blank" rel="noopener noreferrer">
          <button
            style={{
              ...styles.button,
              borderRadius: "18px",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#2dd47d";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#4ade80";
            }}
          >
            Register Now
          </button>
        </a>
      </header>

      {/* Hero Section */}
      <main
        id="home"
        className="hero-main"
        style={{
          display: "flex",
          alignItems: "flex-end", // 👈 pushes content toward bottom
          justifyContent: "space-between",
          minHeight: "100vh",
          paddingTop: "60px", // 👈 reduced from 120px (just enough to clear header)
          paddingBottom: "60px", // optional: tighten bottom spacing
          paddingLeft: "8%",
          paddingRight: "8%",
          maxWidth: "1400px",
          margin: "0 auto",
          gap: "6rem",
        }}
      >
        <div
          className="hero-content fade-in"
          style={{
            flex: 1,
            maxWidth: "600px",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
              color: "#ffffff",
              fontFamily:
                "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
          >
            Nigeria's Largest{" "}
            <span
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              Student-Led
            </span>{" "}
            Tech Summit
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255, 255, 255, 0.7)",
              marginBottom: "2rem",
              lineHeight: 1.7,
            }}
          >
            Connecting innovators, builders, and visionaries across Ekiti and
            beyond. Join 9,000+ attendees in shaping Nigeria's tech future.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            <a href={registerLink} target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  ...styles.button,
                  padding: "1rem 2.5rem",
                  fontSize: "1rem",
                  borderRadius: "18px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#2dd47d";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#4ade80";
                }}
              >
                Secure Your Spot
              </button>
            </a>

            <button
              style={{
                background: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "#ffffff",
                padding: "1rem 2.5rem",
                borderRadius: "18px",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "1rem",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#4ade80";
                e.target.style.color = "#4ade80";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
                e.target.style.color = "#ffffff";
              }}
            >
              Learn More
            </button>
          </div>

          <div style={{ display: "flex", gap: "2rem" }}>
            {[
              { val: days, label: "Days" },
              { val: hours, label: "Hours" },
              { val: minutes, label: "Minutes" },
              { val: secs, label: "Seconds" },
            ].map((item, i) => (
              <div key={i} className="countdown-box">
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    marginBottom: "0.25rem",
                    lineHeight: 1,
                  }}
                >
                  {String(item.val).padStart(2, "0")}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(255, 255, 255, 0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="hero-image-box fade-in"
          style={{
            width: "400px",
            height: "480px", // ✅ reduced height
            backgroundColor: "#2a2a2a",
            borderRadius: "8px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <img
            src={AttendeeImage}
            alt="Axrev Tech Summit"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </main>

      {/* Features Section */}
      <section style={{ padding: "80px 8%", background: "#0f0f0f" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2.5rem",
              textAlign: "center",
            }}
          >
            {features.map((feature, i) => (
              <div
                key={i}
                className="feature-card fade-in"
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: "320px", // fixed height for consistency
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  animationDelay: `${i * 0.2}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0, 0, 0, 0.2)";
                }}
              >
                {/* Background Image */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url("/assets/${feature.image}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Gradient Overlay: fades to black at bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "60%",
                    background:
                      "linear-gradient(to top, #222222ff 30%, transparent 70%)",
                  }}
                />

                {/* Content (on top of image + overlay) */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    height: "100%",
                    padding: "1.5rem",
                    color: "#ffffff",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2.25rem",
                      color: "#4ade80",
                      marginBottom: "1rem",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.375rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      opacity: 0.9,
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        style={{
          padding: "80px 0",
          background: "#0a0a0a",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{ textAlign: "center", marginBottom: "4rem", padding: "0 8%" }}
        >
          <h2 className="section-title">Our Partners</h2>
          <p
            style={{
              fontSize: "1.2rem",
              opacity: 0.8,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Proud to collaborate with industry leaders and innovators
          </p>
        </div>

        <div className="partners-wrapper">
          <div className="partners-track">
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className="partner-card">
                {partner}
              </div>
            ))}
          </div>
        </div>

        <style>{`
    .partners-wrapper {
      display: flex;
      overflow: hidden;
      width: 100%;
      mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    }

    .partners-track {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      padding: 0 8%;
      animation: scroll-partners 25s linear infinite;
      width: max-content;
    }

    .partners-track:hover {
      animation-play-state: paused;
    }

    .partner-card {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      padding: 1rem 1.5rem;
      min-width: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.85);
      white-space: nowrap;
      transition: background 0.3s ease;
    }

    .partner-card:hover {
      background: rgba(74, 222, 128, 0.1);
      color: #4ade80;
      border-color: rgba(74, 222, 128, 0.2);
    }

    @keyframes scroll-partners {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    @media (max-width: 768px) {
      .partners-track {
        gap: 1.5rem;
        animation-duration: 30s;
      }
      .partner-card {
        min-width: 120px;
        padding: 0.9rem 1.2rem;
        font-size: 0.95rem;
      }
    }
  `}</style>
      </section>

      {/* Theme Teaser */}
      <section
        style={{
          padding: "100px 8%",
          textAlign: "center",
          background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(156, 136, 255, 0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "2rem",
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "0.95rem",
            }}
          >
            <FaCalendar />
            <span>April 26, 2025 • 9:30 AM</span>
          </div>

          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "1rem",
              color: "#9c88ff",
              fontWeight: 900,
            }}
          >
            2025 Theme
          </h2>
          <p
            style={{ fontSize: "1.3rem", opacity: 0.85, marginBottom: "3rem" }}
          >
            Something bold. Something transformative. Stay tuned.
          </p>
          <div
            style={{
              fontSize: "4rem",
              fontWeight: 900,
              filter: "blur(12px)",
              opacity: 0.4,
              letterSpacing: "4px",
              animation: "pulse 3s ease-in-out infinite",
            }}
          >
            COMING SOON
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{ padding: "100px 8%", backgroundColor: "#0f0f0f" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            className="section-title"
            style={{
              textAlign: "left",
              marginBottom: "2.5rem",
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            About
          </h2>

          <div style={{ display: "grid", gap: "2rem", marginBottom: "4rem" }}>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                opacity: 0.9,
                textAlign: "left",
                fontWeight: 400,
              }}
            >
              The Axrev Tech Summit is an initiative launched by Ola Otesile to
              revolutionize Nigeria's tech landscape. This event is designed to
              empower aspiring technologists, engineers, and entrepreneurs with
              the knowledge, mentorship, and opportunities needed to drive
              innovation.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                opacity: 0.9,
                textAlign: "left",
              }}
            >
              The summit brings together industry leaders, investors, and
              visionaries to spark discussions, forge collaborations, and
              inspire the next generation of problem-solvers. Nigeria stands on
              the brink of a technological revolution, and this summit serves as
              the launchpad for individuals who will reshape the nation's future
              through STEM and innovation.
            </p>
          </div>

          {/* Stats Section — centered */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "2.5rem",
              margin: "4rem 0",
            }}
          >
            {[{ num: "1,000+", label: "ATTENDEES", icon: <FaUsers /> }].map(
              (stat, i) => (
                <div
                  key={i}
                  className="stat-card fade-in-up"
                  style={{
                    animationDelay: `${i * 0.15}s`,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2.5rem",
                      color: "#4ade80", // your preferred green
                      marginBottom: "0.5rem",
                    }}
                  >
                    {stat.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "2.8rem",
                      fontWeight: 900,
                      color: "#4ade80",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {stat.num}
                  </span>
                  <span
                    style={{
                      fontSize: "1rem",
                      opacity: 0.8,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      fontWeight: 600,
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Merch Section — new standalone section */}
      <section
        style={{
          padding: "80px 8%",
          background: "linear-gradient(135deg, #f9fafb 0%, #f0f4f8 100%)",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h3
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                color: "#111827",
                fontWeight: 800,
              }}
            >
              Get Axrev Merch
            </h3>
            <p
              style={{
                marginBottom: "2rem",
                fontSize: "1.1rem",
                color: "#4b5563",
                lineHeight: 1.6,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Represent the movement with official hoodies, tees, and exclusive
              gear.
            </p>
            <a
              href="https://your-merch-link.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                style={{
                  backgroundColor: "#e5e7eb",
                  color: "#1f2937",
                  border: "none",
                  padding: "0.85rem 2.25rem",
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#d1d5db";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#e5e7eb";
                }}
              >
                Shop Now →
              </button>
            </a>
          </div>

          {/* Merch Product Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.75rem",
              marginTop: "2.5rem",
            }}
          >
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Real merch image */}
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    backgroundImage: `url("/assets/merch_${item}.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div style={{ padding: "1rem" }}>
                  <div
                    style={{
                      fontWeight: 600,
                      color: "#1f2937",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item === 1
                      ? "Axrev Hoodie"
                      : item === 2
                      ? "Axrev Sweater"
                      : "Axrev Tee"}
                  </div>
                  <div style={{ color: "#6b7280", fontSize: "0.95rem" }}>
                    {item === 1 ? "₦8,000" : item === 2 ? "₦6,500" : "₦4,000"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section
        id="highlights"
        style={{
          padding: "100px 8%",
          background: "linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}
        >
          <h2
            className="section-title"
            style={{ marginBottom: "1.25rem", fontSize: "2.5rem" }}
          >
            Relive Tech Summit 2024
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              opacity: 0.9,
              marginBottom: "4rem",
              lineHeight: 1.6,
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Over 200 students. 10+ inspiring speakers. Countless groundbreaking
            ideas.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: "1.25rem",
            maxWidth: "1000px",
            margin: "0 auto 3.5rem",
            height: "500px",
          }}
        >
          {/* Large item (top-left) - Keynote */}
          <div
            style={{
              gridColumn: "1 / 2",
              gridRow: "1 / 3",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url("/assets/keynote.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          {/* Top-right - Session */}
          <div
            style={{
              gridColumn: "2 / 3",
              gridRow: "1 / 2",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url("/assets/session.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          {/* Bottom-right - Networking */}
          <div
            style={{
              gridColumn: "2 / 3",
              gridRow: "2 / 3",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url("/assets/community.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>

        {/* Refined CTA */}
        <div style={{ textAlign: "center" }}>
          <a
            href="https://drive.google.com/folderview?id=10DSWLNGwRY7_nASRNGcWJmXcj3YZbe9Z"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              fontSize: "1.05rem",
              fontWeight: 600,
              color: "#4ade80",
              textDecoration: "none",
              padding: "0.5rem 0",
              borderBottom: "1px solid transparent",
              transition: "border-color 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#4ade80";
              e.target.style.color = "#4ade80";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "transparent";
              e.target.style.color = "#4ade80";
            }}
          >
            View full photo gallery
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        style={{
          backgroundColor: "#0a0a0a",
          color: "#ffffff",
          padding: "4rem 8%",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "2.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <div>
              <img
                src={Logo}
                alt="Axrev Tech Summit"
                style={{ height: "40px", marginBottom: "1rem" }}
              />
              <p style={{ fontSize: "1rem", opacity: 0.85, lineHeight: 1.6 }}>
                Empowering Nigeria's next generation of tech innovators and
                leaders.
              </p>
            </div>

            <div>
              <h4
                style={{
                  fontWeight: 600,
                  marginBottom: "1rem",
                  fontSize: "1.1rem",
                }}
              >
                Location
              </h4>
              <p style={{ fontSize: "1rem", opacity: 0.85, lineHeight: 1.7 }}>
                <FaMapMarkerAlt
                  style={{ marginRight: "0.5rem", opacity: 0.7 }}
                />
                Federal University Oye Ekiti
                <br />
                Ikole Campus, Ekiti State, Nigeria
              </p>
            </div>

            <div>
              <h4
                style={{
                  fontWeight: 600,
                  marginBottom: "1rem",
                  fontSize: "1.1rem",
                }}
              >
                Connect
              </h4>
              <p
                style={{
                  fontSize: "1rem",
                  opacity: 0.85,
                  marginBottom: "1rem",
                }}
              >
                +234 913 713 4948
              </p>
              <div
                style={{ display: "flex", gap: "1.25rem", marginTop: "1rem" }}
              >
                {[
                  { Icon: FaDiscord, href: "https://discord.com" },
                  { Icon: FaInstagram, href: "https://instagram.com" },
                  {
                    Icon: FaEnvelope,
                    href: "mailto:axrevtechsummit@gmail.com",
                  },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#ffffff",
                      fontSize: "1.5rem",
                      opacity: 0.8,
                      transition: "opacity 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "1")}
                    onMouseLeave={(e) => (e.target.style.opacity = "0.8")}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              paddingTop: "2rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.95rem",
                opacity: 0.8,
                marginBottom: "0.5rem",
              }}
            >
              © 2025 Axrev Tech Summit. All rights reserved.
            </p>
            <p style={{ fontSize: "0.9rem", opacity: 0.75 }}>
              Crafted with passion by{" "}
              <a
                href="https://olaotesile.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#9c88ff", // keep your signature purple
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => (e.target.style.color = "#4ade80")} // your green on hover
                onMouseLeave={(e) => (e.target.style.color = "#9c88ff")}
              >
                Ola Otesile
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
