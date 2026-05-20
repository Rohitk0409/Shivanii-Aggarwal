import { useEffect, useRef, useState } from "react";

function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

// ── SVG ICONS ──
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const PhoneCallIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3.04 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    width="22"
    height="22"
  >
    <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.62 4.5 1.7 6.4L3 29l6.8-1.67A13 13 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm6.27 17.4c-.26.73-1.54 1.4-2.13 1.48-.54.08-1.24.11-2-.13a18.4 18.4 0 0 1-1.86-.69c-3.26-1.41-5.4-4.74-5.56-4.96-.16-.22-1.3-1.73-1.3-3.3 0-1.57.82-2.35 1.12-2.67.3-.32.65-.4.87-.4h.62c.2 0 .47-.08.73.56.27.65.92 2.24 1 2.4.08.16.13.35.03.57-.1.22-.15.35-.3.54-.14.19-.3.43-.43.58-.14.15-.29.31-.12.61.17.3.74 1.22 1.58 1.98 1.08.97 2 1.27 2.3 1.41.3.14.47.12.64-.07.17-.2.74-.86.93-1.15.2-.3.4-.25.67-.15.27.1 1.7.8 1.99.95.3.14.5.22.57.34.07.12.07.73-.2 1.46z" />
  </svg>
);

// ── WHATSAPP CONFIG ──
const WHATSAPP_NUMBER = "918595866373";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Shivanii! I'd love to book a healing session with you. 🌿",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// ── CONTACT CHANNELS ──
const contactChannels = [
  {
    icon: <WhatsAppIcon />,
    label: "WhatsApp",
    value: "+91 8595866373",
    sub: "Tap to open chat instantly",
    href: WHATSAPP_URL,
    iconBg: "bg-green-100 text-green-600",
    hoverBorder: "hover:border-green-300 hover:shadow-green-100",
    hoverText: "group-hover:text-green-600",
  },
  {
    icon: <PhoneCallIcon />,
    label: "Call",
    value: "+91 8595866373",
    sub: "Available Mon–Sat, 10am–7pm",
    href: "tel:+918595866373",
    iconBg: "bg-teal-100 text-teal-600",
    hoverBorder: "hover:border-teal-300 hover:shadow-teal-100",
    hoverText: "group-hover:text-teal-600",
  },
  {
    icon: <InstagramIcon />,
    label: "Instagram",
    value: "@shivanii.happittude",
    sub: "DM for quick queries",
    href: "https://www.instagram.com/shivanii.happittude",
    iconBg: "bg-pink-100 text-pink-500",
    hoverBorder: "hover:border-pink-200 hover:shadow-pink-100",
    hoverText: "group-hover:text-pink-500",
  },
  {
    icon: <FacebookIcon />,
    label: "Facebook Page",
    value: "Antahkarana Inner Calling",
    sub: "Like & message the page",
    href: "https://www.facebook.com/Antahkarana-Inner-Calling-100144481490957",
    iconBg: "bg-blue-100 text-blue-600",
    hoverBorder: "hover:border-blue-200 hover:shadow-blue-100",
    hoverText: "group-hover:text-blue-600",
  },
  {
    icon: <FacebookIcon />,
    label: "Facebook Personal",
    value: "Shivanii Aggarwal",
    sub: "Connect personally",
    href: "https://www.facebook.com/share/154iTkHpowU/",
    iconBg: "bg-indigo-100 text-indigo-600",
    hoverBorder: "hover:border-indigo-200 hover:shadow-indigo-100",
    hoverText: "group-hover:text-indigo-600",
  },
];

export default function ContactPage() {
  const [heroRef, heroVisible] = useFadeIn();
  const [cardsRef, cardsVisible] = useFadeIn();

  return (
    <main className="bg-[#f0f9f4] min-h-screen">
      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-20 text-center relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-5 w-48 h-48 bg-blue-200/20 rounded-full blur-2xl pointer-events-none" />
        <div
          ref={heroRef}
          className={`max-w-2xl mx-auto px-5 transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-semibold px-4 py-2 rounded-full tracking-wide mb-5">
            <HeartIcon /> Happy to Help!
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-5">
            Let's Begin Your <span className="text-teal-600">Journey</span>
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed">
            Reach out to Shivanii and take the first step toward the life you
            truly deserve. Every great transformation begins with one decision.
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section
        ref={cardsRef}
        className={`max-w-2xl mx-auto px-5 lg:px-10 py-16 transition-all duration-700 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-stone-800 mb-2">
            Get in Touch
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed">
            Choose the channel that's most convenient for you. Shivanii responds
            within 24 hours.
          </p>
        </div>

        {/* Contact channel cards */}
        <div className="flex flex-col gap-3">
          {contactChannels.map(
            ({
              icon,
              label,
              value,
              sub,
              href,
              iconBg,
              hoverBorder,
              hoverText,
            }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-5 bg-white rounded-2xl px-6 py-5 border border-stone-100 shadow-sm hover:shadow-md transition-all duration-200 ${hoverBorder}`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${iconBg}`}
                >
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-stone-400 font-semibold uppercase tracking-wide mb-0.5">
                    {label}
                  </div>
                  <div
                    className={`text-stone-800 font-semibold text-base truncate transition-colors duration-200 ${hoverText}`}
                  >
                    {value}
                  </div>
                  <div className="text-stone-400 text-xs mt-0.5">{sub}</div>
                </div>
                {/* Chevron arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-stone-300 group-hover:text-stone-500 flex-shrink-0 transition-colors duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 18l6-6-6-6"
                  />
                </svg>
              </a>
            ),
          )}
        </div>

        {/* Info pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <div className="flex items-center gap-2 bg-white border border-teal-100 rounded-full px-5 py-2.5 text-sm text-stone-600 shadow-sm">
            <MapPinIcon />
            India — Online & In-Person
          </div>
          <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-5 py-2.5 text-sm text-stone-600 shadow-sm">
            <ClockIcon />
            Responds within 24 hours
          </div>
        </div>

        {/* Big WhatsApp CTA */}
        <div className="mt-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white w-full py-4 rounded-2xl font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-green-200 hover:scale-[1.02]"
          >
            <WhatsAppIcon /> Book a Session on WhatsApp
          </a>
          <p className="text-center text-xs text-stone-400 mt-3">
            Opens WhatsApp with a pre-filled message — ready to send in one tap
            💬
          </p>
        </div>
      </section>
    </main>
  );
}
