import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";
import { StartHere } from "./Button";

const LINKS: [string, string][] = [
  ["Why Angle", "#why"],
  ["What you get", "#offer"],
  ["Process", "#process"],
  ["Pricing", "#pricing"],
  ["Portfolio", "#portfolio"],
  ["FAQ", "#faq"],
];

export function Header() {
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

  return (
    <header className={`header${stuck ? " is-stuck" : ""}`} id="top">
      <div className="header__inner">
        <a href="#top" className="brand" aria-label="Angle home">
          <BrandMark size={28} />
          <span className="brand__word">Angle</span>
        </a>
        <nav className="header__nav" aria-label="Primary">
          {LINKS.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="header__cta"><StartHere /></div>
        <button className="header__burger" aria-label="Open menu" onClick={() => setOpen(true)}><span /></button>
      </div>

      {open && (
        <div className="mobile" role="dialog" aria-modal="true">
          <div className="mobile__top">
            <span className="brand"><BrandMark size={26} /><span className="brand__word">Angle</span></span>
            <button className="mobile__close" aria-label="Close menu" onClick={() => setOpen(false)}>ESC</button>
          </div>
          <nav className="mobile__links">
            {LINKS.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          </nav>
          <div className="mobile__cta" onClick={() => setOpen(false)}><StartHere className="btn--primary btn--lg btn--block" /></div>
        </div>
      )}
    </header>
  );
}
