import { ArrowRight, Sparkles } from "lucide-react";
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

// ✅ Replace with your actual WhatsApp number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = "919999999999";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Shivanii! I'd love to book a healing session with you. 🌿",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const credentials = [
  { icon: "🔹", text: "Law of Attraction Happiness Life Coach" },
  { icon: "🟢", text: "Transform Your Life Workshop Leader" },
  { icon: "🟢", text: "Money Breakthrough Workshop Leader" },
  { icon: "🔹", text: "Sound Healer" },
  { icon: "🟢", text: "Reiki Grandmaster" },
  { icon: "🔹", text: "Numerologist" },
  { icon: "🟢", text: "Angel Card Reader" },
  { icon: "🔹", text: "Past Life Regression & Hypno-Heal Therapist" },
  { icon: "🔹", text: "Healing Crystals" },
  { icon: "🟢", text: "Intention Candles" },
  { icon: "🟢", text: "Mandalas" },
  { icon: "🔹", text: "Law of Attraction & Vision Board Workshop" },
];

const journey = [
  {
    year: "2015",
    title: "The Awakening",
    desc: "Shivanii began her spiritual journey after a personal transformation experience that changed everything.",
  },
  {
    year: "2017",
    title: "Reiki Grandmaster",
    desc: "Achieved the highest level of Reiki certification and began healing others professionally.",
  },
  {
    year: "2019",
    title: "Anttahkarana Born",
    desc: "Founded her brand 'Anttahkarana: Inner Calling' to guide others to their true purpose.",
  },
  {
    year: "2022",
    title: "500+ Lives Healed",
    desc: "Reached a milestone of transforming over 500 lives through workshops, sessions, and coaching.",
  },
];

