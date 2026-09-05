import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  ArrowUpRight,
  ArrowUp,
  Phone,
  Calendar,
  Code2,
  Bug,
  Cpu,
  Terminal,
  FlaskConical,
  Braces,
  Award,
  Briefcase,
  GraduationCap,
  Send,
  CheckCircle2,
  Rocket,
  Target,
  Zap,
  Heart,
} from "lucide-react";
import profileImg from "@/assets/sahan-profile.jpg";
import ieeeImg from "@/assets/ieee-experience.jpg";
import csslImg from "@/assets/CSSL.jpeg";
import jamborieeeImg from "@/assets/Jamborieee.jpeg";
import duothanImg from "@/assets/Duothan.jpeg";
// Hero video served from /public so it works on any static host (Vercel, Lovable, etc.)
const heroVideoUrl = "/hero-bg.mp4";


const ROLES = [
  "QA Automation Engineer",
  "Software Tester",
  "Manual Tester",
  "API Tester",
  "Quality Engineer",
];

const LINKEDIN = "https://www.linkedin.com/in/sahan-tharuka-28066436b/";
const GITHUB = "https://github.com/SahanRathnaweera";
const EMAIL = "sahantharuka0909@gmail.com";

function useTyping(words: string[], speed = 90, pause = 1600) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(w.slice(0, text.length + 1));
          if (text === w) setTimeout(() => setDel(true), pause);
        } else {
          setText(w.slice(0, text.length - 1));
          if (text === "") {
            setDel(false);
            setI((i + 1) % words.length);
          }
        }
      },
      del ? 35 : speed + Math.random() * 40
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

function MouseHighlight() {
  const [mounted, setMounted] = useState(false);
  const [touch, setTouch] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 22, mass: 0.45 });
  const springY = useSpring(y, { stiffness: 150, damping: 22, mass: 0.45 });

  useEffect(() => {
    setMounted(true);
    setTouch(window.matchMedia("(pointer: coarse)").matches);
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!mounted || touch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{ x: springX, y: springY }}
    >
      <div
        className="w-[480px] h-[480px] rounded-full opacity-[0.18] blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(191,255,0,0.65) 0%, rgba(138,43,226,0.22) 40%, transparent 72%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_18px_4px_rgba(191,255,0,0.9)]"
        aria-hidden
      />
    </motion.div>
  );
}

function Nav() {
  const links = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Journey", "#journey"],
    ["Credentials", "#credentials"],
    ["Contact", "#contact"],
  ];
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-3 py-2 shadow-3d hidden md:flex items-center gap-1"
    >
      <a href="#hero" className="px-4 py-1.5 text-sm font-semibold text-primary">
        Sahan Tharuka
      </a>
      {links.map(([n, h]) => (
        <a
          key={h}
          href={h}
          className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5"
        >
          {n}
        </a>
      ))}
    </motion.nav>
  );
}

function AvailableBadge() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="fixed top-6 left-6 z-40 glass rounded-full px-4 py-2 flex items-center gap-2 shadow-glow"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent"></span>
      </span>
      <span className="text-xs font-medium">Available for Internships</span>
    </motion.div>
  );
}

function HeroVideo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.15]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div style={{ y, scale, opacity }} className="absolute inset-0 will-change-transform">
        <video
          className="w-full h-full object-cover object-center opacity-[0.34] contrast-125 saturate-[0.9] scale-[1.35] md:scale-[1.25]"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          src={heroVideoUrl}
        />
      </motion.div>
      {/* Spotlight on the speaker — darkens edges, keeps center subject clear */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_45%,transparent_12%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_95%)]" />
      {/* Subtle lime rim glow framing the subject */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_60%_70%_at_center_45%,transparent_55%,rgba(191,255,0,0.22)_100%)]" />
      {/* Cinematic overlays for legibility */}
      <div className="absolute inset-0 bg-background/25" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      {/* Scanline texture */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, #BFFF00 0px, #BFFF00 1px, transparent 1px, transparent 4px)" }}
      />
    </div>
  );
}

