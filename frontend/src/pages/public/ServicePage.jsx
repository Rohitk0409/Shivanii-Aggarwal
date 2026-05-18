import { ArrowRight } from "lucide-react";
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
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

const services = [
  {
    icon: "✨",
    color: "from-rose-100 to-pink-100",
    accent: "text-rose-500",
    badge: "bg-rose-100 text-rose-600",
    tag: "Most Popular",
    title: "Law of Attraction Coaching",
    desc: "Rewire your subconscious mind and align your energy with your deepest desires. Learn practical LOA techniques to attract abundance, love, and lasting happiness.",
    includes: [
      "1-on-1 Coaching Sessions",
      "Personalized Vision Board",
      "Manifestation Journal",
      "Follow-up Support",
    ],
  },
  {
    icon: "🎨",
    color: "from-amber-100 to-yellow-100",
    accent: "text-amber-600",
    badge: "bg-amber-100 text-amber-700",
    tag: "Workshop",
    title: "Vision Board Workshop",
    desc: "A powerful group workshop where you'll create your dream vision board and learn the science of manifestation. Leave with a clear, energized vision for your life.",
    includes: [
      "Vision Board Materials",
      "LOA Techniques",
      "Group Energy Activation",
      "Guided Meditation",
    ],
  },
  {
    icon: "🔮",
    color: "from-purple-100 to-violet-100",
    accent: "text-purple-500",
    badge: "bg-purple-100 text-purple-600",
    tag: "Healing",
    title: "Reiki Grandmaster Healing",
    desc: "Experience deep energy healing that releases blockages, restores your natural flow, and brings profound peace. Offered in-person and distance healing.",
    includes: [
      "Chakra Balancing",
      "Aura Cleansing",
      "Energy Blockage Removal",
      "Post-session Guidance",
    ],
  },
  {
    icon: "🎵",
    color: "from-teal-100 to-cyan-100",
    accent: "text-teal-600",
    badge: "bg-teal-100 text-teal-700",
    tag: "Healing",
    title: "Sound Healing",
    desc: "Sacred vibrational therapy using singing bowls, tuning forks, and mantras to reset your nervous system and activate your body's innate healing intelligence.",
    includes: [
      "Singing Bowl Therapy",
      "Vibrational Frequency Work",
      "Guided Breathwork",
      "Integration Support",
    ],
  },
  {
    icon: "💰",
    color: "from-green-100 to-emerald-100",
    accent: "text-emerald-600",
    badge: "bg-emerald-100 text-emerald-700",
    tag: "Workshop",
    title: "Money Breakthrough Workshop",
    desc: "Break through money blocks, reprogram your wealth mindset, and open yourself to financial abundance. A transformational workshop for lasting financial freedom.",
    includes: [
      "Money Block Clearing",
      "Abundance Mindset Tools",
      "Financial Affirmations",
      "Wealth Vision Board",
    ],
  },
  {
    icon: "🌙",
    color: "from-indigo-100 to-blue-100",
    accent: "text-indigo-500",
    badge: "bg-indigo-100 text-indigo-600",
    tag: "Therapy",
    title: "Past Life Regression",
    desc: "Heal deep karmic patterns, phobias, and recurring life challenges by exploring past life experiences through guided hypnotherapy and hypno-heal techniques.",
    includes: [
      "Hypno-Heal Session",
      "Soul Retrieval",
      "Karmic Pattern Clearing",
      "Integration Session",
    ],
  },
  {
    icon: "🔢",
    color: "from-rose-100 to-orange-100",
    accent: "text-orange-500",
    badge: "bg-orange-100 text-orange-600",
    tag: "Reading",
    title: "Numerology Reading",
    desc: "Uncover the hidden blueprint of your life — your life path number, soul urge, destiny, and personality codes that shape your journey and purpose.",
    includes: [
      "Full Birth Chart Reading",
      "Life Path Analysis",
      "Compatibility Reading",
      "Career Guidance",
    ],
  },
  {
    icon: "👼",
    color: "from-pink-100 to-rose-100",
    accent: "text-pink-500",
    badge: "bg-pink-100 text-pink-600",
    tag: "Reading",
    title: "Angel Card Reading",
    desc: "Receive divine guidance and messages from your angels. Gain clarity on relationships, career, and life purpose through intuitive angelic channeling.",
    includes: [
      "Angel Card Spread",
      "Intuitive Messages",
      "Guidance for 3 Areas",
      "Follow-up Email",
    ],
  },
  {
    icon: "💎",
    color: "from-violet-100 to-purple-100",
    accent: "text-violet-500",
    badge: "bg-violet-100 text-violet-600",
    tag: "Products",
    title: "Crystals, Candles & Mandalas",
    desc: "Handcrafted healing crystals, intention candles, and sacred mandalas to support your spiritual practice and energy work at home.",
    includes: [
      "Healing Crystal Sets",
      "Intention Candles",
      "Custom Mandalas",
      "Usage Guidance",
    ],
  },
];

