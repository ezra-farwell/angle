// ============================================================
// Angle, conversion link config
// Replace the two placeholders below with your real links.
// Every "Start Here" CTA uses CALENDLY_URL.
// Every "Skip the call" / Typeform CTA uses TYPEFORM_URL.
// ============================================================

export const CALENDLY_URL = "[PASTE_CALENDLY_LINK_HERE]";
export const TYPEFORM_URL = "[PASTE_TYPEFORM_LINK_HERE]";

// True until the real links are pasted in. Used to warn in the console
// and to avoid opening a junk tab when a CTA is clicked with a placeholder.
export const isPlaceholder = (url: string) => url.startsWith("[PASTE_");
