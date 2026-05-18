import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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

const credentials = [
  { icon: "🔹", text: "Law of Attraction Happiness Life Coach" },
  { icon: "🔷", text: "Transform Your Life Workshop Leader" },
  { icon: "🔷", text: "Money Breakthrough Workshop Leader" },
  { icon: "🔹", text: "Sound Healer" },
  { icon: "🔷", text: "Reiki Grandmaster" },
  { icon: "🔹", text: "Numerologist" },
  { icon: "🔷", text: "Angel Card Reader" },
  { icon: "🔹", text: "Past Life Regression & Hypno-Heal Therapist" },
  { icon: "🔹", text: "Healing Crystals" },
  { icon: "🔷", text: "Intention Candles" },
  { icon: "🔷", text: "Mandalas" },
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
    <main className="bg-[#fdf8f6] min-h-screen">
      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 py-24 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />
        <div
          ref={heroRef}
          className={`max-w-6xl mx-auto px-5 lg:px-10 grid md:grid-cols-2 gap-14 items-center transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Image */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-300 to-amber-300 rotate-3" />
              <div className="relative rounded-3xl overflow-hidden w-full h-full shadow-xl">
                {/* Replace src with Shivanii's real image */}
                <img
                  src="/images/shivanii-about.jpg"
                  alt="Shivanii Aggarwal"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="w-full h-full hidden items-center justify-center flex-col gap-2 bg-gradient-to-br from-rose-100 to-amber-100">
                  <span className="text-6xl">🌸</span>
                  <span className="text-rose-500 text-sm font-medium text-center px-4">
                    Add Shivanii's Photo Here
                  </span>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-2.5 shadow-lg border border-rose-100 text-sm font-semibold text-stone-700 flex items-center gap-2">
                <Sparkles size={14} className="text-rose-400" /> Soul Healer
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2 space-y-5">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 text-xs font-semibold px-4 py-2 rounded-full tracking-wide">
              <Sparkles size={14} /> Anttahkarana: Inner Calling
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 leading-tight">
              Hi, I'm <span className="text-rose-500">Shivanii</span> ✨
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
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-7 py-3.5 rounded-full font-medium transition-all duration-200 shadow-md hover:scale-105"
            >
              Work With Me <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section
        ref={missionRef}
        className="py-20 max-w-4xl mx-auto px-5 text-center"
      >
        <div
          className={`transition-all duration-700 ${missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-rose-500 text-sm font-semibold tracking-widest uppercase mb-3">
            My Mission
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-6">
            Align Your Energy.
            <br />
            Manifest Your Desires.
          </h2>
          <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-3xl p-8 border border-rose-100">
            <p className="text-stone-600 text-lg leading-relaxed italic">
              "🌀 If you're ready to align your energy and manifest the life you
              truly deserve, I'm here to guide you on that inner journey."
            </p>
            <p className="text-rose-500 font-semibold mt-4">
              — Shivanii Aggarwal
            </p>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section ref={credRef} className="py-20 bg-white">
        <div
          className={`max-w-6xl mx-auto px-5 lg:px-10 transition-all duration-700 ${credVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-12">
            <p className="text-rose-500 text-sm font-semibold tracking-widest uppercase mb-2">
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
                className="flex items-center gap-3 bg-rose-50 hover:bg-rose-100 border border-rose-100 rounded-2xl px-5 py-4 transition-colors duration-200"
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
          className={`transition-all duration-700 ${journeyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-12">
            <p className="text-rose-500 text-sm font-semibold tracking-widest uppercase mb-2">
              My Story
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800">
              The Journey So Far
            </h2>
          </div>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-rose-100 hidden md:block" />
            <div className="space-y-8">
              {journey.map(({ year, title, desc }) => (
                <div key={year} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-bold shadow-md z-10">
                    {year.slice(2)}
                  </div>
                  <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm border border-rose-100">
                    <div className="text-rose-400 text-xs font-semibold mb-1">
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
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-rose-100 mb-8">
            Connect with Shivanii and begin your healing journey today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-rose-500 hover:bg-rose-50 px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-md hover:scale-105"
          >
            Book a Session <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