function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <section
      id="hero"
      onMouseMove={(e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setTilt({ x, y });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative min-h-[100svh] flex items-center justify-center px-6 pt-24 pb-12 overflow-hidden"
    >
      <HeroVideo />

      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute top-1/3 left-1/2 w-72 h-72 rounded-full bg-accent/15 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
      </div>

      <motion.div
        style={{
          transform: `perspective(1400px) rotateX(${-tilt.y * 2.2}deg) rotateY(${tilt.x * 2.6}deg) translateZ(0)`,
          transition: "transform .35s cubic-bezier(.22,.61,.36,1)",
        }}
        className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center w-full"
      >

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-muted-foreground">Computer Science Undergraduate @ NSBM</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 text-foreground"
          >
            Hi, I'm{" "}
            <span className="text-primary">Sahan</span>
            <br />
            <span className="text-primary">Tharuka</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-primary" />
            <span className="text-lg md:text-xl font-semibold tracking-wide text-secondary">
              QA Automation Engineer
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed"
          >
            Computer Science Undergraduate at <b className="text-foreground">NSBM Green University</b> | QA Automation Engineering Enthusiast | Java, Selenium, Cucumber BDD, TestNG, CI/CD, API Testing, RestAssured | IEEE &amp; CSSL
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <a href="#contact" className="group bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-glow hover:scale-105 transition-transform inline-flex items-center gap-2">
              <Download className="w-4 h-4" /> Download CV
            </a>
            <a href="#projects" className="glass px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2">
              <Rocket className="w-4 h-4 text-primary" /> View Projects
            </a>
            <a href="#contact" className="glass px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 mt-8"
          >
            <a href={GITHUB} target="_blank" rel="noreferrer" className="glass p-3 rounded-full hover:scale-110 hover:text-primary transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-full hover:scale-110 hover:text-primary transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${EMAIL}`} className="glass p-3 rounded-full hover:scale-110 hover:text-primary transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* 3D rotating profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="perspective-1000 flex justify-center"
        >
          <Card3D />
        </motion.div>
      </motion.div>

    </section>
  );
}

