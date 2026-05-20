import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ======================================================
   WHATSAPP CONFIG
====================================================== */
const WHATSAPP_NUMBER = "918595866373"; // Update: countrycode + number
const WHATSAPP_MESSAGE =
  "Hi Shivanii! I'd like to enquire about your services. 🌟";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const WA_ICON = (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 flex-shrink-0"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

/* ======================================================
   SERVICES DATA — 12 services, blue-green palette
====================================================== */
const services = [
  {
    icon: "✨",
    image: "/service/image1.png",
    color: "from-teal-100 to-emerald-100",
    accent: "text-teal-600",
    accentBorder: "border-teal-200 hover:border-teal-400",
    accentHover: "hover:bg-teal-50",
    badge: "bg-teal-100 text-teal-700",
    dot: "bg-teal-400",
    tag: "Most Popular",
    title: "Law of Attraction Workshops",
    desc: "Rewire your subconscious mind, align your energy with your deepest desires, and manifest your dream life.",
    includes: [
      "Group & 1-on-1 Sessions",
      "Vision Board Creation",
      "Manifestation Journal",
      "Energy Alignment Techniques",
    ],
  },
  {
    icon: "🔮",
    image: "/service/image3.png",
    color: "from-cyan-100 to-teal-100",
    accent: "text-cyan-600",
    accentBorder: "border-cyan-200 hover:border-cyan-400",
    accentHover: "hover:bg-cyan-50",
    badge: "bg-cyan-100 text-cyan-700",
    dot: "bg-cyan-400",
    tag: "Healing",
    title: "Reiki Healing",
    desc: "Experience deep energy healing by a Reiki Grandmaster and restore your natural flow of life force energy.",
    includes: [
      "Chakra Balancing",
      "Aura Cleansing",
      "Grand Master Energy Healing",
      "Post-session Guidance",
    ],
  },
  {
    icon: "🎵",
    image: "/service/image5.png",
    color: "from-emerald-100 to-green-100",
    accent: "text-emerald-600",
    accentBorder: "border-emerald-200 hover:border-emerald-400",
    accentHover: "hover:bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-400",
    tag: "Healing",
    title: "Sound Healing",
    desc: "Healing vibrations and frequencies to calm the nervous system and restore deep inner peace.",
    includes: [
      "Singing Bowl Therapy",
      "Frequency Healing",
      "Breathwork Integration",
      "Deep Relaxation Session",
    ],
  },
  {
    icon: "🌙",
    image: "/service/image12.png",
    color: "from-sky-100 to-cyan-100",
    accent: "text-sky-600",
    accentBorder: "border-sky-200 hover:border-sky-400",
    accentHover: "hover:bg-sky-50",
    badge: "bg-sky-100 text-sky-700",
    dot: "bg-sky-400",
    tag: "Therapy",
    title: "Past Life Regression Therapy",
    desc: "Heal karmic patterns and deep-rooted traumas through guided past life hypnotherapy sessions.",
    includes: [
      "Hypnotherapy Session",
      "Soul & Karmic Healing",
      "Karmic Pattern Clearing",
      "Integration & Closure",
    ],
  },
  {
    icon: "💫",
    image: "/service/image6.png",
    color: "from-teal-100 to-sky-100",
    accent: "text-teal-600",
    accentBorder: "border-teal-200 hover:border-teal-400",
    accentHover: "hover:bg-teal-50",
    badge: "bg-teal-100 text-teal-700",
    dot: "bg-teal-400",
    tag: "Therapy",
    title: "Hypno Heal Therapy",
    desc: "Unlock the power of your subconscious mind to heal fears, phobias, limiting beliefs, and trauma.",
    includes: [
      "Deep Hypnosis Session",
      "Subconscious Reprogramming",
      "Fear & Phobia Release",
      "Personalised Healing Plan",
    ],
  },
  {
    icon: "🌟",
    image: "/service/image7.png",
    color: "from-green-100 to-teal-100",
    accent: "text-green-600",
    accentBorder: "border-green-200 hover:border-green-400",
    accentHover: "hover:bg-green-50",
    badge: "bg-green-100 text-green-700",
    dot: "bg-green-400",
    tag: "Coaching",
    title: "Transform Your Life Workshops",
    desc: "A powerful transformational program to help you break patterns, step into your power, and create lasting change.",
    includes: [
      "Mindset Reprogramming",
      "Habit Breaking Techniques",
      "Purpose & Clarity Sessions",
      "Accountability Coaching",
    ],
  },
  {
    icon: "😊",
    image: "/service/image8.png",
    color: "from-emerald-100 to-teal-100",
    accent: "text-emerald-600",
    accentBorder: "border-emerald-200 hover:border-emerald-400",
    accentHover: "hover:bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-400",
    tag: "Coaching",
    title: "Happiness & Life Coach",
    desc: "Rediscover joy, purpose and fulfilment with personalised life coaching sessions tailored for you.",
    includes: [
      "1-on-1 Life Coaching",
      "Gratitude Practices",
      "Emotional Freedom Techniques",
      "Weekly Progress Reviews",
    ],
  },
  {
    icon: "🔢",
    image: "/service/image9.png",
    color: "from-cyan-100 to-emerald-100",
    accent: "text-cyan-700",
    accentBorder: "border-cyan-200 hover:border-cyan-400",
    accentHover: "hover:bg-cyan-50",
    badge: "bg-cyan-100 text-cyan-700",
    dot: "bg-cyan-500",
    tag: "Guidance",
    title: "Numerology Guidance",
    desc: "Discover the hidden patterns in your name and birth date that shape your destiny and life path.",
    includes: [
      "Full Numerology Report",
      "Life Path Number Reading",
      "Name & Destiny Analysis",
      "Personalised Guidance",
    ],
  },
  {
    icon: "🃏",
    image: "/service/image10.png",
    color: "from-sky-100 to-teal-100",
    accent: "text-sky-700",
    accentBorder: "border-sky-200 hover:border-sky-400",
    accentHover: "hover:bg-sky-50",
    badge: "bg-sky-100 text-sky-700",
    dot: "bg-sky-400",
    tag: "Divination",
    title: "Angel Card Reading",
    desc: "Receive divine guidance and clarity on love, career, relationships and your spiritual journey.",
    includes: [
      "Personalised Card Spread",
      "Angelic Message Interpretation",
      "Life Guidance & Clarity",
      "Follow-up Q&A",
    ],
  },
  {
    icon: "💎",
    image: "/service/image1.png",
    color: "from-teal-100 to-cyan-100",
    accent: "text-teal-600",
    accentBorder: "border-teal-200 hover:border-teal-400",
    accentHover: "hover:bg-teal-50",
    badge: "bg-teal-100 text-teal-700",
    dot: "bg-teal-400",
    tag: "Products",
    title: "Authentic Crystal Products",
    desc: "Genuine, energy-cleansed crystals carefully selected for healing, protection, abundance, and love.",
    includes: [
      "Certified Genuine Crystals",
      "Energy Cleansing Included",
      "Crystal Pairing Guidance",
      "Care & Activation Guide",
    ],
  },
  {
    icon: "🕯️",
    image: "/service/image13.png",
    color: "from-green-100 to-emerald-100",
    accent: "text-green-600",
    accentBorder: "border-green-200 hover:border-green-400",
    accentHover: "hover:bg-green-50",
    badge: "bg-green-100 text-green-700",
    dot: "bg-green-400",
    tag: "Products",
    title: "Intention Candles",
    desc: "Handcrafted candles infused with crystals, herbs, and Reiki energy to amplify your intentions.",
    includes: [
      "Reiki-Charged Candles",
      "Custom Intention Setting",
      "Crystal-Infused Wax",
      "Affirmation Cards Included",
    ],
  },
  {
    icon: "💰",
    image: "/service/image14.png",
    color: "from-emerald-100 to-green-100",
    accent: "text-emerald-600",
    accentBorder: "border-emerald-200 hover:border-emerald-400",
    accentHover: "hover:bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-500",
    tag: "Workshop",
    title: "Money Breakthrough Workshop",
    desc: "Break deep-rooted money blocks and activate your natural abundance mindset for lasting wealth.",
    includes: [
      "Money Block Clearing",
      "Abundance Mindset Coaching",
      "Wealth Affirmations",
      "Financial Freedom Planning",
    ],
  },
];

/* ======================================================
   HERO BACKGROUND IMAGES — slide by slide
====================================================== */
const heroBgImages = [
  "/service/image1.png",
  "/service/image5.png",
  "/service/image8.png",
  "/service/image9.png",
  "/service/image10.png",
  "/service/image12.png",
  "/service/image14.png",
];

/* ======================================================
   SERVICE CARD
====================================================== */
function ServiceCard({ service, index }) {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      className={`group bg-white rounded-[28px] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div
          className={`absolute top-4 left-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl shadow-md border border-white/30`}
        >
          {service.icon}
        </div>
        <div
          className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm ${service.badge}`}
        >
          {service.tag}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-2 leading-snug text-slate-800 group-hover:text-teal-600 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-5">
          {service.desc}
        </p>
        <ul className="space-y-2 mb-6 flex-1">
          {service.includes.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 text-sm text-slate-600"
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${service.dot} flex-shrink-0`}
              />
              {item}
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-full border ${service.accentBorder} ${service.accent} ${service.accentHover} transition-all duration-300`}
        >
          {WA_ICON}
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}

/* ======================================================
   HERO SECTION — smooth slide-by-slide background
====================================================== */
function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0);
  const [nextBg, setNextBg] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [heroRef, heroVisible] = useFadeIn();

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentBg + 1) % heroBgImages.length;
      setNextBg(next);
      setTransitioning(true);
      setTimeout(() => {
        setCurrentBg(next);
        setTransitioning(false);
      }, 800);
    }, 4500);
    return () => clearInterval(interval);
  }, [currentBg]);

  const goTo = (i) => {
    if (i === currentBg || transitioning) return;
    setNextBg(i);
    setTransitioning(true);
    setTimeout(() => {
      setCurrentBg(i);
      setTransitioning(false);
    }, 800);
  };

  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      {/* BASE — current */}
      <img
        src={heroBgImages[currentBg]}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      />
      {/* NEXT — fades in on transition */}
      <img
        src={heroBgImages[nextBg]}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[800ms]"
        style={{ zIndex: 2, opacity: transitioning ? 1 : 0 }}
      />

      {/* TEAL-GREEN OVERLAY */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,148,136,0.84) 0%, rgba(5,150,105,0.76) 50%, rgba(8,145,178,0.68) 100%)",
        }}
      />

      {/* BLUR ORBS */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl z-10" />
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-emerald-300/15 rounded-full blur-3xl z-10" />

      {/* CONTENT */}
      <div
        ref={heroRef}
        className={`relative z-20 max-w-5xl mx-auto px-5 text-center transition-all duration-700 ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-bold px-5 py-2 rounded-full tracking-widest mb-8 uppercase">
          ✨ Healing &amp; Transformation
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Services &amp; <span style={{ color: "#a7f3d0" }}>Workshops</span>
        </h1>

        <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Explore transformational healing modalities and powerful programs
          designed to awaken your highest self, restore inner peace, and
          manifest your dream life.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-teal-700 hover:bg-teal-50 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl text-sm"
          >
            {WA_ICON}
            Book a Session on WhatsApp
            <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-sm"
          >
            Explore Services ↓
          </a>
        </div>

        {/* SLIDE INDICATOR DOTS */}
        <div className="flex items-center justify-center gap-2">
          {heroBgImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === currentBg
                  ? "w-7 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-white/35 hover:bg-white/65"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================================================
   MAIN PAGE
====================================================== */
export default function ServicePage() {
  return (
    <main className="bg-[#f0faf7] min-h-screen overflow-hidden">
      <HeroSection />

      {/* STATS STRIP */}
      <section className="bg-white border-y border-slate-100 py-10">
        <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            {
              num: "12+",
              label: "Services & Products",
              color: "text-teal-500",
            },
            {
              num: "500+",
              label: "Lives Transformed",
              color: "text-emerald-500",
            },
            { num: "10+", label: "Years Experience", color: "text-cyan-600" },
            { num: "4.9★", label: "Client Rating", color: "text-teal-600" },
          ].map(({ num, label, color }) => (
            <div key={label}>
              <p className={`text-2xl font-bold ${color}`}>{num}</p>
              <p className="text-slate-500 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-teal-500 text-xs font-bold tracking-[4px] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            All Services &amp; Products
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            From deep energy healing to transformational workshops — explore
            everything Shivanii offers on your spiritual journey.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-7">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* FEATURED WORKSHOPS */}
      {/* <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-emerald-600 text-xs font-bold tracking-[4px] uppercase mb-4">
              Upcoming Events
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-5">
              Featured Workshops
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-sm">
              Experience collective healing energy through Shivanii's powerful
              spiritual workshops and transformational group sessions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: "/gallery/workshop1.jpg",
                emoji: "🎨",
                tag: "Workshop",
                tagColor: "bg-teal-100 text-teal-700",
                accentColor: "text-teal-600",
                title: "LOA & Vision Board Workshop",
                desc: "Create your dream life with powerful manifestation techniques, vision boarding, and energy alignment practices.",
              },
              {
                image: "/gallery/workshop2.jpg",
                emoji: "💰",
                tag: "Workshop",
                tagColor: "bg-emerald-100 text-emerald-700",
                accentColor: "text-emerald-600",
                title: "Money Breakthrough Workshop",
                desc: "Remove deep-rooted money blocks, rewrite your wealth story, and activate abundance in every area of your life.",
              },
            ].map(
              ({ image, emoji, tag, tagColor, accentColor, title, desc }) => (
                <div
                  key={title}
                  className="group bg-[#f0faf7] rounded-[28px] overflow-hidden border border-teal-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    <span className="absolute bottom-5 left-5 text-4xl">
                      {emoji}
                    </span>
                    <span
                      className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${tagColor}`}
                    >
                      {tag}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="text-slate-800 font-bold text-xl mb-3">
                      {title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {desc}
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 ${accentColor} font-semibold hover:gap-3 transition-all duration-300 text-sm`}
                    >
                      {WA_ICON}
                      Register on WhatsApp
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section> */}

      {/* WHY CHOOSE */}
      <section className="py-20 max-w-6xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-teal-500 text-xs font-bold tracking-[4px] uppercase mb-3">
            Why Choose Shivanii
          </p>
          <h2 className="text-3xl font-bold text-slate-800">
            Healing from the Heart
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "🏆",
              title: "Certified Grandmaster",
              desc: "Trained and certified in multiple healing modalities with over a decade of experience.",
              bg: "bg-teal-50 border-teal-100",
            },
            {
              icon: "💛",
              title: "Holistic Approach",
              desc: "Every session addresses mind, body, and soul for complete and lasting transformation.",
              bg: "bg-emerald-50 border-emerald-100",
            },
            {
              icon: "🤝",
              title: "Personalised Sessions",
              desc: "Every healing plan is uniquely tailored to your specific needs, goals, and energy.",
              bg: "bg-cyan-50 border-cyan-100",
            },
          ].map(({ icon, title, desc, bg }) => (
            <div
              key={title}
              className={`rounded-[22px] p-7 border ${bg} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-bold text-slate-800 text-base mb-2">
                {title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto rounded-[40px] overflow-hidden relative">
          <img
            src="/gallery/cta-bg.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(13,148,136,0.93) 0%, rgba(5,150,105,0.89) 50%, rgba(8,145,178,0.86) 100%)",
            }}
          />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          <div className="relative z-10 py-20 px-6 lg:px-16 text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs px-5 py-2 rounded-full mb-6 tracking-wide font-bold uppercase">
              Free Consultation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Begin Your Healing Journey ✨
            </h2>
            <p className="text-white/85 max-w-2xl mx-auto text-base sm:text-lg mb-10 leading-relaxed">
              Book a free discovery call and let Shivanii guide you towards
              healing, clarity, and lasting transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white text-teal-700 hover:bg-teal-50 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl text-sm"
              >
                {WA_ICON}
                Book Free Discovery Call
                <ArrowRight size={17} />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-sm"
              >
                Meet Shivanii
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
