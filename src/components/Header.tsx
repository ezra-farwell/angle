import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";
import { StartHere } from "./Button";
import { Link, useRouter } from "../lib/router";

/* Section links resolve to the home page first, then scroll to the anchor.
   "Portfolio" is a real route to its own page. */
const LINKS: [string, string][] = [
  ["Why Angle", "/#why"],
  ["What you get", "/#offer"],
  ["Process", "/#process"],
  ["Pricing", "/#pricing"],
  ["Portfolio", "/portfolio"],
  ["FAQ", "/#faq"],
];

export function Header() {
  const { path } = useRouter();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) =>
    href === "/portfolio" && path.replace(/\/$/, "") === "/portfolio";

  return (
    <header className={`header${stuck ? " is-stuck" : ""}`} id="top">
      <div className="header__bar">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <BrandMark size={26} />
          <span className="brand__word">Angle</span>
        </Link>
        <nav className="header__nav" aria-label="Primary">
          {LINKS.map(([label, href]) => (
            <Link key={href} to={href} className={isActive(href) ? "is-active" : ""}>{label}</Link>
          ))}
        </nav>
        <div className="header__cta"><StartHere className="btn--dark btn--sm" /></div>
        <button className="header__burger" aria-label="Open menu" onClick={() => setOpen(true)}><span /></button>
      </div>

      {open && (
        <div className="mobile" role="dialog" aria-modal="true">
          <div className="mobile__top">
            <span className="brand"><BrandMark size={26} /><span className="brand__word">Angle</span></span>
            <button className="mobile__close" aria-label="Close menu" onClick={() => setOpen(false)}>Close</button>
          </div>
          <nav className="mobile__links">
            {LINKS.map(([label, href]) => (
              <Link key={href} to={href} onClick={() => setOpen(false)}>{label}</Link>
            ))}
          </nav>
          <div className="mobile__cta" onClick={() => setOpen(false)}><StartHere className="btn--dark btn--lg btn--block" /></div>
        </div>
      )}
    </header>
  );
}
