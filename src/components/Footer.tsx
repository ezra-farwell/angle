import { BrandMark } from "./BrandMark";
import { StartHere, SkipCall } from "./Button";
import { Link } from "../lib/router";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cta">
        <h2 className="footer__big">Your next angle,<br />shipped weekly.</h2>
        <div className="footer__cta-row">
          <StartHere className="btn--dark btn--lg" />
          <SkipCall className="btn--light btn--lg">I hate calls</SkipCall>
        </div>
      </div>

      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="brand"><BrandMark size={24} /><span className="brand__word">Angle</span></Link>
          <p className="footer__tag">More ads worth testing. Creative output without the agency theater.</p>
        </div>
        <div className="footer__col">
          <h4>Site</h4>
          <Link to="/#why">Why Angle</Link>
          <Link to="/#offer">What you get</Link>
          <Link to="/#process">Process</Link>
          <Link to="/#pricing">Pricing</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/#faq">FAQ</Link>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <a href="mailto:hello@getangle.co">hello@getangle.co</a>
          <Link to="/#contact">Send a message</Link>
        </div>
      </div>
      <div className="footer__base">
        <span>© {new Date().getFullYear()} Angle · getangle.co</span>
        <span>Static, motion & short-form creative — shipped weekly.</span>
      </div>
    </footer>
  );
}
