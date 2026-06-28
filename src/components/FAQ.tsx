import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const QA: [string, string][] = [
  ["What counts as an ad request?", "One concept or angle in one format — a static, a short edit, a carousel, a set of hook variations. You queue requests; we work through them on your weekly cadence."],
  ["Do you do video or only static?", "Both. Static is the core, plus motion/static hybrids and short-form video edits cut from your raw clips or UGC."],
  ["How fast are revisions?", "Most revisions come back in 24–48 hours. Revisions inside your plan are unlimited within reason — we iterate until it's test-ready."],
  ["Who is this best for?", "Teams already running or managing paid ads: agency owners, in-house media buyers, ecommerce and DTC operators, and performance marketers."],
  ["Can agencies use this for multiple clients?", "Yes. Growth and Partner support multiple brands/accounts, kept organized so client work never crosses wires. White-label friendly."],
  ["Do you write copy too?", "We write ad copy and headline overlays for the creative itself. We're not a long-form copywriting shop, but the words on the ad are part of the job."],
  ["Is this a full media buying service?", "No. Angle is creative production, not ad management. We build the assets and angle variations; you (or your buyer) run the account."],
  ["How do we start?", "Hit Start Here to book a quick call, or skip the call and fill out the intake form. We map your first cycle and the queue starts moving."],
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  return (
    <div className={`faq__item${open ? " is-open" : ""}`}>
      <button className="faq__q" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {q}<span className="faq__sign" aria-hidden="true" />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq__a"
            initial={reduce ? { height: "auto" } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { height: "auto" } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="faq__a-inner">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="section" id="faq">
      <Reveal className="section__head" >
        <p className="eyebrow">FAQ</p>
        <h2 className="section__title">The questions buyers actually ask.</h2>
      </Reveal>
      <Reveal>
        <div className="faq">
          {QA.map(([q, a]) => <Item key={q} q={q} a={a} />)}
        </div>
      </Reveal>
    </section>
  );
}
