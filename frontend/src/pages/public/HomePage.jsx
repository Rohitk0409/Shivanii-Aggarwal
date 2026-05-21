import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  BarChart2,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Headphones,
  Heart,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* =========================================================
   WHATSAPP
========================================================= */
const WHATSAPP_NUMBER = "918595866373";
const WHATSAPP_MESSAGE =
  "Hi Shivanii! I would like to book a healing session 🌸";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/* =========================================================
   DATA
========================================================= */
const rotatingTexts = [
  "Happiness Life Coach",
  "Sound Healer",
  "Reiki Grandmaster",
  "Spiritual Mentor",
];

const services = [
  {
    icon: "🔮",
    title: "Guidance & Readings",
    desc: "Angel Card Reading for spiritual insights and clarity, Numerology Reading to uncover life's path and hidden patterns, and Reiki for energy balance and overall well-being.",
    color: "from-teal-400 to-cyan-500",
  },
  {
    icon: "🎵",
    title: "Healing & Therapy",
    desc: "Sound Healing with Tibetan Singing Bowls and Aqua Therapy restores energy balance. Guided Meditations for mindfulness. Past Life Regression & Hypno-Heal sessions awaken the soul's forgotten truths.",
    color: "from-blue-400 to-teal-500",
  },
  {
    icon: "✨",
    title: "Coaching & Workshops",
    desc: "Happiness Life Coaching Workshops including Law of Attraction and Money Breakthrough to cultivate a positive mindset, reshape your belief system, manifest goals, and create a fulfilling life.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: "🕯️",
    title: "Product Range",
    desc: "Aroma and Intention Candles enhancing relaxation, positivity, and mindfulness. Variety of Healing Crystals balance energy, promote well-being, and enhance spiritual growth.",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: "🎨",
    title: "Fun Learnings",
    desc: "Mandala Workshops to explore mindful creativity, enhance focus, and promote inner peace. Vision Board Workshops to help you visualize your goals and manifest your dreams.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: "🌿",
    title: "Online & Offline Sessions",
    desc: "Customized one-on-one and group sessions for individuals, corporate professionals, and school students, with both online and offline guidance options available.",
    color: "from-emerald-400 to-teal-500",
  },
];

const testimonials = [
  {
    name: "Mrs. Sadhana",
    city: "Mumbai",
    service: "Sound Healing",
    text: "The Sound Healing session was truly amazing! I felt deep relaxation, and my leg pain noticeably reduced. The vibrations from the singing bowls were so soothing, bringing a sense of balance and calm. A wonderful experience for both healing and well-being!",
    avatar: "S",
  },
  {
    name: "Mr. Raghav",
    city: "Haridwar",
    service: "Numerology",
    text: "The Numerology guidance was very insightful! It helped me gain context on current issues and understand my strengths better. The guidance was clear and gave me more confidence in my decisions. A truly helpful experience!",
    avatar: "R",
  },
  {
    name: "Mrs. Nandini",
    city: "New Delhi",
    service: "Angel Card Reading",
    text: "The Angel Card Reading sitting was a wonderful experience! The guidance provided clarity and reassurance, helping me navigate my current situation with more confidence. A comforting guidance session that gave me a fresh perspective.",
    avatar: "N",
  },
];

const packages = [
  {
    name: "Starter Package",
    icon: "🌱",
    tagline: "Perfect for beginners",
    features: [
      "One 60-Minute Session",
      "Single in-depth coaching session",
      "Customised roadmap with clear next steps",
      "Follow-up email support for 1 week",
    ],
    highlight: false,
  },
  {
    name: "Growth Package",
    icon: "🌿",
    tagline: "Ongoing support & development",
    features: [
      "Four 60-Minute Sessions",
      "Weekly or bi-weekly sessions",
      "Detailed, evolving strategy",
      "Continuous email support between sessions",
      "Access to worksheets, tools & resources",
    ],
    highlight: true,
  },
  {
    name: "Transformation Package",
    icon: "🦋",
    tagline: "Complete life transformation",
    features: [
      "Ten 60-Minute Sessions",
      "Intensive coaching over a few months",
      "Highly customized in-depth plan",
      "Direct coach access for questions",
      "Premium content, exercises & tools",
      "Regular check-ins & accountability",
    ],
    highlight: false,
  },
];

