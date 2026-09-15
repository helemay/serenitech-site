import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sectors")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "sectors", replace: true });
  },
});
