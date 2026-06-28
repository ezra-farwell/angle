import { Reveal, RevealItem } from "./Reveal";
import { SkipCall } from "./Button";

/* EZRA: placeholder work cards. Drop real statics in by replacing the
   .workcard__vis block with an <img> (put files in angle-app/public/work/).
   Keep "Angle used" honest — it's the creative thesis, not a results claim. */
const WORK: { cat: string; vis: string; title: string; format: string; goal: string; angle: string }[] = [
  { cat: "Meta static", vis: "y", title: "Proof-first feed static", format: "4:5 · Feed", goal: "Lower CPA", angle: "Pain Point → Proof" },
  { cat: "Ecommerce offer ad", vis: "", title: "Bundle offer creative", format: "1:1 · Feed", goal: "Raise AOV", angle: "Offer Stack" },
  { cat: "Agency client creative", vis: "ink", title: "Founder talking-head cut", format: "9:16 · Reels", goal: "New audience", angle: "Founder POV" },
  { cat: "Motion concept", vis: "", title: "Animated stat reveal", format: "1:1 · Feed", goal: "Hook rate", angle: "Before / After" },
  { cat: "Hook test", vis: "y", title: "Five-hook batch", format: "9:16 · Story", goal: "Find the hook", angle: "Objection Crusher" },
  { cat: "Carousel concept", vis: "ink", title: "Swipe-to-offer carousel", format: "1:1 · 5 frames", goal: "Considered buy", angle: "Offer Stack" },
];

export function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <Reveal className="section__head">
        <p className="eyebrow">Selected work</p>
        <h2 className="section__title">Just the ads.</h2>
        <p className="section__sub">Example concepts shown as placeholders. Real client work drops in here — every piece is one clear angle, built to be tested.</p>
      </Reveal>
      <Reveal as="div" className="work" stagger>
        {WORK.map((w) => (
          <RevealItem as="article" className="workcard" key={w.title}>
            <div className={`workcard__vis${w.vis ? " workcard__vis--" + w.vis : ""}`}>
              <span className="workcard__ph">Demo · in production</span>
              <span className="workcard__cat">{w.cat}</span>
            </div>
            <div className="workcard__body">
              <h3>{w.title}</h3>
              <div className="workcard__row"><span>{w.format}</span><span>Goal: {w.goal}</span></div>
              <div className="workcard__angle"><span className="mono" style={{ margin: 0 }}>Angle used</span> <b>{w.angle}</b></div>
            </div>
          </RevealItem>
        ))}
      </Reveal>
      <div style={{ marginTop: 28, display: "flex", justifyContent: "center" }}>
        <SkipCall className="btn--ghost">Skip the call — go to intake →</SkipCall>
      </div>
    </section>
  );
}
