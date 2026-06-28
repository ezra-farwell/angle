import { Reveal, RevealItem } from "./Reveal";

const OFFERS: [string, string, string][] = [
  ["STATIC", "Static ad creatives", "The workhorses. Clean, on-brand, built to test a specific angle."],
  ["HYBRID", "Motion / static hybrids", "Subtle movement on a static base to stop the scroll without a full edit."],
  ["VIDEO", "Short-form video edits", "Hook-first cuts from your raw clips, UGC, or existing footage."],
  ["ANGLES", "Hook & angle variations", "One idea, many framings. Pain point, proof, offer, founder POV."],
  ["CAROUSEL", "Carousel ads", "Multi-frame sequences that earn the swipe and land the offer."],
  ["CTA", "Offer & CTA variations", "Same creative, different ask. Test the offer, not just the art."],
  ["REFRESH", "Creative refreshes", "Reskin winners before they fatigue so spend keeps scaling."],
  ["SCREENSHOT", "Landing & product screenshot ads", "Native-feeling ads from your site, app, or product shots."],
  ["COPY", "Ad copy overlays", "On-image copy and headline tests written for the feed."],
  ["QUEUE", "Weekly creative queue", "A running request board so the next batch is always moving."],
];

export function WhatYouGet() {
  return (
    <section className="section" id="offer">
      <Reveal className="section__head">
        <p className="eyebrow">What you get</p>
        <h2 className="section__title">Everything your ad account keeps asking for.</h2>
        <p className="section__sub">One subscription, the whole creative surface area. Request what the account needs this week, get it test-ready the next.</p>
      </Reveal>
      <Reveal as="div" className="offers" stagger>
        {OFFERS.map(([label, title, body]) => (
          <RevealItem className="offer" key={title}>
            <span className="offer__label">{label}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
