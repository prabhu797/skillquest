import { Navigate } from "react-router-dom";
import Loadable from "../components/loadable/Loadable";
import { lazy } from "react";
import RenderBasedOnUser from "../components/shared/protectedRoutes/RenderBasedOnUser";

/**
 * Dynamically imported layouts and components using React.lazy
 */
const FullLayout = Loadable(
  lazy(() => import("../layouts/FullLayout"))
);
const BlankLayout = Loadable(
  lazy(() => import("../layouts/BlankLayout"))
);
const CandidateHome = Loadable(
  lazy(() => import("../components/candidateView/home/Home"))
);
const HRHome = Loadable(lazy(() => import("../components/hrView/home/Home")));

const Login = Loadable(lazy(() => import("../components/shared/login/Login")));

const NotFound = Loadable(
  lazy(() => import("../components/shared/notFound/NotFound"))
);

// const EditTest = Loadable(
//   lazy(() => import("../components/views/tests/EditTest"))
// );
// const StartTest = Loadable(
//   lazy(() => import("../components/views/tests/StartTest"))
// );

/**
 * Defines the application's route configuration.
 *
 * @typedef {Object} Route
 * @property {string} path - The URL path for the route.
 * @property {JSX.Element} element - The React component to render for this route.
 * @property {Array<Route>} [children] - An optional array of child routes.
 *
 * @type {Route[]}
 */
const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      /** Redirects the root path to the Login page. */
      { path: "/", element: <Navigate to="/login" /> },

      {
        path: "/home",
        element: (
          <RenderBasedOnUser
            HrComponent={HRHome}
            CandidateComponent={CandidateHome}
          />
        ),
      },
      // {
      //   path: "/edit-test",
      //   element: (
      //     <RenderBasedOnUser
      //       HrComponent={EditTest}
      //       CandidateComponent={NotFound}
      //     />
      //   ),
      // },
      // {
      //   path: "/start-test",
      //   element: (
      //     <RenderBasedOnUser
      //       HrComponent={NotFound}
      //       CandidateComponent={StartTest}
      //     />
      //   ),
      // },

      /** Catch-all route for undefined paths, redirects to the 404 error page. */
      { path: "*", element: <Navigate to="/not_found" /> },
    ],
  },
  {
    path: "/",
    element: <BlankLayout />,
    children: [
      { path: "/login", element: <Login /> },

      { path: "/not_found", element: <NotFound /> },

      /** Catch-all route for undefined paths, redirects to the 404 error page. */
      { path: "*", element: <Navigate to="/not_found" /> },
    ],
  },
];

export default Router;
