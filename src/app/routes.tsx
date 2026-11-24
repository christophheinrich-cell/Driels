import { createBrowserRouter } from "react-router";
import { Layout } from "./components";
import { ContactPage, HomePage, NotFoundPage, ProjectPage, ServicesPage, StudioPage, WorkPage } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "work", Component: WorkPage },
      { path: "work/:slug", Component: ProjectPage },
      { path: "services", Component: ServicesPage },
      { path: "studio", Component: StudioPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
