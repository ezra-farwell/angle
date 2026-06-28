import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { StartHere, Btn } from "./Button";

const AUDIENCES = [
  "marketing agencies",
  "ecommerce brands",
  "media buyers",
  "DTC operators",
  "performance teams",
  "founder-led brands",
];

const OUTPUT: [string, string, "ship" | "prog" | "queue"][] = [
  ["6", "Static ads", "ship"],
  ["3", "Hook variations", "prog"],
  ["2", "Motion edits", "queue"],
  ["1", "Carousel concept", "queue"],
];
const STATUS: Record<string, string> = { ship: "Shipped", prog: "In progress", queue: "Queued" };

function Rotor() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % AUDIENCES.length), 2300);
    return () => clearInterval(t);
  }, [reduce]);

  if (reduce) return <span className="hero__rotor"><span className="hero__rotor-word">{AUDIENCES[0]}</span></span>;

  return (
    <span className="hero__rotor">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          className="hero__rotor-word"
          initial={{ opacity: 0, y: "0.45em", filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: "-0.45em", filter: "blur(6px)" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {AUDIENCES[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function OutputCard() {
  return (
    <div className="kit" aria-hidden="true">
      <div className="kit__head">
        <div>
          <span className="kit__eyebrow">This week</span>
          <h3 className="kit__title">Creative output</h3>
        </div>
        <span className="kit__badge"><span className="kit__badge-dot" />Live queue</span>
      </div>
      <ul className="kit__list">
        {OUTPUT.map(([count, name, status]) => (
          <li className="kit__row" key={name}>
            <span className="kit__count">{count}</span>
            <span className="kit__name">{name}</span>
            <span className={`kit__pill kit__pill--${status}`}>{STATUS[status]}</span>
          </li>
        ))}
      </ul>
      <div className="kit__foot"><span className="kit__foot-dot" />Revisions back in 24–48 hrs · built for paid social teams</div>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay } };

  return (
    <section className="hero">
      <div className="hero__inner">
        <motion.span className="badge" {...rise(0)}>
          <span className="badge__dot" />Now booking, 2 partner spots open
        </motion.span>

        <motion.h1 className="hero__title" {...rise(0.06)}>
          Unlimited ads <span className="hero__dim">for</span><br />
          <Rotor />
        </motion.h1>

        <motion.p className="hero__lede" {...rise(0.12)}>
          Static, motion, and short-form ad creative built around what is already converting in your
          ad account. Request, revise, and ship new angles every week, without hiring another designer.
        </motion.p>

        <motion.div className="hero__cta" {...rise(0.18)}>
          <StartHere className="btn--dark btn--lg" />
          <Btn href="/portfolio" className="btn--light btn--lg" arrow>View portfolio</Btn>
        </motion.div>

        <motion.div className="hero__trust" {...rise(0.24)}>
          <span className="avstack" aria-hidden="true">
            {["#1f2937", "#374151", "#4b5563", "#6b7280", "#9ca3af"].map((c, i) => (
              <span key={i} className="avstack__a" style={{ background: c }} />
            ))}
          </span>
          <span className="hero__trust-label">No design hires. No backlog. Just new ads worth testing.</span>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <OutputCard />
        </motion.div>
      </div>
    </section>
  );
}