function ServiceCard({ service, index }) {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      className={`bg-white rounded-3xl p-7 shadow-sm border border-stone-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-5 shadow-sm`}
      >
        {service.icon}
      </div>
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="text-stone-800 font-semibold text-lg leading-tight">
          {service.title}
        </h3>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${service.badge}`}
        >
          {service.tag}
        </span>
      </div>
      <p className="text-stone-500 text-sm leading-relaxed mb-5">
        {service.desc}
      </p>
      <ul className="space-y-2 mb-6 flex-1">
        {service.includes.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-stone-600 text-sm"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0`}
            />
            {item}
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={`mt-auto text-center text-sm font-medium py-3 rounded-full border border-rose-200 ${service.accent} hover:bg-rose-50 transition-colors duration-200`}
      >
        Enquire Now
      </Link>
    </div>
  );
}

export default function ServicePage() {
  const [heroRef, heroVisible] = useFadeIn();

  return (
    <main className="bg-[#fdf8f6] min-h-screen">
      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 py-20 text-center overflow-hidden relative">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />
        <div
          ref={heroRef}
          className={`max-w-3xl mx-auto px-5 transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 text-xs font-semibold px-4 py-2 rounded-full tracking-wide mb-5">
            ✨ Healing & Transformation
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-5">
            Services & <span className="text-rose-500">Workshops</span>
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed">
            Every soul deserves to be whole. Explore the healing modalities and
            transformational programs designed to awaken your true potential.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-20 max-w-6xl mx-auto px-5 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* ── WORKSHOPS HIGHLIGHT ── */}
      <section className="py-16 bg-white border-y border-stone-100">
        <div className="max-w-6xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-rose-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Live Events
          </p>
          <h2 className="text-3xl font-bold text-stone-800 mb-4">
            Upcoming Workshops
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto mb-8">
            Join Shivanii's powerful group sessions and experience collective
            healing energy.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                emoji: "🎨",
                title: "LOA & Vision Board Workshop",
                desc: "Create your dream life with intention and energy alignment.",
              },
              {
                emoji: "💰",
                title: "Money Breakthrough Workshop",
                desc: "Release financial blocks and activate your abundance mindset.",
              },
            ].map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl p-7 border border-rose-100 text-left"
              >
                <span className="text-4xl">{emoji}</span>
                <h3 className="text-stone-800 font-semibold text-lg mt-4 mb-2">
                  {title}
                </h3>
                <p className="text-stone-500 text-sm mb-5">{desc}</p>
                <Link
                  to="/contact"
                  className="text-rose-500 text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Register Interest <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-5">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-rose-100 mb-8">
            Book a free discovery call and Shivanii will guide you to the right
            healing path for your journey.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-rose-500 hover:bg-rose-50 px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-md hover:scale-105"
          >
            Book Free Discovery Call <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
