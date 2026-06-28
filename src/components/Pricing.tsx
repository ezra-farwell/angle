import { Reveal, RevealItem } from "./Reveal";
import { StartHere } from "./Button";

/* No confirmed prices in the project yet, so plans show "Founding partner
   pricing" instead of hardcoded numbers. Swap to real prices when set. */
const PLANS = [
  {
    name: "Starter", for: "For brands testing consistency", flag: "",
    features: ["8 static ads / month", "1 brand", "24–48hr revisions", "Weekly delivery"],
    feature: false,
  },
  {
    name: "Growth", for: "For agencies and scaling accounts", flag: "Most popular",
    features: ["20 ads / month", "Static + motion", "2–3 brands / accounts", "Priority revisions", "Weekly creative planning"],
    feature: true,
  },
  {
    name: "Partner", for: "For agencies that need a creative department", flag: "",
    features: ["Custom monthly output", "Multi-brand support", "Static, motion, video", "Slack / async workflow", "Creative strategy support"],
    feature: false,
  },
];

export function Pricing() {
  return (
    <section className="section" id="pricing">
      <Reveal className="section__head">
        <p className="eyebrow">Pricing</p>
        <h2 className="section__title">Subscribe, request, ship. Pause anytime.</h2>
        <p className="section__sub">Creative output without the agency theater. Founding-partner pricing while the first spots are open.</p>
      </Reveal>
      <Reveal as="div" className="plans" stagger>
        {PLANS.map((p) => (
          <RevealItem as="article" className={`plan${p.feature ? " plan--feature" : ""}`} key={p.name}>
            {p.flag && <span className="plan__flag">{p.flag}</span>}
            <h3>{p.name}</h3>
            <p className="plan__for">{p.for}</p>
            <div className="plan__price">Founding partner <span>/ pricing</span></div>
            <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <StartHere className={`${p.feature ? "btn--primary" : "btn--ghost"} btn--block`} />
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
