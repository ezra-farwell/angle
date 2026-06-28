import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { CALENDLY_URL, TYPEFORM_URL, isPlaceholder } from "../lib/config";

const press = { scale: 0.97 };

function openExternal(url: string, e: MouseEvent) {
  if (isPlaceholder(url)) {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.warn(`[Angle] Link not configured yet: ${url}. Set it in src/lib/config.ts`);
    return;
  }
  // real URL: let the anchor open it in a new tab
}

export function Arrow() {
  return (
    <svg className="btn__arrow" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Generic motion link/button used across the site. Hanzo-style pill. */
export function Btn({
  href,
  onClick,
  children,
  className = "",
  external,
  arrow = false,
}: {
  href?: string;
  onClick?: (e: MouseEvent) => void;
  children: ReactNode;
  className?: string;
  external?: boolean;
  arrow?: boolean;
}) {
  const reduce = useReducedMotion();
  const common = { className: `btn ${className}`, whileTap: reduce ? undefined : press } as const;
  const content = <>{children}{arrow && <Arrow />}</>;
  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...common}
      >
        {content}
      </motion.a>
    );
  }
  return (
    <motion.button type="button" onClick={onClick} {...common}>
      {content}
    </motion.button>
  );
}

/* Every "Start Here" CTA → Calendly. Black pill by default (Hanzo style). */
export function StartHere({ className = "btn--dark", children = "Start Here", arrow = true }: { className?: string; children?: ReactNode; arrow?: boolean }) {
  return (
    <Btn href={CALENDLY_URL} external arrow={arrow} onClick={(e) => openExternal(CALENDLY_URL, e)} className={className}>
      {children}
    </Btn>
  );
}

/* Skip-the-call CTA → Typeform. */
export function SkipCall({ className = "btn--light", children = "Skip the call", arrow = true }: { className?: string; children?: ReactNode; arrow?: boolean }) {
  return (
    <Btn href={TYPEFORM_URL} external arrow={arrow} onClick={(e) => openExternal(TYPEFORM_URL, e)} className={className}>
      {children}
    </Btn>
  );
}
