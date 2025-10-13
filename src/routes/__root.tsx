import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Navigation } from "../components/common/Navigation";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-16">
        <Outlet />
      </main>
    </>
  ),
});
