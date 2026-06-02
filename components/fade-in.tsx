// Deprecated — animations are now CSS-only for performance.
// Kept as pass-through to avoid import errors during transition.
export function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string; [key: string]: unknown }) {
  return <div className={className}>{children}</div>
}
