const ITEMS = [
  "STATIC ADS", "MOTION ADS", "UGC EDITS", "HOOK TESTING", "META CREATIVE",
  "LANDING PAGE CROPS", "CAROUSELS", "CREATIVE ANGLES", "WEEKLY OUTPUT",
];

export function Marquee() {
  const row = (
    <>
      {ITEMS.map((t) => (<span key={t}>{t}<i>·</i></span>))}
    </>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <span style={{ display: "inline-flex" }}>{row}</span>
        <span style={{ display: "inline-flex" }}>{row}</span>
      </div>
    </div>
  );
}
