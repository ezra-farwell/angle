import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, amount: 0.2 } as const;

const parent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.03 } } };
const item: Variants = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } };

type Tag = "div" | "section" | "ul" | "ol";
type ItemTag = "div" | "li" | "article" | "figure";

export function Reveal({ children, className, as = "div", stagger = false }: { children: ReactNode; className?: string; as?: Tag; stagger?: boolean }) {
  const reduce = useReducedMotion();
  if (reduce) { const P = as as any; return <P className={className}>{children}</P>; }
  const C = motion[as];
  return (
    <C className={className} variants={stagger ? parent : item} initial="hidden" whileInView="show" viewport={VIEWPORT}>
      {children}
    </C>
  );
}

export function RevealItem({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: ItemTag }) {
  const reduce = useReducedMotion();
  if (reduce) { const P = as as any; return <P className={className}>{children}</P>; }
  const C = motion[as];
  return <C className={className} variants={item}>{children}</C>;
}
