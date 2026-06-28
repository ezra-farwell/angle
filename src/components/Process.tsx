import { Reveal, RevealItem } from "./Reveal";

const STEPS: [string, string, string][] = [
  ["01", "Start", "Book a call, send context, and we map the first creative cycle around what your account is already running."],
  ["02", "Request", "Send winning ads, competitor examples, product pages, raw clips, offers, or rough ideas. Async, no meetings required."],
  ["03", "Ship", "Get test-ready ads every week with quick revisions and organized delivery, ready to drop straight into Meta."],
];

export function Process() {
  return (
    <section className="section" id="process">
      <Reveal className="section__head">
        <p className="eyebrow">How it works</p>
        <h2 className="section__title">Three steps. Then ads, every week.</h2>
        <p className="section__sub">Your next angle, shipped weekly. No onboarding maze, no account-manager relay race.</p>
      </Reveal>
      <Reveal as="div" className="steps" stagger>
        {STEPS.map(([n, title, body]) => (
          <RevealItem as="article" className="step" key={n}>
            <span className="step__n">Step<b>{n}</b></span>
            <h3>{title}</h3>
            <p>{body}</p>
          </RevealItem>
        ))}
      </Reveal>
      <p className="process__note">Meetings are optional. <b>Momentum is not.</b></p>
    </section>
  );
}
