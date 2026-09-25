import { useRef, useState } from "react";
import { HERO_CONTENT, PROJECTS, CONTACT } from "../constants";
import profilePic from "../assets/galangProfile.png";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Mail, Phone } from "lucide-react";

const fadeUp = (delay = 0) => ({
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const InfoPanel = ({ label, children, linkLabel, onClick }) => (
  <motion.div
    variants={fadeUp(0.6)}
    whileHover={{ x: 4 }}
    className="max-w-[220px] border-l-2 border-transparent pl-3 transition-colors hover:border-purple-400"
  >
    <h6 className="mb-2 text-xs font-semibold tracking-wider text-neutral-400">{label}</h6>
    <p className="mb-3 text-sm leading-relaxed text-neutral-400">{children}</p>
    <motion.button
      onClick={onClick}
      whileHover={{ gap: 8 }}
      className="flex items-center gap-1 text-xs font-semibold text-neutral-200 transition-colors hover:text-purple-400"
    >
      {linkLabel}
      <ArrowRight size={12} />
    </motion.button>
  </motion.div>
);

const ContactIcon = ({ href, label, icon, external }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        aria-label={label}
        whileHover={{ y: -3 }}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 text-neutral-300 transition-colors hover:border-purple-400 hover:text-purple-300"
      >
        {icon}
      </motion.a>
      <motion.span
        initial={{ opacity: 0, y: 4 }}
        animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
        transition={{ duration: 0.15 }}
        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-neutral-800 px-2 py-1 text-[11px] text-neutral-200 shadow"
      >
        {label}
      </motion.span>
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // Normalized cursor position across the whole hero — drives the
  // background glow, and (combined with a local offset) the photo tilt.
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springCfg = { stiffness: 100, damping: 20, mass: 0.4 };
  const smoothX = useSpring(mx, springCfg);
  const smoothY = useSpring(my, springCfg);

  const orb1X = useTransform(smoothX, [0, 1], ["-10%", "10%"]);
  const orb1Y = useTransform(smoothY, [0, 1], ["-10%", "10%"]);
  const orb2X = useTransform(smoothX, [0, 1], ["8%", "-8%"]);
  const orb2Y = useTransform(smoothY, [0, 1], ["8%", "-8%"]);

  const handleContainerMove = (e) => {
    if (reduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const resetCursor = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const aboutExcerpt = HERO_CONTENT.slice(0, 90).trim() + "…";
  const workExcerpt = `${PROJECTS.length} projects spanning web and mobile, from farming platforms to restaurant discovery apps.`;
  const whatsapp = CONTACT.phoneNo.replace(/[^\d]/g, "");

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleContainerMove}
      onMouseLeave={resetCursor}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.15 }}
      className="relative overflow-hidden border-b border-neutral-900"
    >
      {/* Ambient glow that drifts opposite the cursor, tying the section together */}
      <motion.div
        aria-hidden
        style={{ translateX: orb1X, translateY: orb1Y }}
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ translateX: orb2X, translateY: orb2Y }}
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl"
      />

      <div className="relative flex min-h-[640px] flex-col lg:flex-row">
        {/* TEXT SIDE */}
        <div className="flex w-full flex-col justify-center px-6 py-16 lg:w-[38%] lg:px-12">
          <motion.span variants={fadeUp(0)} className="mb-6 h-1 w-16 rounded bg-white" />

          <motion.h1
            variants={fadeUp(0.1)}
            className="text-5xl font-bold leading-tight tracking-tight text-white lg:text-6xl"
          >
            Hi, I'm Galang,
            <br />
            <span className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-400 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[
                  "a Web Developer",
                  2000,
                  "a Photographer",
                  2000,
                  "a Tech Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          <motion.p variants={fadeUp(0.2)} className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-400">
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* IMAGE SIDE */}
        <div className="relative w-full lg:w-[38%]">
          <motion.img
            variants={fadeUp(0.15)}
            src={profilePic}
            alt="Galang Dharma Putra"
            className="h-full min-h-[420px] w-full object-cover lg:min-h-full"
          />
        </div>

        {/* INFO SIDEBAR */}
        <div className="relative flex w-full flex-col justify-center gap-10 px-6 py-16 lg:w-[24%] lg:px-8">
          <InfoPanel label="ABOUT ME" linkLabel="LEARN MORE" onClick={() => scrollTo("about")}>
            {aboutExcerpt}
          </InfoPanel>

          <InfoPanel label="MY WORK" linkLabel="BROWSE PORTFOLIO" onClick={() => scrollTo("projects")}>
            {workExcerpt}
          </InfoPanel>

          <motion.div variants={fadeUp(0.7)}>
            <h6 className="mb-3 text-xs font-semibold tracking-wider text-neutral-400">
              GET IN TOUCH
            </h6>
            <div className="flex gap-3">
              <ContactIcon href={`mailto:${CONTACT.email}`} label={CONTACT.email} icon={<Mail size={16} />} />
              <ContactIcon href={`tel:${CONTACT.phoneNo}`} label={CONTACT.phoneNo} icon={<Phone size={16} />} />
              <ContactIcon
                href={`https://wa.me/${whatsapp}`}
                label="WhatsApp"
                icon={<span className="text-xs font-semibold">WA</span>}
                external
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;