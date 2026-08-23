import { Link } from "@tanstack/react-router";

export const Logo = ({ onNavigate }: { onNavigate?: () => void }) => (
  <Link
    to="/"
    activeOptions={{ exact: true }}
    onClick={onNavigate}
    aria-label="enc2586 홈"
    className="flex items-center gap-2 rounded-full pr-2 text-lg font-bold outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-primary/60"
  >
    <img src="/favicon.ico" alt="" className="size-7" aria-hidden="true" />
    <span>enc2586</span>
  </Link>
);