const howWeWork = [
  {
    icon: Search,
    title: "First Touchpoint",
    desc: "We start with a deep dive into your goals",
  },
  {
    icon: ClipboardList,
    title: "Action Plan",
    desc: "Together we create a workable plan",
  },
  {
    icon: Headphones,
    title: "Support",
    desc: "Ongoing guidance to keep you on track",
  },
  {
    icon: BarChart2,
    title: "Review & Adjust",
    desc: "Regular check-ins to ensure progress",
  },
];

/* =========================================================
   PARTICLE FIELD
========================================================= */
function ParticleField() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-teal-400/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Large blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl animate-pulse" />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
    </div>
  );
}

/* =========================================================
   COUNTER
========================================================= */
function CountUp({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 25);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */
function ServiceCard({ icon, title, desc, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden cursor-pointer"
    >
      {/* hover glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
      />
      <div
        className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${color} opacity-10 blur-2xl group-hover:opacity-25 transition-opacity duration-500`}
      />

      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl mb-6 shadow-lg`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 font-display">
        {title}
      </h3>
      <p className="text-white/60 leading-relaxed text-sm">{desc}</p>

      <div
        className={`mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${color} transition-all duration-500 rounded-full`}
      />
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */
export default function HomePage() {
  const [currentText, setCurrentText] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #020f1a 0%, #041a2e 40%, #062040 100%)",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');
        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body { font-family: 'Outfit', sans-serif; }
        .text-gradient { background: linear-gradient(135deg, #2dd4bf, #06b6d4, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .text-gradient-gold { background: linear-gradient(135deg, #34d399, #2dd4bf); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .card-glass { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(20px); }
        .glow-teal { box-shadow: 0 0 40px rgba(45, 212, 191, 0.3); }
        .glow-blue { box-shadow: 0 0 40px rgba(59, 130, 246, 0.3); }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes ripple { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(2.5);opacity:0} }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 25s linear infinite; }
        .ripple { animation: ripple 2s ease-out infinite; }
        .ripple-2 { animation: ripple 2s ease-out infinite; animation-delay: 0.7s; }
        .ripple-3 { animation: ripple 2s ease-out infinite; animation-delay: 1.4s; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #020f1a; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(#2dd4bf, #3b82f6); border-radius: 3px; }
      `}</style>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] flex items-center py-24 overflow-visible"
      >
        <ParticleField />

        {/* Decorative ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-[700px] h-[700px] rounded-full border border-teal-500/10 animate-spin-slow" />
          <div
            className="absolute inset-8 rounded-full border border-cyan-500/8"
            style={{ animation: "spin-slow 40s linear infinite reverse" }}
          />
          <div
            className="absolute inset-16 rounded-full border border-blue-500/6"
            style={{ animation: "spin-slow 55s linear infinite" }}
          />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center relative z-10 w-full"
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 card-glass px-5 py-2.5 rounded-full mb-8"
            >
              <Sparkles size={14} className="text-teal-400" />
              <span className="font-body text-xs tracking-[3px] uppercase text-teal-300">
                Anttahkarana · Inner Calling by Shivanii
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.95] text-white mb-6">
              Heal Your
              <br />
              <span className="text-gradient italic">Mind, Soul</span>
              <br />& Energy
            </h1>

            {/* Rotating role */}
            <div className="h-14 overflow-hidden mb-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentText}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-body text-xl md:text-2xl text-teal-300 font-medium"
                >
                  ✦ {rotatingTexts[currentText]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="font-body text-white/50 text-lg leading-relaxed max-w-lg mb-10">
              Helping you move from chaos to calm and confusion to clarity
              through spiritual healing, subconscious transformation and energy
              alignment.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="font-body flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold glow-teal transition-all duration-300"
              >
                Book Healing Session <ArrowRight size={17} />
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="font-body border border-teal-500/40 text-teal-300 px-8 py-4 rounded-full font-semibold hover:bg-teal-500/10 transition-all duration-300"
              >
                About Me
              </motion.a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {[
                { n: 500, s: "+", label: "Sessions" },
                { n: 8, s: "+", label: "Years Exp." },
                { n: 100, s: "%", label: "Certified" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-gradient-gold">
                    <CountUp end={stat.n} suffix={stat.s} />
                  </div>
                  <div className="font-body text-white/40 text-sm mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT – orb with ripples */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* =====================================================
      RIPPLE RINGS
  ===================================================== */}
            <div className="absolute w-80 h-80 rounded-full bg-teal-500/20 ripple" />

            <div className="absolute w-80 h-80 rounded-full bg-cyan-500/15 ripple-2" />

            <div className="absolute w-80 h-80 rounded-full bg-blue-500/10 ripple-3" />

            {/* =====================================================
      OUTER GLOW RING
  ===================================================== */}
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600 p-[3px] glow-teal animate-float">
              {/* INNER CIRCLE */}
              <div className="w-full h-full rounded-full overflow-hidden relative bg-[#041a2e]">
                {/* IMAGE */}
                <img
                  src="/gallery/image2.png"
                  alt="Shivanii"
                  loading="lazy"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-all duration-700"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#041a2e]/80 via-[#041a2e]/10 to-transparent" />

                {/* SOFT LIGHT OVERLAY */}
                <div className="absolute inset-0 bg-cyan-400/5 mix-blend-screen" />

                {/* BOTTOM TEXT */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-10">
                  <p className="font-display text-2xl md:text-3xl text-white font-semibold italic drop-shadow-lg">
                    Inner Calling
                  </p>

                  <p className="font-body text-teal-300 text-[11px] md:text-xs mt-1 tracking-[5px] uppercase">
                    by Shivanii
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
      FLOATING CHIPS
  ===================================================== */}

            {/* CHIP 1 */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-8 -left-6 card-glass px-4 py-3 rounded-2xl shadow-xl border border-white/10"
            >
              <p className="font-body text-sm font-semibold text-white flex items-center gap-2">
                <span className="text-teal-400">✦</span>
                Energy Healing
              </p>
            </motion.div>

            {/* CHIP 2 */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute bottom-8 -right-6 card-glass px-4 py-3 rounded-2xl shadow-xl border border-white/10"
            >
              <p className="font-body text-sm font-semibold text-white flex items-center gap-2">
                <span className="text-cyan-400">✦</span>
                Spiritual Guidance
              </p>
            </motion.div>

            {/* CHIP 3 */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 0.5 }}
              className="absolute top-1/2 -right-10 card-glass px-4 py-3 rounded-2xl shadow-xl border border-white/10 hidden md:block"
            >
              <p className="font-body text-sm font-semibold text-white flex items-center gap-2">
                <span className="text-blue-400">✦</span>
                Sound Healing
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-teal-400/60"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* =====================================================
          HOW WE WORK
      ===================================================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-teal-400 tracking-[4px] uppercase text-xs font-semibold">
              Our Process
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
              How We Work
            </h2>
            <p className="font-body text-white/50 text-lg max-w-2xl mx-auto">
              A clear, structured journey designed to help you achieve lasting
              transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* connector line */}
            <div className="hidden md:block absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

            {howWeWork.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative card-glass rounded-3xl p-8 text-center group hover:border-teal-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon size={24} className="text-teal-400" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                  <span className="font-body text-white text-xs font-bold">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-teal-400 tracking-[4px] uppercase text-xs font-semibold">
              Healing Modalities
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
              How We <span className="text-gradient italic">Can Help</span>
            </h2>
            <p className="font-body text-white/50 text-lg max-w-2xl mx-auto">
              Personalized healing sessions designed to help you reconnect with
              your inner peace, power and purpose.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PACKAGES
      ===================================================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-teal-400 tracking-[4px] uppercase text-xs font-semibold">
              Investment in Yourself
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
              Flexible <span className="text-gradient italic">Packages</span>
            </h2>
            <p className="font-body text-white/50 text-lg max-w-2xl mx-auto">
              We understand that everyone's journey is unique. Whether you're
              looking for a quick boost or long-term transformation, we have a
              plan that's right for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                  pkg.highlight
                    ? "bg-gradient-to-br from-teal-500/20 to-cyan-600/20 border-teal-400/50 glow-teal"
                    : "card-glass border-white/10 hover:border-teal-500/30"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="font-body bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold px-5 py-1.5 rounded-full tracking-wider uppercase shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-4xl mb-4">{pkg.icon}</div>
                <h3 className="font-display text-2xl font-bold text-white mb-1">
                  {pkg.name}
                </h3>
                <p className="font-body text-teal-400 text-sm mb-8">
                  {pkg.tagline}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="text-teal-400 mt-0.5 shrink-0"
                      />
                      <span className="font-body text-white/70 text-sm">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className={`font-body w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                    pkg.highlight
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                      : "border border-teal-500/40 text-teal-300 hover:bg-teal-500/10"
                  }`}
                >
                  Get Started <ArrowRight size={15} />
                </motion.a>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="font-body text-center text-white/40 mt-8 text-sm"
          >
            💳 Flexible payment plans available to fit your budget
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-teal-400 tracking-[4px] uppercase text-xs font-semibold">
              Testimonials
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white mt-4">
              What Clients <span className="text-gradient italic">Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="card-glass rounded-3xl p-8 border border-white/10 hover:border-teal-500/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-teal-500/10 to-cyan-500/10 blur-xl" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-teal-400 text-teal-400"
                    />
                  ))}
                </div>
                <p className="font-body text-white/60 leading-relaxed italic text-sm mb-8 relative z-10">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shrink-0">
                    <span className="font-display text-white font-bold text-lg">
                      {t.avatar}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display text-white font-bold text-lg leading-none">
                      {t.name}
                    </h4>
                    <p className="font-body text-teal-400 text-xs mt-1">
                      {t.city} · {t.service}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[3rem] p-16 text-center"
            style={{
              background:
                "linear-gradient(135deg, #0d4a5e 0%, #0f5966 50%, #0c3d4a 100%)",
            }}
          >
            {/* bg effects */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-teal-400/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-cyan-400/20 blur-3xl" />
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                  backgroundSize: "32px 32px",
                }}
              />
            </div>

            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Heart
                  className="mx-auto text-teal-300/80 mb-6"
                  size={48}
                  strokeWidth={1.5}
                />
              </motion.div>
              <h2 className="font-display text-5xl md:text-7xl leading-tight font-bold text-white mb-6">
                Ready To Begin
                <br />
                <span className="text-gradient">Your Healing Journey?</span>
              </h2>
              <p className="font-body text-white/70 max-w-xl mx-auto text-lg leading-relaxed mb-4">
                As a certified life coach with 5+ years of experience, I
                specialize in helping clients break through limitations and step
                into growth.
              </p>
              <p className="font-body text-white/50 mb-10">
                My approach is compassionate, yet results-driven. Let's make
                your goals a reality together.
              </p>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                className="font-body inline-flex items-center gap-3 bg-white text-teal-700 hover:bg-teal-50 transition-all duration-300 px-10 py-5 rounded-full font-bold shadow-2xl text-lg"
              >
                Book Free Discovery Call <ArrowRight size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTACT STRIP
      ===================================================== */}
      {/* <section className="py-14 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                icon: Phone,
                text: "+91 8595866373",
                href: "tel:+918595866373",
              },
              {
                icon: Mail,
                text: "shivani1912@gmail.com",
                href: "mailto:shivani1912@gmail.com",
              },
              {
                icon: Instagram,
                text: "shivanii.happittude",
                href: "https://instagram.com/shivanii.happittude",
              },
            ].map((item) => (
              <motion.a
                key={item.text}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="font-body flex items-center gap-3 card-glass px-6 py-3 rounded-full text-white/60 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-300 text-sm border border-white/10"
              >
                <item.icon size={16} className="text-teal-400" />
                {item.text}
              </motion.a>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}
