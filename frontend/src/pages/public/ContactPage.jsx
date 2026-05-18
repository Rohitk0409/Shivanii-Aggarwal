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
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
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

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
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
    width="20"
    height="20"
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

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
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

// ── CONTACT DATA ──
const contactInfo = [
  {
    icon: <PhoneIcon />,
    label: "Call / WhatsApp",
    value: "+91 8595866373",
    href: "tel:+918595866373",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <InstagramIcon />,
    label: "Instagram",
    value: "@shivanii.happittude",
    href: "https://www.instagram.com/shivanii.happittude",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: <FacebookIcon />,
    label: "Facebook Page",
    value: "Antahkarana Inner Calling",
    href: "https://www.facebook.com/Antahkarana-Inner-Calling-100144481490957",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <FacebookIcon />,
    label: "Facebook Personal",
    value: "Shivanii Aggarwal",
    href: "https://www.facebook.com/share/154iTkHpowU/",
    color: "bg-indigo-100 text-indigo-600",
  },
];

const services = [
  "Law of Attraction Coaching",
  "Vision Board Workshop",
  "Reiki Healing",
  "Sound Healing",
  "Past Life Regression",
  "Numerology Reading",
  "Angel Card Reading",
  "Money Breakthrough Workshop",
  "Crystals / Candles / Mandalas",
  "Other / Just Enquiring",
];

export default function ContactPage() {
  const [heroRef, heroVisible] = useFadeIn();
  const [formRef, formVisible] = useFadeIn();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#fdf8f6] min-h-screen">
      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 py-20 text-center relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />
        <div
          ref={heroRef}
          className={`max-w-2xl mx-auto px-5 transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 text-xs font-semibold px-4 py-2 rounded-full tracking-wide mb-5">
            <HeartIcon /> Happy to Help!
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-5">
            Let's Begin Your <span className="text-rose-500">Journey</span>
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed">
            Reach out to Shivanii and take the first step toward the life you
            truly deserve. Every great transformation begins with one decision.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section
        ref={formRef}
        className={`max-w-6xl mx-auto px-5 lg:px-10 py-20 grid lg:grid-cols-5 gap-10 transition-all duration-700 ${formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* ── LEFT: CONTACT INFO ── */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-stone-800 mb-2">
              Get in Touch
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed">
              Shivanii is available for sessions, workshops, and inquiries.
              Reach her through any of the channels below.
            </p>
          </div>

          <div className="space-y-3">
            {contactInfo.map(({ icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border border-stone-100 shadow-sm hover:shadow-md hover:border-rose-200 transition-all duration-200 group"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}
                >
                  {icon}
                </div>
                <div>
                  <div className="text-xs text-stone-400 font-medium">
                    {label}
                  </div>
                  <div className="text-stone-700 text-sm font-semibold group-hover:text-rose-500 transition-colors">
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Quick Info */}
          <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl p-6 border border-rose-100 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-500 flex items-center justify-center flex-shrink-0">
                <MapPinIcon />
              </div>
              <div>
                <div className="text-xs text-stone-400 font-medium mb-0.5">
                  Location
                </div>
                <div className="text-stone-700 text-sm font-medium">
                  India (Online & In-Person Sessions Available)
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                <ClockIcon />
              </div>
              <div>
                <div className="text-xs text-stone-400 font-medium mb-0.5">
                  Response Time
                </div>
                <div className="text-stone-700 text-sm font-medium">
                  Within 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: FORM ── */}
        <div className="lg:col-span-3">
          {submitted ? (
            <div className="bg-white rounded-3xl p-12 shadow-sm border border-rose-100 text-center h-full flex flex-col items-center justify-center gap-4">
              <div className="text-6xl">🌸</div>
              <h3 className="text-2xl font-bold text-stone-800">
                Message Sent!
              </h3>
              <p className="text-stone-500">
                Thank you for reaching out. Shivanii will get back to you within
                24 hours. Have a blessed day! ✨
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    message: "",
                  });
                }}
                className="mt-2 text-rose-500 text-sm font-medium hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 space-y-5"
            >
              <h2 className="text-xl font-bold text-stone-800 mb-1">
                Book a Session or Enquire
              </h2>
              <p className="text-stone-400 text-sm">
                Fill in the form and Shivanii will personally reach out to you.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5 block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Priya Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none text-stone-700 text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5 block">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="priya@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none text-stone-700 text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5 block">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none text-stone-700 text-sm transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5 block">
                  I'm Interested In *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none text-stone-700 text-sm transition-all bg-white"
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell Shivanii a little about yourself and what you're seeking help with..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none text-stone-700 text-sm transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white py-4 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02]"
              >
                <SendIcon /> Send Message
              </button>

              <p className="text-center text-xs text-stone-400">
                Your information is safe and will never be shared. 🔒
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
