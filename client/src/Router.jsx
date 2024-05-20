import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import DetailPage from "./components/pages/DetailPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import PageNotFound from "./components/pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "",
        element: <HomePage />,
        index: true,
        loader: () => fetch("https://rickandmortyapi.com/api/character?page=4"),
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: ":id",
        element: <DetailPage />,
        loader: ({ params }) =>
          fetch(`https://rickandmortyapi.com/api/character/${params.id}`),
      },
    ],
  },
]);

export default router;
