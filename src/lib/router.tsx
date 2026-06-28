import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

/* Tiny dependency-free router (History API).
   Routes: "/" (home) and "/portfolio". Anchor links like "/#pricing" still
   work for in-page scrolling on the home page. */

type Ctx = { path: string; navigate: (to: string) => void };
const RouterCtx = createContext<Ctx>({ path: "/", navigate: () => {} });

function scrollToHash(hash: string) {
  if (!hash) { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); return; }
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => window.location.pathname || "/");

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || "/");
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  function navigate(to: string) {
    const url = new URL(to, window.location.origin);
    const samePage = url.pathname === window.location.pathname;

    if (url.pathname !== window.location.pathname) {
      window.history.pushState({}, "", url.pathname + url.hash);
      setPath(url.pathname);
      // let the new page mount, then honor any hash target
      requestAnimationFrame(() => scrollToHash(url.hash));
    } else if (url.hash) {
      if (window.location.hash !== url.hash) window.history.replaceState({}, "", url.pathname + url.hash);
      scrollToHash(url.hash);
    } else if (samePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return <RouterCtx.Provider value={{ path, navigate }}>{children}</RouterCtx.Provider>;
}

export function useRouter() {
  return useContext(RouterCtx);
}

/* Drop-in link. Intercepts left-clicks for internal navigation,
   falls back to default behavior for modified clicks / external URLs. */
export function Link({
  to, className, children, onClick,
}: { to: string; className?: string; children: ReactNode; onClick?: () => void }) {
  const { navigate } = useRouter();
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        navigate(to);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
