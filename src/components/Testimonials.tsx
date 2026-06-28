import { Reveal, RevealItem } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

/* Placeholder testimonials. No fake names, brands, or results.
   EZRA: replace the quote text and role once you have real ones. */
const QUOTES: [string, string][] = [
  ["Replace with a real client quote — what changed once the creative actually kept up.", "Agency Owner"],
  ["Replace with a real client quote — speed, output, or a winning angle worth naming.", "Media Buyer"],
  ["Replace with a real client quote — the before/after of shipping ads every week.", "DTC Founder"],
];

export function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <Reveal className="section__head section__head--center">
        <Eyebrow>What Partners Say</Eyebrow>
        <h2 className="section__title">Proof goes here</h2>
        <p className="section__sub">Real quotes from real partners drop in as the founding spots fill. Honest placeholders for now.</p>
      </Reveal>
      <Reveal as="div" className="grid grid--3" stagger>
        {QUOTES.map(([text, role], i) => (
          <RevealItem as="figure" className="quote" key={i}>
            <span className="quote__mark">&ldquo;</span>
            <blockquote>{text}</blockquote>
            <figcaption className="quote__who">
              <span className="quote__av" aria-hidden="true" />
              <span className="quote__role">{role}</span>
            </figcaption>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
