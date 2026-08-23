import { Navigation } from "@/components/common/Navigation";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[60] -translate-y-20 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform focus:translate-y-0"
      >
        본문으로 건너뛰기
      </a>
      <Navigation />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen overflow-x-clip bg-background"
      >
        <Outlet />
      </main>
    </>
  ),
});
