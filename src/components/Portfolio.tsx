import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  ArrowUp,
  Phone,
  Calendar,
  Code2,
  Bug,
  Cpu,
  Sparkles,
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
import csslAsset from "@/assets/cssl-team.jpg.asset.json";
import jamborieeeAsset from "@/assets/jamborieee-2026-album.jpg.asset.json";

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
      <a href="#hero" className="px-4 py-1.5 text-sm font-semibold text-gradient">
        ST.
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

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-secondary/30 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute top-1/3 left-1/2 w-72 h-72 rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Computer Science Undergraduate @ NSBM</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6"
          >
            Hi, I'm{" "}
            <span className="text-gradient animate-gradient">Sahan</span>
            <br />
            <span className="text-gradient animate-gradient">Tharuka</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gradient-to-r from-primary to-transparent" />
            <span className="text-lg md:text-xl font-semibold tracking-wide text-white">
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
            <a href="#contact" className="group bg-gradient-hero animate-gradient text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-glow hover:scale-105 transition-transform inline-flex items-center gap-2">
              <Download className="w-4 h-4" /> Download CV
            </a>
            <a href="#projects" className="glass px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2">
              <Rocket className="w-4 h-4" /> View Projects
            </a>
            <a href="#contact" className="glass px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2">
              <Mail className="w-4 h-4" /> Contact Me
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
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="glass p-3 rounded-full hover:scale-110 hover:text-secondary transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${EMAIL}`} className="glass p-3 rounded-full hover:scale-110 hover:text-accent transition-all">
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
      </div>
    </section>
  );
}

function Card3D() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) / r.width;
        const y = (e.clientY - r.top - r.height / 2) / r.height;
        setTilt({ x: -y * 15, y: x * 15 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: "transform .2s" }}
      className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] animate-float-3d group"
    >
      {/* Outer rotating conic ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #80ffff, #F0FFFF, #ffffff, #80ffff)",
          filter: "blur(1px)",
        }}
      />
      {/* Inner dark ring */}
      <div className="absolute inset-[4px] rounded-full bg-background" />

      {/* Counter-rotating dashed ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 rounded-full border border-dashed border-primary/25"
      />

      {/* Profile picture */}
      <div className="absolute inset-[14px] rounded-full overflow-hidden shadow-3d">
        <img src={profileImg} alt="Sahan Tharuka" className="w-full h-full object-cover" />
        <div className="absolute inset-0 rounded-full ring-1 ring-white/20" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      {/* Ambient glow */}
      <div className="absolute -inset-10 bg-gradient-hero opacity-25 blur-3xl rounded-full -z-10 group-hover:opacity-50 transition duration-700" />

      {/* Corner accent brackets */}
      <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
      <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-2xl" />
      <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-2xl" />
      <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-2xl" />

      {/* Name plaque */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass rounded-2xl px-5 py-2.5 flex items-center gap-3 shadow-3d z-20 whitespace-nowrap">
        <div className="bg-gradient-hero text-primary-foreground rounded-full p-2">
          <Bug className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground leading-none">QA Automation</div>
          <div className="font-bold text-sm leading-tight text-gradient">Sahan Tharuka</div>
        </div>
      </div>
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
  { n: "300+", l: "Test Cases", i: CheckCircle2 },
  { n: "3+", l: "Volunteering", i: Heart },
];

