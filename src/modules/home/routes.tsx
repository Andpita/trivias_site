import Home from ".";
import { NotFound } from "./screens/NotFound";

export const HomeRoute = [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
];
