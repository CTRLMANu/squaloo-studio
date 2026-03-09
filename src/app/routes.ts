import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import HueOfYear from "./pages/HueOfYear";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import RootLayout from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "hue-of-year",
        Component: HueOfYear,
      },
      {
        path: "hue-of-year/privacy",
        Component: Privacy,
      },
      {
        path: "hue-of-year/support",
        Component: Support,
      },
    ],
  },
]);