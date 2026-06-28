/* Serif-italic eyebrow flanked by thin rules — the Hanzo section marker.
   align="center" gives rules on both sides; "left" gives a trailing rule. */
export function Eyebrow({ children, align = "center" }: { children: string; align?: "center" | "left" }) {
  return (
    <p className={`eyebrow eyebrow--${align}`}>
      <span className="eyebrow__rule" />
      <i>{children}</i>
      <span className="eyebrow__rule" />
    </p>
  );
}
