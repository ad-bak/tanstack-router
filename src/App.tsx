import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { useRouterContextState } from "./lib/use-router-context-state";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    role: null,
    logout: () => {},
    login: () => {},
    isAdmin: false,
    isClient: false,
    isAuthenticated: false,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const routerContextState = useRouterContextState();
  return <RouterProvider router={router} context={routerContextState} />;
}

export default App;
