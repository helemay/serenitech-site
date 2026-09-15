import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/technology")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "technology", replace: true });
  },
});
