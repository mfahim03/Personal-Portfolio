/**
 * About.jsx
 * ---------
 * "About Me" section broken into three clearly-labelled cards:
 *   1. Education        — your academic background
 *   2. Work Experience  — your professional background
 *   3. Current Role     — what you're doing right now / current job
 *
 * Each list item is now { text, date } instead of one raw string.
 * The date renders in its own column (see .about__card-list li in
 * index.css) so it lines up in the same place on every row, in every
 * card — no more dates trailing off wherever the sentence happens to end.
 *
 * Edit the TODO content arrays below — no JSX knowledge required.
 * Cards animate in from below as they enter the viewport (useInView).
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Shared animation variants for the card container
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ─── Content ──────────────────────────────────────────────────────────────
// TODO: Replace the placeholder strings below with your real information.
// Each line item is { text, date }. Leave `date` as null for lines that
// shouldn't show one (e.g. a paragraph of responsibilities) — it'll just
// take the full width instead of leaving an empty gap.

const aboutCards = [
  {
    id: "education",
    icon: "🎓",
    title: "Education",
    items: [
      {
        text: "Bachelor of Computer Science (Software Engineering) with Honours — Universiti Teknologi Malaysia (UTM) \nCGPA: 3.76",
        date: "2022–2026",
      },
  
      {
        text: "Foundation in Engineering — Kolej MARA Kuala Nerang \nCGPA: 3.95",
        date: "2021–2022",
      },
      {
        text: "MRSM Baling — SPM",
        date: "2016–2021",
      },
    ],
  },
  {
    id: "work-experience",
    icon: "🏆",
    title: "Work Experience ( Fresh Graduate )",
    items: [
      {
        text: "Internship at ALPS Electric (Malaysia) Sdn Bhd — Full Stack Developer",
        date: "Sept 2025–Feb 2026",
      },
      {
        text: "Built and enhanced full-stack web applications using PHP, HTML5, CSS3, JavaScript and Microsoft SQL Server.",
        date: null,
      },
      {
        text: "Designed and developed HR systems managing more than 500 records for foreign worker data management including passport and permit tracking with visualisation dashboards.",
        date: null,
      },
    ],
  },
  {
    id: "certifications",
    icon: "📜",
    title: "Certifications",
    items: [
      {
        text: "Full Stack Java with AI - Yayasan Peneraju",
        date: "Aug 2026",
      },
    ],
  },

];

// ─── Component ──────────────────────────────────────────────────────────────

function AboutCard({ card }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      className="about__card"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      aria-labelledby={`about-${card.id}-heading`}
    >
      <div className="about__card-icon" aria-hidden="true">
        {card.icon}
      </div>

      <h3 id={`about-${card.id}-heading`} className="about__card-title">
        {card.title}
      </h3>

      <ul className="about__card-list" role="list">
        {card.items.map((item, i) => (
          <li key={i}>
            <span className="about__card-text">{item.text}</span>
            {item.date && (
              <span className="about__card-date">{item.date}</span>
            )}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function About() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section about" aria-label="About Me">
      <div className="section__inner">
        {/* Section heading */}
        <motion.div
          ref={headingRef}
          className="section__heading"
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="section__label">Get to know me</p>
          <h2 className="section__title">About Me</h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="about__grid"
          variants={containerVariants}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
        >
          {aboutCards.map((card) => (
            <AboutCard key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}