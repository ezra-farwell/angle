import { Reveal, RevealItem } from "./Reveal";

/* Placeholder testimonials. No fake names, brands, or results.
   EZRA: replace the quote text and role once you have real ones. */
const QUOTES: [string, string][] = [
  ["Replace with real client quote.", "Agency Owner"],
  ["Replace with real client quote.", "Media Buyer"],
  ["Replace with real client quote.", "DTC Founder"],
];

export function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <Reveal className="section__head">
        <p className="eyebrow">Trusted by the people spending the money</p>
        <h2 className="section__title">Proof goes here.</h2>
        <p className="section__sub">Real quotes from real partners drop in as the founding spots fill. Placeholders shown for now.</p>
      </Reveal>
      <Reveal as="div" className="quotes" stagger>
        {QUOTES.map(([text, role], i) => (
          <RevealItem as="article" className="quote" key={i}>
            <div className="quote__mark">&ldquo;</div>
            <p>{text}</p>
            <div className="quote__who">
              <span className="quote__av" />
              <span className="quote__role">{role}</span>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
