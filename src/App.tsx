import type { Router as RemixRouter } from "@remix-run/router";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import { CelebrityRoute } from "./modules/celebrity/routes";
import { DayRoute } from "./modules/day/routes";
import { HistoryRoute } from "./modules/history/routes";
import { HomeRoute } from "./modules/home/routes";

const openRoutes: RouteObject[] = [
  ...HomeRoute,
  ...DayRoute,
  ...HistoryRoute,
  ...CelebrityRoute,
];

const routes: RemixRouter = createBrowserRouter([...openRoutes]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