function Card3D() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) / r.width;
        const y = (e.clientY - r.top - r.height / 2) / r.height;
        setTilt({ x: -y * 18, y: x * 18 });
      }}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
      style={{ transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: "transform .25s cubic-bezier(.22,.61,.36,1)" }}
      className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] group"
    >
      {/* Premium ambient glow */}
      <div className="absolute -inset-12 rounded-full bg-primary/10 opacity-40 blur-[80px] -z-20 group-hover:opacity-60 transition duration-700" />

      {/* Outer solid lime ring with subtle pulse */}
      <motion.div
        animate={hovered ? { scale: [1, 1.02, 1] } : { scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-primary p-[3px] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
      >
        <div className="w-full h-full rounded-full bg-background p-[3px]">
          <div className="w-full h-full rounded-full border border-white/10" />
        </div>
      </motion.div>

      {/* Subtle rotating dashed orbit ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-4 rounded-full border border-dashed border-primary/20"
      />

      {/* Profile picture container */}
      <div className="absolute inset-[10px] rounded-full overflow-hidden shadow-3d bg-card">
        <img
          src={profileImg}
          alt="Sahan Tharuka"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Professional vignette overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/15" />
        {/* Subtle top shine */}
        <div className="absolute top-0 inset-x-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      </div>

      {/* Floating role badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="glass px-4 py-1.5 rounded-full flex items-center gap-2 shadow-glow border-primary/20">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-xs font-semibold whitespace-nowrap">QA Automation Engineer</span>
        </div>
      </motion.div>

      {/* Orbiting tech satellites */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-10 rounded-full pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card border border-primary/30 flex items-center justify-center shadow-glow">
          <span className="text-[10px] font-bold text-primary">Java</span>
        </div>
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-14 rounded-full pointer-events-none"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-9 h-9 rounded-full bg-card border border-primary/30 flex items-center justify-center shadow-glow">
          <span className="text-[10px] font-bold text-primary">TS</span>
        </div>
      </motion.div>

      {/* Hover outer glow ring */}
      <div className="absolute -inset-8 rounded-full border border-primary/0 group-hover:border-primary/20 transition duration-500 -z-10" />
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <Reveal>
      <div className="text-center mb-14">
        <div className="inline-block glass rounded-full px-3 py-1 text-xs font-mono text-primary mb-3">// {kicker}</div>
        <h2 className="text-4xl md:text-6xl font-bold mb-3">
          <span className="text-gradient">{title}</span>
        </h2>
        {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </Reveal>
  );
}

const STATS = [
  { n: "10+", l: "Projects", i: Rocket },
  { n: "10+", l: "Certificates", i: Award },
  { n: "15+", l: "Technologies", i: Cpu },
  { n: "100+", l: "Test Cases", i: CheckCircle2 },
  { n: "3+", l: "Volunteering", i: Heart },
];

function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker="about" title="About Me" />
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 140, damping: 16 }}
          >
            <div className="box-black rounded-3xl p-8 space-y-5 text-base md:text-lg leading-relaxed">
              <p>
                I’m a <b className="text-gradient">3rd-year Computer Science undergraduate</b> at <b>NSBM Green University</b> (GPA: 3.68/4.0), with a self-driven interest in <b className="text-primary">Quality Engineering</b> and <b className="text-primary">Test Automation</b>.
              </p>
              <p className="text-muted-foreground">
                I’m passionate about building reliable and maintainable automated testing solutions that improve software quality and release confidence. My experience includes <mark className="bg-primary/20 text-primary px-1.5 rounded">Playwright (TypeScript)</mark>, <mark className="bg-primary/20 text-primary px-1.5 rounded">Selenium WebDriver (Java)</mark>, <mark className="bg-primary/20 text-primary px-1.5 rounded">Cucumber</mark>, <mark className="bg-primary/20 text-primary px-1.5 rounded">TestNG</mark>, <mark className="bg-primary/20 text-primary px-1.5 rounded">POM</mark>, REST API Testing, Postman, RestAssured, and JMeter.
              </p>
              <p className="text-muted-foreground">
                I also have hands-on experience with Git/GitHub, GitHub Actions, CI/CD, Docker basics, Jira, and Agile/Scrum practices, with a strong understanding of STLC and test case design.
              </p>
              <p className="text-muted-foreground">
                Beyond academics, I contribute to the tech community as a <b>Media Coordinator</b> of the IEEE Computer Society Student Branch Chapter and <b>Logistics Lead</b> for Duothan 6.0 at NSBM.
              </p>
              <p className="text-primary font-semibold">
                Seeking Quality Engineering / QA Automation Internship opportunities for late 2026 / 2027.
              </p>
              <div className="flex flex-wrap gap-3 pt-3">
                <span className="box-black px-4 py-2 rounded-full text-sm flex items-center gap-2"><GraduationCap className="w-4 h-4 text-primary" /> BSc in CS, NSBM</span>
                <span className="box-black px-4 py-2 rounded-full text-sm flex items-center gap-2"><Target className="w-4 h-4 text-accent" /> QA Automation Focus</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s, idx) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, scale: 0.5, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 170, damping: 15, delay: 0.15 + idx * 0.09 }}
                whileHover={{ y: -6, rotateX: 6, rotateY: -4 }}
                className={`box-black rounded-2xl p-5 ${idx === 0 ? "col-span-2" : ""}`}
              >
                <s.i className="w-6 h-6 text-primary mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-gradient">{s.n}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const EXPERIENCES = [
  {
    title: "Logistics Lead",
    org: "IEEE Student Branch — NSBM Green University",
    skills: ["Team Management", "Team Leadership", "Communication"],
    img: duothanImg,
    fit: "contain" as const,
    desc: "Served as the Logistics Lead for Duothan 6.0, a national-level inter-university hackathon organized by the IEEE Student Branch of NSBM Green University. Coordinated logistics, managed event operations, and collaborated with multiple teams to ensure the successful execution of the event. Balancing these responsibilities alongside my university examinations made this achievement especially rewarding and strengthened my leadership, teamwork, communication, and time management skills.",
  },
  {
    title: "Media Coordinator",
    org: "IEEE Computer Society Student Branch Chapter of NSBM",
    skills: ["Communication", "Leadership", "Team Collaboration"],
    img: ieeeImg,
    desc: "Coordinating media operations, design and outreach for the IEEE Computer Society Student Branch.",
  },
  {
    title: "Event Coordinator",
    org: "CSSL GenZ Chapter | NSBM Green University",
    skills: ["Teamwork", "Event Coordination"],
    img: csslImg,
    fit: "contain" as const,
    desc: "Planning and executing GenZ community events under the Computer Society of Sri Lanka.",
  },
  {
    title: "Marketing Team Member",
    org: "IEEE JamborIEEE 2026 — IEEE Sri Lanka Section",
    skills: ["Marketing", "Organizing", "Collaboration"],
    img: jamborieeeImg,
    fit: "contain" as const,
    desc: "Appointed as an Organizing Committee (OC) Member — Marketing, representing NSBM Green University for JamborIEEE 2026, a flagship event co-organized by IEEE Sri Lanka Section SLSAC with KDU, Kelaniya, Peradeniya, NSBM and Wayamba.",
  },
];

