import { Reveal, RevealItem } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

const CARDS: [string, string][] = [
  ["Output can't keep up", "You know what needs testing. You just can't get enough creative made to actually test it."],
  ["Designers aren't performance-minded", "Pretty work that ignores hooks, offers, and what your account already proved converts."],
  ["Editors don't get hooks", "Video people who polish the wrong three seconds while the scroll-stopper goes missing."],
  ["Hiring is slow and pricey", "A full-time creative is months of ramp and fixed capacity. Agencies are theater and retainers."],
];

export function Problem() {
  return (
    <section className="section" id="problem">
      <Reveal className="section__head section__head--center">
        <Eyebrow>The Bottleneck</Eyebrow>
        <h2 className="section__title">Your media buying is ready.<br />Your creative pipeline is not.</h2>
        <p className="section__sub">The constraint is rarely budget. It's how many new angles you can actually put in the auction each week.</p>
      </Reveal>
      <Reveal as="div" className="grid grid--2" stagger>
        {CARDS.map(([title, body], i) => (
          <RevealItem as="article" className="panel panel--row" key={title}>
            <span className="panel__num">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
