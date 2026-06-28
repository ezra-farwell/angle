import { Reveal, RevealItem } from "./Reveal";

const POINTS: [string, string, string][] = [
  ["CONVERTING", "Built on what already wins", "We start from your best-performing ads and build the next angle off them, not from a moodboard."],
  ["FAST", "Weekly creative cycles", "A steady cadence of test-ready ads so the account never runs dry mid-scale."],
  ["PERFORMANCE", "Performance-minded design", "Hooks, offers, and first-three-seconds first. Pretty is a side effect, not the goal."],
  ["ASYNC", "Async request workflow", "Drop requests on your schedule. No standing meetings, no account-manager relay."],
  ["NO THEATER", "No bloated agency theater", "No retainers for slide decks. You pay for creative that ships, not process."],
  ["FOR BUYERS", "Made for media buyers", "Useful to agency owners, in-house buyers, and ecom teams actually spending the budget."],
];

export function WhyAngle() {
  return (
    <section className="section" id="why">
      <Reveal className="section__head">
        <p className="eyebrow">Why Angle</p>
        <h2 className="section__title">Built for people who actually buy media.</h2>
        <p className="section__sub">Not a brand agency. Not a freelancer marketplace. A creative engine pointed at the auction.</p>
      </Reveal>
      <Reveal as="div" className="cards cards--3" stagger>
        {POINTS.map(([label, title, body]) => (
          <RevealItem as="article" className="card" key={title}>
            <span className="tag card__label">{label}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