function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker="experience" title="Experience" subtitle="Roles where I've led, organized and learned." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.1}>
              <motion.div whileHover={{ y: -8 }} className="glass rounded-3xl p-6 shadow-3d h-full flex flex-col">
                {e.img && (
                  <div className="rounded-2xl overflow-hidden mb-4 aspect-video bg-black/40">
                    <img src={e.img} alt={e.title} className={`w-full h-full ${"fit" in e && e.fit === "contain" ? "object-contain" : "object-cover"}`} />
                  </div>
                )}
                <div className="flex items-center gap-2 text-xs text-primary mb-2">
                  <Briefcase className="w-3.5 h-3.5" /> Experience
                </div>
                <h3 className="text-lg font-bold mb-1">{e.title}</h3>
                <div className="text-sm text-muted-foreground mb-3">{e.org}</div>
                <p className="text-sm text-muted-foreground flex-1">{e.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {e.skills.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">{s}</span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const SKILLS_AUTO = [
  { n: "Selenium WebDriver", logo: "https://cdn.simpleicons.org/selenium" },
  { n: "Playwright", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" },
  { n: "Postman & Newman", logo: "https://cdn.simpleicons.org/postman" },
  { n: "JUnit", logo: "https://cdn.simpleicons.org/junit5" },
  { n: "TestNG", icon: "testng" },
  { n: "REST Assured", icon: "rest" },
  { n: "Cucumber BDD", logo: "https://cdn.simpleicons.org/cucumber" },
  { n: "JMeter", logo: "https://cdn.simpleicons.org/apachejmeter" },
  { n: "GitHub Actions", logo: "https://cdn.simpleicons.org/githubactions" },
];
const SKILLS_LANG = [
  { n: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { n: "TypeScript", logo: "https://cdn.simpleicons.org/typescript" },
  { n: "SQL", logo: "https://cdn.simpleicons.org/mysql" },
  { n: "Gherkin", logo: "https://cdn.simpleicons.org/cucumber" },
  { n: "HTML / CSS", logo: "https://cdn.simpleicons.org/html5" },
];
const SKILLS_TECH = [
  { n: "Selenium", logo: "https://cdn.simpleicons.org/selenium" },
  { n: "Playwright", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" },
  { n: "JMeter", logo: "https://cdn.simpleicons.org/apachejmeter" },
  { n: "Cucumber", logo: "https://cdn.simpleicons.org/cucumber" },
  { n: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { n: "Postman", logo: "https://cdn.simpleicons.org/postman" },
  { n: "REST Assured", icon: "rest" },
  { n: "TestNG", icon: "testng" },
  { n: "Jira", logo: "https://cdn.simpleicons.org/jira" },
  { n: "GitHub Actions", logo: "https://cdn.simpleicons.org/githubactions" },
  { n: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];


function LogoTile({ s, i, small = false }: { s: { n: string; logo?: string; icon?: string }; i: number; small?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05, type: "spring", stiffness: 180, damping: 18 }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        setTilt({ x, y });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(600px) rotateX(${-tilt.y * 14}deg) rotateY(${tilt.x * 14}deg) translateZ(${tilt.x || tilt.y ? 8 : 0}px)`,
        transformStyle: "preserve-3d",
      }}
      className={`group glass rounded-2xl ${small ? "p-3" : "p-4"} border border-border flex flex-col items-center justify-center gap-2.5 text-center transition-[box-shadow,border-color] duration-300 hover:border-primary/60 hover:shadow-glow cursor-default will-change-transform`}
    >
      <div
        className={`${small ? "w-10 h-10" : "w-12 h-12"} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5`}
        style={{ transform: "translateZ(24px)" }}
      >
        {s.logo ? (
          <img
            src={s.logo}
            alt={s.n}
            loading="lazy"
            className="w-full h-full object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
          />
        ) : s.icon === "testng" ? (
          <FlaskConical className="w-9 h-9 text-primary drop-shadow-[0_4px_10px_rgba(191,255,0,0.3)]" />
        ) : (
          <Braces className="w-9 h-9 text-primary drop-shadow-[0_4px_10px_rgba(191,255,0,0.3)]" />
        )}
      </div>
      <span className={`font-semibold ${small ? "text-xs" : "text-sm"} leading-tight`} style={{ transform: "translateZ(12px)" }}>
        {s.n}
      </span>
    </motion.div>
  );
}

type SkillItem = { n: string; logo?: string; icon?: string };

function MarqueeTile({ s, small = false }: { s: SkillItem; small?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const element = ref.current;
        if (!element) return;
        const r = element.getBoundingClientRect();
        setTilt({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(600px) rotateX(${-tilt.y * 16}deg) rotateY(${tilt.x * 16}deg) translateZ(${tilt.x || tilt.y ? 10 : 0}px)`,
        transformStyle: "preserve-3d",
      }}
      className={`marquee-tile group glass rounded-2xl ${small ? "px-3 py-2.5 w-28" : "px-4 py-3.5 w-36"} shrink-0 border border-border flex flex-col items-center justify-center gap-2 text-center transition-[box-shadow,border-color] duration-300 hover:border-primary/60 hover:shadow-glow cursor-default`}
    >
      <div
        className={`${small ? "w-8 h-8" : "w-11 h-11"} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
        style={{ transform: "translateZ(26px)" }}
      >
        {s.logo ? (
          <img src={s.logo} alt={s.n} loading="lazy" className="w-full h-full object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]" />
        ) : s.icon === "testng" ? (
          <FlaskConical className={`${small ? "w-6 h-6" : "w-8 h-8"} text-primary`} />
        ) : (
          <Braces className={`${small ? "w-6 h-6" : "w-8 h-8"} text-primary`} />
        )}
      </div>
      <span className={`font-semibold ${small ? "text-[11px]" : "text-xs"} leading-tight`} style={{ transform: "translateZ(14px)" }}>
        {s.n}
      </span>
    </div>
  );
}

function LogoMarquee({
  items,
  small = false,
  reverse = false,
  duration = 32,
  delay = 0,
}: { items: SkillItem[]; small?: boolean; reverse?: boolean; duration?: number; delay?: number }) {
  const loop = [...items, ...items];
  return (
    <motion.div
      initial={{ opacity: 0, y: 26, scale: 0.94, rotateX: 12 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, type: "spring", stiffness: 150, damping: 18 }}
      style={{ perspective: 1000 }}
      className="marquee-mask overflow-hidden py-2 group/marquee"
    >
      <div
        className="flex gap-3 w-max animate-marquee group-hover/marquee:[animation-play-state:paused]"
        style={{ ["--marquee-duration" as string]: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {loop.map((s, i) => (
          <MarqueeTile key={`${s.n}-${i}`} s={s} small={small} />
        ))}
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker="toolbox" title="Toolbox & Expertise" subtitle="Tools, frameworks and languages I work with daily." />
        <div className="flex flex-col gap-6">
          <Reveal>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="glass rounded-3xl p-8 shadow-3d bg-gradient-card"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-13 h-13 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Automation & Performance</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">Core QA engineering competencies</p>
                </div>
              </div>
              <LogoMarquee items={SKILLS_AUTO} duration={34} />
            </motion.div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-6">
            <Reveal delay={0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="glass rounded-3xl p-8 shadow-3d bg-gradient-card h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow">
                    <Code2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Languages</h3>
                </div>
                <LogoMarquee items={SKILLS_LANG} small reverse duration={26} delay={0.05} />
              </motion.div>
            </Reveal>

            <Reveal delay={0.2}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="glass rounded-3xl p-8 shadow-3d bg-gradient-card h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow">
                    <Cpu className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Tech I Work With</h3>
                </div>
                <LogoMarquee items={SKILLS_TECH} small duration={30} delay={0.1} />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const og = (repo: string) => `https://opengraph.githubassets.com/1/SahanRathnaweera/${repo}`;

const PROJECTS = [
  {
    title: "E-Commerce Web Automation Testing Framework",
    repo: "Ecommerce-Automation-Framework",
    stack: ["Selenium", "Java", "TestNG", "Maven", "Cucumber", "WebDriverManager"],
    bullets: [
      "Framework built using Java, Selenium WebDriver and TestNG with Maven build lifecycle.",
      "Cucumber BDD with Gherkin feature files for clear step-definition mappings.",
      "Automated full positive flow: Login → Search → Cart → Checkout → Mock Payment → Invoice, plus negative boundary cases.",
      "Cucumber HTML reporting with detailed time-stamped pass/fail rates.",
    ],
  },
  {
    title: "Restful-Booker API Automation & CI/CD Framework",
    repo: "restful-booker-postman-automation",
    stack: ["Postman", "JavaScript", "Newman", "GitHub Actions"],
    bullets: [
      "Fully automated API testing framework using Postman and JavaScript.",
      "Dynamic token injection, runtime variable sharing and tv4 schema validation.",
      "Integrated into GitHub Actions with Newman for regression on every push.",
    ],
  },
  {
    title: "Playwright E2E Automation & CI/CD Framework",
    repo: "playwright-saucedemo-e2e",
    stack: ["TypeScript", "Playwright", "POM", "GitHub Actions"],
    bullets: [
      "Scalable, modular E2E framework using the Page Object Model for SauceDemo.",
      "Covers multi-user authentication, product search, cart operations and checkout.",
      "GitHub Actions pipeline for headless execution, failure diagnosis and report publishing on every commit.",
    ],
  },
  {
    title: "Jira Test Management & Agile Defect Lifecycle",
    repo: "Daraz---Test-Management",
    stack: ["Jira Cloud", "Agile/Scrum", "Manual Testing", "STLC"],
    bullets: [
      "End-to-end manual test execution and defect lifecycle for core Daraz e-commerce workflows using Jira Cloud.",
      "Structured test tasks with pre-conditions, step-by-step procedures and expected vs. actual behavior logs across sprints.",
      "Reproducible defect reports with severity/priority triage, re-testing and sprint board status transitions.",
    ],
  },
  {
    title: "Web Application Performance & Load Testing Framework",
    repo: "BlazeDemo-Performance-Testing",
    stack: ["Apache JMeter", "CSV Data-Driven", "Non-GUI CLI", "HTML Reporting"],
    bullets: [
      "End-to-end performance suite with JMeter for the BlazeDemo flight booking application.",
      "Data-driven testing via CSV Data Set Config with SLA assertions (< 2000 ms) and HTTP 200 validation.",
      "Non-GUI CLI load execution with detailed HTML dashboard reports for throughput, latency and error rates.",
    ],
  },
];

function ProjectCard({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 20 });
  const sry = useSpring(ry, { stiffness: 180, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 10);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 10);
  };
  const onLeave = () => { rx.set(0); ry.set(0); };

  return (
    <Reveal delay={i * 0.08}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
        whileHover={{ y: -10 }}
        className="glass rounded-3xl overflow-hidden shadow-3d h-full flex flex-col group relative hover:shadow-glow transition-shadow duration-500"
      >
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition pointer-events-none" />
        <a href={`${GITHUB}/${p.repo}`} target="_blank" rel="noopener noreferrer" className="relative block overflow-hidden">
          <img
            src={og(p.repo)}
            alt={`${p.title} — GitHub repository preview`}
            loading="lazy"
            className="w-full aspect-[2/1] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <div className="absolute top-3 left-3 text-[10px] font-mono px-2.5 py-1 rounded-full bg-background/70 backdrop-blur border border-primary/30 text-primary">
            PROJECT {String(i + 1).padStart(2, "0")}
          </div>
        </a>
        <div className="relative p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
          <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
            {p.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {p.stack.map((s) => (
              <span key={s} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">{s}</span>
            ))}
          </div>
          <a
            href={`${GITHUB}/${p.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:shadow-glow"
          >
            <Github className="w-4 h-4" /> View GitHub Repository
          </a>
        </div>
      </motion.div>
    </Reveal>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker="featured work" title="Featured Projects" subtitle="Hands-on automation frameworks and testing systems." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: 1200 }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
        <Reveal delay={0.4}>
          <div className="mt-10 text-center glass rounded-2xl p-6 shadow-3d max-w-2xl mx-auto">
            <p className="text-muted-foreground">Explore all of my work on</p>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 bg-gradient-hero animate-gradient text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-glow hover:scale-105 transition">
              <Github className="w-4 h-4" /> GitHub — SahanRathnaweera
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const JOURNEY = [
  { y: "2025", t: "Learning Programming", d: "Started my journey with Java, Python and core CS fundamentals at NSBM Green University." },
  { y: "2026 · Apr", t: "Discovered Automation", d: "Fell in love with QA and automation testing. Started exploring Selenium WebDriver." },
  { y: "2026 · May", t: "Built Selenium Projects", d: "Designed multiple hybrid Selenium frameworks using POM, TestNG and Cucumber BDD." },
  { y: "2026 · Jun", t: "API Automation Mastery", d: "Deep-dived into REST Assured, Postman and modern CI/CD with Jenkins." },
  { y: "2026 · End", t: "Software Tester", d: "Aiming for an internship and a long-term career as a QA Automation Engineer." },
];

function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section id="journey" ref={ref} className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader kicker="journey" title="My Path So Far" subtitle="From first lines of code to building automation frameworks." />
        <div className="relative pl-8 md:pl-0">
          <div className="absolute md:left-1/2 left-3 top-0 bottom-0 w-0.5 bg-border" />
          <motion.div style={{ height: lineH }} className="absolute md:left-1/2 left-3 top-0 w-0.5 bg-gradient-hero shadow-glow" />
          {JOURNEY.map((j, i) => (
            <Reveal key={j.y} delay={i * 0.05}>
              <div className={`relative mb-12 md:grid md:grid-cols-2 md:gap-8 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className={`md:text-right ${i % 2 ? "md:text-left" : ""}`}>
                  <div className="glass rounded-2xl p-6 shadow-3d inline-block max-w-md text-left">
                    <div className="font-mono text-xs text-primary mb-1">{j.y}</div>
                    <h3 className="text-xl font-bold mb-2">{j.t}</h3>
                    <p className="text-sm text-muted-foreground">{j.d}</p>
                  </div>
                </div>
                <div className="hidden md:block" />
                <div className="absolute md:left-1/2 left-3 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-hero shadow-glow ring-4 ring-background" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const VOLUNTEERING = [
  {
    title: "Team Lead | OpenDay",
    org: "IEEE Computer Society Student Branch Chapter of NSBM",
    desc: "Successfully led the IEEE Student Branch team and stall at NSBM Open Day 2026. Managed team operations and public engagement to represent the Faculty of Computing. Honored with an official commendation from the Main Organizing Committee.",
  },
  {
    title: "Event Photographer & Support",
    org: "SkillShare Dev Forge — IEEE Student Branch, NSBM",
    desc: "Captured the official event photographs including the final group photograph featuring all participants, speakers and organizers of the SkillShare Dev Forge event.",
  },
];

function Volunteering() {
  return (
    <section id="volunteering" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader kicker="volunteering" title="Giving Back" />
        <div className="grid md:grid-cols-2 gap-6">
          {VOLUNTEERING.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6 }} className="glass rounded-3xl p-7 shadow-3d h-full">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 text-accent flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-1">{v.title}</h3>
                <div className="text-sm text-muted-foreground mb-3">{v.org}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const CREDS = [
  { t: "API Testing Learning Path", o: "Postman · 2026", l: "https://verify.skilljar.com/c/t457kryrimsp" },
  { t: "Agile Project Management", o: "HP LIFE · 2026", l: "https://www.life-global.org/certificate/aefbfbb3-2050-4d56-9bd9-7932734a3c40" },
  { t: "Continuous Integration with Jenkins", o: "Applitools · 2026", l: "https://us-central1-testautomationu-9e0b6.cloudfunctions.net/app/sharable/aa3c61bc" },
  { t: "API Test Automation with Postman", o: "TestAutomationU · 2026", l: "https://us-central1-testautomationu-9e0b6.cloudfunctions.net/app/sharable/6a9b5d85" },
  { t: "Introduction to Amazon Q Developer (Technical)", o: "AWS · 2026" },
  { t: "GitHub Basics", o: "Simplilearn" },
  { t: "Automation Testing Basics", o: "Simplilearn" },
  { t: "PYLEAGUE 25'", o: "Association of Software Engineering — NSBM" },
];

function Credentials() {
  return (
    <section id="credentials" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker="certifications" title="Credentials" subtitle="Continuous learning. Verified expertise." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CREDS.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05}>
              <motion.div whileHover={{ y: -6, rotateX: 4 }} className="glass rounded-2xl p-5 shadow-3d h-full flex flex-col">
                <Award className="w-7 h-7 text-primary mb-3" />
                <h3 className="font-bold leading-tight mb-1">{c.t}</h3>
                <div className="text-xs text-muted-foreground mb-4">{c.o}</div>
                {c.l ? (
                  <a href={c.l} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition">
                    Verify <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="mt-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">Issued</span>
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const contacts = [
    { i: Mail, l: "Email", v: EMAIL, h: `mailto:${EMAIL}` },
    { i: Linkedin, l: "LinkedIn", v: "Sahan Tharuka", h: LINKEDIN },
    { i: Github, l: "GitHub", v: "SahanRathnaweera", h: GITHUB },
    { i: MapPin, l: "Location", v: "Sri Lanka" },
    { i: Phone, l: "WhatsApp / Call", v: "076 926 4925 / 072 040 3242", h: "https://wa.me/94769264925" },
    { i: Calendar, l: "Available", v: "Open for Internships" },
  ];
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker="contact" title="Let's Build Quality Together" subtitle="Open to internships, collaborations and QA challenges." />
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6">
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contacts.map((c) => {
                const Inner = (
                  <motion.div whileHover={{ y: -4 }} className="glass rounded-2xl p-5 shadow-3d h-full">
                    <c.i className="w-5 h-5 text-primary mb-3" />
                    <div className="text-xs text-muted-foreground">{c.l}</div>
                    <div className="font-semibold text-sm break-words">{c.v}</div>
                  </motion.div>
                );
                return c.h ? (
                  <a key={c.l} href={c.h} target="_blank" rel="noreferrer">{Inner}</a>
                ) : (
                  <div key={c.l}>{Inner}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                const name = f.get("name");
                const email = f.get("email");
                const subject = f.get("subject") || "Portfolio Contact";
                const message = f.get("message");
                const body = `From: ${name} <${email}>%0D%0A%0D%0A${message}`;
                window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(String(subject))}&body=${body}`;
                setSent(true);
              }}
              className="glass rounded-3xl p-8 shadow-3d space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input required name="name" placeholder="Your name" className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition" />
                <input required type="email" name="email" placeholder="Your email" className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition" />
              </div>
              <input name="subject" placeholder="Subject" className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition" />
              <textarea required name="message" rows={6} placeholder="Your message…" className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none" />
              <button type="submit" className="w-full bg-gradient-hero animate-gradient text-primary-foreground px-6 py-3.5 rounded-xl font-bold shadow-glow hover:scale-[1.02] transition flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Send Message
              </button>
              <AnimatePresence>
                {sent && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-sm text-accent text-center">
                    Opening your mail client…
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Journey", "#journey"],
    ["Credentials", "#credentials"],
    ["Contact", "#contact"],
  ];
  return (
    <footer className="relative mt-24 px-6 overflow-hidden">
      {/* top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[min(80%,64rem)] bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-aurora opacity-30" />

      <div className="relative max-w-6xl mx-auto pt-16 pb-8">
        <Reveal>
          <div className="glass rounded-3xl p-8 md:p-12 shadow-3d">
            {/* CTA row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-border/60">
              <div className="text-left">
                <div className="text-primary text-xs font-mono tracking-[0.3em] uppercase mb-3">// Let's talk</div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Let's build software that<br />
                  <span className="text-primary">simply doesn't break.</span>
                </h2>
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-3 self-start md:self-auto bg-primary text-primary-foreground font-semibold px-7 py-4 rounded-full shadow-glow hover:scale-105 transition"
              >
                <Mail className="w-5 h-5" />
                Get in touch
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            {/* middle grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 text-left">
              <div>
                <div className="text-xl font-bold mb-2">Sahan <span className="text-primary">Tharuka</span></div>
                <p className="text-sm text-muted-foreground leading-relaxed">QA Automation Engineer crafting reliable, well-tested software experiences.</p>
              </div>
              <div>
                <div className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4">Navigate</div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {links.map(([n, h]) => (
                    <a key={h} href={h} className="text-sm text-muted-foreground hover:text-primary transition">{n}</a>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4">Connect</div>
                <div className="flex gap-3">
                  <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="glass p-3 rounded-full hover:scale-110 hover:text-primary transition"><Github className="w-5 h-5" /></a>
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="glass p-3 rounded-full hover:scale-110 hover:text-primary transition"><Linkedin className="w-5 h-5" /></a>
                  <a href={`mailto:${EMAIL}`} aria-label="Email" className="glass p-3 rounded-full hover:scale-110 hover:text-primary transition"><Mail className="w-5 h-5" /></a>
                </div>
              </div>
            </div>

            {/* bottom bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-border/60 text-sm text-muted-foreground">
              <div>© 2026 Sahan Tharuka. All rights reserved.</div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Thank you for visiting!
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-gradient-hero animate-gradient text-primary-foreground p-3.5 rounded-full shadow-glow hover:scale-110 transition"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <MouseHighlight />
      <QABackground />
      <Nav />
      <AvailableBadge />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Journey />
      <Volunteering />
      <Credentials />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  );
}

function QABackground() {
  const items = [
    { c: "✓", x: "8%", d: 0, dur: 22 },
    { c: "</>", x: "18%", d: 4, dur: 28 },
    { c: "{ }", x: "28%", d: 8, dur: 26 },
    { c: "✗", x: "40%", d: 2, dur: 30 },
    { c: "PASS", x: "52%", d: 6, dur: 32 },
    { c: "✓", x: "62%", d: 10, dur: 24 },
    { c: "@Test", x: "72%", d: 3, dur: 29 },
    { c: "200 OK", x: "82%", d: 7, dur: 27 },
    { c: "BUG", x: "92%", d: 5, dur: 31 },
    { c: "//", x: "14%", d: 12, dur: 25 },
    { c: "[ ]", x: "46%", d: 14, dur: 33 },
    { c: "Given", x: "68%", d: 9, dur: 28 },
  ];
  return (
    <div className="qa-background pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* soft grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(138,43,226,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(138,43,226,0.45) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {items.map((it, i) => (
        <motion.span
          key={i}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ y: "-20vh", opacity: [0, 0.35, 0.35, 0] }}
          transition={{
            duration: it.dur,
            delay: it.d,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.1, 0.85, 1],
          }}
          style={{ left: it.x }}
          className="qa-particle absolute font-mono text-xs md:text-sm text-primary select-none"
        >
          {it.c}
        </motion.span>
      ))}
    </div>
  );
}