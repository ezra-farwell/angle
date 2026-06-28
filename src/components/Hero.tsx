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

const PILLS = ["Weekly delivery", "24–48hr revisions", "Built for Meta", "Async workflow"];

const OUTPUT: [string, string, "ship" | "prog" | "queue"][] = [
  ["6", "Static ads", "ship"],
  ["3", "Hook variations", "prog"],
  ["2", "Motion edits", "queue"],
  ["1", "Carousel concept", "queue"],
];

const STATUS_LABEL: Record<string, string> = { ship: "Shipped", prog: "In progress", queue: "Queued" };

function Rotor() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % AUDIENCES.length), 2200);
    return () => clearInterval(t);
  }, [reduce]);

  if (reduce) return <span className="hero__rotor"><span className="hero__rotor-word">{AUDIENCES[0]}.</span></span>;

  return (
    <span className="hero__rotor">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          className="hero__rotor-word"
          initial={{ opacity: 0, y: "0.4em" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-0.4em" }}
          transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
        >
          {AUDIENCES[i]}.
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* Clean productized-service preview — "this week's output", not a busy dashboard. */
function OutputCard() {
  return (
    <div className="kit" aria-hidden="true">
      <div className="kit__head">
        <div>
          <span className="kit__eyebrow">This week</span>
          <h3 className="kit__title">Creative output</h3>
        </div>
        <span className="kit__badge">Live queue</span>
      </div>
      <ul className="kit__list">
        {OUTPUT.map(([count, name, status]) => (
          <li className="kit__row" key={name}>
            <span className="kit__count">{count}</span>
            <span className="kit__name">{name}</span>
            <span className={`kit__pill kit__pill--${status}`}>{STATUS_LABEL[status]}</span>
          </li>
        ))}
      </ul>
      <div className="kit__rev">
        <span className="kit__rev-dot" />
        <span>Revisions back in <b>24–48 hrs</b></span>
      </div>
      <div className="kit__foot">Built for paid social teams.</div>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="hero">
      <div className="hero__grid">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="tag tag--dot" style={{ marginBottom: 22 }}>Now booking · 2 partner spots open</span>
          <h1 className="hero__title">Unlimited ads for <Rotor /></h1>
          <p className="hero__lede">
            Static, motion, and short-form ad creative built around what is already converting in your ad account. Request, revise, and ship new angles every week without hiring another designer.
          </p>
          <div className="hero__cta">
            <StartHere className="btn--primary btn--lg" />
            <Btn href="#portfolio" className="btn--ghost btn--lg">View portfolio</Btn>
          </div>
          <p className="hero__micro">No design hires. No bloated agency process. Just new ads worth testing.</p>
          <div className="hero__pills">
            {PILLS.map((p) => <span className="tag" key={p}>{p}</span>)}
          </div>
        </motion.div>

        <motion.div
          className="hero__aside"
          initial={reduce ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          <OutputCard />
        </motion.div>
      </div>
    </section>
  );
}
