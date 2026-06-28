import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { SkipCall, StartHere } from "./Button";

type Errors = { name?: string; email?: string; message?: string };

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function set(k: keyof typeof values, v: string) {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  }

  function validate(): boolean {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Your name, please.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) e.email = "A valid email helps us reply.";
    if (values.message.trim().length < 5) e.message = "Tell us what you need built.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;

    // TODO(backend): POST `values` to the real contact endpoint here, e.g.
    //   await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) })
    // No backend is wired yet, so we surface a clearly-labeled demo success
    // state instead of pretending the message was delivered.
    // eslint-disable-next-line no-console
    console.log("[Angle] contact form submission (not sent — no backend):", values);
    setSent(true);
  }

  return (
    <section className="section" id="contact">
      <div className="contact__grid">
        <Reveal>
          <p className="eyebrow">Start here</p>
          <h2 className="section__title">Start with a message. Or skip the small talk.</h2>
          <p className="section__sub">Tell me what you need built, or jump straight into the intake form if you already know you need more ads.</p>
          <ul className="contact__list">
            <li><span className="ck" />Built for the teams spending the money</li>
            <li><span className="ck" />First creative cycle mapped on the call</li>
            <li><span className="ck" />No commitment to send a message</li>
          </ul>
          <div style={{ marginTop: 28 }}><StartHere className="btn--primary btn--lg" /></div>
        </Reveal>

        <Reveal>
          <form className="formcard" onSubmit={onSubmit} noValidate>
            <div className={`field${errors.name ? " field--err" : ""}`}>
              <label htmlFor="c-name">Name</label>
              <input id="c-name" name="name" autoComplete="name" value={values.name} onChange={(e) => set("name", e.target.value)} />
              {errors.name && <span className="field__msg">{errors.name}</span>}
            </div>
            <div className={`field${errors.email ? " field--err" : ""}`}>
              <label htmlFor="c-email">Email</label>
              <input id="c-email" name="email" type="email" autoComplete="email" value={values.email} onChange={(e) => set("email", e.target.value)} />
              {errors.email && <span className="field__msg">{errors.email}</span>}
            </div>
            <div className={`field${errors.message ? " field--err" : ""}`}>
              <label htmlFor="c-message">What do you need built?</label>
              <textarea id="c-message" name="message" value={values.message} onChange={(e) => set("message", e.target.value)} placeholder="What are you running, what's converting now, what you want more of" />
              {errors.message && <span className="field__msg">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn--primary btn--block">Submit Message</button>

            {sent ? (
              <p className="formok">Got it — message captured. <strong>Demo state:</strong> no backend is connected yet, so this wasn't delivered. We'll wire the endpoint before launch.</p>
            ) : (
              <p className="formnote">Pending backend integration — see the TODO in Contact.tsx to connect the endpoint.</p>
            )}

            <div className="skip">
              <p>Hate calls? <b>Skip the small talk</b> and fill the intake form directly.</p>
              <SkipCall className="btn--ghost btn--sm">I hate calls →</SkipCall>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
