import { Reveal, RevealItem } from "../components/Reveal";
import { Eyebrow } from "../components/Eyebrow";
import { StartHere, SkipCall } from "../components/Button";

/* Dedicated portfolio page, reached from the "Portfolio" nav tab.
   EZRA: drop real statics in by replacing the .workcard__vis block with an
   <img> (put files in angle-app/public/work/). Keep "Angle used" honest,    it's the creative thesis, not a results claim. */
const WORK: { cat: string; vis: string; title: string; format: string; goal: string; angle: string }[] = [
  { cat: "Meta static", vis: "y", title: "Proof-first feed static", format: "4:5 · Feed", goal: "Lower CPA", angle: "Pain Point → Proof" },
  { cat: "Ecommerce offer ad", vis: "", title: "Bundle offer creative", format: "1:1 · Feed", goal: "Raise AOV", angle: "Offer Stack" },
  { cat: "Agency client creative", vis: "ink", title: "Founder talking-head cut", format: "9:16 · Reels", goal: "New audience", angle: "Founder POV" },
  { cat: "Motion concept", vis: "", title: "Animated stat reveal", format: "1:1 · Feed", goal: "Hook rate", angle: "Before / After" },
  { cat: "Hook test", vis: "y", title: "Five-hook batch", format: "9:16 · Story", goal: "Find the hook", angle: "Objection Crusher" },
  { cat: "Carousel concept", vis: "ink", title: "Swipe-to-offer carousel", format: "1:1 · 5 frames", goal: "Considered buy", angle: "Step-by-step" },
];

export function PortfolioPage() {
  return (
    <section className="section portfolio">
      <Reveal className="section__head section__head--center portfolio__head">
        <Eyebrow>The Work</Eyebrow>
        <h1 className="section__title section__title--xl">Ad concepts built<br />to be tested.</h1>
        <p className="section__sub">Example concepts shown as placeholders while the founding roster fills. Every piece is one clear angle, made to earn its spend, not a brand-book showpiece.</p>
      </Reveal>

      <Reveal as="div" className="work" stagger>
        {WORK.map((w) => (
          <RevealItem as="article" className="workcard" key={w.title}>
            <div className={`workcard__vis${w.vis ? " workcard__vis--" + w.vis : ""}`}>
              <span className="workcard__cat">{w.cat}</span>
              <span className="workcard__ph">Demo · in production</span>
            </div>
            <div className="workcard__body">
              <h3>{w.title}</h3>
              <div className="workcard__row"><span>{w.format}</span><span>Goal · {w.goal}</span></div>
              <div className="workcard__angle"><span className="workcard__angle-k">Angle used</span> <b>{w.angle}</b></div>
            </div>
          </RevealItem>
        ))}
      </Reveal>

      <Reveal className="portfolio__cta">
        <h2 className="portfolio__cta-title">Want ads like these in your account?</h2>
        <div className="portfolio__cta-row">
          <StartHere className="btn--dark btn--lg" />
          <SkipCall className="btn--light btn--lg">Skip the call, go to intake</SkipCall>
        </div>
      </Reveal>
    </section>
  );
}
