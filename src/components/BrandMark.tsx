export function BrandMark({ size = 28 }: { size?: number }) {
  return (
    <svg className="brand__mark" viewBox="0 0 28 28" width={size} height={size} aria-hidden="true">
      <path d="M4 24 L24 24 M4 24 L20 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 24 A 12 12 0 0 1 9.2 14.3" fill="none" stroke="var(--signal)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
