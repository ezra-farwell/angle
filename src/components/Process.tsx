import { Reveal, RevealItem } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

const STEPS: [string, string, string][] = [
  ["1", "Start", "Book a call, send context, and we map the first creative cycle around what your account is already running."],
  ["2", "Request", "Send winning ads, competitor examples, product pages, raw clips, offers, or rough ideas. Async, no meetings required."],
  ["3", "Ship", "Get test-ready ads every week with quick revisions and organized delivery, ready to drop straight into Meta."],
];

export function Process() {
  return (
    <section className="section" id="process">
      <Reveal className="section__head section__head--center">
        <Eyebrow>Our Process, Explained</Eyebrow>
        <h2 className="section__title">Here's how it works</h2>
      </Reveal>

      <Reveal as="div" className="flow" stagger>
        {/* squiggle connectors (decorative, desktop only) */}
        <svg className="flow__wire flow__wire--a" viewBox="0 0 120 80" fill="none" aria-hidden="true">
          <path d="M4 70 C 40 70, 30 10, 90 14" stroke="var(--signal-line)" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 7" />
          <circle cx="4" cy="70" r="4" fill="none" stroke="var(--signal-line)" strokeWidth="2" />
          <circle cx="92" cy="14" r="4" fill="none" stroke="var(--signal-line)" strokeWidth="2" />
        </svg>
        <svg className="flow__wire flow__wire--b" viewBox="0 0 120 80" fill="none" aria-hidden="true">
          <path d="M6 18 C 50 30, 30 78, 96 66" stroke="var(--signal-line)" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 7" />
          <circle cx="6" cy="18" r="4" fill="none" stroke="var(--signal-line)" strokeWidth="2" />
          <circle cx="96" cy="66" r="4" fill="none" stroke="var(--signal-line)" strokeWidth="2" />
        </svg>

        {STEPS.map(([n, title, body], i) => (
          <RevealItem as="article" className={`flowcard flowcard--${i + 1}`} key={n}>
            <span className="flowcard__n">{n}</span>
            <div className="flowcard__body">
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </RevealItem>
        ))}
      </Reveal>

      <p className="process__note">Meetings are optional. <em>Momentum is not.</em></p>
    </section>
  );
}
