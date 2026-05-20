import { ArrowRight, ChevronDown, Heart, Sparkles, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ======================================================
   WHATSAPP CONFIG — update number as needed
====================================================== */
const WHATSAPP_NUMBER = "918595866373"; // Format: country code + number, no +
const WHATSAPP_MESSAGE = "Hi Shivanii! I'd like to book a session with you. 🌟";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/* ======================================================
   FADE-IN HOOK
====================================================== */
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

/* ======================================================
   DATA
====================================================== */
const services = [
  {
    icon: "✨",
    title: "Law of Attraction Coaching",
    desc: "Rewire your mindset and align your energy to attract abundance, love, and success.",
    color: "from-teal-50 to-emerald-50",
    border: "border-teal-100",
    hover: "hover:border-teal-300",
    iconBg: "bg-teal-100",
  },
  {
    icon: "🔮",
    title: "Reiki Grandmaster Healing",
    desc: "Deep energy healing to release blockages and restore your natural flow.",
    color: "from-cyan-50 to-teal-50",
    border: "border-cyan-100",
    hover: "hover:border-cyan-300",
    iconBg: "bg-cyan-100",
  },
  {
    icon: "🎵",
    title: "Sound Healing",
    desc: "Vibrational therapy using sacred sounds to calm the mind and heal the soul.",
    color: "from-emerald-50 to-green-50",
    border: "border-emerald-100",
    hover: "hover:border-emerald-300",
    iconBg: "bg-emerald-100",
  },
  {
    icon: "🌙",
    title: "Past Life Regression",
    desc: "Heal deep-rooted patterns through hypno-heal and past life exploration.",
    color: "from-sky-50 to-cyan-50",
    border: "border-sky-100",
    hover: "hover:border-sky-300",
    iconBg: "bg-sky-100",
  },
  {
    icon: "🔢",
    title: "Numerology",
    desc: "Unlock the hidden codes of your life path, destiny, and soul purpose.",
    color: "from-teal-50 to-cyan-50",
    border: "border-teal-100",
    hover: "hover:border-teal-300",
    iconBg: "bg-teal-100",
  },
  {
    icon: "👼",
    title: "Angel Card Reading",
    desc: "Receive divine guidance and clarity through angelic messages.",
    color: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
    hover: "hover:border-emerald-300",
    iconBg: "bg-emerald-100",
  },
];

const testimonials = [
  {
    name: "Priya S.",
    text: "Shivanii helped me break free from anxiety I'd carried for years. Her healing sessions are truly transformative.",
    stars: 5,
    avatar: "bg-teal-100 text-teal-600",
  },
  {
    name: "Rahul M.",
    text: "The Money Breakthrough Workshop changed my entire relationship with abundance. Life-changing!",
    stars: 5,
    avatar: "bg-emerald-100 text-emerald-600",
  },
  {
    name: "Anita K.",
    text: "After just 3 sessions I felt lighter, clearer, and more aligned than ever before.",
    stars: 5,
    avatar: "bg-cyan-100 text-cyan-600",
  },
];

/* ======================================================
   SERVICE CARD
====================================================== */
function ServiceCard(
  { icon, title, desc, color, border, hover, iconBg },
  index,
) {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      className={`bg-gradient-to-br ${color} rounded-3xl p-7 border ${border} ${hover} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center text-3xl mb-5 shadow-sm`}
      >
        {icon}
      </div>
      <h3 className="text-slate-800 font-bold text-lg mb-2 group-hover:text-emerald-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

/* ======================================================
   WHATSAPP BUTTON COMPONENT
====================================================== */
function WAButton({ children, className = "", large = false }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-emerald-200 hover:shadow-lg hover:scale-105 active:scale-95 ${
        large ? "px-9 py-4 text-base" : "px-7 py-3.5 text-sm"
      } ${className}`}
    >
      {/* WhatsApp icon */}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={large ? "w-5 h-5" : "w-4 h-4"}
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {children}
    </a>
  );
}

/* ======================================================
   MAIN PAGE
====================================================== */
export default function HomePage() {
  const [heroRef, heroVisible] = useFadeIn();
  const [statsRef, statsVisible] = useFadeIn();
  const [testimonialsRef, testimonialsVisible] = useFadeIn();

  return (
    <main className="bg-[#f4fbf8] min-h-screen font-sans">
      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-100/20 rounded-full blur-3xl pointer-events-none" />

        <div
          ref={heroRef}
          className={`max-w-6xl mx-auto px-5 lg:px-10 py-28 grid md:grid-cols-2 gap-14 items-center w-full transition-all duration-700 ${
            heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* ── TEXT ── */}
          <div className="space-y-7 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-bold px-4 py-2 rounded-full tracking-widest uppercase border border-emerald-200">
              <Sparkles size={13} /> Anttahkarana: Inner Calling
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
              From{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
                Chaos
              </span>{" "}
              to Calm,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                Confusion
              </span>{" "}
              to Clarity
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              I help you rewire your subconscious mind, reclaim your inner
              power, and attract your true heart's desires through spiritual
              healing and energy work.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <WAButton large>
                Book a Session <ArrowRight size={18} />
              </WAButton>
              <Link
                to="/about"
                className="flex items-center gap-2 border border-teal-300 text-teal-700 hover:bg-teal-50 hover:border-teal-400 px-7 py-3.5 rounded-full font-semibold transition-all duration-200 text-sm"
              >
                About Me
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              {["Certified Healer", "500+ Sessions", "10+ Years Exp."].map(
                (b) => (
                  <span
                    key={b}
                    className="text-xs font-semibold bg-white border border-teal-100 text-teal-700 px-3 py-1.5 rounded-full shadow-sm"
                  >
                    ✓ {b}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* ── HERO IMAGE ── */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Outer spinning ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-teal-300 animate-spin"
                style={{ animationDuration: "20s" }}
              />
              {/* Mid ring */}
              <div className="absolute inset-3 rounded-full border border-emerald-200/60" />

              {/* Image */}
              <div className="absolute inset-5 rounded-full overflow-hidden bg-gradient-to-br from-teal-200 to-emerald-200 shadow-2xl ring-4 ring-white">
                <img
                  src="/gallery/image1.png"
                  alt="Shivanii Aggarwal - Life Coach"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="w-full h-full hidden items-center justify-center flex-col gap-2">
                  <span className="text-6xl">🌸</span>
                  <span className="text-teal-600 text-sm font-medium text-center px-4">
                    Add Shivanii's Photo Here
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-3 -right-3 bg-white rounded-2xl px-3.5 py-2 shadow-xl border border-teal-100 text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                <span>🔮</span> Reiki Grandmaster
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white rounded-2xl px-3.5 py-2 shadow-xl border border-emerald-100 text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                <span>✨</span> 500+ Lives Healed
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-teal-400 animate-bounce">
          <ChevronDown size={22} />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════ */}
      <section
        ref={statsRef}
        className="py-14 bg-white border-y border-slate-100"
      >
        <div
          className={`max-w-4xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-700 ${
            statsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { num: "500+", label: "Lives Transformed", color: "text-teal-500" },
            {
              num: "10+",
              label: "Healing Modalities",
              color: "text-emerald-500",
            },
            { num: "5★", label: "Client Rating", color: "text-cyan-500" },
            { num: "8+", label: "Years Experience", color: "text-teal-600" },
          ].map(({ num, label, color }) => (
            <div key={label}>
              <div className={`text-3xl lg:text-4xl font-bold ${color} mb-1`}>
                {num}
              </div>
              <div className="text-slate-500 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES PREVIEW
      ══════════════════════════════════════════ */}
      <section className="py-20 max-w-6xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-emerald-600 text-xs font-bold tracking-[4px] uppercase mb-3">
            What I Offer
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Healing Modalities
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            Every soul deserves to be whole. Choose the path that resonates with
            you.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border-2 border-teal-300 text-teal-600 hover:bg-teal-50 hover:border-teal-400 px-8 py-3.5 rounded-full font-semibold transition-all duration-200 text-sm"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT STRIP
      ══════════════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <p className="text-teal-100 text-xs font-bold tracking-[4px] uppercase mb-4">
            Meet Your Healer
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
            Shivanii Aggarwal
          </h2>
          <p className="text-teal-50 text-base leading-relaxed max-w-2xl mx-auto mb-8">
            A Reiki Grandmaster, certified Life Coach, and spiritual healer with
            over 8 years of experience helping hundreds of souls find clarity,
            healing, and transformation.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-white text-teal-600 hover:bg-teal-50 px-7 py-3.5 rounded-full font-bold transition-all duration-200 shadow-md hover:scale-105 text-sm"
          >
            Read My Story <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section
        ref={testimonialsRef}
        className="py-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50"
      >
        <div
          className={`max-w-6xl mx-auto px-5 lg:px-10 transition-all duration-700 ${
            testimonialsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-14">
            <p className="text-emerald-600 text-xs font-bold tracking-[4px] uppercase mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
              What My Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, text, stars, avatar }) => (
              <div
                key={name}
                className="bg-white rounded-3xl p-7 shadow-sm border border-teal-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array(stars)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "{text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full ${avatar} flex items-center justify-center font-bold text-sm`}
                  >
                    {name[0]}
                  </div>
                  <span className="text-slate-700 font-semibold text-sm">
                    {name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="py-20 px-5">
        <div className="max-w-3xl mx-auto relative rounded-[40px] overflow-hidden">
          {/* BG */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-emerald-500 to-cyan-500" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

          <div className="relative z-10 p-12 text-center">
            <Heart size={38} className="text-white/80 mx-auto mb-5" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to Begin Your Inner Journey?
            </h2>
            <p className="text-teal-50 mb-8 text-base leading-relaxed">
              Align your energy. Manifest your desires. Live the life you truly
              deserve.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold transition-all duration-200 shadow-xl hover:scale-105 text-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-emerald-500"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book Your Session on WhatsApp
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