function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker="about" title="About Me" />
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
          <Reveal>
            <div className="glass rounded-3xl p-8 shadow-3d space-y-5 text-base md:text-lg leading-relaxed">
              <p className="text-muted-foreground">
                An enthusiastic Computer Science undergraduate at NSBM Green University with a keen interest in QA Automation and Quality Engineering. Currently transitioning from manual testing concepts to building robust automation frameworks. Actively developing hands-on projects to bridge the gap between academic theory and industry standards.
              </p>
              <p>
                I'm <b className="text-gradient">Sahan Tharuka</b>, a Computer Science undergraduate at <b>NSBM Green University</b>, on a mission to become a world-class QA Automation Engineer and SDET.
              </p>
              <p className="text-muted-foreground">
                My passion lies at the intersection of <mark className="bg-primary/20 text-primary px-1.5 rounded">code</mark> and <mark className="bg-accent/20 text-accent px-1.5 rounded">quality</mark> — designing robust automation frameworks, writing maintainable test suites, and shipping software that simply doesn't break.
              </p>
              <p className="text-muted-foreground">
                I love exploring Selenium, REST Assured, BDD with Cucumber, and CI/CD pipelines that move quality left and ship faster.
              </p>
              <div className="flex flex-wrap gap-3 pt-3">
                <span className="glass px-4 py-2 rounded-full text-sm flex items-center gap-2"><GraduationCap className="w-4 h-4 text-primary" /> BSc in CS, NSBM</span>
                <span className="glass px-4 py-2 rounded-full text-sm flex items-center gap-2"><Target className="w-4 h-4 text-accent" /> QA Automation Focus</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, idx) => (
                <motion.div
                  key={s.l}
                  whileHover={{ y: -6, rotateX: 6, rotateY: -4 }}
                  className={`glass rounded-2xl p-5 shadow-3d ${idx === 0 ? "col-span-2 bg-gradient-card" : ""}`}
                >
                  <s.i className="w-6 h-6 text-primary mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-gradient">{s.n}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const EXPERIENCES = [
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
    img: csslAsset.url,
    fit: "contain" as const,
    desc: "Planning and executing GenZ community events under the Computer Society of Sri Lanka.",
  },
  {
    title: "Marketing Team Member",
    org: "IEEE JamborIEEE 2026 — IEEE Sri Lanka Section",
    skills: ["Marketing", "Organizing", "Collaboration"],
    img: jamborieeeAsset.url,
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
  { n: "Selenium WebDriver", v: 92 },
  { n: "TestNG", v: 88 },
  { n: "Cucumber BDD", v: 85 },
  { n: "REST Assured", v: 87 },
  { n: "Postman / Newman", v: 90 },
  { n: "CI/CD (Jenkins, GH Actions)", v: 80 },
];
const SKILLS_LANG = ["Java", "JavaScript", "SQL", "HTML / CSS", "Python", "Gherkin"];

function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker="toolbox" title="Toolbox & Expertise" subtitle="Tools, frameworks and languages I work with daily." />
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="glass rounded-3xl p-7 shadow-3d">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Automation</h3>
              </div>
              <div className="space-y-5">
                {SKILLS_AUTO.map((s, i) => (
                  <div key={s.n}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{s.n}</span>
                      <span className="text-muted-foreground font-mono">{s.v}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.v}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: i * 0.08, ease: "easeOut" }}
                        className="h-full bg-gradient-hero animate-gradient rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass rounded-3xl p-7 shadow-3d">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow">
                  <Code2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Languages</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {SKILLS_LANG.map((l, i) => (
                  <motion.div
                    key={l}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.04 }}
                    className="glass rounded-xl p-4 text-center font-semibold border border-border hover:border-primary/50 transition-colors"
                  >
                    {l}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Tech I Work With</div>
                <div className="flex flex-wrap gap-2">
                  {["Selenium", "Cucumber", "Java", "Postman", "Jenkins", "Jira", "GitHub", "Maven", "REST Assured", "SQL", "TestNG"].map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-gradient-card border border-border">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: "E-Commerce Web Automation Testing Framework",
    stack: ["Selenium", "Java", "TestNG", "Maven", "Cucumber", "WebDriverManager"],
    bullets: [
      "Framework built using Java, Selenium WebDriver and TestNG with Maven build lifecycle.",
      "Cucumber BDD with Gherkin feature files for clear step-definition mappings.",
      "Automated full positive flow: Login → Search → Cart → Checkout → Mock Payment → Invoice, plus negative boundary cases.",
      "Cucumber HTML reporting with detailed time-stamped pass/fail rates.",
    ],
  },
  {
    title: "Restful-Booker API Automation Framework",
    stack: ["Postman", "JavaScript", "Newman", "GitHub Actions"],
    bullets: [
      "Fully automated API testing framework using Postman and JavaScript.",
      "Dynamic token injection, runtime variable sharing and tv4 schema validation.",
      "Integrated into GitHub Actions with Newman for regression on every push.",
    ],
  },
  {
    title: "SauceDemo Login Page Automation Framework",
    stack: ["Java", "Selenium", "Cucumber", "TestNG", "Maven"],
    bullets: [
      "Clean step definitions and highly readable feature files for maintainability.",
      "Cucumber HTML reporting tracking test execution status visually — 100% passed steps.",
      "Industry-standard project structuring for scalable test development.",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker="featured work" title="Featured Projects" subtitle="Hands-on automation frameworks and testing systems." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10, rotateX: 3, rotateY: -3 }}
                className="glass rounded-3xl p-6 shadow-3d h-full flex flex-col group relative overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow mb-4">
                    <Bug className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-xs font-mono text-primary mb-2">PROJECT {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="text-xl font-bold mb-3 leading-snug">{p.title}</h3>
                  <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {p.stack.map((s) => (
                      <span key={s} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.4}>
          <div className="mt-10 text-center glass rounded-2xl p-6 shadow-3d max-w-2xl mx-auto">
            <p className="text-muted-foreground">For more projects, connect with me on</p>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-3 bg-gradient-hero animate-gradient text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-glow hover:scale-105 transition">
              <Linkedin className="w-4 h-4" /> LinkedIn — Sahan Tharuka
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
    <footer className="relative pt-20 pb-10 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-aurora opacity-50" />
      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="glass rounded-3xl p-10 shadow-3d text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ textShadow: "0 6px 30px oklch(0.72 0.22 320 / 0.6)" }}
              className="text-4xl md:text-6xl font-bold text-gradient animate-gradient mb-4 perspective-1000"
            >
              Thank you for visiting!
            </motion.h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Let's connect, collaborate and build software that simply doesn't break.</p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {links.map(([n, h]) => (
                <a key={h} href={h} className="text-sm glass rounded-full px-4 py-2 hover:bg-white/10 hover:text-primary transition">{n}</a>
              ))}
            </div>
            <div className="flex justify-center gap-3 mb-6">
              <a href={GITHUB} target="_blank" rel="noreferrer" className="glass p-3 rounded-full hover:scale-110 transition"><Github className="w-5 h-5" /></a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="glass p-3 rounded-full hover:scale-110 transition"><Linkedin className="w-5 h-5" /></a>
              <a href={`mailto:${EMAIL}`} className="glass p-3 rounded-full hover:scale-110 transition"><Mail className="w-5 h-5" /></a>
            </div>
            <div className="text-sm text-muted-foreground">© 2026 — Sahan Tharuka — Thank u 💜</div>
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
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* soft grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(128,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(128,255,255,0.5) 1px, transparent 1px)",
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
          className="absolute font-mono text-xs md:text-sm text-[#80ffff] select-none"
        >
          {it.c}
        </motion.span>
      ))}
    </div>
  );
}