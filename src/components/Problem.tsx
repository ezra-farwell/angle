import { Reveal, RevealItem } from "./Reveal";

const CARDS: [string, string, string][] = [
  ["NOT ENOUGH", "Output can't keep up", "You know what needs testing. You just can't get enough creative made to actually test it."],
  ["TOO SLOW", "Designers aren't performance-minded", "Pretty work that ignores hooks, offers, and what your account already proved converts."],
  ["WRONG FIT", "Editors don't get hooks", "Video people who polish the wrong three seconds while the scroll-stopper goes missing."],
  ["EXPENSIVE", "Hiring is slow and pricey", "A full-time creative is months of ramp and fixed capacity. Agencies are theater and retainers."],
];

export function Problem() {
  return (
    <section className="section" id="problem">
      <Reveal className="section__head">
        <p className="eyebrow">The bottleneck</p>
        <h2 className="section__title">Your media buying is ready. Your creative pipeline is not.</h2>
        <p className="section__sub">Built for the teams spending the money. The constraint is rarely budget. It's how many new angles you can actually put in the auction each week.</p>
      </Reveal>
      <Reveal as="div" className="cards cards--2" stagger>
        {CARDS.map(([label, title, body]) => (
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
