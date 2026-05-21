import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

// ✅ Replace with Shivanii's real WhatsApp number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = "918595866373";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Shivanii! I'd love to book a healing session with you. 🌿",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-semibold transition-all duration-200 group ${
      isActive ? "text-emerald-600" : "text-slate-600 hover:text-emerald-600"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center gap-3 text-sm font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 ${
      isActive
        ? "bg-gradient-to-r from-teal-50 to-emerald-50 text-emerald-600 border border-emerald-100"
        : "text-slate-600 hover:bg-slate-50"
    }`;

  return (
    <>
      {/* TOP ACCENT BAR */}
      <div className="h-1 w-full bg-gradient-to-r from-teal-400 via-emerald-500 to-cyan-400" />

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] border-b border-slate-100"
            : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-between h-[72px]">
            {/* ── LOGO ── */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 blur-[6px] opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="relative w-12 h-12 rounded-full p-[2.5px] bg-gradient-to-br from-teal-400 via-emerald-500 to-cyan-400 shadow-lg">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src="/logo.png"
                      alt="Shivanii Aggarwal"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML =
                          '<span class="w-full h-full flex items-center justify-center text-emerald-600 font-bold text-lg">S</span>';
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="leading-tight">
                <h1 className="text-[17px] font-bold text-slate-800 tracking-tight group-hover:text-emerald-700 transition-colors duration-200">
                  Anttahkarana
                </h1>
                <p className="text-[11px] font-medium tracking-widest text-teal-500 uppercase">
                  Inner Calling
                </p>
              </div>
            </Link>

            {/* ── DESKTOP NAV ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === "/"}
                  className={linkClass}
                >
                  {({ isActive }) => (
                    <span className="relative px-4 py-2 rounded-full block transition-all duration-200 hover:bg-emerald-50">
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500" />
                      )}
                    </span>
                  )}
                </NavLink>
              ))}

              {/* Divider */}
              <div className="w-px h-5 bg-slate-200 mx-2" />

              {/* ── DESKTOP CTA → WhatsApp ── */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-emerald-200 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                {/* WhatsApp icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="white"
                  width="15"
                  height="15"
                >
                  <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.62 4.5 1.7 6.4L3 29l6.8-1.67A13 13 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm6.27 17.4c-.26.73-1.54 1.4-2.13 1.48-.54.08-1.24.11-2-.13a18.4 18.4 0 0 1-1.86-.69c-3.26-1.41-5.4-4.74-5.56-4.96-.16-.22-1.3-1.73-1.3-3.3 0-1.57.82-2.35 1.12-2.67.3-.32.65-.4.87-.4h.62c.2 0 .47-.08.73.56.27.65.92 2.24 1 2.4.08.16.13.35.03.57-.1.22-.15.35-.3.54-.14.19-.3.43-.43.58-.14.15-.29.31-.12.61.17.3.74 1.22 1.58 1.98 1.08.97 2 1.27 2.3 1.41.3.14.47.12.64-.07.17-.2.74-.86.93-1.15.2-.3.4-.25.67-.15.27.1 1.7.8 1.99.95.3.14.5.22.57.34.07.12.07.73-.2 1.46z" />
                </svg>
                Book Session
              </a>
            </div>

            {/* ── MOBILE TOGGLE ── */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-600 transition-all duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`absolute transition-all duration-200 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}
              >
                <X size={20} />
              </span>
              <span
                className={`absolute transition-all duration-200 ${isOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}
              >
                <Menu size={20} />
              </span>
            </button>
          </div>

          {/* ── MOBILE MENU ── */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-[400px] opacity-100 pb-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/80 p-3 mt-1">
              {/* Mobile logo strip */}
              <div className="flex items-center gap-3 px-4 py-3 mb-2 border-b border-slate-100">
                <div className="w-9 h-9 rounded-full p-[2px] bg-gradient-to-br from-teal-400 to-emerald-500 shadow">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src="/logo.png"
                      alt="Logo"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.parentElement.innerHTML =
                          '<span class="w-full h-full flex items-center justify-center text-emerald-600 font-bold text-sm">S</span>';
                      }}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Shivanii Aggarwal
                  </p>
                  <p className="text-[10px] text-teal-500 font-medium tracking-widest uppercase">
                    Life Coach
                  </p>
                </div>
              </div>

              {/* Nav links */}
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setIsOpen(false)}
                    className={mobileLinkClass}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* ── MOBILE CTA → WhatsApp ── */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white text-sm font-semibold transition-all duration-300 shadow-md"
              >
                {/* WhatsApp icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="white"
                  width="16"
                  height="16"
                >
                  <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.62 4.5 1.7 6.4L3 29l6.8-1.67A13 13 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm6.27 17.4c-.26.73-1.54 1.4-2.13 1.48-.54.08-1.24.11-2-.13a18.4 18.4 0 0 1-1.86-.69c-3.26-1.41-5.4-4.74-5.56-4.96-.16-.22-1.3-1.73-1.3-3.3 0-1.57.82-2.35 1.12-2.67.3-.32.65-.4.87-.4h.62c.2 0 .47-.08.73.56.27.65.92 2.24 1 2.4.08.16.13.35.03.57-.1.22-.15.35-.3.54-.14.19-.3.43-.43.58-.14.15-.29.31-.12.61.17.3.74 1.22 1.58 1.98 1.08.97 2 1.27 2.3 1.41.3.14.47.12.64-.07.17-.2.74-.86.93-1.15.2-.3.4-.25.67-.15.27.1 1.7.8 1.99.95.3.14.5.22.57.34.07.12.07.73-.2 1.46z" />
                </svg>
                Book a Free Session
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
