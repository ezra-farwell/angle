import { Reveal, RevealItem } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

const POINTS: [string, string][] = [
  ["Built on what already wins", "We start from your best-performing ads and build the next angle off them, not from a moodboard."],
  ["Weekly creative cycles", "A steady cadence of test-ready ads so the account never runs dry mid-scale."],
  ["Performance-minded design", "Hooks, offers, and first-three-seconds first. Pretty is a side effect, not the goal."],
  ["Async request workflow", "Drop requests on your schedule. No standing meetings, no account-manager relay."],
  ["No bloated agency theater", "No retainers for slide decks. You pay for creative that ships, not process."],
  ["Made for media buyers", "Useful to agency owners, in-house buyers, and ecom teams actually spending the budget."],
];

export function WhyAngle() {
  return (
    <section className="section" id="why">
      <Reveal className="section__head section__head--center">
        <Eyebrow>Why Angle</Eyebrow>
        <h2 className="section__title">Built for people who<br />actually buy media.</h2>
        <p className="section__sub">Not a brand agency. Not a freelancer marketplace. A creative engine pointed at the auction.</p>
      </Reveal>
      <Reveal as="div" className="grid grid--3" stagger>
        {POINTS.map(([title, body]) => (
          <RevealItem as="article" className="panel" key={title}>
            <span className="panel__tick" aria-hidden="true" />
            <h3>{title}</h3>
            <p>{body}</p>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