export default function AboutPage() {
  const [heroRef, heroVisible] = useFadeIn();
  const [credRef, credVisible] = useFadeIn();
  const [journeyRef, journeyVisible] = useFadeIn();
  const [missionRef, missionVisible] = useFadeIn();

  return (
    <main className="bg-[#f0f9f4] min-h-screen">
      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-24 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-200/20 rounded-full blur-2xl pointer-events-none" />

        <div
          ref={heroRef}
          className={`max-w-6xl mx-auto px-5 lg:px-10 grid md:grid-cols-2 gap-14 items-center transition-all duration-700 ${
            heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Image */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-300 to-blue-300 rotate-3" />
              <div className="relative rounded-3xl overflow-hidden w-full h-full shadow-xl">
                <img
                  src="/gallery/image1.png"
                  alt="Shivanii Aggarwal"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="w-full h-full hidden items-center justify-center flex-col gap-2 bg-gradient-to-br from-teal-100 to-blue-100">
                  <span className="text-6xl">🌿</span>
                  <span className="text-teal-600 text-sm font-medium text-center px-4">
                    Add Shivanii's Photo Here
                  </span>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-2.5 shadow-lg border border-teal-100 text-sm font-semibold text-stone-700 flex items-center gap-2">
                <Sparkles size={14} className="text-teal-500" /> Soul Healer
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2 space-y-5">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-semibold px-4 py-2 rounded-full tracking-wide">
              <Sparkles size={14} /> Anttahkarana: Inner Calling
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 leading-tight">
              Hi, I'm <span className="text-teal-600">Shivanii</span> ✨
            </h1>
            <p className="text-stone-500 text-lg leading-relaxed">
              Your Happiness Life Coach & Soul Healer — helping you move from{" "}
              <strong className="text-stone-700">Chaos to Calm</strong>, and{" "}
              <strong className="text-stone-700">Confusion to Clarity</strong>.
            </p>
            <p className="text-stone-500 leading-relaxed">
              I help you rewire your subconscious mind, reclaim your inner
              power, and attract your true heart's desires through spiritual
              healing and energy work.
            </p>

            {/* WhatsApp CTA Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-full font-medium transition-all duration-200 shadow-md hover:scale-105"
            >
              {/* WhatsApp SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="white"
                className="w-5 h-5"
              >
                <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.62 4.5 1.7 6.4L3 29l6.8-1.67A13 13 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm6.27 17.4c-.26.73-1.54 1.4-2.13 1.48-.54.08-1.24.11-2-.13a18.4 18.4 0 0 1-1.86-.69c-3.26-1.41-5.4-4.74-5.56-4.96-.16-.22-1.3-1.73-1.3-3.3 0-1.57.82-2.35 1.12-2.67.3-.32.65-.4.87-.4h.62c.2 0 .47-.08.73.56.27.65.92 2.24 1 2.4.08.16.13.35.03.57-.1.22-.15.35-.3.54-.14.19-.3.43-.43.58-.14.15-.29.31-.12.61.17.3.74 1.22 1.58 1.98 1.08.97 2 1.27 2.3 1.41.3.14.47.12.64-.07.17-.2.74-.86.93-1.15.2-.3.4-.25.67-.15.27.1 1.7.8 1.99.95.3.14.5.22.57.34.07.12.07.73-.2 1.46z" />
              </svg>
              Chat on WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section
        ref={missionRef}
        className="py-20 max-w-4xl mx-auto px-5 text-center"
      >
        <div
          className={`transition-all duration-700 ${
            missionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-teal-600 text-sm font-semibold tracking-widest uppercase mb-3">
            My Mission
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-6">
            Align Your Energy.
            <br />
            Manifest Your Desires.
          </h2>
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 border border-teal-100">
            <p className="text-stone-600 text-lg leading-relaxed italic">
              "🌀 If you're ready to align your energy and manifest the life you
              truly deserve, I'm here to guide you on that inner journey."
            </p>
            <p className="text-teal-600 font-semibold mt-4">
              — Shivanii Aggarwal
            </p>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section ref={credRef} className="py-20 bg-white">
        <div
          className={`max-w-6xl mx-auto px-5 lg:px-10 transition-all duration-700 ${
            credVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <p className="text-teal-600 text-sm font-semibold tracking-widest uppercase mb-2">
              Certifications & Expertise
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800">
              What I'm Trained In
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map(({ icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 bg-teal-50 hover:bg-teal-100 border border-teal-100 rounded-2xl px-5 py-4 transition-colors duration-200"
              >
                <span className="text-xl flex-shrink-0">{icon}</span>
                <span className="text-stone-700 text-sm font-medium">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY ── */}
      <section
        ref={journeyRef}
        className="py-20 max-w-4xl mx-auto px-5 lg:px-10"
      >
        <div
          className={`transition-all duration-700 ${
            journeyVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <p className="text-teal-600 text-sm font-semibold tracking-widest uppercase mb-2">
              My Story
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800">
              The Journey So Far
            </h2>
          </div>
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-teal-100 hidden md:block" />
            <div className="space-y-8">
              {journey.map(({ year, title, desc }) => (
                <div key={year} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold shadow-md z-10">
                    {year.slice(2)}
                  </div>
                  <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm border border-teal-100">
                    <div className="text-teal-500 text-xs font-semibold mb-1">
                      {year}
                    </div>
                    <h3 className="text-stone-800 font-semibold text-lg mb-1">
                      {title}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-5">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-10 sm:p-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-teal-100 mb-8 text-base">
            Connect with Shivanii on WhatsApp and begin your healing journey
            today.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-teal-700 hover:bg-teal-50 px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-md hover:scale-105"
          >
            {/* WhatsApp SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5"
              fill="#16a34a"
            >
              <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.62 4.5 1.7 6.4L3 29l6.8-1.67A13 13 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm6.27 17.4c-.26.73-1.54 1.4-2.13 1.48-.54.08-1.24.11-2-.13a18.4 18.4 0 0 1-1.86-.69c-3.26-1.41-5.4-4.74-5.56-4.96-.16-.22-1.3-1.73-1.3-3.3 0-1.57.82-2.35 1.12-2.67.3-.32.65-.4.87-.4h.62c.2 0 .47-.08.73.56.27.65.92 2.24 1 2.4.08.16.13.35.03.57-.1.22-.15.35-.3.54-.14.19-.3.43-.43.58-.14.15-.29.31-.12.61.17.3.74 1.22 1.58 1.98 1.08.97 2 1.27 2.3 1.41.3.14.47.12.64-.07.17-.2.74-.86.93-1.15.2-.3.4-.25.67-.15.27.1 1.7.8 1.99.95.3.14.5.22.57.34.07.12.07.73-.2 1.46z" />
            </svg>
            Book via WhatsApp <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
