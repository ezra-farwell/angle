import { Reveal, RevealItem } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

const OFFERS: [string, string][] = [
  ["Static ad creatives", "The workhorses. Clean, on-brand, built to test a specific angle."],
  ["Motion / static hybrids", "Subtle movement on a static base to stop the scroll without a full edit."],
  ["Short-form video edits", "Hook-first cuts from your raw clips, UGC, or existing footage."],
  ["Hook & angle variations", "One idea, many framings. Pain point, proof, offer, founder POV."],
  ["Carousel ads", "Multi-frame sequences that earn the swipe and land the offer."],
  ["Offer & CTA variations", "Same creative, different ask. Test the offer, not just the art."],
  ["Creative refreshes", "Reskin winners before they fatigue so spend keeps scaling."],
  ["Screenshot & product ads", "Native-feeling ads from your site, app, or product shots."],
  ["Ad copy overlays", "On-image copy and headline tests written for the feed."],
  ["Weekly creative queue", "A running request board so the next batch is always moving."],
];

export function WhatYouGet() {
  return (
    <section className="section" id="offer">
      <Reveal className="section__head section__head--center">
        <Eyebrow>What You Get</Eyebrow>
        <h2 className="section__title">Everything your ad account<br />keeps asking for.</h2>
        <p className="section__sub">One subscription, the whole creative surface area. Request what the account needs this week, get it test-ready the next.</p>
      </Reveal>
      <Reveal as="div" className="offers" stagger>
        {OFFERS.map(([title, body], i) => (
          <RevealItem className="offer" key={title}>
            <span className="offer__dot" aria-hidden="true" />
            <h3>{title}</h3>
            <p>{body}</p>
            <span className="offer__ix">{String(i + 1).padStart(2, "0")}</span>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
