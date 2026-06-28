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

/* Generic motion link/button used across the site. */
export function Btn({
  href,
  onClick,
  children,
  className = "",
  external,
}: {
  href?: string;
  onClick?: (e: MouseEvent) => void;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const reduce = useReducedMotion();
  const common = { className: `btn ${className}`, whileTap: reduce ? undefined : press } as const;
  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...common}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button type="button" onClick={onClick} {...common}>
      {children}
    </motion.button>
  );
}

/* Every "Start Here" CTA → Calendly. */
export function StartHere({ className = "btn--primary", children = "Start Here" }: { className?: string; children?: ReactNode }) {
  return (
    <Btn href={CALENDLY_URL} external onClick={(e) => openExternal(CALENDLY_URL, e)} className={className}>
      {children}
    </Btn>
  );
}

/* Skip-the-call CTA → Typeform. */
export function SkipCall({ className = "btn--ghost", children = "Skip the call →" }: { className?: string; children?: ReactNode }) {
  return (
    <Btn href={TYPEFORM_URL} external onClick={(e) => openExternal(TYPEFORM_URL, e)} className={className}>
      {children}
    </Btn>
  );
}
