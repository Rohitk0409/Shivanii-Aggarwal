import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-rose-500" : "text-stone-600 hover:text-rose-500"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `text-sm font-medium py-2.5 border-b border-stone-100 transition-colors duration-200 ${
      isActive ? "text-rose-500" : "text-stone-600"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100"
          : "bg-white"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-lg lg:text-xl font-bold text-stone-800 leading-tight">
                Shivanii Aggarwal
              </h1>
              <p className="text-xs text-stone-400 tracking-wide">
                Life Coach & Mindset Mentor
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                className={linkClass}
              >
                {link.name}
              </NavLink>
            ))}
            <button className="px-6 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium transition-colors duration-200 shadow-sm">
              Book Session
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-stone-700 hover:text-rose-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-5">
            <div className="flex flex-col bg-stone-50 rounded-2xl px-5 pt-2 pb-5 border border-stone-100 shadow-sm">
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
              <button className="mt-4 py-3 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium transition-colors duration-200">
                Book Session
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
