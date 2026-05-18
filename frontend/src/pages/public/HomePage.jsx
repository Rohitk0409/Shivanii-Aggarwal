import { ArrowRight, ChevronDown, Heart, Sparkles, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Reusable fade-in hook
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

const services = [
  {
    icon: "✨",
    title: "Law of Attraction Coaching",
    desc: "Rewire your mindset and align your energy to attract abundance, love, and success.",
  },
  {
    icon: "🔮",
    title: "Reiki Grandmaster Healing",
    desc: "Deep energy healing to release blockages and restore your natural flow.",
  },
  {
    icon: "🎵",
    title: "Sound Healing",
    desc: "Vibrational therapy using sacred sounds to calm the mind and heal the soul.",
  },
  {
    icon: "🌙",
    title: "Past Life Regression",
    desc: "Heal deep-rooted patterns through hypno-heal and past life exploration.",
  },
  {
    icon: "🔢",
    title: "Numerology",
    desc: "Unlock the hidden codes of your life path, destiny, and soul purpose.",
  },
  {
    icon: "👼",
    title: "Angel Card Reading",
    desc: "Receive divine guidance and clarity through angelic messages.",
  },
];

const testimonials = [
  {
    name: "Priya S.",
    text: "Shivanii helped me break free from anxiety I'd carried for years. Her healing sessions are truly transformative.",
    stars: 5,
  },
  {
    name: "Rahul M.",
    text: "The Money Breakthrough Workshop changed my entire relationship with abundance. Life-changing!",
    stars: 5,
  },
  {
    name: "Anita K.",
    text: "After just 3 sessions I felt lighter, clearer, and more aligned than ever before.",
    stars: 5,
  },
];

function ServiceCard({ icon, title, desc }) {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      className={`bg-white rounded-3xl p-7 shadow-sm border border-rose-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{
        transition:
          "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s, border-color 0.3s",
      }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-stone-800 font-semibold text-lg mb-2 group-hover:text-rose-500 transition-colors">
        {title}
      </h3>
      <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function HomePage() {
  const [heroRef, heroVisible] = useFadeIn();
  const [statsRef, statsVisible] = useFadeIn();
  const [testimonialsRef, testimonialsVisible] = useFadeIn();

  return (
    <main className="bg-[#fdf8f6] min-h-screen font-sans">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

        <div
          ref={heroRef}
          className={`max-w-6xl mx-auto px-5 lg:px-10 py-28 grid md:grid-cols-2 gap-12 items-center w-full transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Text */}
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 text-xs font-semibold px-4 py-2 rounded-full tracking-wide">
              <Sparkles size={14} /> Anttahkarana: Inner Calling
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-stone-800 leading-tight">
              From <span className="text-rose-500">Chaos</span> to Calm,
              <br />
              <span className="text-amber-500">Confusion</span> to Clarity
            </h1>

            <p className="text-stone-500 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              I help you rewire your subconscious mind, reclaim your inner
              power, and attract your true heart's desires through spiritual
              healing and energy work.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link
                to="/contact"
                className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-7 py-3.5 rounded-full font-medium transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
              >
                Book a Session <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 border border-stone-300 text-stone-700 hover:border-rose-400 hover:text-rose-500 px-7 py-3.5 rounded-full font-medium transition-all duration-200"
              >
                About Me
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-rose-300 animate-spin"
                style={{ animationDuration: "20s" }}
              />
              {/* Inner image */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-rose-200 to-amber-200 shadow-xl">
                {/* Replace src with Shivanii's real image */}
                <img
                  src="/images/shivanii-hero.jpg"
                  alt="Shivanii Aggarwal - Life Coach"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="w-full h-full hidden items-center justify-center flex-col gap-2">
                  <span className="text-6xl">🌸</span>
                  <span className="text-rose-600 text-sm font-medium text-center px-4">
                    Add Shivanii's Photo Here
                  </span>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 bg-white rounded-2xl px-3 py-2 shadow-lg border border-rose-100 text-sm font-semibold text-stone-700 flex items-center gap-1.5">
                <span>🔮</span> Reiki Grandmaster
              </div>
              <div className="absolute -bottom-2 -left-2 bg-white rounded-2xl px-3 py-2 shadow-lg border border-amber-100 text-sm font-semibold text-stone-700 flex items-center gap-1.5">
                <span>✨</span> 500+ Lives Healed
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-stone-400 animate-bounce">
          <ChevronDown size={20} />
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        ref={statsRef}
        className="py-16 bg-white border-y border-stone-100"
      >
        <div
          className={`max-w-4xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-700 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {[
            { num: "500+", label: "Lives Transformed" },
            { num: "10+", label: "Healing Modalities" },
            { num: "5★", label: "Client Rating" },
            { num: "8+", label: "Years Experience" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="text-3xl lg:text-4xl font-bold text-rose-500 mb-1">
                {num}
              </div>
              <div className="text-stone-500 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-20 max-w-6xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-rose-500 text-sm font-semibold tracking-widest uppercase mb-2">
            What I Offer
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-800">
            Healing Modalities
          </h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            Every soul deserves to be whole. Choose the path that resonates with
            you.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-rose-300 text-rose-500 hover:bg-rose-50 px-7 py-3 rounded-full font-medium transition-all duration-200"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        ref={testimonialsRef}
        className="py-20 bg-gradient-to-br from-rose-50 to-amber-50"
      >
        <div
          className={`max-w-6xl mx-auto px-5 lg:px-10 transition-all duration-700 ${testimonialsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-12">
            <p className="text-rose-500 text-sm font-semibold tracking-widest uppercase mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800">
              What My Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, text, stars }) => (
              <div
                key={name}
                className="bg-white rounded-3xl p-7 shadow-sm border border-rose-100"
              >
                <div className="flex gap-1 mb-4">
                  {Array(stars)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-5 italic">
                  "{text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 font-bold text-sm">
                    {name[0]}
                  </div>
                  <span className="text-stone-700 font-semibold text-sm">
                    {name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 px-5">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-12 text-center shadow-xl">
          <Heart size={40} className="text-white mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Begin Your Inner Journey?
          </h2>
          <p className="text-rose-100 mb-8 text-lg">
            Align your energy. Manifest your desires. Live the life you truly
            deserve.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-rose-500 hover:bg-rose-50 px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-md hover:scale-105"
          >
            Book Your Session Today <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
