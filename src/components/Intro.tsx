import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/* "Hello!" statement with floating service pills (Hanzo signature). */
const PILLS: { label: string; color: string; pos: string }[] = [
  { label: "Static ads", color: "#FF8A3D", pos: "intro__pill--1" },
  { label: "UGC edits", color: "#7C5CFF", pos: "intro__pill--2" },
  { label: "Hook testing", color: "#19C37D", pos: "intro__pill--3" },
  { label: "Motion ads", color: "#FFC400", pos: "intro__pill--4" },
  { label: "Carousels", color: "#FF4D8D", pos: "intro__pill--5" },
  { label: "Creative angles", color: "#3B9BFF", pos: "intro__pill--6" },
];

export function Intro() {
  return (
    <section className="section intro">
      <Reveal>
        <Eyebrow>Hello!</Eyebrow>
      </Reveal>
      <div className="intro__stage">
        {PILLS.map((p) => (
          <span key={p.label} className={`intro__pill ${p.pos}`}>
            <span className="intro__pill-ico" style={{ background: p.color }} />
            {p.label}
          </span>
        ))}
        <Reveal>
          <h2 className="intro__statement">
            We build the ads your media buyer keeps asking for, shaped around what is{" "}
            <em>already converting</em>, and shipped every single week.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
