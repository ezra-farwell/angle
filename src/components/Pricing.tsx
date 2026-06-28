import { useState } from "react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";
import { StartHere } from "./Button";

/* No confirmed prices yet, so the headline price reads "Founding partner"
   instead of hardcoded numbers. Swap in real numbers when set. */
const PLANS = [
  {
    name: "Starter",
    tag: "For brands testing consistency",
    note: "8 static ads / month · 1 brand",
    features: ["8 static ads / month", "1 brand", "24–48hr revisions", "Weekly delivery", "Async request board"],
  },
  {
    name: "Growth",
    tag: "For agencies & scaling accounts",
    note: "20 ads / month · static + motion",
    features: ["20 ads / month", "Static + motion", "2–3 brands / accounts", "Priority revisions", "Weekly creative planning"],
  },
  {
    name: "Partner",
    tag: "For agencies that need a creative dept.",
    note: "Custom monthly output",
    features: ["Custom monthly output", "Multi-brand support", "Static, motion & video", "Slack / async workflow", "Creative strategy support"],
  },
];

export function Pricing() {
  const [i, setI] = useState(1);
  const plan = PLANS[i];

  return (
    <section className="section" id="pricing">
      <Reveal className="section__head section__head--center">
        <Eyebrow>Pricing</Eyebrow>
        <h2 className="section__title">Fixed scope, zero theater</h2>
        <p className="section__sub">Subscribe, request, ship. Pause anytime. Founding-partner pricing while the first spots are open.</p>
      </Reveal>

      <Reveal>
        <div className="price">
          <div className="price__left">
            <div className="price__toggle" role="tablist" aria-label="Plans">
              {PLANS.map((p, idx) => (
                <button
                  key={p.name}
                  role="tab"
                  aria-selected={idx === i}
                  className={`price__seg${idx === i ? " is-on" : ""}`}
                  onClick={() => setI(idx)}
                >
                  {p.name}
                </button>
              ))}
            </div>

            <div className="price__amount">
              Founding<span> partner</span>
            </div>
            <p className="price__tag">{plan.tag}</p>
            <p className="price__note">{plan.note}</p>

            <span className="price__spots"><span className="price__spots-dot" />Booking open, only 2 spots left</span>
            <div className="price__cta"><StartHere className="btn--dark btn--lg btn--block">Start Here</StartHere></div>
          </div>

          <div className="price__right">
            <h3 className="price__incl">What's included</h3>
            <ul className="price__list">
              {plan.features.map((f) => (
                <li key={f}><span className="price__plus" aria-hidden="true" />{f}</li>
              ))}
            </ul>
            <p className="price__fine">Creative production only, Angle builds the assets and angle variations; you run the account.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
