import { createRootRoute, Outlet } from "@tanstack/react-router";
import { GlobalHeader } from "../components/common/GlobalHeader";

export const Route = createRootRoute({
  component: () => (
    <>
      <GlobalHeader />
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  ),
});
