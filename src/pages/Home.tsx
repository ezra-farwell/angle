import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { Intro } from "../components/Intro";
import { Problem } from "../components/Problem";
import { WhatYouGet } from "../components/WhatYouGet";
import { Process } from "../components/Process";
import { WhyAngle } from "../components/WhyAngle";
import { Pricing } from "../components/Pricing";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";

/* Homepage — Hanzo-style sections with Angle's content.
   No ad creative shown here; portfolio lives on its own /portfolio page. */
export function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <Problem />
      <WhatYouGet />
      <Process />
      <WhyAngle />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
