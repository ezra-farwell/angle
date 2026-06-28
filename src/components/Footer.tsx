import { BrandMark } from "./BrandMark";
import { StartHere, SkipCall } from "./Button";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <span className="brand"><BrandMark size={24} /><span className="brand__word">Angle</span></span>
          <p className="footer__tag">More ads worth testing. Your next angle, shipped weekly.</p>
          <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <StartHere className="btn--primary btn--sm" />
            <SkipCall className="btn--ghost btn--sm" />
          </div>
        </div>
        <div className="footer__col">
          <h4>Site</h4>
          <a href="#why">Why Angle</a>
          <a href="#offer">What you get</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <a href="mailto:hello@getangle.co">hello@getangle.co</a>
          <a href="#contact">Send a message</a>
        </div>
      </div>
      <div className="footer__base">
        <span>© {new Date().getFullYear()} Angle · getangle.co</span>
        <span>Static creative, shipped weekly.</span>
      </div>
    </footer>
  );
}
